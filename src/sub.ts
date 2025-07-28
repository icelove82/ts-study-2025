import type { Employee } from './index';

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
