import { Component, OnInit } from '@angular/core';
import { ReimbursementsService } from 'src/app/service/reimbursements.service';

@Component({
  selector: 'app-check-past',
  templateUrl: './check-past.component.html',
  styleUrls: ['./check-past.component.css']
})
export class CheckPastComponent implements OnInit {
  reim;
  getreim = 'getreim';
    constructor(private reims: ReimbursementsService) { }
  
  ngOnInit() {

}
submit(){
    this.reims.queryAllReim(this.getreim).subscribe( (payload) => {
    console.log(payload);
    this.reim = payload;
    console.log(this.reim);
    });

}

// filterReimPending(type){
//   return this.reim.filter(key => key.reim.reim_status == type);
// }
}

