import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountsService } from 'src/app/shared/accounts.service';
import { LoggingService } from 'src/app/shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(
      private loggingService: LoggingService, 
      private accountService: AccountsService) {
      this.accountService.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' + status)
      )
    }
    

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    //this.loggingService.logStatusChanged(status)
    this.accountService.statusUpdated.emit(status);
  }

}
