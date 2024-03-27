import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

interface Error {
  message: string;
}

interface UserState {
  loading: boolean;
  users: Array<User>;
  error: string;
}

const initialState: UserState = {
  loading: false,
  users: [],
  error: '',
};

// createAsyncThunk generates the actions for the diferent statuses of the async operation passed as a callback
// pending, fullfilled and rejected action types
// example:
// {
//   type: 'users/fetchUsers/pending',
//   payload: undefined,
// }
// args: action type, async callback
export const fetchUsers = createAsyncThunk('users/fetchUsers', () =>
  axios
    .get('http://jsonplaceholder.typicode.com/users')
    .then((response) => response.data)
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = '';
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || 'An error occured';
    });
  },
});

export default userSlice.reducer;
