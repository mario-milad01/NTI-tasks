const sendActionBtnElement = document.getElementById('sendActionBtn');
const userNameElement = document.getElementById('userName');
const userAgeElement = document.getElementById('age');
const userYearsOfExpElement = document.getElementById('exp');
const reportElement = document.getElementById('report-info')


const userNameInputElement = document.getElementById('nameInput');
const userPasswordElement = document.getElementById('password');
const loginBtn = document.getElementById('login');


const file3TaskBtn = document.getElementById('file3TaskBtn');

var performaceLevel = '';
var jobCatagory = '';
var salary = 2000;
var workShift = 'day shift';
function showRatingPrompot() {
    const userYearsOfExp = +userYearsOfExpElement.value;
    const rating = +prompt("enter your self-rating (from 1 to 10): ");

    if (userYearsOfExp < 2) {
        jobCatagory = 'junior'
    } else if (userYearsOfExp >= 2 && userYearsOfExp < 5) {
        jobCatagory = 'Mid-Level'
    }
    else if (userYearsOfExp >= 5 && userYearsOfExp < 10) {
        jobCatagory = 'Senior'
    }
    else if (userYearsOfExp > 10) {
        jobCatagory = 'Expert'
    }

    switch (true) {
        case (rating >= 9):
            performaceLevel = 'Exellent';
            break;
        case (rating === 7 || rating === 8):
            performaceLevel = "Good";
            break;
        case (rating === 5 || rating === 6):
            performaceLevel = 'Average';
            break;
        default:
            performaceLevel = "needs improvment"
    }

    if (userYearsOfExp == 2 && userYearsOfExp == 0) {
        salary = salary + 0.1 * salary;
    } else if (userYearsOfExp >= 3 && userYearsOfExp <= 5) {
        salary = salary + 0.15 * salary;
    }
    else if (userYearsOfExp > 5) {
        salary = salary + 0.2 * salary;
    }

    const workDate = new Date().getHours();
    workShift = (workDate >= 9 && workDate <= 18) ? 'day shift' : 'night shift';
    const report = [
        {
            title: "performance",
            value: performaceLevel
        }, {
            title: 'job catagory',
            value: jobCatagory
        }, {
            title: 'salary',
            value: salary
        }, {
            title: "job shift",
            value: workShift
        }
    ]


    console.log("the job catagory is: " + jobCatagory);
    console.log("the performance level is: " + performaceLevel);
    console.log("the salary is: " + salary);
    console.log("the job shift is: " + workShift);

    window.alert("the job catagory is: " + jobCatagory);
    window.alert("the performance level is: " + performaceLevel);
    window.alert("the salary is: " + salary);
    window.alert("the job shift is: " + workShift);
    for (let data of report) {
        const item = document.createElement('li');
        item.className = 'item';
        item.textContent = data.title + ": " + data.value + " ";
        reportElement.appendChild(item);
    }
}
sendActionBtnElement.addEventListener('click', showRatingPrompot)


function validateUser() {
    const user_name = userNameInputElement.value;
    const userPassword = userPasswordElement.value;

    if (user_name === '') {
        console.log('user name is required!');

    } else {
        if (userPassword.length < 8) {
            console.log('password must be at least 8 characters')
        } else {
            console.log('user name is ' + user_name);
            console.log('password is: ' + userPassword);
        }
    }


}

loginBtn.addEventListener('click', validateUser);

function startFile3Task() {
    const name = prompt("Enter your Name: ");
    const year = prompt("Enter your Birth Year (ex:2004): ");
    const isStudent = confirm("Are you Student? ");
    let cat = '';
    const currentYear = new Date().getFullYear();
    const content = "Dont forget to study hard!"
    var userAge = currentYear - +year;
    if (userAge < 13) {
        cat = 'Kid'
    } else if (userAge >= 13 && userAge <= 17) {
        cat = 'Teen'
    } else if (userAge >= 18 && userAge <= 59) {
        cat = 'Adult'
    } else {
        cat = 'Senior'
    }

    console.log('Hello ' + name + ", You are " + userAge + " years old");
    console.log("Catagory: " + cat);
    isStudent ? console.log(content) : null;

    window.alert(`
                Hello ${name}, You are ${userAge} years old.
                Catagory: ${cat}.
                ${isStudent ? content : ''}
        `)
}
file3TaskBtn.addEventListener('click', startFile3Task)