import { Component, OnInit } from '@angular/core';
import { ReimbursementsService } from 'src/app/service/reimbursements.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-check-past-emp',
  templateUrl: './check-past-emp.component.html',
  styleUrls: ['./check-past-emp.component.css']
})
export class CheckPastEmpComponent implements OnInit {
  user;
  reim;
  getreim = 'getreim';
    constructor(private reims: ReimbursementsService, private userServ: UsersService) { }
  
  ngOnInit() {

}
submit(){
    this.reims.queryAllReim(this.getreim).subscribe( (payload) => {
    console.log(payload);
    this.reim = payload;
    this.user = this.userServ.user;
    console.log(this.user);

    });

}
}
