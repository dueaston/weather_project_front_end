import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account.component'; // Import the component

@NgModule({
  declarations: [
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppComponent {
  title = 'temp-project'}
