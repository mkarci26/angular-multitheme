import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {

    baseUrl: string = environment.apiUrl + '';
    xapikey: string = environment.xapikey;

    constructor(private http: Http) {
    }

    private jwt() {
        let headers = new Headers({ 'Accept': 'application/json' });
        return new RequestOptions({ headers: headers });
    }

    login(email: string, password: string) {
        let obj = JSON.stringify({ email: email, password: password });
        return this.http.post(this.baseUrl + 'authenticate', obj, this.jwt())
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}