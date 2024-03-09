import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { FormsDeactivateInterface } from '../guards/forms-guard.guard';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,FormsDeactivateInterface {

  constructor(private fb: FormBuilder) { }
  canLeave():boolean{
    //window.alert(this.productform.dirty);
    if(this.productform.dirty){
      return window.confirm("please save the form before leaving");
    }
   return true;
  }
  productform !: FormGroup;
  quantity:any;
  ngOnInit(): void {
    this.productform = this.fb.group({
      products: this.fb.array([this.createProducts()])
    });
    this.quantity=[{'quantity':10},{'quantity':20},{'quantity':30}]
  }
  createProducts(): FormGroup{
    return this.fb.group({
      id:[],
      name:['',Validators.required],
      desc:[],
      category:[],
      quantity:this.fb.array([]),
      weight:['',Validators.required]
    })
  }
  isFieldValid(field:string){
    
    return !this.productform.get(field)?.valid && this.productform.get(field)?.touched as boolean;
 }
displayFieldCss(field: string) {
  return {
    'has-error': this.isFieldValid(field),
    'has-feedback': this.isFieldValid(field)
  };
}
addProduct(){
 const products = this.productform.get("products") as FormArray;
 products.push(this.createProducts())
}
removeProduct(index:number){
  const products = this.productform.get("products") as FormArray;
  products.removeAt(index);
}
get formData() { return <FormArray>this.productform.get('products'); }
  submitProduct(){
    
    console.log("products",this.productform.value);
    this.productform.markAllAsTouched();
    
  }
 
updateChkbxArray(quantity1: string,isChecked:boolean,key:string,indx:number) {

  const quantityFormArray = <FormArray>this.productform.controls['products'];
  const formCheckbox =<FormArray>quantityFormArray.controls[indx].get('quantity');
  console.log('quantityFormArray',quantityFormArray);
  console.log('formCheckbox',formCheckbox);
  console.log('index',indx);
  
  if (isChecked) {
    formCheckbox.push(new FormControl(quantity1));
  } else {
    let index = formCheckbox.controls.findIndex(x => x.value == quantity1)
    formCheckbox.removeAt(index);
  }
}

}
