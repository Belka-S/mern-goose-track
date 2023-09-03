const routes = {
  mainPage: '/',
  registerPage: '/register',
  loginPage: '/login',
  authGoogle: '/login/google',
  forgotPassword: '/forgot',
  resetPassword: '/reset',
  verify: '/verify', //  :verifycode
  mainLayout: '/',
  profilePage: '/account',
  calendarPage: '/calendar',
  calendarMonth: '/calendar/month/:currentDate',
  calendarDay: '/calendar/day/:currentDate',
  statisticsPage: '/statistics',
  navFromLogIn: '/calendar/month'
};

export default routes;
