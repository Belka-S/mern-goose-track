import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { DEV, VITE_BACK_URL_DEV, VITE_BACK_URL_PROD } = import.meta.env;

export const reviewsApi = createApi({
  reducerPath: 'reviews',
  baseQuery: fetchBaseQuery({
    baseURL: DEV ? VITE_BACK_URL_DEV : VITE_BACK_URL_PROD,
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
        url: '/api/reviews',
        method: 'GET'
      }),
      providesTags: ['reviews']
    }),
    getReviewOwn: builder.query({
      query: () => ({
        url: '/api/reviews/own',
        method: 'GET'
      }),
      providesTags: ['reviews']
    }),
    createReviews: builder.mutation({
      query: (review) => ({
        url: '/api/reviews/own',
        method: 'POST',
        body: review
      }),
      invalidatesTags: ['reviews']
    }),
    deleteReviews: builder.mutation({
      query: (reviewID) => ({
        url: '/api/reviews/own',
        method: 'DELETE'
      }),
      invalidatesTags: ['reviews']
    }),
    updateReviews: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: '/api/reviews/own/',
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
