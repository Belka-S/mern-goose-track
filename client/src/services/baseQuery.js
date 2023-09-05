import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { store } from 'store/store';
import { authenticate, logOut } from 'store/auth/authOps';

const { DEV, VITE_BACK_URL_DEV, VITE_BACK_URL_PROD } = import.meta.env;

const baseQuery = fetchBaseQuery({
  baseUrl: DEV ? `${VITE_BACK_URL_DEV}/api` : `${VITE_BACK_URL_PROD}/api`,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
  }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refreshToken = store.getState().user.refreshToken;
    const { data } = await baseQuery(
      {
        url: '/users/refresh',
        method: 'POST',
        body: { refreshToken }
      },
      api,
      extraOptions
    );
    if (data) {
      // store the new token
      await store.dispatch(authenticate({ token: data.token, refreshToken: data.refreshToken }));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      store.dispatch(logOut());
    }
  }
  return result;
};

export default baseQueryWithReauth;
