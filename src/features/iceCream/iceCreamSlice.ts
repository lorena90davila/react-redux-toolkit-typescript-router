import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

interface IceCreamState {
  numIceCreams: number;
}

const initialState: IceCreamState = {
  numIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    ordered: (state) => {
      if (state.numIceCreams - 1 >= 0) {
        state.numIceCreams--;
      }
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numIceCreams += action.payload;
    },
  },
  // extraReducers: {
  //   ['cake/ordered']: (state) => {
  //     state.numIceCreams--
  //   },
  // }
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
