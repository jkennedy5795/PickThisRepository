import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementsService {

  constructor(private httpClient: HttpClient) {
  
  }

  queryAllReim (getreim) {
    const url = `http://localhost:8080/Project1/${getreim}`;
    return this.httpClient.get(url)
    
    }
  queryUpdateReim (reim, manager, status) {
    // let reimJ = JSON.stringify(reim);
    // let managerJ = JSON.stringify(manager);
    // let statusJ = JSON.stringify(status);

    let payload = {
      reim_id: reim,
      resolver_id: manager,
      reim_status: status
    }
    const reimJSON = JSON.stringify(payload);
    console.log(reimJSON);
    const url = "http://localhost:8080/Project1/update"
    return this.httpClient.post(url, reimJSON)
  }

  queryNewReim (author, amount, desc, type){
    let payload = {
      author_id: author,
      amount: amount,
      description: desc,
      reim_type: type
    }
    const reimJSON = JSON.stringify(payload);
    console.log(reimJSON);
    const url = "http://localhost:8080/Project1/newreim"
    return this.httpClient.post(url, reimJSON)
  }
     
  }  

