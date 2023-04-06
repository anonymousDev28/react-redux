import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1' }),
  tagTypes:["course"],
  endpoints: (builder) => ({
    getAllCourse: builder.query({
      query: () => "courses",
      providesTags:["course"]
    }),
    getCourseById: builder.query({
        query: (id)=>`courses/${id}`
    }),
    
  }),
})
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetAllCourseQuery,
    useGetCourseByIdQuery } = courseApi