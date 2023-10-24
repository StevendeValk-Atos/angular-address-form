import { AddressDetails } from "./AddressDetails"

export class AddressFormData {
    ceo: AddressDetails;
    cfo: AddressDetails;
    cto: AddressDetails;

    public constructor(){
        this.ceo = new AddressDetails();
        this.cfo = new AddressDetails();
        this.cto = new AddressDetails();
    }
}