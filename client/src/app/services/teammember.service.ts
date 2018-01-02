import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class TeamMemberService {

    public identity: string;
    public token: string;
    public url: string;
    public rol: string;

    // La URL http://localhost:8000/api
    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    // Insert a new Team Member
    insert(teammember_register) {
        let params = JSON.stringify(teammember_register);

        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'teammember/insert', params, {headers: headers})
            .map(res => res.json());
    }

    // List all the Team Member
    list(){
		let headers = new Headers({
			'Content-Type':'application/json',
		});

		let options = new RequestOptions({ headers: headers });
		return this._http.get(this.url+'teammember/list', options)
						 .map(res => res.json());
    }
    
    // Delete a single team member
    delete(id: string) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });

        let options = new RequestOptions({ headers: headers });
        return this._http.delete(this.url + 'teammember/delete/' + id, options)
            .map(res => res.json());
    }

    // Update a single Team Member
    update(teammember_to_update, id){
		let params = JSON.stringify(teammember_to_update);
		let headers = new Headers({'Content-Type':'application/json'});

		return this._http.put(this.url+'teammember/update/'+id, 
			params, {headers: headers})
						 .map(res => res.json());
	}

}