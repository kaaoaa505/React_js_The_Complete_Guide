console.log(`
===> functions <===
`);

function handleT1(){
    console.log('Time is out v1 !.');
}
setTimeout(handleT1, 1000);

const handleT2 = () => console.log('Time is out v2 !.');
setTimeout(handleT2, 2000);

setTimeout(() => {
    console.log('3 sec time out completed !.');
}, 3000);

function greeting(greetFn){
    greetFn();
};

greeting(() => {
    console.log('greetFu from inside greeting');
})