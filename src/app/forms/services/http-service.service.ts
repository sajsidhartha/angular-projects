import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  checkEmailExist():Observable<any>{
    return this.http.get<any>('https://dummyjson.com/users');
  }
  getUser():Observable<any>{
    return this.http.get<any>('https://dummyjson.com/users');
  }
  
}
