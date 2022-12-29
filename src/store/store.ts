import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

enum StepsApp {
  GENDER = 'GENDER',
  PERIOD = 'PERIOD',
  SEASON = 'SEASON',
  TYPE_TRIP = 'TYPE_TRIP',
  LIST_THINGS = 'LIST_THINGS',
}

// example
// if ('TYPE_TRIP' === StepsApp['TYPE_TRIP']) {
//   console.log(StepsApp.GENDER);
// }
