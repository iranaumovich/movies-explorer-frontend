import React, { useMemo, useState } from 'react';
import CurrentUserContext from '../../utils/CurrentUserContext';

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    loggedIn: false,
    email: '',
    name: '',
    savedMovies: [],
    movies: [],
  });

  const value = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
    }),
    [currentUser],
  );

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserProvider;
