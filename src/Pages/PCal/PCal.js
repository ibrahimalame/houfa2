import React, { useRef, useState } from "react";
import "./PCal.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddEvent from "./AddEvent";
import axios from "axios";

const PCal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const calendarRef = useRef(null);

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.AddEvent(event);
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <div className="event">
          <Button
            onClick={() => setModalOpen}
            variant="contained"
            color="primary"
            className="userSchedule"
          >
            Add Event
          </Button>

          <AddEvent
          // isOpen={modalOpen}
          // onClose={() => setModalOpen(false)}
          // onEventAdded={(event) => onEventAdded(event)}
          ></AddEvent>
        </div>
        <div className="calendar">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              center: "dayGridMonth,timeGridWeek,timeGridDay",
              end: "today prev,next",
            }}
            selectable={true}
            editable={true}
          />
        </div>
      </div>
    </div>
  );
};

export default PCal;
