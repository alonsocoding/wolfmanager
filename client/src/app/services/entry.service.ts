import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class EntryService {

    public identity: string;
    public token: string;
    public url: string;
    public rol: string;

    // La URL http://localhost:8000/api
    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    // Insert a new Entry
    insert(entry_register) {
        let params = JSON.stringify(entry_register);

        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'entry/insert', params, {headers: headers})
            .map(res => res.json());
    }

    // List all the Entry
    list(){
		let headers = new Headers({
			'Content-Type':'application/json',
		});

		let options = new RequestOptions({ headers: headers });
		return this._http.get(this.url+'entry/list', options)
						 .map(res => res.json());
	}

}