import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainApi from '../utils/MainApi';
import useLocalStorage from './useLocalStorage';
import { ROUTES } from '../utils/environment';
import CurrentUserContext from '../utils/CurrentUserContext';

export default function useProfile() {
  const [changing, setChanging] = useState(false);
  const { setCurrentUser } = useContext(CurrentUserContext);
  const { clear } = useLocalStorage();
  const navigate = useNavigate();

  const changeProfile = (name, email) => {
    setChanging(true);
    mainApi
      .editUserInfo(name, email)
      .then((userData) => {
        setCurrentUser((user) => ({
          ...user,
          name: userData.name,
          email: userData.email,
        }));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setChanging(false));
  };

  const signOut = () => {
    localStorage.removeItem('token');
    clear();
    setCurrentUser({
      loggedIn: false,
      email: '',
      name: '',
      savedMovies: [],
      movies: [],
    });
    navigate(ROUTES.SIGN_IN, { replace: true });
  };

  return {
    changing,
    changeProfile,
    signOut,
  };
}
