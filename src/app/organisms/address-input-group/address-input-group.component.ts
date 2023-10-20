import { Component } from "@angular/core";
import { AddressDetails } from "src/app/models/AddressDetails";

@Component({
    selector: "app-address-input-group",
    templateUrl: "./address-input-group.component.html",
    styleUrls: ["./address-input-group.component.scss"],
})
export class AddressInputGroupComponent {
    addressDetails: AddressDetails = new AddressDetails();

    nameChange(value: string) {
        this.addressDetails.name = value;
    }

    addressChange(value: string) {
        this.addressDetails.address = value;
    }

    cityChange(value: string) {
        this.addressDetails.city = value;
    }
}
