import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
export interface FormsDeactivateInterface{
  canLeave : ()=> boolean 
 }
@Injectable({
  providedIn: 'root'
})


export class FormsGuard implements CanDeactivate<FormsDeactivateInterface> {
  canDeactivate(
    component: FormsDeactivateInterface,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.canLeave)
      return component.canLeave();
      
      return true;
  }
  
}
