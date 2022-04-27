import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
  LineStyle,
  WorkOutline,
  PeopleOutline,
  StarOutline,
  // CheckCircleOutline,
  CalendarToday,
  Menu,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">HRmanager</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          {/* <li className="sidebarListItem">
            <LineStyle className="sidebarIcon" />
            <Link className="link" to="/">
              Home
            </Link>
          </li> */}
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <Link className="link" to="/">
              Vacancies
            </Link>
          </li>
          <li className="sidebarListItem">
            <PeopleOutline className="sidebarIcon" />
            <Link className="link" to="/candidates">
              Candidates
            </Link>
          </li>
          <li className="sidebarListItem">
            <StarOutline className="sidebarIcon" />
            <Link className="link" to="/starred-applications">
              Starred Candidates
            </Link>
          </li>
          <li className="sidebarListItem">
            <CalendarToday className="sidebarIcon" />
            <Link className="link" to="/calendar">
              Calendar
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
