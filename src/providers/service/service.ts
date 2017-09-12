import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  api:string = 'https://jsonplaceholder.typicode.com/';

  constructor(public http: Http) {  }

  getContatos(){
    return this.http.get(this.api+'users').map(res=>res.json());
  }

}

