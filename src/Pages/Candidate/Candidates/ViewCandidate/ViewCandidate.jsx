import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom'
import {CandidateService} from "../../../../services/CandidateService";
import Spinner from "../../../../Components/Spinner/Spinner";



    let ViewCandidate = () => {
        let {candidateId} = useParams();

        let [state, setState] = useState({
            loading : false,
            candidate: [],
            errorMessage :''
        });
        useEffect(async () => {
            try {
                setState({...state,loading: true})
                let response = await CandidateService.getCandidate(candidateId);
                setState({
                    ...state,
                    loading: false,
                    candidate: response.data
                })
            }catch (error) {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: error.message
                });
            }
        },[]);

        let {loading,candidate,errorMessage} = state;



        return(
        <React.Fragment>
            <section className="view-candidate-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Candidate</p>
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
                        Object.keys(candidate).length>0 &&
                        <section className="view-candidate mt-3">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinclipart.com%2Fpindetail%2FibiiRoo_avatar-female-icon-png-clipart%2F&psig=AOvVaw2qjfT777Lkx8eUjLz81DmA&ust=1651143263055000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCKDQnI-KtPcCFQAAAAAdAAAAABAk" className="candidate-img" alt=""/>
                                    </div>
                                    <div className="col-md-8">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                                First Name: <span className="fw-bold">{candidate.first_name}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Last Name: <span className="fw-bold">{candidate.last_name}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Mobile: <span className="fw-bold">{candidate.phone_number}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Email: <span className="fw-bold">{candidate.email}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Title: <span className="fw-bold">TheTitle</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Link to={'/candidate/list'} className="btn btn-warning">Back</Link>
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
export default ViewCandidate;