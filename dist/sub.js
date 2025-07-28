"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=sub.js.map