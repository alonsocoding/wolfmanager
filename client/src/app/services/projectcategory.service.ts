import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class ProjectCategoryService {

    public identity: string;
    public token: string;
    public url: string;
    public rol: string;

    // La URL http://localhost:8000/api
    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    // Insert a new Project Category
    insert(projectcategory_register) {
        let params = JSON.stringify(projectcategory_register);

        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'projectcategory/insert', params, {headers: headers})
            .map(res => res.json());
    }

    // List all the Project Categories
    list(){
		let headers = new Headers({
			'Content-Type':'application/json',
		});

		let options = new RequestOptions({ headers: headers });
		return this._http.get(this.url+'projectcategory/list', options)
						 .map(res => res.json());
    }

    // Update a single Project Category
    update(projectcategory_to_update, id){
		let params = JSON.stringify(projectcategory_to_update);
		let headers = new Headers({'Content-Type':'application/json'});

		return this._http.put(this.url+'projectcategory/update/'+id, 
			params, {headers: headers})
						 .map(res => res.json());
	}
    
    // Delete a single Project Category
    delete(id: string){
		let headers = new Headers({
			'Content-Type':'application/json',
		});

		let options = new RequestOptions({ headers: headers });
		return this._http.delete(this.url+'projectcategory/delete/'+id, options)
						 .map(res => res.json());
	}

}