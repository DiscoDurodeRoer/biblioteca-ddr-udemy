import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DdrConfigurationService {

  private _data: any;

  constructor(private http: HttpClient) { }

  getDataFromJSON(pathJSON: string) {
    return new Promise((resolve, reject) => {
      this.http.get(pathJSON).subscribe(data => {
        this._data = data;
        resolve(true);
      }, error => {
        console.error("Ddr-Conf: ", error);
        reject(true);
      })
    })
  }

  getData(path: string) {
    if (!_.has(this._data, path)) {
      console.error("Not exists path: " + path);
      return null;
    } else {
      return _.get(this._data, path);
    }
  }

  getAllData() {
    return _.cloneDeep(this._data);
  }

}
