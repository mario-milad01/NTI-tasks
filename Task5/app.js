function multiply(fNumber, sNumber) {
    return +fNumber * +sNumber;
}
let sum = multiply(8, 9)
console.log(sum);

console.log("###########################");


function calculate(a, b, method) {
    return (method(a, b));
}
sum = calculate(2, 3, multiply);
console.log(sum);

console.log("###########################");

function displayResult(result) {
    console.log(result);
}
displayResult(calculate(4, 3, multiply));

console.log("###########################");


function greetUser() {
    console.log("Hello, User!");
    console.log("###########################");
}
setTimeout(greetUser, 3000);

var count = 10;
function countDown2(count) {
    const timer = setInterval(() => {
        if (count > 0) {
            console.log(count);
            count--;
        } else {
            console.log("Time's up! from first countDown function ");
            console.log("###########################");
            clearInterval(timer)

        }
    }, 1000);
}
countDown2(count);

count = 10;
function countDown3(count) {
    const timer = setInterval(() => {
        if (count > 0) {
            console.log(count);
            count--;
        } else {
            clearInterval(timer)
            myTimeout = setTimeout(
                () => {
                    console.log('This will be cleared!');
                    console.log("###########################");
                }
                , 5000);
            clearTimeout(myTimeout);
            console.log("The timeout was canceled! You will never see 'This will be cleared!' in the console.");
        }
    }, 1000);
}
countDown3(count);

