import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(private http: HttpClient) { }
  public getCurrentEnvironment(): string {
    const host = window.location.origin;
    let env = "";
    switch(host) {
        case 'http://localhost:4200': {
            env = 'LOCALDEV';
            break;
        }
        case 'https://my-test-site.azurewebsites.net': {
            env = 'TEST';
            break;
        }
        case 'https://my-prod-site.azurewebsites.net': {
            env = 'PROD';
            break;
        }
        case 'https://customdomain.com': {
            env = 'PROD';
            break;
        }
        default: {
            env = 'PROD';
            break;
        }

    }
    return env;
}
public get(url: string): Observable<any> {
  return this.http.get(url);
}

public getWithHeader(url: string, header: HttpHeaders): Observable<any> {
  return this.http.get(url, {headers: header});
}

public post(url: string, body: any): Observable<any> {
  return this.http.post(url, body);
}

public put(url: string, body: any): Observable<any> {
  return this.http.put(url, body);
}

public delete(url: string): Observable<any> {
  return this.http.delete(url);
}
}
