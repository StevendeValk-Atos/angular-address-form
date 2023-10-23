import { Component, EventEmitter, Output, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-form-input",
    templateUrl: "./form-input.component.html",
    styleUrls: ["./form-input.component.scss"],
})
export class FormInputComponent {
    value: string = "";
    
    @Output() onValueChange = new EventEmitter<any>();
    @Input() controlName!: FormControl;

    // src: https://www.angularjswiki.com/angular/ngmodelchange-change-angular/
    // src: https://stackoverflow.com/questions/42107167/how-to-pass-data-from-child-to-parent-component-angular
    public valueChange(value: string): void {
        this.onValueChange.emit(value);
    }
}
