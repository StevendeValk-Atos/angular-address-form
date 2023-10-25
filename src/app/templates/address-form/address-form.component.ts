import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { AddressFormData } from "src/app/models/AddressFormData";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-address-form",
    templateUrl: "./address-form.component.html",
    styleUrls: ["./address-form.component.scss"],
})
export class AddressFormComponent implements OnInit {
    constructor(
        private formBuilder: FormBuilder,
        private httpClient: HttpClient
    ) {}

    addressForm!: FormGroup;
    ngOnInit(): void {
        this.addressForm = this.formBuilder.group({
            ceo: this.formBuilder.group({
                name: new FormControl(""),
                address: new FormControl(""),
                city: new FormControl(""),
            }),
            cfo: this.formBuilder.group({
                name: new FormControl(""),
                address: new FormControl(""),
                city: new FormControl(""),
            }),
            cto: this.formBuilder.group({
                name: new FormControl(""),
                address: new FormControl(""),
                city: new FormControl(""),
            }),
        });

        this.fillInFormData();
    }

    fillInFormData() {
        this.httpClient
            .get<AddressFormData>("./assets/data/data.json")
            .subscribe((response) => {
                this.addressForm.patchValue(response);
            });
    }

    getFormGroup(groupName: string): FormGroup {
        return this.addressForm.get(groupName) as FormGroup;
    }

    submitButtonClick(): void {
        console.log(this.addressForm);
    }
}
