import { Component, OnInit, Injectable } from '@angular/core';
import { ReimbursementsService } from 'src/app/service/reimbursements.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-check-pend-emp',
  templateUrl: './check-pend-emp.component.html',
  styleUrls: ['./check-pend-emp.component.css']
})

export class CheckPendEmpComponent implements OnInit {
  reim;
  getreim = 'getreim';
  user;
    constructor(private reims: ReimbursementsService, private userServ: UsersService) { }
  
    ngOnInit() {
    }
  
  
    submit(){
      this.reims.queryAllReim(this.getreim).subscribe( (payload) => {
      this.reim = payload;
      this.user = this.userServ.user
      });
  }
  
}
