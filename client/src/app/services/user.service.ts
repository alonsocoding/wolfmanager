import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService {

    public identity: string;
    public token: string;
    public url: string;
    public rol: string;

    // La URL http://localhost:8000/api
    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    // Insert a new User
    insert(user_register) {
        let params = JSON.stringify(user_register);

        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'user/insert', params, {headers: headers})
            .map(res => res.json());
    }

    // List all the User
    list(){
		let headers = new Headers({
			'Content-Type':'application/json',
		});

		let options = new RequestOptions({ headers: headers });
		return this._http.get(this.url+'user/list', options)
						 .map(res => res.json());
	}

    // Delete a single user
    delete(id: string){
		let headers = new Headers({
			'Content-Type':'application/json',
		});

		let options = new RequestOptions({ headers: headers });
		return this._http.delete(this.url+'user/delete/'+id, options)
						 .map(res => res.json());
	}
}