
const firstNameElement = document.getElementById('fname')
const lastNameElement = document.getElementById('lname')
const ageElement = document.getElementById('age')
const isGraduateElement = document.getElementById('graduate')
const addUserBtn = document.getElementById('save-user-btn');
const updateUserBtn = document.getElementById('update-user-btn');
const form = document.getElementById('user-registration-form');
const searchBarElement = document.getElementById('search-bar');
const searchBoxElement = document.getElementById('searchBox');

const usersList = document.getElementById('users-list')


let editingIndex = null;
const users = JSON.parse(localStorage.getItem('users')) || [];
drawTable(users)
function submitForm(event) {
    event.preventDefault();
}
function handleAddUSer() {
    const user = {
        fname: firstNameElement.value,
        lname: lastNameElement.value,
        age: ageElement.value,
        graduated: isGraduateElement.checked,
    };
    users.push(user);
    updateLocalStorage(users);
    const savedUsers = localStorage.getItem('users');
    const allUsers = JSON.parse(savedUsers);
    drawTable(allUsers)

}
function clearFormFields() {
    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    isGraduateElement.checked = false;
}
function handleDeleteUser(index) {
    users.splice(index, 1);
    updateLocalStorage(users);
    drawTable(users);
}

function drawTable(allUsers) {
    usersList.innerHTML = '';

    allUsers.forEach((user, index) => {
        const userCard = document.createElement('li');
        userCard.className = 'user-card';

        const userInfo = document.createElement('ul');
        userInfo.className = 'user-info';

        const userFName = document.createElement('li');
        const userLName = document.createElement('li');
        const userAge = document.createElement('li');
        const userisGraduate = document.createElement('li');

        userFName.textContent = `First Name: ${user.fname}`;
        userLName.textContent = `Last Name: ${user.lname}`;
        userAge.textContent = `Age: ${user.age}`;
        userisGraduate.textContent = `Graduated: ${user.graduated ? "Yes" : "No"}`;

        userInfo.append(userFName, userLName, userAge, userisGraduate);
        const ctaSection = document.createElement('div');
        ctaSection.className = 'cta'
        const updateBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        deleteBtn.textContent = "Delete"
        updateBtn.className = 'userActionsBtn'
        deleteBtn.className = 'userActionsBtn'

        ctaSection.append(updateBtn, deleteBtn);
        deleteBtn.addEventListener('click', () => handleDeleteUser(index));
        updateBtn.addEventListener('click', () => handleUpdateUSer(user, index));

        userInfo.appendChild(ctaSection)
        userCard.appendChild(userInfo);
        usersList.appendChild(userCard)
    })

}

function updateLocalStorage(users) {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers && savedUsers !== "undefined") {

        if (users) {
            localStorage.setItem("users", JSON.stringify(users));
        }
    } else if (users) {
        localStorage.setItem("users", JSON.stringify(users));
    }
}
function handleCompleteDeletion(index) {
    handleAddUSer();
    clearFormFields()
    addUserBtn.classList.remove('disabled');
    addUserBtn.classList.add('active')
    updateUserBtn.classList.remove('active')
    updateUserBtn.classList.add('disabled')
    handleDeleteUser(index)
}
function handleUpdateUSer(user, index) {
    firstNameElement.value = user.fname;
    lastNameElement.value = user.lname;
    ageElement.value = user.age;
    isGraduateElement.checked = user.graduated;
    editingIndex = index;
    addUserBtn.classList.remove('active');
    addUserBtn.classList.add('disabled')
    updateUserBtn.classList.remove('disabled')
    updateUserBtn.classList.add('active')
    updateUserBtn.addEventListener('click', () => handleCompleteDeletion(editingIndex))

}
form.addEventListener('submit', submitForm);
addUserBtn.addEventListener('click', handleAddUSer);

function handleSearch() {
    const enteredText = searchBarElement.value.trim().toLowerCase();
    const savedUsers = localStorage.getItem("users");
    const allUsers = savedUsers ? JSON.parse(savedUsers) : [];
    const searchedUsers = allUsers.filter((user) => {
        const fNameMatched = user.fname.toLowerCase().includes(enteredText);
        const lNameMatched = user.lname.toLowerCase().includes(enteredText);
        const nameMatches = fNameMatched || lNameMatched;
        if (searchBoxElement.checked) {
            return nameMatches && user.graduated === true;
        }
        return nameMatches;
    });

    drawTable(searchedUsers);
    console.log(searchBoxElement.checked, searchedUsers);

}

searchBarElement.addEventListener('keyup', handleSearch)
searchBoxElement.addEventListener('change', handleSearch);