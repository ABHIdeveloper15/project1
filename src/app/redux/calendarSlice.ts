import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Event {
  date: string;
  type: "event" | "reminder";
  title: string;
}

interface CalendarState {
  events: Event[];
}

const initialState: CalendarState = {
  events: [],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
  },
});

export const { addEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
