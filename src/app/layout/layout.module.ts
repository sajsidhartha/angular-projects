import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
   ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LayoutModule { }
