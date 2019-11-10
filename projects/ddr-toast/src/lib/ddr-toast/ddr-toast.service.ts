import { DdrConstants } from './bean/ddr-constants';
import { DdrToast } from './bean/ddr-toast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DdrToastService {

  private _toasts: DdrToast[];
  private _timeOut: number;

  public set timeOut(value: number) {
    this._timeOut = value;
  }

  public get toasts(): DdrToast[] {
    return this._toasts;
  }

  constructor() {
    this._toasts = [];
    this._timeOut = DdrConstants.TIMEOUT_DEFAULT;
  }

  addInfoMessage(title: string, message: string) {
    this.addMessage(title, message, DdrConstants.STATUS_INFO)
  }

  addWarningMessage(title: string, message: string) {
    this.addMessage(title, message, DdrConstants.STATUS_WARNING)
  }

  addErrorMessage(title: string, message: string) {
    this.addMessage(title, message, DdrConstants.STATUS_ERROR)
  }

  addSuccessMessage(title: string, message: string) {
    this.addMessage(title, message, DdrConstants.STATUS_SUCCESS)
  }

  private addMessage(title: string, message: string, status: string) {
    let toast = new DdrToast(title, message, status);
    this._toasts.push(toast);
    setTimeout(() => {
      this.closeToast(toast);
    }, this._timeOut);
  }

  closeToast(toast: DdrToast) {
    let index: number = this.toasts.findIndex(t => t === toast);
    if (index !== -1) {
      this.toasts.splice(index, 1);
    }
  }

}
