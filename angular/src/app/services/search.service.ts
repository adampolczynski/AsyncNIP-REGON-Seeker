import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class SearchService {

  constructor(private http:Http) { }

  getAll() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('api/companies/getAll');
    return this.http.get(ep,{headers: headers})
      .map(res => res.json());
  }
  getByNumber(number) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('api/companies/getByNumber');
    return this.http.post(ep, number,{headers: headers})
      .map(res => res.json());
  }

  // function that creates request in db
  saveRequest(number) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('api/requests/addRequest');
    return this.http.post(ep,number,{headers: headers})
      .map(res => res.json());
  }

  prepEndpoint(ep){
      return 'http://localhost:8080/'+ep; // for heroku http://numberseeker.herokuapp.com/
  }
}
