import { Component, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AddressDetails } from "src/app/models/AddressDetails";

@Component({
    selector: "app-address-input-group",
    templateUrl: "./address-input-group.component.html",
    styleUrls: ["./address-input-group.component.scss"],
})
export class AddressInputGroupComponent {
    @Output() onAddressDetailsChange = new EventEmitter<any>();
    @Input() form!: FormGroup;
}
