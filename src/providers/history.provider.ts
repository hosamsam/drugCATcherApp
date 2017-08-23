import { Http, URLSearchParams,Headers, RequestOptions } from '@angular/http';
import {Inject, Injectable} from '@angular/core';
@Injectable()

export class HistoryProvider {
  constructor(@Inject('API_URL') private API_URL, private http: Http) {

  }

  getHistory(id) {
    //let urlSearchParams = new URLSearchParams();
    return this.http.get(`${this.API_URL}history/${id}`).map(res=>res.json());
  }
}
