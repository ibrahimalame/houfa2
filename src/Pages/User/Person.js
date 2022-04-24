import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

export default class Person extends Component {

    render() {
    
        return (

        <div className="user">
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
          <div className="userContainer">
            <div className="userDisplay">
              <div className="userShowTop">
                <span className="userShowUserName">name: {this.props.name}</span>
                <span className="userShowUserTitle">
                  position: {this.props.vacancy}
                </span>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <span className="userShowInfoTitle">phone: {this.props.phone}</span>
                  <span className="userShowInfoTitle">email: {this.props.email}</span>
                  <span className="userShowInfoTitle">
                    location: {this.props.location}
                  </span>
                </div>
                <div className="pdfContainer">
                  <span className="showPdf"></span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              {/* <div className="userEdit">
                <div className="userUpdateTitle">Comments</div>
                <TextField fullWidth multiline rows={3} id="fullWidth" />
                <div className="trial">
                  <Status />
                </div> */}
              {/* </div> */}
            </div>
          </div>
          </div>
    );
  }
  
}

