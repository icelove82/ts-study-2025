// number type
let age: number = 20;
if (age < 50) {
  age += 10;
}
console.log(age); // 30

// array of numbers
let ages: number[] = [20, 30, 40];
ages.forEach((age) => {
  if (age < 50) {
    age += 10;
  }
  console.log(age);
});

// tuple type
let person: [string, number] = ['yunmy', 43];
console.log(person); // ['yunmy', 43]

// enum type
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize); // 2

enum Size2 {
  Small = 's',
  Medium = 'm',
  Large = 'l',
}
let youSize: Size2 = Size2.Small;
console.log(youSize); // 's'

// function with typed parameters and return type
function caculateTax(income: number, taxYear?: number): number {
  let taxRate: number = 1.0; // default tax rate

  if ((taxYear || 2023) < 2023) {
    return income * taxRate;
  }

  if (income < 10_000) {
    return income * 0.1;
  } else if (income < 20_000) {
    return income * 0.2;
  } else {
    return income * 0.3;
  }
}

caculateTax(10_000, 2023); // 1000

// object type
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date, name: string) => void;
} = {
  id: 1,
  name: 'yunmy',
  retire: (date: Date, name: string) => {
    console.log(name + ' retired on ' + date);
    console.log(date);
  },
};
// employee.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
employee.retire(new Date(), employee.name); // yunmy retired on Mon Oct 16 2023 00:00:00 GMT+0900 (Korean Standard Time)

// Type alias
export type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date, name: string) => void;
};

let employee2: Employee = {
  id: 1,
  name: 'yunmy',
  retire: (date: Date, name: string) => {
    console.log(name + ' retired on ' + date);
    console.log(date);
  },
};

console.log(employee2); // { id: 1, name: 'yunmy', retire: [Function] }
employee2.retire(new Date(), employee2.name); // yunmy retired on Mon Oct
