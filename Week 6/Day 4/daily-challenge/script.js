let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let objJson = JSON.stringify(groceries);
let groceries2 = JSON.parse(objJson);

groceries2.totalPrice = "35$";

let payed = groceries.other.payed = false
console.log(payed) // --> it changed only locally, not in the parent obj
console.log(groceries2) // --> it doesn't change PAYED: true inside this object because "other" is also a nested object