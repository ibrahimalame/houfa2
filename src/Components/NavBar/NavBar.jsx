import React from "react";
import {Link} from 'react-router-dom'

let NavBar = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">

                    <Link to={'/'} className="navbar-brand">
                        <i className="fa fa-mobile text-warning"/> Hiring <span className="text-warning">Manager</span>
                    </Link>





                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/vacancy/list">Vacancies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/candidate/list">Candidates</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Calendar</a>
                            </li>
                        </ul>

                    </div>
                </nav>
        </React.Fragment>
    )
}
export default NavBar;