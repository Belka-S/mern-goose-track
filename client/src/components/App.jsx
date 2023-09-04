import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useError } from 'store/selectors';
import { ThemeProvider } from 'styled-components';

import routes from 'components/routes.js';
import { GlobalStyle } from 'styles/Basic/globalStyles.styled';
import { useThemeColors } from 'components/shared/Togglers/ThemeToggler/ThemeContextProvider';

import PrivateRoutes from 'components/shared/Routes/PrivateRoutes';
import PubliceRourtes from 'components/shared/Routes/PubliceRoutes';
import AuthGoogle from 'components/shared/AuthGoogle/AuthGoogle';
import Loader from 'components/shared/Loader/Loader';
import MainLayout from 'components/MainLayout/MainLayout';

import ProfilePage from 'pages/ProfilePage/ProfilePage';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';

const MainPage = lazy(() => import('pages/MainPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const ResetPwdPage = lazy(() => import('pages/ResetPwdPage/ResetPwdPage'));
const ForgotPwdPage = lazy(() => import('pages/ForgotPwdPage/ForgotPwdPage'));
const ChoosedDay = lazy(() => import('pages/CalendarPage/ChoosedDay/ChoosedDay'));
const ChoosedMonth = lazy(() => import('pages/CalendarPage/ChoosedMonth/ChoosedMonth'));

// const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
// const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
// const StatisticsPage = lazy(() => import('pages/StatisticsPage/StatisticsPage'));

function App() {
  const error = useError();
  const theme = useThemeColors().theme;
  if (error) {
    toast.error(error.message);
  }

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<PubliceRourtes />}>
            <Route path={routes.mainPage} element={<MainPage isHomePage={true} />} />
            <Route path={routes.registerPage} element={<RegisterPage />} />
            <Route path={routes.loginPage} element={<LoginPage />} />
            <Route path={routes.forgotPassword} element={<ForgotPwdPage />} />
            <Route path={routes.resetPassword} element={<ResetPwdPage />} />
            <Route path={routes.authGoogle} element={<AuthGoogle />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path={routes.mainLayout} element={<MainLayout />}>
              <Route path={routes.profilePage} element={<ProfilePage />} />
              <Route path={routes.calendarPage} element={<CalendarPage />}>
                <Route path={routes.calendarMonth} element={<ChoosedMonth />} />
                <Route path={routes.calendarDay} element={<ChoosedDay />} />
              </Route>
              <Route path={routes.statisticsPage} element={<StatisticsPage />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <ToastContainer hideProgressBar closeOnClick theme={theme.toastify.theme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
