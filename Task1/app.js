const xInputElement = document.getElementById('x_value');
const yInputElement = document.getElementById('y_value');
const resultElement = document.getElementById('result');
const actionBtnElement = document.getElementById('actionBtn');
const welcomeElement = document.getElementById('welcome');
const welcomeBtn = document.getElementById('welcomeBtn');
const fNameElement = document.getElementById('fname');
const lNameElement = document.getElementById('lname');
const ageElement = document.getElementById('age');
let x = 0;
let y = 0;

function showAllOperations() {
    x = +xInputElement.value;
    y = +yInputElement.value;
    const result = [
        {
            equation: 'x + y',
            result: x + y
        },
        {
            equation: 'x + x',
            result: x + x
        },
        {
            equation: 'y + y',
            result: y + y
        },
        {
            equation: 'x - y',
            result: x - y
        },
        {
            equation: 'x * y',
            result: x * y
        },
        {
            equation: 'x / y',
            result: x / y
        },
        {
            equation: 'y - y',
            result: y - y
        },
        {
            equation: 'y / y',
            result: y / y
        },
        {
            equation: 'x / x',
            result: x / x
        },
        {
            equation: 'y / x',
            result: y / x
        },
        {
            equation: 'y - x',
            result: y - x
        },
    ]
    for (let op of result) {
        const listElement = document.createElement('li');
        listElement.className = 'result-element';
        listElement.textContent = op.equation + "= " + op.result;
        resultElement.appendChild(listElement);
    }
}
function welcomeUser() {
    const fName = fNameElement.value;
    const lName = lNameElement.value;
    const age = ageElement.value;

    welcomeElement.innerHTML = "Welcome " + fName + " " + lName + " to my website"
}
actionBtnElement.addEventListener('click', showAllOperations)
welcomeBtn.addEventListener('click', welcomeUser)