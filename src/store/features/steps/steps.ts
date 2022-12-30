import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IStep {
  name: string;
  status: boolean;
}

export interface ISteps {
  [index: string]: IStep;
}

const initialState: ISteps = {
  GENDER: {
    name: 'GENDER',
    status: false,
  },
  PERIOD: {
    name: 'PERIOD',
    status: false,
  },
  SEASON: {
    name: 'SEASON',
    status: false,
  },
  TYPE_TRIP: {
    name: 'TYPE_TRIP',
    status: false,
  },
  LIST_THINGS: {
    name: 'LIST_THINGS',
    status: false,
  },
};

export const steps = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    changeStatusStep: (state, action: PayloadAction<string>) => {
      // console.log('action', action.payload);
      // console.log(state['GENDER'].status);
      // console.log((state[action.payload].status = true));

      state[action.payload].status = true;
      // тут сделать потом запись в локал сторадж, чтобы хранить шаг на каком остановился пользователь
    },
  },
});

export const { changeStatusStep } = steps.actions;

export default steps.reducer;
