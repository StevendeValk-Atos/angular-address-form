import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { AddressDetails } from "src/app/models/AddressDetails";
import { AddressFormData } from "src/app/models/AddressFormData";

@Component({
    selector: "app-address-form",
    templateUrl: "./address-form.component.html",
    styleUrls: ["./address-form.component.scss"],
})
export class AddressFormComponent implements OnInit {
    addressFormData: AddressFormData = new AddressFormData();

    constructor(private formBuilder: FormBuilder) {}

    addressForm!: FormGroup;
    ngOnInit(): void {
        this.addressForm = this.formBuilder.group({
            ceo: this.formBuilder.group({
                name: new FormControl(""),
                address: new FormControl(""),
                city: new FormControl(""),
            }),
            cfo: this.formBuilder.group({
                name: new FormControl(""),
                address: new FormControl(""),
                city: new FormControl(""),
            }),
            cto: this.formBuilder.group({
                name: new FormControl(""),
                address: new FormControl(""),
                city: new FormControl(""),
            }),
        });
    }

    get ceoGroup(): FormGroup {
        const control = this.addressForm.get('ceo');
        if (control instanceof FormGroup) {
            return control;
        } else {
            throw new Error('Control must be a FormGroup');
        }
    }
    get cfoGroup(): FormGroup {
        const control = this.addressForm.get('cfo');
        if (control instanceof FormGroup) {
            return control;
        } else {
            throw new Error('Control must be a FormGroup');
        }
    }
    get ctoGroup(): FormGroup {
        const control = this.addressForm.get('cto');
        if (control instanceof FormGroup) {
            return control;
        } else {
            throw new Error('Control must be a FormGroup');
        }
    }

    CeoAddressDetailsChange(addressDetails: AddressDetails) {
        this.addressFormData.CEO = addressDetails;
        console.log(this.addressFormData);
    }
    CfoAddressDetailsChange(addressDetails: AddressDetails) {
        this.addressFormData.CFO = addressDetails;
    }
    CtoAddressDetailsChange(addressDetails: AddressDetails) {
        this.addressFormData.CTO = addressDetails;
    }

    submitButtonClick(): void {
        console.log(this.addressForm);
    }
}
