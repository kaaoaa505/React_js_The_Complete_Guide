console.log(`
===> users <===
`);

import User from "../models/User";

let user_message = 'Hello world.';
console.log(user_message);

user_message = 'new value.';
console.log(user_message);

const user = new User('Khaled', 34);
console.log(user);
console.log(user.greet());
