import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  registered: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetregistered: state => {
      state.registered = false;
    },
  },
})

export const {resetregistered} = userSlice.actions
export default userSlice.reducer