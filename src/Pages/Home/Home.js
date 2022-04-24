import React from "react";
import Tasks from "../../Components/FeaturedTasks/TasksList";
import TasksForm from "../../Components/FeaturedTasks/TasksForm";
import "./Home.css";
import TasksLists from "../../Components/FeaturedTasks/TasksList";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Topbar />
        <div className="body">
          <Tasks />
        </div>
      </div>
    </div>
  );
}
