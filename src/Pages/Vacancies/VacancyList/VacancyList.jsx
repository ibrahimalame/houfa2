import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'

import Spinner from "../../../Components/Spinner/Spinner";
import {VacancyService} from "../../../services/VacancyService";
import axios from "axios";
import { format } from "date-fns";


let VacancyList = () => {
    let [state, setState] = useState({
        loading: false,
        vacancies: [],
        errorMessage: ''
    });
    useEffect(async () => {
        try {
            setState({...state, loading: true})
            let response = await VacancyService.getAllVacancy();
            setState({
                ...state,
                loading: false,
                vacancies: response.data
            })
        } catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            });
        }
    }, []);


    let {loading, vacancies, errorMessage} = state;
    //const formattedDate = format(date, "MMMM do, yyyy H:mma");

    //console.log(formattedDate);
    const formatDate = (date) => {
        return format(new Date(date), "MMMM do, yyyy H:mma")
    }

    return (
        <React.Fragment>
            {/*<pre>{JSON.stringify(vacancies)}</pre>*/}
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 fw-bold">vacancy Manager
                                    <Link to={'/vacancy/add'} className="btn btn-primary ms-2"> <i
                                        className="fa fa-plus-circle me-2"></i> New</Link>
                                </p>
                                <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusamus aperiam
                                    deleniti deserunt et laudantium nostrum quibusdam tempore ut? Assumenda debitis
                                    dolorem illum modi
                                    necessitatibus perferendis quibusdam quis quo soluta voluptas.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-2">
                                                <input type="text" className="form-control" placeholder="Serch Names"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-2">
                                                <input type="submit" className="btn btn-outline-dark"
                                                       placeholder="Serch"/>
                                            </div>
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {
                loading ? <Spinner/> : <React.Fragment>
                    <section className="vacancy-list">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                {
                                    vacancies.length > 0 &&
                                    vacancies.map(vacancy => {
                                        //const date = Date.parse(vacancy.date)  // new Date(vacancy.date)
                                        //const date =event.toLocaleTimeString('en-US')
                                        return (
                                            <div className="col-md-12" key={vacancy.id}>

                                                <div className="card my-2">
                                                    <div className="card-body">
                                                        <div
                                                            className="row align-items-center d-flex justify-content-around">
                                                            <div className="col-md-11">
                                                                <ul className="list-group">
                                                                    <li className="list-group-item list-group-item-action h3">
                                                                        <span
                                                                        className="fw-bold text-warning" >{vacancy.title}</span>
                                                                    </li>
                                                                    <li className="list-group-item list-group-item-action">
                                                                        <span
                                                                        className="fw-bold">{vacancy.description.substring(0,100)}</span>
                                                                    </li>
                                                                    <li className="list-group-item list-group-item-action">
                                                                        Application Closing Date: <span
                                                                        className="fw-bold">{ formatDate(vacancy.time) }</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div
                                                                className="col-md-1 d-flex flex-column align-items-center">

                                                                <Link to={`/vacancy/view/${vacancy.id}`}
                                                                      className="btn btn-warning my-1">
                                                                    <i className="fa fa-eye"></i>
                                                                </Link>
                                                                <Link to={`/candidate/apply`}
                                                                      className="btn  btn-primary my-1">
                                                                    <i className="fa fa-pen"></i>
                                                                </Link>
                                                                <button className="btn btn-danger my-1">
                                                                    <i className="fa fa-trash"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                }

                                </div>
                                <div className="col-md-4">
                                    <div className="card my-2">
                                        <div className="card-body">
                                    <div className="h5">Candidate Profile </div>
                                    <p className="text-justify">Take a few minutes to create or modify your employment profile and to specify your preferred working criteria for future openings matching your interests.
                                    </p>
                                    <div className="h6">
                                        <Link to={'/candidate/add'}> CREATE/MODIFY MY PROFILE </Link>
                                    </div>



                                    <div className="h5 my-4"> My Account Options </div>

                                    <p className="text-justify">To change your account settings, email notifications,
                                        preferred language, or to withdraw from the database please select 'My Account Options'.
                                    </p>

                                    <div className="h5 my-4"> CV and motivation letters </div>
                                    Please note that you cannot attach any documents such as a CV or a motivation letter to the electronic application form.  All relevant information on your qualifications and experience should be entered in the electronic application form in order to be taken into consideration
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            }


        </React.Fragment>
    )
}
export default VacancyList;