import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { MyModule } from './path/to/my-module.module'

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    
  imports: [
    CommonModule,

  ],
  providers: [

  ],
  exports: [

  ]
})
export class MyModule { }
