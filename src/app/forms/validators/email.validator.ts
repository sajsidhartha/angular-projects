import { AbstractControl, ValidatorFn} from '@angular/forms';
export function emailCheck():ValidatorFn{
    return (control: AbstractControl): {[key:string]:any} | null =>{
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const emailValid = emailPattern.test(control.value);
        return emailValid? null:{'invalidEmail': {value: control.value}};
    }
}