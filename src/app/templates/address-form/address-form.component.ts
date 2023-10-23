import { Component } from "@angular/core";
import { AddressDetails } from "src/app/models/AddressDetails";
import { AddressFormData } from "src/app/models/AddressFormData";

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent {
    addressFormData: AddressFormData = new AddressFormData();

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

    submitButtonClick() : void {
        console.log(this.addressFormData);
    }
}
