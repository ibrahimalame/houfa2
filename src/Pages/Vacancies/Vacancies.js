import React, { useMemo } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useTable } from "react-table";
import { Link } from "react-router-dom";
import "./Vacancies.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import { vacancyColumns, vacancyRows } from "../../vacanciesdata";
import { Button, Box, Typography, Modal, TextField } from "@material-ui/core";
import axios from "axios";

export default function Vacancies() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const applicantColumn = [
    {
      field: "applicants",
      headerName: "Applicants",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/applicants"}>
              <button className="userListView">View</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <div className="vacancyContainer">
          <Button
            onClick={handleOpen}
            variant="contained"
            color="primary"
            className="userSchedule"
          >
            Add Vacancy
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add Vacancy
              </Typography>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="position"
              />
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Location"
              />
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Salary "
              />
            </Box>
          </Modal>
        </div>
        <div className="datatable">
          <DataGrid
            rows={vacancyRows}
            disableSelectionOnClick
            columns={vacancyColumns.concat(applicantColumn)}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
