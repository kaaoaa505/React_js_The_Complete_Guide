console.log(`
===> destructuring <===
`);

const [first_name, last_name] = ['Khaled', 'Allam'];
console.log(first_name);
console.log(last_name);

const {name: user_full_name, age} = {
    name: 'Khaled Allam Ahmed',
    age: 34
};
console.log(user_full_name);
console.log(age);