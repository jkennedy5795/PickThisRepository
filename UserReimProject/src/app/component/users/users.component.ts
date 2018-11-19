import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/service/communication.service';
import { UsersService } from 'src/app/service/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

 user: string;
 pass: string;
  users;
  constructor(private commServ: CommunicationService,
    private userServ: UsersService) { }

  ngOnInit() {
  //  this.userServ.queryUser(this.user, this.pass).subscribe( (payload) => {
  //       console.log(payload);
  //      return payload;
  //   });
  //   });
  // }
}
}

