import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private authServ: AuthService,
    private loggingServ: LoggingService
    ){}

  ngOnInit() {
    this.authServ.autoLogin()
    this.loggingServ.printLog('hello from app component ngOnInit')
  }
}
