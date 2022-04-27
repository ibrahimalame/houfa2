import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import {CandidateService} from "../../../../services/CandidateService";
import Spinner from "../../../../Components/Spinner/Spinner";


let CandidateList = () => {
    let [state, setState] = useState({
        loading : false,
        candidates: [],
        errorMessage :''
    });
    useEffect(async () => {
        try {
            setState({...state,loading: true})
            let response = await CandidateService.getAllCandidate();
            setState({
                ...state,
                loading: false,
                candidates: response.data
            })
        }catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            });
        }
    },[]);

    let {loading,candidates,errorMessage} = state;

    return(
        <React.Fragment>
            {/*<pre>{JSON.stringify(candidates)}</pre>*/}
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 fw-bold">Candidate Manager
                                    <Link to={'/candidate/add'} className="btn btn-primary ms-2" > <i className="fa fa-plus-circle me-2"></i> New</Link>
                                </p>
                                <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam
                                    deleniti deserunt et laudantium nostrum quibusdam tempore ut? Assumenda debitis dolorem illum modi
                                    necessitatibus perferendis quibusdam quis quo soluta voluptas.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form >
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-2">
                                                <input type="text" className="form-control" placeholder="Serch Names"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-2">
                                                <input type="submit" className="btn btn-outline-dark" placeholder="Serch"/>
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
                loading? <Spinner /> :<React.Fragment>
                    <section className="candidate-list">
                        <div className="container">
                            <div className="row">
                                {
                                    candidates.length >0 &&
                                        candidates.map(candidate =>{
                                            return(
                                                <div className="col-md-6" key={candidate.id}>
                                                    <div className="card my-2">
                                                        <div className="card-body">
                                                            <div className="row align-items-center d-flex justify-content-around">

                                                                <div className="col-md-4">
                                                                    <img src="https://ophtalmologie-paris.pro/wp-content/uploads/2018/02/kisspng-computer-icons-avatar-user-valentines-day-party-5adb00bfc5be95.64148889152430201581.png" alt="" className="img-fluid candidate-img"/>

                                                                </div>
                                                                <div className="col-md-7">
                                                                    <ul className="list-group">
                                                                        <li className="list-group-item list-group-item-action">
                                                                            Name: <span className="fw-bold">{candidate.first_name}</span>
                                                                        </li>
                                                                        <li className="list-group-item list-group-item-action">
                                                                            Mobile: <span className="fw-bold">{candidate.phone_number}</span>
                                                                        </li>
                                                                        <li className="list-group-item list-group-item-action">
                                                                            Email: <span className="fw-bold">{candidate.email}</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-1 d-flex flex-column align-items-center">

                                                                    <Link to={`/candidate/view/${candidate.id}`} className="btn btn-warning my-1">
                                                                        <i className="fa fa-eye"></i>
                                                                    </Link>
                                                                    <Link to={`/candidate/edit/${candidate.id}`} className="btn  btn-primary my-1">
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
                        </div>
                    </section>
                </React.Fragment>
            }


        </React.Fragment>
    )
}
export default CandidateList;