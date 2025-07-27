// number type
let age: number = 20;
if (age < 50) {
  age += 10;
}
console.log(age);

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

// enum type
enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;