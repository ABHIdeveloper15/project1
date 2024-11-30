import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./calendarSlice";
import tableReducer from "./tableSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    table: tableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
