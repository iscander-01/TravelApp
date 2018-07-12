import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '@shared/app.settings';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  protected baseUrl: string;
  protected userCredentials: string;

  constructor(private http: HttpClient, private appSettings: AppSettings) {
    this.baseUrl = appSettings.getCloudantApiUrl();
  }

  protected httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json; charset=utf-8',
      'Accept': 'application/json',
      'Authorization': `Basic ${this.appSettings.getUserCredentials()}`
    })
  };

  get(relativeUrl: string): Observable<any> {
    return this.http.get(this.getEndPointUrl(relativeUrl), this.httpOptions)
      .pipe(
        catchError((errorResponse: HttpErrorResponse) =>
          throwError(errorResponse.error.errors.map((error: any) => error.message))
        )
      );
  }

  delete(relativeUrl: string, body: Object = {}): Observable<any> {
     return this.http.delete(this.getEndPointUrl(relativeUrl), this.httpOptions);
 }

  post(relativeUrl: string, body: Object = {}): Observable<any> {
    return this.http.post(this.getEndPointUrl(relativeUrl), JSON.stringify(body), this.httpOptions);
  }

  //TODO: PUT

  protected getEndPointUrl(relativeUrl: string): string {
    return `${this.baseUrl.replace(/\/+$/, '')}/${relativeUrl.replace(/^\/|\/$/, '')}`;
  }

}
