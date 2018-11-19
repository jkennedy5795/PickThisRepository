import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/service/communication.service';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userValue: string;
  passValue: string;

  constructor(private communicationService: CommunicationService,
    private userServ: UsersService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.userServ.queryUser(this.userValue, this.passValue);
    this.userValue = '';
    this.passValue = '';
  }


