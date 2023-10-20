import { Component } from "@angular/core";
import { AddressDetails } from "src/app/models/AddressDetails";

@Component({
    selector: "app-address-input-form",
    templateUrl: "./address-input-form.component.html",
    styleUrls: ["./address-input-form.component.scss"],
})
export class AddressInputFormComponent {
    addressDetailsChange(addressDetails: AddressDetails) {
        console.log(addressDetails);
    }
}
