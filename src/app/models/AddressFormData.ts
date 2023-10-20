import { AddressDetails } from "./AddressDetails"

export class AddressFormData {
    CEO: AddressDetails;
    CFO: AddressDetails;
    CTO: AddressDetails;

    public constructor(){
        this.CEO = new AddressDetails();
        this.CFO = new AddressDetails();
        this.CTO = new AddressDetails();
    }
}