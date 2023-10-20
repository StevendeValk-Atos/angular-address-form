import { Component } from "@angular/core";
import { AddressDetails } from "src/app/models/AddressDetails";
import { AddressFormData } from "src/app/models/AddressFormData";

@Component({
    selector: "app-address-input-form",
    templateUrl: "./address-input-form.component.html",
    styleUrls: ["./address-input-form.component.scss"],
})
export class AddressInputFormComponent {
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
}
