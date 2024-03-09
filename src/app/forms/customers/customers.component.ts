import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,FormArray } from '@angular/forms';
import { emailCheck } from 'src/app/forms/validators/email.validator';
import { emailExistValidator }from 'src/app/forms/validators/email.asyncvalidator';
import { HttpService } from 'src/app/forms/services/http-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
 
  constructor(private fb : FormBuilder, private httpservice:HttpService,private ar:ActivatedRoute) { }
  customerform !: FormGroup ;
  userform !: FormGroup ;
  users:any;

  ngOnInit(): void {
    
    
     this.ar.data.subscribe(param =>{
      this.users = param["data"].users;
      console.log("param data",this.users);
      this.userform = this.fb.group({
        users: this.fb.array(this.users.map((user: any) => this.createUserFormGroup(user)))
      })
    });
  }
  get userArray() {
    return (<FormArray>this.userform.get('users'));
  }
  createUserFormGroup(user:any={}){
    return this.fb.group({
      firstname:this.fb.control(user.firstName),
      lastname:this.fb.control(user.lastName),
      age:this.fb.control(user.age),
      gender:this.fb.control(user.gender),
      email:this.fb.control(user.email),
      phone:this.fb.control(user.phone),
    })
  }
  // validateForm(form: FormGroup){
  //   Object.keys(form.controls).forEach(field =>{
  //     const control = form.get(field);
  //     if(control instanceof FormControl)
  //       control.markAsTouched({onlySelf:true})
  //     else if(control instanceof FormGroup)
  //       this.validateForm(control);
  //   })
  // }
  validateForm(form:FormGroup){
    form.markAllAsTouched();
   
  }
  postCustomerInfo(){
    console.log("form value : ",this.customerform.value);
    if (this.customerform.invalid) {
    this.validateForm(this.customerform);
    }

  }
  isFieldValid(field:string){
      
      return !this.customerform.get(field)?.valid && this.customerform.get(field)?.touched as boolean;
   
  }
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  get email(){
    return this.customerform.controls['email'];
  }
}

