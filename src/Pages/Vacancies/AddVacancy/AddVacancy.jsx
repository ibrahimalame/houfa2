import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
//import {VacancyService} from "../../../../services/VacancyService";
import {VacancyService} from '../../../services/VacancyService'
import axios from "axios";
import DatePicker from "react-datepicker";
import Datetime from "react-datetime";
import Form from "react-bootstrap/Form";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

let AddVacancy = () => {
    let navigate = useNavigate();
    const [time, setTime] = useState(new Date());
    let [state, setState] = useState({
        loading : false,
        vacancy : {
            title:'',
            description:'',
            abst:'',
            resp:'',
            profile:'',
            duration:'',
            salary:'',
            time:new Date(),
        },
        errorMessage : ''
    });
    let updateInput = (event) => {
        setState({
            ...state,
            vacancy: {
                ...state.vacancy,
                [event.target.name]:event.target.value
            }
        })
    }
    let submitForm = async (event) => {
        event.preventDefault();
        state.vacancy.time=time
        axios.post('http://localhost:8080/vacancy/add', state.vacancy)

            .then(function (response) {
                console.log(response);
                navigate('/vacancy/list',{replace:true});
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

    let {loading, vacancy,errorMessage}=state


        const ExampleCustomTimeInput = ({date, value, onChange}) => (
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{border: "solid 1px pink"}}
            />
        );

    return(
        <React.Fragment>
            <pre>{JSON.stringify(vacancy)}</pre>
            <section className="add-vacancy p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                                <p className="h4 text-success fw-bold">Create vacancy</p>
                                <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                                    asperiores ea expedita ipsum laborum minima modi, molestiae mollitia nam non odit quaerat
                                    repellendus sint soluta tempora ullam, velit voluptates voluptatum.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <input type="text"
                                           required={true}
                                           name="title"
                                           value = {vacancy.title}
                                           onChange={updateInput}
                                           className="form-control" placeholder="Title"/>
                                </div>
                                <div className="mb-2">
                                    <div className="form-group">
                                        <textarea
                                            required={true}
                                            name="abst"
                                            value = {vacancy.abst}
                                            onChange={updateInput}
                                            className="form-control" id="exampleFormControlTextarea1"
                                            rows="4" placeholder="abstract">   </textarea>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="form-group">
                                        <textarea
                                            required={true}
                                            name="description"
                                            value = {vacancy.description}
                                            onChange={updateInput}
                                            className="form-control" id="exampleFormControlTextarea3"
                                            rows="4" placeholder="Description">   </textarea>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="form-group">
                                        <textarea
                                            required={true}
                                            name="resp"
                                            value = {vacancy.resp}
                                            onChange={updateInput}
                                            className="form-control" id="exampleFormControlTextarea4"
                                            rows="4" placeholder="responsabilities">   </textarea>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="form-group">
                                        <textarea
                                            required={true}
                                            name="profile"
                                            value = {vacancy.profile}
                                            onChange={updateInput}
                                            className="form-control" id="exampleFormControlTextarea5"
                                            rows="4" placeholder="profile">   </textarea>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="form-group">
                                        <textarea
                                            required={true}
                                            name="duration"
                                            value = {vacancy.duration}
                                            onChange={updateInput}
                                            className="form-control" id="exampleFormControlTextarea6"
                                            rows="4" placeholder="duration">   </textarea>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="form-group">
                                        <textarea
                                            required={true}
                                            name="salary"
                                            value = {vacancy.salary}
                                            onChange={updateInput}
                                            className="form-control" id="exampleFormControlTextarea7"
                                            rows="4" placeholder="salary">   </textarea>
                                    </div>
                                </div>


                                            <DatePicker
                                                selected={vacancy.time}
                                                onChange={date =>{vacancy.time=date}}
                                                showTimeInput
                                                customTimeInput={<ExampleCustomTimeInput/>}
                                            />

                                <div className="mb-2">
                                    <input type="submit"className="btn btn-success" value="Create"/>
                                    <Link to={'/vacancy/list'} className="btn btn-dark ms-2">Cancel</Link>
                                </div>


                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default AddVacancy;