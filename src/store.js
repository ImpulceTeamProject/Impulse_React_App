import {configureStore} from '@reduxjs/toolkit'
import userReduser from './features/user'

export const store = configureStore({
  reducer: {
    user: userReduser,
  },
  devTools: process.env.NODE_ENV !== 'production',
})