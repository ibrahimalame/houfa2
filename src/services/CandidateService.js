import axios from "axios";

export class CandidateService{
 static serverURL = `http://localhost:8080`;
 static getAllCandidate(){
     let dataURL = `${this.serverURL}/candidate/all`;
     return axios.get(dataURL);
 }
    static getCandidate(candidateId){
        let dataURL = `${this.serverURL}/candidate/find/${candidateId}`;
        return axios.get(dataURL);
    }
    static createCandidate(candidate){
        let dataURL = `${this.serverURL}/candidate/add`;
        return axios.get(dataURL,candidate);
    }

}