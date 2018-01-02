import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class TaskService {

    public identity: string;
    public token: string;
    public url: string;
    public rol: string;

    // La URL http://localhost:8000/api
    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    // Insert a new Task
    insert(task_register) {
        let params = JSON.stringify(task_register);

        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'task/insert', params, {headers: headers})
            .map(res => res.json());
    }

    // List all the Tasks
    list(){
		let headers = new Headers({
			'Content-Type':'application/json',
		});

		let options = new RequestOptions({ headers: headers });
		return this._http.get(this.url+'task/list', options)
						 .map(res => res.json());
	}


    // Delete a single Task
    delete(id: string){
		let headers = new Headers({
			'Content-Type':'application/json',
		});

		let options = new RequestOptions({ headers: headers });
		return this._http.delete(this.url+'task/delete/'+id, options)
						 .map(res => res.json());
    }

    // Count all the Projects
    count(){
		let headers = new Headers({
			'Content-Type':'application/json',
		});

		let options = new RequestOptions({ headers: headers });
		return this._http.get(this.url+'task/count', options)
						 .map(res => res.json());
    }
    
    // Update a single Task
    update(task_to_update, id){
		let params = JSON.stringify(task_to_update);
		let headers = new Headers({'Content-Type':'application/json'});

		return this._http.put(this.url+'task/update/'+id, 
			params, {headers: headers})
						 .map(res => res.json());
	}
}