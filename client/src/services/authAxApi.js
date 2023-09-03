import axios from 'axios';

import { store } from 'store/store';
import { authenticate } from 'store/auth/authOps';

const { DEV, VITE_BACK_URL_DEV, VITE_BACK_URL_PROD } = import.meta.env;

export const instance = axios.create({
  baseURL: DEV ? VITE_BACK_URL_DEV : VITE_BACK_URL_PROD
});

// access-refresh token logic
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response.status === 401 &&
      error.response.message !== 'Action Required: Verify Your Email'
    ) {
      try {
        const refreshToken = store.getState().user.refreshToken;
        if (!refreshToken) {
          return Promise.reject(error);
        }
        // instance.defaults.headers.common['refreshtoken'] = refreshToken;
        // error.config.headers.refreshtoken = `${refreshToken}`;
        instance.defaults.headers.post['Content-Type'] = 'application/json';
        const { data } = await instance.post('/api/users/refresh', { refreshToken });

        token.set(data.token);
        await store.dispatch(authenticate({ token: data.token, refreshToken: data.refreshToken }));
        error.config.headers.Authorization = `Bearer ${data.token}`;

        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export async function userRegister(userData) {
  const response = await instance.post('/api/users/register', userData);
  return response.data;
}
export async function userLogin(loginData) {
  const response = await instance.post('/api/users/login', loginData, { parse: true });
  const data = response.data;
  return data;
}
export async function userLogOut() {
  const response = await instance.post('/api/users/logout');
  const data = response.data;
  return data;
}
export async function getCurrentUser(tokenAuth) {
  instance.defaults.headers.common.Authorization = `Bearer ${tokenAuth}`;
  const response = await instance.get('/api/users/current');
  const data = response.data;
  return data;
}

export async function verifyByCode(verifyCode) {
  const response = await instance.post('/api/users/verify', verifyCode);
  const data = response.data;
  return data;
}

export async function updateUser(userDate, tokenAuth) {
  instance.defaults.headers.common.Authorization = `Bearer ${tokenAuth}`;
  instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';
  const response = await instance.patch('/api/users/profile', userDate);
  const data = response.data;
  return data;
}
export async function deleteUser(tokenAuth) {
  instance.defaults.headers.common.Authorization = `Bearer ${tokenAuth}`;
  const response = await instance.delete('/api/users/current');
  const data = response.data;
  return data;
}
export async function changeEmail(userDate, tokenAuth) {
  instance.defaults.headers.common.Authorization = `Bearer ${tokenAuth}`;
  const response = await instance.patch('/api/users/email', userDate);
  const data = response.data;
  return data;
}
export async function changePassword(userDate, tokenAuth) {
  instance.defaults.headers.common.Authorization = `Bearer ${tokenAuth}`;
  const response = await instance.patch('/api/users/password', userDate);
  const data = response.data;
  return data;
}

export async function forgotPwd(email) {
  const response = await instance.post('/api/users/forgot', email);
  const data = response.data;
  return data;
}

export async function resetPwd(pwdData) {
  const response = await instance.post('/api/users/reset', pwdData);
  const data = response.data;
  return data;
}

export const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  }
};
