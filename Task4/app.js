const data = [{
    city: 'CAI',
    name: 'mario'
}, {
    city: 'GZA',
    name: 'ahmed',
}, {
    city: "CAI",
    name: "marco"
}]
var acc = {};
var categorieCountries = [];
for (const item of data) {
    const city = item["city"];
    acc[`${city}`] === undefined ? acc[`${city}`] = [] : acc[`${city}`] = acc[`${city}`];
    acc[`${city}`].push(item);
}
categorieCountries.push(acc);

console.log(categorieCountries);

console.log("###########################");

const car = {
    brand: 'Honda',
    model: 'CR-V',
    year: '2026',
    color: 'silver'
};

console.log(car);
console.log("###########################");

console.log("this is using dot: " + car.brand);
console.log('this is using brakets: ' + car["brand"]);

console.log("###########################");

car.color = 'black';
car['price'] = 32000 //$
console.log(car);

console.log("###########################");

delete car["year"];
console.log(car.year);
console.log("explaination: thats because delete actully delete from original object");

console.log("###########################");

const newObj = {};
newObj['student-name'] = "Sara";
newObj["age"] = 20;

console.log("Student name: " + newObj['student-name']);

console.log("###########################");

const book = {
    title: "dummy book",
    auther: {
        firstName: "mario",
        lastName: "milad",
    }
}
console.log(book.auther.lastName);

console.log("###########################");

const ob = { name: "Ali", age: 25, city: "Cairo" };
console.log("All the keys: " + Object.keys(ob) + " and All the values are: " + Object.values(ob));
console.log("is it has property of job? " + Object.hasOwn("job"));
console.log("###########################");

const setting = {
    theme: 'dark',
    lang: "en"
}
Object.freeze(setting);
setting.theme = 'light';
setting["fontSize"] = 16;
console.log(setting);
console.log("it didnt add or chnage any properties because it use freeze which keeps the object imutable");

console.log("###########################");

const cities = ['cairo', 'alex', 'giza', 'mansoura', 'lux'];
console.log(cities + " and its length is: " + cities.length);
console.log("###########################");

console.log("first city is: " + cities[0] + " and the last city is: " + cities.at(-1));

console.log("###########################");

cities.push('newYork');
console.log("after adding using push the array is: " + cities);

cities.unshift('LA');
console.log("after using unshift the array is: " + cities);
console.log("###########################");

cities.pop();
console.log("the array after pop: " + cities);
cities.shift();
console.log("the array after shift: " + cities);

console.log("###########################");
const arr = ["HTML", "CSS", "JS", "React"];
console.log("the index of js is: " + arr.indexOf('JS'));
console.log("is array includes python " + arr.includes('python'));

console.log("###########################");
let arr1 = ["pen", "book", "bag"];
arr1.forEach((item) => {
    console.log(item + " " + arr1.indexOf(item));
})

console.log("###########################");

arr1 = ["red", "green", "blue", "yellow"];
for (let color of arr1) {
    if (color === 'blue') {
        break;
    }
    console.log(color);
}
console.log("###########################");

arr1 = ["A", "B", "C"];
arr1.push('D');
arr1.push('E');
arr1.shift();
console.log("the array is: " + arr1 + " the length is: " + arr1.length);

console.log("###########################");

arr1 = ["apple", "banana", "cherry"];
let arr2 = arr1.map(item => {
    return item.toUpperCase();
})
console.log("old one: " + arr1);
console.log('new one: ' + arr2);
console.log("###########################");

arr1 = [10, 55, 30, 80, 45, 90];
const filteredArray = arr1.filter(item => {
    return item > 50;
});
console.log(filteredArray);
console.log("###########################");

arr1 = ["Cairo", "Giza", "Alex", "Aswan"];
const requiredCity = arr1.find(item => {
    return item.startsWith('A');
})
console.log(requiredCity);
console.log(arr1.findIndex(item => {
    if (item === requiredCity) {
        return arr1.indexOf(item);
    }
}));

console.log("###########################");
arr1 = ["a", "b", "c", "d", "e"];
arr2 = arr1.slice(1, 4);
console.log("Copy: " + arr2);
console.log('Original: ' + arr1);

console.log("###########################");
arr1 = ["one", "two", "three", "four", "five"];
const removedItems = arr1.splice(1, 2);
console.log("original: " + arr1);
console.log("removed: " + removedItems);

console.log("###########################");
arr1 = [40, 100, 1, 5, 25];
console.log(arr1.sort((a, b) => {
    return a - b;
}));

console.log("###########################");
arr1 = [16, 21, 17, 19];
console.log(arr1.some(item => {
    return item >= 18;
}));
console.log(arr1.every(item => {
    return item >= 18;
}));

console.log("###########################");

arr1 = [5, 10, 15, 20];
const total = arr1.reduce((acc, item) => {
    return acc += item;
}, 0);
console.log(total);

console.log("###########################");
const students =
    [{ name: "Omar", grade: 80 }, {
        name: "Mona",
        grade: 90
    }, { name: "Ali", grade: 70 }];
for (let student of students) {
    console.log(student.name + " " + student.grade);
}
console.log("###########################");

const filteredStudents = students.filter(item => {
    return item.grade >= 80
});
filteredStudents.map(student => {
    console.log(student.name);
});

console.log("###########################");

const products = [
    {
        name: 'p1',
        price: 200,
    },
    {
        name: 'p2',
        price: 250,
    },
    {
        name: 'p3',
        price: 80,
    },
];
const totalPrice = products.reduce((acc, item) => {
    return acc += item.price;
}, 0);
console.log(totalPrice);

console.log("###########################");

arr1 = ["js", "html", "css", "js", "react", "js"];
let times = 0;
for (const item of arr1) {
    if (item === 'js') {
        times++;
    }
}
console.log(times);
console.log("###########################");

const classRoom = {
    teacher: 'ahmed',
    students: [
        "mario", "marco", "alex", "nour"
    ]
}
console.log(classRoom.teacher + " " + classRoom.students.length + " " + classRoom.students.at(-1));

console.log("###########################");

arr1 = [{ id: 1, title: "Pen", price: 10 }, {
    id: 2, title: "Book",
    price: 50
}, { id: 3, title: "Bag", price: 25 }];
const uppercaseTitles = arr1.map(product => product.title.toUpperCase());
console.log("Uppercase Titles:", uppercaseTitles);
const cheapProducts = arr1.filter(product => product.price < 30);
console.log("Cheap Products:", cheapProducts);
const totalP = arr1.reduce((sum, product) => sum + product.price, 0);
console.log("Total Price:", totalP);