import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { DEV, VITE_BASE_URL_DEV, VITE_BASE_URL_PROD } = import.meta.env;

export const tasksApi = createApi({
  reducerPath: 'tasks',
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
  tagTypes: ['tasks'],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: (data) => ({
        url: `/tasks?year=${data.year}&month=${data.month}&day=${data.day}`,
        method: 'GET'
      }),
      providesTags: ['tasks']
    }),
    createTasks: builder.mutation({
      query: (tasks) => ({
        url: '/tasks',
        method: 'POST',
        body: tasks
      }),
      invalidatesTags: ['tasks']
    }),
    deleteTasks: builder.mutation({
      query: (tasksID) => ({
        url: `/tasks/${tasksID}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['tasks']
    }),
    updateTasks: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: { ...rest }
      }),
      invalidatesTags: ['tasks']
    })
  })
});

export const {
  useGetTasksQuery,
  useCreateTasksMutation,
  useDeleteTasksMutation,
  useUpdateTasksMutation
} = tasksApi;
