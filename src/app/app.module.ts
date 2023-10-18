import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormInputComponent } from './atoms/form-input/form-input.component';
import { FormLabelComponent } from './atoms/form-label/form-label.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    FormLabelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
