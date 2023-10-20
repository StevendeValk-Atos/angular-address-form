import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-form-footer",
    templateUrl: "./form-footer.component.html",
    styleUrls: ["./form-footer.component.scss"],
})
export class FormFooterComponent {
    @Output() onSubmitButtonClick = new EventEmitter<any>();

    submitButtonClick() : void{
        this.onSubmitButtonClick.emit();
    }
}
