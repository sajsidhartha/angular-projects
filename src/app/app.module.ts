import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { FormModule } from 'src/app/forms/forms.module';
import { ResolveGuard } from './forms/guards/resolve-guard.guard';
import { FormsGuard } from './forms/guards/forms-guard.guard';



@NgModule({
  declarations: [
    AppComponent,
   
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormModule
  ],
  providers: [ResolveGuard,FormsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
