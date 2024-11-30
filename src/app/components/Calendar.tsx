import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calendar, momentLocalizer, SlotInfo } from "react-big-calendar";
import moment from "moment";
import { addEvent } from "../redux/calendarSlice";
import { RootState } from "../redux/store";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const events = useSelector((state: RootState) => state.calendar.events);
  const dispatch = useDispatch();

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    const title = prompt("Enter Event/Reminder:");
    const type: "event" | "reminder" = "event"; 
    if (title && type) {
      dispatch(addEvent({ date: slotInfo.start.toISOString(), type, title }));
    }
  };

  const eventPropGetter = (event: any) => {
    const backgroundColor = event.type === "event" ? "#007bff" : "#ff6f61";
    return { style: { backgroundColor, color: "white", borderRadius: "5px" } };
  };

  return (
    <Calendar
      localizer={localizer}
      events={events.map((event) => ({
        start: new Date(event.date),
        end: new Date(event.date),
        title: event.title,
        allDay: true,
        type: event.type, 
      }))}
      selectable
      onSelectSlot={handleSelectSlot}
      eventPropGetter={eventPropGetter}
      style={{ height: 500 }}
    />
  );
};

export default CalendarComponent;

