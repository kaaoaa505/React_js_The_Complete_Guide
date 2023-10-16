import User from './models/User';
import * as utils from './utils';

console.log(utils.default);
console.log(utils.apiKey);
console.log(utils.test);

let userMessage = 'Hello world.';
console.log(userMessage);

userMessage = 'new value.';
console.log(userMessage);

const user = new User('Khaled', 34);
console.log(user);
console.log(user.greet());
