import React,{Component} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './Picker.css'
import axios from "axios";
import Vacancy from "../Vacancies/Vacancy";
import {Link} from "react-router-dom";
export default class Picker extends Component{

    constructor(){
        super();
        this.state = { vacancies : [],
            candidates : [],
            date : new Date(),
            choixCandidate:'',
            choixVacancy:''
        }
    }

    componentDidMount() {
        console.log("Oui")
        const url = `http://localhost:8080/vacancy/all`;
        axios.get(url)
            .then(res => {
                const vacancies = res.data;

                this.setState({ vacancies });
                console.log(vacancies)
            });
        const url2 = `http://localhost:8080/candidate/all`;
        axios.get(url2)
            .then(res => {
                const candidates = res.data;

                this.setState({ candidates });
                console.log(candidates)
            })


    }



    onChange = date => {
        this.setState({
            date
        })
    }


    addInterview = (event) => {
        event.preventDefault();
        console.log("ana ana")
        const interview ={
            "vacancy_id": this.state.choixVacancy,
            "candidate_id": this.state.choixCandidate,
            "time" : this.state.date

        };
        console.log(interview)
        axios.post('http://localhost:8080/interview/add', interview)

            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        //console.log("adloun")
        //console.log(this.state.candidates)
        const handleChange1 = (e) => {
            this.setState({choixCandidate : e.target.value})
        }
        const handleChange2 = (e) => {
            this.setState({choixVacancy : e.target.value})
        }
        return (
            <div>
                <div className="monPicker" >
                    <div style={{ boxShadow: "5px 5px 25px"}}>
                        <Calendar onChange={this.onChange}/>
                    </div>


                </div>
                <p>{this.state.date.toLocaleDateString()}</p>

                {this.state.candidates.map(candidate => console.log(candidate.first_name))}

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <select className="form-select form-select-lg mb-3"  aria-label="Default select example" onChange={(e) => handleChange1(e)}>
                                <option selected>Candidates</option>
                                {this.state.candidates.map(candidate => <option value={candidate.id}>{candidate.first_name}</option>)}
                            </select>
                            <h1>{this.state.choixCandidate}</h1>
                        </div>
                        <div className="col-md-6">
                            <select className="form-select form-select-lg mb-3"  aria-label="Default select example" onChange={(e) => handleChange2(e)}>
                                <option selected>Candidates</option>
                                {this.state.vacancies.map(candidate => <option value={candidate.id}>{candidate.title}</option>)}
                            </select>
                            <h1>{this.state.choixVacancy}</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.addInterview}>

                            <div className="mb-2">
                                <div className="text-center">
                                    <input type="submit"className="btn btn-success" value="Add Interview"/>
                                </div>

                                {/*<Link to={'/candidate/list'} className="btn btn-dark ms-2">Cancel</Link>*/}
                            </div>


                        </form>
                    </div>

                </div>

            </div>
        );
    }

}
