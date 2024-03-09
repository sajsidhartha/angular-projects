import { AsyncValidatorFn, AbstractControl} from '@angular/forms';
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/forms/services/http-service.service';

export function emailExistValidator(httpservice:HttpService):AsyncValidatorFn{
    return(control:AbstractControl) =>{
        return httpservice.checkEmailExist().pipe(
            map (users =>{
                    const userexist = users.users.find(
                    (user:any) => 
                       user.email== control.value);
                console.log("users",userexist);
                return userexist? {emailExist:true}:null;
            }))
        
    }
}