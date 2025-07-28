"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 20;
if (age < 50) {
    age += 10;
}
console.log(age);
let ages = [20, 30, 40];
ages.forEach((age) => {
    if (age < 50) {
        age += 10;
    }
    console.log(age);
});
let person = ['yunmy', 43];
console.log(person);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
var Size2;
(function (Size2) {
    Size2["Small"] = "s";
    Size2["Medium"] = "m";
    Size2["Large"] = "l";
})(Size2 || (Size2 = {}));
let youSize = Size2.Small;
console.log(youSize);
function caculateTax(income, taxYear) {
    let taxRate = 1.0;
    if ((taxYear || 2023) < 2023) {
        return income * taxRate;
    }
    if (income < 10000) {
        return income * 0.1;
    }
    else if (income < 20000) {
        return income * 0.2;
    }
    else {
        return income * 0.3;
    }
}
caculateTax(10000, 2023);
let employee = {
    id: 1,
    name: 'yunmy',
    retire: (date, name) => {
        console.log(name + ' retired on ' + date);
        console.log(date);
    },
};
employee.retire(new Date(), employee.name);
let employee2 = {
    id: 1,
    name: 'yunmy',
    retire: (date, name) => {
        console.log(name + ' retired on ' + date);
        console.log(date);
    },
};
console.log(employee2);
employee2.retire(new Date(), employee2.name);
//# sourceMappingURL=index.js.map