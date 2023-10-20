import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-labeled-input",
    templateUrl: "./labeled-input.component.html",
    styleUrls: ["./labeled-input.component.scss"],
})
export class LabeledInputComponent {
    @Output() onValueChange = new EventEmitter<any>();
    
    valueChange(value: string) : void {
        this.onValueChange.emit(value);
    }
}
