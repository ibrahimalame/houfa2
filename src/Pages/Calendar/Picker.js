import React,{Component} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './Picker.css'
import axios from "axios";
import Vacancy from "../Vacancies/Vacancy";
export default class Picker extends Component{

    constructor(){
        super();
        this.state = { vacancies : [],
            candidates : [],
            date : new Date(),
            choixCandidate:''
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


    render() {
        //console.log("adloun")
        //console.log(this.state.candidates)
        const handleChange = (e) => {
            this.setState({choixCandidate : e.target.value})
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
                            <select className="form-select-sm"  aria-label="Default select example" onChange={(e) => handleChange(e)}>
                                <option selected>Candidates</option>
                                {this.state.candidates.map(candidate => <option value={candidate.id}>{candidate.first_name}</option>)}
                            </select>
                            <h1>{this.state.choixCandidate}</h1>
                        </div>
                    </div>
                </div>



            </div>
        );
    }

}