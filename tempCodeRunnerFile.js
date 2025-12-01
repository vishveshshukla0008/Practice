class Remote {
    constructor(product, price, color) {
        this.product = product;
        this.price = price;
        this.color = color;
    }

    powerOn() {
        console.log("The machine is ON now")
    }
    powerOff() {
        console.log("The machine is Off now")
    }
}

let remote1 = new Remote("yash", 100000, "fair")
console.log(remote1)