import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import "./Starred.css";
import { DataGrid } from "@material-ui/data-grid";
import { useTable } from "react-table";
import { Link } from "react-router-dom";

export default function Starred() {
  const Columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "userName",
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
  ];

  const Rows = [];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Topbar />
        <div className="starred">
          <DataGrid
            rows={Rows}
            disableSelectionOnClick
            columns={Columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
