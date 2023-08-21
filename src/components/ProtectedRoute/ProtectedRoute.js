import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../utils/environment';

function ProtectedRouteElement({ element: Component, ...props }) {
  return props.loggedIn ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...props} />
  ) : (
    <Navigate to={ROUTES.SIGN_IN} replace />
  );
}

export default ProtectedRouteElement;
