import { useState } from 'react';
import { register as registerRequest } from '../utils/auth';
import useLogin from './useLogin';

export default function useRegister() {
  const { login } = useLogin();
  const [error, setError] = useState('');
  const [registering, setRegistering] = useState(false);

  const register = (name, email, password) => {
    setError('');
    setRegistering(true);
    registerRequest(name, email, password)
      .then(() => login(email, password))
      .catch((err) => {
        console.log(err.message);
        setError('Ошибка регистрации');
      })
      .finally(() => {
        setRegistering(false);
      });
  };

  return {
    error,
    registering,
    register,
  };
}
