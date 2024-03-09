import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './forms/customers/customers.component';
import { OrderComponent } from './forms/order/order.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './forms/products/products.component';
import { ResolveGuard } from './forms/guards/resolve-guard.guard';
import { FormsGuard } from './forms/guards/forms-guard.guard';


const routes: Routes = [
   {path:"",component:LayoutComponent,
  children:[
    { path:"", component:HomeComponent},
    { path:"order",component:OrderComponent,title:"Order form"},
    { path:"customer",title:"Customer form",component:CustomersComponent,resolve:{ data : ResolveGuard}},
    { path:"product",component:ProductsComponent,title:"Product form", canDeactivate:[FormsGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
