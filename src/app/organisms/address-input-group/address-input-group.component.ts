import { Component } from "@angular/core";

@Component({
    selector: "app-address-input-group",
    templateUrl: "./address-input-group.component.html",
    styleUrls: ["./address-input-group.component.scss"],
})
export class AddressInputGroupComponent {
    name!: string;
    address!: string;
    place!: string;


    nameChange(value: string) {
        this.name = value;
        console.log(this.name);
    }

    addressChange(value: string) {
        this.address = value;
        console.log(this.address);
    }

    placeChange(value: string) {
        this.place = value;
        console.log(this.place);
    }
}
