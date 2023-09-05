import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithReauth from 'services/baseQuery';

export const reviewsApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'reviews',
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
