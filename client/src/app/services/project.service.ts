import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class ProjectService {

    public identity: string;
    public token: string;
    public url: string;
    public rol: string;

    // La URL http://localhost:8000/api
    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    // Insert a new Project
    insert(project_register) {
        let params = JSON.stringify(project_register);

        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'project/insert', params, {headers: headers})
            .map(res => res.json());
    }

    // List all the Projects
    list(){
		let headers = new Headers({
			'Content-Type':'application/json',
		});

		let options = new RequestOptions({ headers: headers });
		return this._http.get(this.url+'project/list', options)
						 .map(res => res.json());
    }

    // Count all the Projects
    count(){
		let headers = new Headers({
			'Content-Type':'application/json',
		});

		let options = new RequestOptions({ headers: headers });
		return this._http.get(this.url+'project/count', options)
						 .map(res => res.json());
    }
    
    // Delete a single Project
    delete(id: string){
		let headers = new Headers({
			'Content-Type':'application/json',
		});

		let options = new RequestOptions({ headers: headers });
		return this._http.delete(this.url+'project/delete/'+id, options)
						 .map(res => res.json());
	}

    // Update a single Project
    update(project_to_update, id){
		let params = JSON.stringify(project_to_update);
		let headers = new Headers({'Content-Type':'application/json'});

		return this._http.put(this.url+'project/update/'+id, 
			params, {headers: headers})
						 .map(res => res.json());
	}
}