import User from "../models/User";

console.log(`
===> spreading <===
`);

const hobbies = ['sport', 'cooking', 'reading'];
const new_hobbies = ['walking', 'working', 'writing'];

const merged_hobbies = [...hobbies , ...new_hobbies];

console.log(hobbies);
console.log(new_hobbies);
console.log(merged_hobbies);


const user = new User('Khaled', 34);
const extended_user = {
    ...user,
    is_admin: true
};
console.log(user);
console.log(extended_user);