import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../environments/environment';
import { User } from "../_models/index";

@Injectable()
export class UserService {
    baseUrl: string = environment.apiUrl + '';
    constructor(private http: Http) {
    }

    verify() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let url = this.baseUrl + 'authenticate/verify';
        if (currentUser) {
            url += '?token=' + currentUser.token + '&user_id=' + currentUser.id;
        }
		
        return this.http.get(url, this.jwt()).map((response: Response) => response.json());
    }

	getCurrentUser() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) return currentUser;
        return null;
    }
	
    getMenu() {
        return this.http.get('/assets/menu.json').map((response: Response) => response.json());
    }

    private jwt() {
        let headers = new Headers({ 'Accept': 'application/json' });
        return new RequestOptions({ headers: headers });
    }
}