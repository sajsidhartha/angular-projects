import { Injectable } from '@angular/core';
import { Resolve, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {

  constructor(private httpService:HttpService){ }
  resolve(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("calling getUser()",);
      return this.httpService.getUser();
  }
  
}


