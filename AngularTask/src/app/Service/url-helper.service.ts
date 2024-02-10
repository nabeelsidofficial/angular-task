import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class UrlHelperService {

  constructor(private httpService: CustomHttpService) { }
  
  private env: string = this.httpService.getCurrentEnvironment();
  private Server: string = this.getServerUrl(this.env);
  getServerUrl(env: string): string {
    let server = "";
    switch (env) {
        case "LOCALDEV": {
            server = "https://localhost:7158/";
            break;
        }
        case "TEST": {
            server = "https://my-test-site-api.azurewebsites.net/";
            break;
        }
        case "PROD": {
            server = "https://my-prod-site-api.azurewebsites.net/";
            break;
        }
        default: {
            console.error('No Env Found');
            server = "https://my-prod-site-api.azurewebsites.net/";
        }
    }
    return server;
}

// Here you will define all the API endpoints your app will use and 'this.Server ' will contain the proper host API server url at runtime for each environment.
public Product = this.Server + '/Product';
}
