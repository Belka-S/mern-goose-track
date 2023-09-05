import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithReauth from 'services/baseQuery';

export const tasksApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'tasks',
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
