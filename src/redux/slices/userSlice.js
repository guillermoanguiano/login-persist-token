import { validateUser } from '@/api/auth';
import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'

export const loginThunk = createAsyncThunk(
  'user/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await validateUser(username, password);
      if (response.error) {
        throw new Error(response.error)
      }
      console.log(response)
      return response;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  isLogged: false,
  id: null,
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  image: '',
  token: '',
  loading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      Object.assign(state, initialState);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLogged = true;
        state.id = action.payload.id;
        state.username = action.payload.username;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.gender = action.payload.gender;
        state.image = action.payload.image;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        console.error(action.payload || action.error.message)
        state.loading = false;
      })
      .addCase(loginThunk.pending, (state, action) => {
        state.loading = true;
      })
  }
});

// export const getUserData = (state) => {
//   const { id, username, firstName, lastName, email, gender, image } = state.userAuth
//   return {
//     id,
//     username,
//     firstName,
//     lastName,
//     email,
//     gender,
//     image
//   }
// }

export const getUserData = createSelector(
  [state => state.userAuth],
  (userAuth) => {
    const { id, username, firstName, lastName, email, gender, image } = userAuth
    return {
      id,
      username,
      firstName,
      lastName,
      email,
      gender,
      image
    }
  }
)
export const isLoggedIn = (state) => state.userAuth.isLogged;
export const loading = (state) => state.userAuth.loading;

export const { logout } = userSlice.actions

export default userSlice.reducer