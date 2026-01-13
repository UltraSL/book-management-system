import { Injectable } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  busyRequestCount = 0

  constructor(private _ngxSpinner : NgxSpinnerService) {}

  busy() : void {
    this.busyRequestCount++;
    if (this.busyRequestCount === 1) {
      this._ngxSpinner.show();
    }
  }

  idle(): void {

    this.busyRequestCount--;
    if(this.busyRequestCount<=0){
      this.busyRequestCount=0;
      //setTimeout(() => this._ngxSpinner.hide(), 500);
      this._ngxSpinner.hide();
    }

  }
  
}
