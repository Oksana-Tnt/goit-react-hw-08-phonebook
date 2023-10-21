import * as React from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrenUserThunk } from 'redux/auth/thunk';
import { useEffect, lazy } from 'react';
import { PrivateRoute } from 'components/PrivateRoute';
import Loader from 'components/Loader/Loader';
import { PublicRoute } from 'components/PublicRoute';
import authSelectors from 'redux/auth/auth-selectors';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const PhonebookPage = lazy(() => import('pages/PhonebookPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshed = useSelector(authSelectors.getIsRefreshed);

  useEffect(() => {
    dispatch(fetchCurrenUserThunk());
  }, [dispatch]);

  return (
    !isRefreshed && (
      <ChakraProvider>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="phonebook"
              element={
                <PrivateRoute>
                  <PhonebookPage />
                </PrivateRoute>
              }
            />

            <Route
              path="signUp"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
          </Routes>
        </Suspense>
      </ChakraProvider>
    )
  );
};
