import { Component, EventEmitter, Output } from "@angular/core";
import { AddressDetails } from "src/app/models/AddressDetails";

@Component({
    selector: "app-address-input-group",
    templateUrl: "./address-input-group.component.html",
    styleUrls: ["./address-input-group.component.scss"],
})
export class AddressInputGroupComponent {
    addressDetails: AddressDetails = new AddressDetails();

    @Output() onAddressDetailsChange = new EventEmitter<any>();

    nameChange(value: string) {
        this.addressDetails.name = value;
        this.onAddressDetailsChange.emit(this.addressDetails);
    }

    addressChange(value: string) {
        this.addressDetails.address = value;
        this.onAddressDetailsChange.emit(this.addressDetails);
    }

    cityChange(value: string) {
        this.addressDetails.city = value;
        this.onAddressDetailsChange.emit(this.addressDetails);
    }
}
