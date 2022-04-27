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

export default class Interview extends Component {
  render() {
    return (
            <div className="interview1">
              <span className="userShowInterviewTitle">Interview {this.props.item}</span>
              <div className="field">
                <TextField
                  id="datetime-local"
                  label="Interview Date and Time"
                  type="datetime-local"
                  defaultValue=""
                  sx={{ width: 250 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="Interviewer"
                  variant="standard"
                />
                <TextField
                  id="standard-multiline-static"
                  label="Comment"
                  multiline
                  rows={4}
                  variant="standard"
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={""}//{applicantStatus}
                    label="Status"
                    onChange={""}//{handleChange}
                  >
                    <MenuItem>Pass to phase 2</MenuItem>
                    <MenuItem>Rejected</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
    );
  }
}