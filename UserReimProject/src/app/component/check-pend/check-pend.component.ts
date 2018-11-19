import { Component, OnInit } from '@angular/core';
import { ReimbursementComponent } from '../reimbursement/reimbursement.component';
import { ReimbursementsService } from 'src/app/service/reimbursements.service';

@Component({
  selector: 'app-check-pend',
  templateUrl: './check-pend.component.html',
  styleUrls: ['./check-pend.component.css']
})
export class CheckPendComponent implements OnInit {
reimh;
getreim = 'getreim';
  constructor(private reims: ReimbursementsService) { }

  ngOnInit() {
  }


  submit(){
    this.reims.queryAllReim(this.getreim).subscribe( (payload) => {
    this.reimh = payload;
    });
}

  approved(this){
    let reim = document.getElementById('reim_id').innerHTML;
    let manager = 22;
    const status = "approved";

    let reimId = +reim;

    this.reims.queryUpdateReim(reimId, manager, status).subscribe((payload)=> {
      payload;
    });
    
    this.submit();
  }
  
  denied(this){
  
    let reim = document.getElementById('reim_id').innerHTML;
    let manager = 22;
    const status = "denied";
    let reimId = +reim;
    let id = +this;
    this.reims.queryUpdateReim(reimId, manager, status).subscribe((payload)=> {
      payload;
    });
    
    this.submit();
  }

}

