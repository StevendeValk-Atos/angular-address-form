import { Component, EventEmitter, Output, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-labeled-input",
    templateUrl: "./labeled-input.component.html",
    styleUrls: ["./labeled-input.component.scss"],
})
export class LabeledInputComponent {
    @Output() onValueChange = new EventEmitter<any>();
    
    @Input() form!: FormGroup;
    @Input() controlName!: string;

    get control(): FormControl {
        const control = this.form.get(this.controlName);
        if (control instanceof FormControl) {
            return control;
        }
        else {
            throw new Error("Control must be a FormControl");
        }
    }

    valueChange(value: string) : void {
        this.onValueChange.emit(value);
    }
}
