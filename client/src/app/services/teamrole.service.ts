import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class TeamRoleService {

    public identity: string;
    public token: string;
    public url: string;
    public rol: string;

    // La URL http://localhost:8000/api
    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    // Insert a new Team Role
    insert(teamrole_register) {
        let params = JSON.stringify(teamrole_register);

        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this._http.post(this.url + 'teamrole/insert', params, { headers: headers })
            .map(res => res.json());
    }

    // List all the Team Role
    list() {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });

        let options = new RequestOptions({ headers: headers });
        return this._http.get(this.url + 'teamrole/list', options)
            .map(res => res.json());
    }
    // Delete a single team role
    delete(id: string) {
        let headers = new Headers({
            'Content-Type': 'application/json',
        });

        let options = new RequestOptions({ headers: headers });
        return this._http.delete(this.url + 'teamrole/delete/' + id, options)
            .map(res => res.json());
    }
}