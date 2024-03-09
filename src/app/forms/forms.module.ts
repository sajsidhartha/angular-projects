import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomersComponent } from 'src/app/forms/customers/customers.component';
import { OrderComponent } from 'src/app/forms/order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    CustomersComponent,
    OrderComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    CustomersComponent,
    OrderComponent,
    ProductsComponent
  ]
})
export class FormModule { }
