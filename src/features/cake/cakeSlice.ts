import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CakeState {
  numCakes: number
}

const initialState: InitialState = {
  numCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numCakes--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
