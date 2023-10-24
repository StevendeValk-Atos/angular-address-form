import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormInputComponent } from './atoms/form-input/form-input.component';
import { FormLabelComponent } from './atoms/form-label/form-label.component';
import { LabeledInputComponent } from './molecules/labeled-input/labeled-input.component';
import { AddressInputGroupComponent } from './organisms/address-input-group/address-input-group.component';
import { InputGroupTitleComponent } from './atoms/input-group-title/input-group-title.component';
import { FormSubmitButtonComponent } from './atoms/form-submit-button/form-submit-button.component';
import { AddressFormComponent } from './templates/address-form/address-form.component';
import { FormFooterComponent } from './molecules/form-footer/form-footer.component';
import { FormTitleComponent } from './atoms/form-title/form-title.component';
import { FormHeaderComponent } from './molecules/form-header/form-header.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    FormLabelComponent,
    LabeledInputComponent,
    AddressInputGroupComponent,
    InputGroupTitleComponent,
    FormSubmitButtonComponent,
    AddressFormComponent,
    FormFooterComponent,
    FormTitleComponent,
    FormHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
