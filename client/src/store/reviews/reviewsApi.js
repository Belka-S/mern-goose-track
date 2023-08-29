import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { DEV, VITE_BASE_URL_DEV, VITE_BASE_URL_PROD } = import.meta.env;

export const reviewsApi = createApi({
  reducerPath: 'reviews',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3001/api',
    // baseUrl: 'https://project-mern-schedule-03.onrender.com/api',
    baseURL: DEV ? VITE_BASE_URL_DEV : VITE_BASE_URL_PROD,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
    }
  }),
  tagTypes: ['reviews'],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({
        url: '/reviews',
        method: 'GET'
      }),
      providesTags: ['reviews']
    }),
    getReviewOwn: builder.query({
      query: () => ({
        url: '/reviews/own',
        method: 'GET'
      }),
      providesTags: ['reviews']
    }),
    createReviews: builder.mutation({
      query: (review) => ({
        url: '/reviews/own',
        method: 'POST',
        body: review
      }),
      invalidatesTags: ['reviews']
    }),
    deleteReviews: builder.mutation({
      query: (reviewID) => ({
        url: '/reviews/own',
        method: 'DELETE'
      }),
      invalidatesTags: ['reviews']
    }),
    updateReviews: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: '/reviews/own/',
        method: 'PATCH',
        body: { ...rest }
      }),
      invalidatesTags: ['reviews']
    })
  })
});

export const {
  useGetReviewsQuery,
  useGetReviewOwnQuery,
  useCreateReviewsMutation,
  useDeleteReviewsMutation,
  useUpdateReviewsMutation
} = reviewsApi;
