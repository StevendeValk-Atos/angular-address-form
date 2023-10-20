import { Component } from "@angular/core";

@Component({
    selector: "app-form-input",
    templateUrl: "./form-input.component.html",
    styleUrls: ["./form-input.component.scss"],
})
export class FormInputComponent {
    value: string = "";

    // src: https://www.angularjswiki.com/angular/ngmodelchange-change-angular/
    valueChange (value : string) : void {
        console.log(value);
    }
}
