import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

user;

  constructor(private httpClient: HttpClient, private route: Router) {
  
  }
  queryUser(user, pass) {
    const url = `http://localhost:8080/Project1/signin/${user}/${pass}`;
    this.httpClient.get(url).subscribe( (payload) => {
      if (payload.manager === true) {
        this.route.navigateByUrl('/manager');
      } else {
       this.route.navigateByUrl('/employee');
    }
    
    this.user = payload;
    
    return this.user;
    });

    }
}


// signIn(credentials: any) {
//   console.log('signing in ', credentials);
//   const url = `${environment.server}/signin`;
//   console.log(url);
//   return this.httpClient.post(url, credentials, {
//     observe: 'response'
//   });

// }

