import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormInputComponent } from './atoms/form-input/form-input.component';
import { FormLabelComponent } from './atoms/form-label/form-label.component';
import { LabeledInputComponent } from './molecules/labeled-input/labeled-input.component';
import { AddressInputGroupComponent } from './organisms/address-input-group/address-input-group.component';
import { InputGroupHeaderComponent } from './atoms/input-group-header/input-group-header.component';
import { FormSubmitButtonComponent } from './atoms/form-submit-button/form-submit-button.component';
import { AddressInputFormComponent } from './templates/address-input-form/address-input-form.component';
import { FormFooterComponent } from './molecules/form-footer/form-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    FormLabelComponent,
    LabeledInputComponent,
    AddressInputGroupComponent,
    InputGroupHeaderComponent,
    FormSubmitButtonComponent,
    AddressInputFormComponent,
    FormFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
