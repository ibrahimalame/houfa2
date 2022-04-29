import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom'
import {VacancyService} from "../../../services/VacancyService"
import Spinner from "../../../Components/Spinner/Spinner"
import {format} from "date-fns";



    let ViewVacancy = () => {
        let {vacancyId} = useParams();

        let [state, setState] = useState({
            loading : false,
            vacancy: [],
            errorMessage :''
        });
        useEffect(async () => {
            try {
                setState({...state,loading: true})
                let response = await VacancyService.getVacancy(vacancyId);
                setState({
                    ...state,
                    loading: false,
                    vacancy: response.data
                })
            }catch (error) {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: error.message
                });
            }
        },[]);

        let {loading,vacancy,errorMessage} = state;
        const formatDate = (date) => {
            return format(new Date(date), "MMMM do, yyyy H:mma")
        }


        return(
        <React.Fragment>
            <section className="view-vacancy-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View vacancy</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad amet beatae,
                                debitis ducimus enim molestias nam nihil non nostrum nulla omnis quam quidem quod recusandae
                                repellendus sequi sint soluta.</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner/>:<React.Fragment>
                    {
                        Object.keys(vacancy).length>0 &&
                        <section className="view-vacancy mt-3">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                                <p className="h3 text-success fw-bold">{vacancy.title}</p>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                <p className="h4 text-secondary fw-bold  my-2">Description</p>
                                              <span className="fw-bold">{vacancy.description}> </span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                <p className="h4 text-secondary fw-bold  my-2">Responsabilities</p>
                                                <span className="fw-bold">{vacancy.resp}> </span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                <p className="h4 text-secondary fw-bold  my-2">Profile</p>
                                                <span className="fw-bold">{vacancy.profile}> </span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                <p className="h4 text-secondary fw-bold  my-2">Duration</p>
                                                <span className="fw-bold">{vacancy.duration}> </span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                <p className="h4 text-secondary fw-bold  my-2">Salary</p>
                                                <span className="fw-bold">{vacancy.salary}> </span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Application Closing Date: <span
                                                className="fw-bold">{ formatDate(vacancy.time) }</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-2">
                                        <Link to={'/vacancy/list'} className="btn btn-warning">Back</Link>
                                    </div>



                                </div>

                            </div>
                        </section>
                    }

                </React.Fragment>
            }

        </React.Fragment>
    );
}
export default ViewVacancy;