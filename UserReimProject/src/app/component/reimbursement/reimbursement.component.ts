import { Component, OnInit } from '@angular/core';
import { ReimbursementsService } from 'src/app/service/reimbursements.service';
import { Subscription } from 'rxjs';
import { CommunicationService } from 'src/app/service/communication.service';

@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.css']
})
export class ReimbursementComponent implements OnInit {
listItemSubs: Subscription
reim;
getreim = 'getreim';
  constructor(private reims: ReimbursementsService, private comm: CommunicationService) { }

  ngOnInit() {

 }

 getAll(){
  this.listItemSubs = this.comm.$listItems.subscribe( (item) => {
    this.reims.queryAllReim(this.getreim).subscribe( (payload) => {
    this.reim = payload.toString
 });
});
}
}
