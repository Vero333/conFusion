import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class ProcessHTTPMsgService {

  constructor() { }

  public extractData(res: Response) {
    let body = res.json();

    return body || { };
  }

}
