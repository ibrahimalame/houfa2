import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import {CandidateService} from "../../../../services/CandidateService";
import axios from "axios";

let ApplyCandidate = () => {
    let navigate = useNavigate();
    let [state, setState] = useState({
        loading : false,
        candidate : {
            email:'',
            password:''
        },
        errorMessage : ''
    });
let updateInput = (event) => {
    setState({
        ...state,
        candidate: {
            ...state.candidate,
            [event.target.name]:event.target.value
        }
    })
}
let submitForm = async (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/candidate/add', state.candidate)

        .then(function (response) {
            console.log(response);
            navigate('/candidate/list',{replace:true});
        })
        .catch(function (error) {
            console.log(error);
        });

    /*try{
        let response = await CandidateService.createCandidate(state.candidate);
        if(response){
            navigate('/candidate/list',{replace:true});
        }
    }catch (error){
        setState({...state,errorMessage: error.message});
        navigate('/candidate/add',{replace:true});
    }*/
}

let {loading, candidate,errorMessage}=state
    return(
        <React.Fragment>
            {/*<pre>{JSON.stringify(candidate)}</pre>*/}
            <section className="add-candidate p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                                <p className="h4 text-info fw-bold">Login</p>
                                <p className="fst-italic">To access your account, please identify yourself by providing the
                                    information requested in the fields below, then click "Login".
                                    If you are not registered yet, click "New user" and follow the instructions to create an account.
                                    </p>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <div className="mb-2">
                                        <input type="text"
                                               required={true}
                                               name="email"
                                               value = {candidate.email}
                                               onChange={updateInput}
                                               name="email"  className="form-control" placeholder="Email"/>
                                    </div>

                                    <input type="password"
                                           required={true}
                                           name="password"
                                           value = {candidate.password}
                                           onChange={updateInput}
                                           className="form-control" placeholder="password"/>
                                </div>

                                <div className="mb-2">
                                    <select className="from-control">
                                        <option value="">Select a Title</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input type="submit"className="btn btn-success" value="Create"/>
                                    <Link to={'/candidate/list'} className="btn btn-dark ms-2">Cancel</Link>
                                </div>


                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default ApplyCandidate;