import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DdrSpinnerService {

  private _show: boolean;

  constructor() { }

  public get show(): boolean {
    return this._show;
  }
  public set show(value: boolean) {
    this._show = value;
  }

  hideSpinner(){
    this.show = false;
  }

  showSpinner(){
    this.show = true;
  }

}
