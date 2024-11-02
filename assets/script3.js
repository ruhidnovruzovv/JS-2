let users = [{name: "A", age: 25},{name: "AA", age: 28}, {name: "B", age: 30}, {name: "C", age: 35}, {name: "CC", age: 40}];
let youngerThan30 = [];
let olderThan30 = [];

for (let i = 0; i < users.length; i++) {
    if (users[i].age < 30) {
        youngerThan30.push(users[i]);
        continue;
    }
    if (users[i].age > 30) {
        olderThan30.push(users[i]);
    }
}

console.log("30-dan kiçik:", youngerThan30);
console.log("30-dan böyük:", olderThan30);
