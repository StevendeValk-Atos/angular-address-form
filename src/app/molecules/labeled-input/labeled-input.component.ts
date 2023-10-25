import { Component, EventEmitter, Output, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-labeled-input",
    templateUrl: "./labeled-input.component.html",
    styleUrls: ["./labeled-input.component.scss"],
})
export class LabeledInputComponent {
    @Input() control!: FormControl;
}
