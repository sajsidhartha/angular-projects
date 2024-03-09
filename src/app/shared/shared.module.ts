import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { LeftmenuComponent } from 'src/app/shared/components/leftmenu/leftmenu.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { FielderrorComponent } from './components/fielderror/fielderror.component';



@NgModule({
  declarations: [
    LeftmenuComponent,
    HeaderComponent,
    FooterComponent,
    FielderrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LeftmenuComponent,
    HeaderComponent,
    FooterComponent,
    FielderrorComponent
  ]
})
export class SharedModule { }
