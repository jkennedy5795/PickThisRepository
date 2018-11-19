import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { ReimbursementsService } from 'src/app/service/reimbursements.service';

@Component({
  selector: 'app-new-reim',
  templateUrl: './new-reim.component.html',
  styleUrls: ['./new-reim.component.css']
})
export class NewReimComponent implements OnInit {
amount;
description;
selectType;
user;

  constructor(private userServ: UsersService, private reim: ReimbursementsService) { }

  ngOnInit() {
  }

  submit(){
    this.user = this.userServ.user
    this.reim.queryNewReim(this.user.user_id, this.amount, this.description, this.selectType).subscribe((payload) => {
    payload});

    this.amount = '';
    this.description ='';
    
    

   
    
  }

}
