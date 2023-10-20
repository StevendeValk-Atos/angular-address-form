export class AddressDetails {
    public name: string;
    public address: string;
    public city: string;

    public constructor(name: string = "", address: string = "", city: string ="") {
        this.name = name;
        this.address = address;
        this.city = city;
    }
}