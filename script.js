class kitab {
    constructor(name, price, author, color) {
        this.name = name;
        this.price = price;
        this.author = author;
        this.color = color;
    }
}

class User {
    constructor(name, age, email, price) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.price = price;
    }

    setPrice(price) {
        this.price = price;
    }


    sanslo() {
        console.log("sanse le raha hu");
    }

    haglo() {
        console.log("hag ke aa gaya");
    }
}

User.prototype.sansLoYar = function () {
    console.log(this.haglo())
}
User.prototype.Khanakhaoyar = function () {
    console.log("khana kha raha hu")
}

// let kitab1 = new kitab("ssavdhfcvshavcvs", 2300, "Vishwesh Shukla", "yellow");
let user1 = new User("reshu", 21, "astik@yash.yahs")
user1.Khanakhaoyar()

