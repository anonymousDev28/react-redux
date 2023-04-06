// import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./slices/counterSlice";
// import todosReducer from "./slices/todoSlice";
// import { courseApi } from './services/courseService'
// const store = configureStore({
//     reducer:{
//         counter: counterSlice,
//         todos: todosReducer
//         [courseApi.reducerPath]: courseApi.reducer,
// },
// middleware: (getDefaultMiddleware) =>
// getDefaultMiddleware().concat(courseApi.middleware)

// }
// )
// export default store

import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { courseApi } from './services/courseService'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [courseApi.reducerPath]: courseApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware)
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
export default store