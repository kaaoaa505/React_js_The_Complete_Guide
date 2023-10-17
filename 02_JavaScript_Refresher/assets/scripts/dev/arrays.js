console.log(`
===> arrays <===
`);

const hobbies = ['sport', 'cooking', 'reading'];
console.log(hobbies.slice());

hobbies.push('working');
console.log(hobbies);

let hobby_index = hobbies.findIndex(item =>  item === 'reading');
console.log(hobby_index);

hobby_index = hobbies.findIndex(item =>  item === 'working');
console.log(hobby_index);

const new_hobbies = hobbies.map(hobby => {
    return hobby.charAt(0).toUpperCase() + hobby.slice(1) + '!.';
});
console.log(hobbies);
console.log(new_hobbies);

const new_hobbies_obj = new_hobbies.map(hobby => {
    // return {name: hobby};
    return {hobby};
});
console.log(new_hobbies_obj);

for(const one_hobby of hobbies){
    console.log(`hobby of hobbies is: ${one_hobby}`);
}