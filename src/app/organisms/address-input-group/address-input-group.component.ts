import { Component, EventEmitter, Output, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AddressDetails } from "src/app/models/AddressDetails";

@Component({
    selector: "app-address-input-group",
    templateUrl: "./address-input-group.component.html",
    styleUrls: ["./address-input-group.component.scss"],
})
export class AddressInputGroupComponent {
    @Output() onAddressDetailsChange = new EventEmitter<any>();
    @Input() form!: FormGroup;

    getControl(controlName: string) {
        return this.form.controls[controlName] as FormControl;
    }
}
