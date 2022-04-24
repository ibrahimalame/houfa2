import React, { Component } from "react";
import {
    TextField,
    Button,
    MenuItem,
    Box,
    InputLabel,
    FormControl,
    Select,
  } from "@material-ui/core";
  import { Link, useParams } from "react-router-dom";
  //import { Calendar } from "@fullcalendar/core";
export default class MyCalendar extends Component {
  render() {
    return (
        <div className="userTitleContainer">
        <Link to="/calendar">
          <Button
            variant="contained"
            color="primary"
            className="userSchedule"
          >
            Schedule Interview
          </Button>
        </Link>
      </div>
    );
  }
}