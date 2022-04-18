import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/shared/accounts.service';
import { LoggingService } from 'src/app/shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  


  ngOnInit(): void {
  }

  constructor (
    private loggingService: LoggingService, 
    private accountService: AccountsService) {}
  
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChanged(accountStatus);
  }

}
