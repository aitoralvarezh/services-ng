import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logStatusChanged(status: string) {
    console.log('the server status is: ', status);
    
  }
}
