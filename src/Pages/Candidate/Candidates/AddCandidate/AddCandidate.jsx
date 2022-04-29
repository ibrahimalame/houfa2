import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import {CandidateService} from "../../../../services/CandidateService";
import axios from "axios";

let AddCandidate = () => {
    let navigate = useNavigate();
    let [state, setState] = useState({
        loading : false,
        candidate : {
            first_name:'',
            last_name:'',
            phone_number:'',
            email:''
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
            <pre>{JSON.stringify(candidate)}</pre>
            <section className="add-candidate p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                                <p className="h4 text-success fw-bold">Create Candidate</p>
                                <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                                    asperiores ea expedita ipsum laborum minima modi, molestiae mollitia nam non odit quaerat
                                    repellendus sint soluta tempora ullam, velit voluptates voluptatum.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input type="text"
                                           required={true}
                                           name="first_name"
                                           value = {candidate.first_name}
                                           onChange={updateInput}
                                           className="form-control" placeholder="First Name"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text"
                                           required={true}
                                           name="last_name"
                                           value = {candidate.last_name}
                                           onChange={updateInput}
                                           name="last_name" className="form-control" placeholder="Last Name"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text"
                                           name="photo_url" className="form-control" placeholder="Photo Url"/>
                                </div>
                                <div className="mb-2">
                                    <input type="number"
                                           required={true}
                                           name="phone_number"
                                           value = {candidate.phone_number}
                                           onChange={updateInput}
                                           name="phone_number" className="form-control" placeholder="Mobile"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text"
                                           required={true}
                                           name="email"
                                           value = {candidate.email}
                                           onChange={updateInput}
                                           name="email"  className="form-control" placeholder="Email"/>
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
export default AddCandidate;