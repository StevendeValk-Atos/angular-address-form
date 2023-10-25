import { Component, EventEmitter, Output, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-address-input-group",
    templateUrl: "./address-input-group.component.html",
    styleUrls: ["./address-input-group.component.scss"],
})
export class AddressInputGroupComponent {
    @Input() formGroup!: FormGroup;

    getControl(controlName: string) {
        return this.formGroup.controls[controlName] as FormControl;
    }
}
