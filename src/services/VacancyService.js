import axios from "axios";

export class VacancyService{
 static serverURL = `http://localhost:8080`;
 static getAllVacancy(){
     let dataURL = `${this.serverURL}/vacancy/all`;
     return axios.get(dataURL);
 }
    static getVacancy(vacancyId){
        let dataURL = `${this.serverURL}/vacancy/find/${vacancyId}`;
        return axios.get(dataURL);
    }
    static createVacancy(vacancy){
        let dataURL = `${this.serverURL}/vacancy/add`;
        return axios.get(dataURL,vacancy);
    }

}