import React, { useMemo, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useTable } from "react-table";
import { userColumns, userRows } from "../../dataapplicants";
import "./Candidate.css";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import { StarBorder, Star } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import axios from "axios";

export const Candidate = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/applicants");
    setApplicants(result.data.reverse());
  };

  const userColumns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "User Name",
      width: 200,
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "vacancy", headerName: "Vacancy", width: 180 },
    {
      field: "status",
      headerName: "Applicant status",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListView">View</button>
            </Link>
          </>
        );
      },
    },
    {
      field: "star",
      headerName: "Star Applicant",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Button></Button>
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
        <div className="datatable">
          <DataGrid
            rows={userRows}
            disableSelectionOnClick
            columns={userColumns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};
