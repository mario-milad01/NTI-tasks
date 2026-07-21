// //day7
//task7 part 1

//1)
// function withoutStrictMode() {
//     Variable = "this valiable is global"
//     console.log("1)", Variable);
// }
// withoutStrictMode(); //it will print the console log without any errors
// // bacause it didnt use strict mode so it defined the Variable as global 


//2)
// // function withStrictMode() {
// //     "use strict";
// //     strictVar = "this valiable is global"
// //     console.log("2)", strictVar);
// // }
// // withStrictMode();//it will throw referance error bacuse strictVar wasent defined


//3)
// function strictModeFunction() {
//     "use strict";
//     var localVar = 'test';
//     var obj = {
//         name: 'test'
//     };
//     try {
//         // delete localVar;
//         delete obj.name
//     } catch (e) {
//         console.log(e);
//     }
//     console.log(obj); // console empty objct {}
// }
// strictModeFunction();


//4)
// console.log(x); // undefined
// var x = 10;
// console.log(x); //10



//5)
// Case 1
// sayHi();
// function sayHi() {
//     console.log("Hi");
// } 
// //case 1 will invoked correctly and print hi because the hoisting
// //it defined the function before the execution phase

// // Case 2
// sayBye();
// var sayBye = function () {
//     console.log("Bye");
// };
//case 2 will fail because sayBye is defined as var 
//in define phase it defined as var with undefined value and afer that 
// the first execution line was calling this variable witch not defined as function


//6)
// console.log(a); // error 
// let a = 5;
//because TDZ we can not access the variable defined using let or const 
//before it defined and initialized


//7)
// var n = 1;
// function demo() {
//     //var n =undefined
//     //n = 2
//     console.log(n); //undefined
//     var n = 2;
//     console.log(n); //2
// }
// demo();
// console.log(n); // 1


//8)
// var x = 1;
// function exampleOfScoping() {
//     if (x === undefined) {
//         console.log('the var x is defined as undefined at the start of the function block');
//     }
//     var x = 5;
//     for(var i=0;i<3;i++){
//         console.log('i inside the for block', i); //0,1,2
//     }
//     console.log('i outside the for block but inside the function block',i) //3
// }
// exampleOfScoping()
// console.log('x outside the function block',x); //1
// console.log('i outside the function block i will be error',i); //not defined outside the function block


//9)
// let x = 1;
// function exampleOfScoping() {
//     // console.log(x) //error;

//     let x = 5;
//     const y = 8;
//     if (true) {
//         let x = 9
//         const y = 0;
//         console.log('the var x is defined as let at the start of the if block', x); //9
//         console.log('the var y is defined as const at the start of the if block', y); //0
//     }
//     console.log('x outside the if block will be: ', x); //5
//     console.log('y outside the if block will be: ', y); //8

//     for (let i = 0; i < 3; i++) {
//         console.log('i inside the for block', i); //0,1,2
//     }
//     // console.log('i outside the for block but inside the function block', i)//error
// }
// exampleOfScoping()
// console.log('x outside the function block', x); //1
// // console.log('i outside the function block i will be error', i); //error


//10)
// var x = 8;
// console.log('first x using var: ', x); //8

// var x = 17;
// console.log("second decleration of x using var: ", x); //17


//11)
// let y = 5;
// console.log('first y using lrt: ', y); //5

// let y = 17;
// console.log("second decleration of y using let: ", y); //error we cannot define already defined variables using let


//12)
const student = {
    name: 'mario',
    age: 22,
    city: 'cairo'
};
student.age = 23;
console.log(student);

student['lastName'] = 'milad';
console.log(student);

delete student.city;
console.log(student);

try {
    student = {
        name: 'mina',
        city: 'alex',
        age: 21
    }
} catch (e) {
    console.log('error happened', e);
    console.log(student);
}


//13)
const num = [1, 2, 3];

num.push(5);
console.log(num);

//reassign the const array will throw error

// num = [8, 9, 10];
// console.log(num);


//14)
// var a; //valid it will take undefined as value
// let b; //valid  it takes undefined as initial value
// const c; // inavlid 


//15)
var g1 = "var global";
let g2 = "let global"
const g3 = "const global"

console.log('window.g1: ', window.g1);
console.log('window.g2: ', window.g2);
console.log('window.g3: ', window.g3);

//16)
const handlers = {};
for (let i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}
console.log(handlers.fn0());
console.log(handlers.fn2());


//explaination
//var is function-scoped so It creates one single variable shared by
//  the entire loop any function runs after the loop has already finished the i will equals 3.

// let is block-scoped It creates new variable for every
//  iteration of the loop Each function gets its own 
//  copy of i on that specific turn (0, 1, 2).

//17)
const fn = (name) => `Welcome ${name}!`;
console.log(fn('mario'));

//18)
const fn2 = (first, last, age) => `${first} ${last} is ${age} years old`
console.log(fn2('Mario', 'Milad', 22));

//19)
const multiply = (a, b) => a * b;
const sum = (a, b) => {
    console.log("a: ", a);
    console.log("b: ", b);
    return a + b
}
console.log("the call of multiplication: ", multiply(4, 5));
console.log(sum(3, 4));

//20)
const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};
const { title, price, inStock } = product;
console.log(title, price, inStock)

//21)
const arr = ["HTML", "CSS", "JS", "React"];
let [firstElement, secondElement] = arr;
console.log(firstElement, secondElement);


//22)
function greet(name = 'Guest', message = 'Hello') {
    return `${message}, ${name}!`
}
console.log(greet('Mario', "Hi"));
console.log(greet('Mario'));
console.log(greet());

//23)
function sumAll(...numbers) {
    const sum = numbers.reduce((acc, num) => {
        return acc + num;
    }, 0);
    return sum;
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

//24)
var arr1 = [1, 2];
var arr2 = [3, 4, 5]
var merge = [...arr1, ...arr2];
console.log(merge);

//25)
arr1 = [10, 20, 30];
arr2 = [...arr1];
arr2.push(40);
console.log('array 1 original: ', arr1);
console.log('array 2 copy: ', arr2);


//26)
const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };
const mergeObj = { ...user, ...contact };
// the wining age is the second element in merege it will overwrite the first one
//in this case it will be the age of contact if we merge {...contact,...user}
//it would be age of user
console.log(mergeObj);

//27)
const values = [2, 4, 6, 8];
function total(a, b, c, d) {
    return a + b + c + d;
}
console.log('we pass the array as parameter: ', total(...values));

//28)
let person1 = { name: "Ali", child: { age: 5 } };
let person2 = person1; //copy same values in heap and same ref in stack
person2.name = "Omar";
console.log(person1.name); // Omar

//29)
const original = {
    name: "Mona",
    details: { city: "Cairo" }
};
// const copy = {...original} //shallow copy
// copy.name = 'mario';
// copy.details.city='Giza';

// console.log(original);
// console.log(copy);
// because we shallow copy it copies the first layer only so the nested objects 
//will be same referance in stack and same value in heap


const dummy = JSON.stringify(original);
const heapCopy = JSON.parse(dummy);

heapCopy.details.city = 'Alex';
console.log(original);
console.log(heapCopy);
console.log('#####################');



const object = { name: "Ahmed", age: 26, city: "Alex" };
localStorage.setItem('userdata', JSON.stringify(object));
const userData = localStorage.getItem('userdata');
const userDataParsed = JSON.parse(userData);
console.log(userDataParsed);

console.log('#####################');
//30)
const app_config = {
    name: 'app1',
    version: '2.0.3',
    api: {
        baseUrl: 'https://',
        timeout: 3000
    }
}

//change timeout
app_config.api.timeout = 4000;

//add a feature to array

app_config['features'] = [];
app_config.features.push('feature1');

console.log(app_config);

//reassign the object

try {
    app_config = {
        name: 'app2',
        version: '3.2.1',
        api: {
            timeout: 4000,
            baseUrl: 'http://'
        }
    }
} catch (e) {
    console.log(e);
}

console.log('#####################');

function createCard(title, price = 0, ...tags) {
    return {
        price,
        ...tags,
        label: `${title} - ${price} EGP`
    }
}

const card1 = createCard('iphone', 89000, ['apple', 'flakship', 'phone']);
const card2 = createCard('laptop', 110000, ['dell', 'laptop', 'expensive']);

console.log(card1, card2);
console.log('#####################');


const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];
students.map(student => {
    console.log(`${student.name} scored ${student.grade}`)
})

//task 7 part 2

const fruits = ["apple", "banana", "cherry"];

for (const key in fruits) {
    console.log("index: ", key);
}
for (const fruit of fruits) {
    console.log("Value: ", fruit);

}
console.log('#####################');
for (const [i, fruit] of fruits.entries()) {
    console.log(`${i} -> ${fruit}`);

}
console.log('#####################');


const string = 'NTI';
for (const index in string) {
    console.log(index, string[index]);
}

for (const char of string) {
    console.log(char);

}
console.log('#####################');
//explianation : for of is iterate through each element but 
// for in iterate through the index of each element


//4)
const user2 = { name: "Ali", age: 25 };
// for (const x of user2) {
//     console.log(x);
// }

//error user is not array to iterate throuth its values

//fix:
for (const [i, value] of Object.entries(user2)) {
    console.log(`Key is: ${i} and value is: ${value}`);
}

//5)
arr1 = [1, 2, 3, 4, 5, 6];
for (const i of arr1) {
    if (i === 3) {
        continue;
    }
    else if (i === 5) {
        break;
    }
    console.log(i); //1,2,4
}

console.log('#####################');


//6)
const mapObj = new Map();
mapObj.set('name', 'ahmed');
mapObj.set(100, 'ID');
mapObj.set({
    id: 1
}, "UserObject");

console.log("type of this map: ", typeof (mapObj), "and the size  of it is: ", mapObj.size);
console.log('#####################');


//7)
console.log("the value of name is: ", mapObj.get('name'));
console.log("is age exist", mapObj.has('age'));
mapObj.delete(100);
console.log(mapObj.size);
console.log('#####################');


//8)
for (const [key, value] of mapObj) {
    console.log(`The key is: ${key} and the value  : ${value}`);
}


for (const key of mapObj.keys()) {
    console.log(`The key is: ${key}`);
}
for (const value of mapObj.values()) {
    console.log(`The value is: ${value}`);
}
console.log('#####################');


//9) resones 
// 1. if the key is not string (function or number)
//2. If you need .size directly instead of Object.keys(obj).length
//3. if you want to keep the order of iterations 


//10)
mapObj.clear()
console.log(mapObj.size);
console.log('#####################');


//11)
const setObj = new Set();
setObj.add(10);
setObj.add(21);
setObj.add(2);
setObj.add(3);
setObj.add(2);
setObj.add(10);
console.log(setObj.size);
//because the set is remove any replicas so as we see we have 2,10 repeated
console.log('#####################');



//12)
console.log("does this set has 2: ", setObj.has(2));
setObj.delete(3);
console.log('does this set has 3 after we delete 3: ', setObj.has(3));
console.log('#####################');



//13)
for (const value of setObj.values()) {
    console.log(value);
}
for (const [key, value] of setObj.entries()) {
    console.log(key, value);
}
//in set the key = value
console.log('#####################');


//14)
const nums = [1, 2, 2, 3, 4, 4, 5];
const setObj1 = new Set(nums)
const setObj2 = [...setObj1];
console.log(setObj2);
console.log('#####################');


//15)
//differences 
//1. array accept dplicated items set does not
//2. set does not require index to be accessed
//3.Provide useful methods add(),delete(),has() and clear()


//16)
const name = "Ahmed";
const age = 25;
const oldObject = {
    name: name,
    age: age
}
const newObject = {
    name, age
}

console.log('old object is: ', oldObject);
console.log("the new object is: ", newObject);
console.log('#####################');


//17)
const calculator = {
    add: (a, b) => {
        return a + b
    },
    multiply: (a, b) => {
        return a * b
    }

}
console.log("test the add method: ", calculator.add(2, 3));
console.log("test the multiply method: ", calculator.multiply(2, 3));
console.log('#####################');


//18)
const key1 = "email";
const key2 = "phone";
const userr = {
    [key1]: "test@test.com",
    [key2]: "0101010",
    ["user_" + 99]: "special user"
};
console.log(userr);
console.log('#####################');


//19)
function builPayload(type, value) {
    return {
        type: value,
        createdAt: new Date().toISOString(),
        print: () => {
            console.log(`${type}: ${value}`);
        },
        [type + '_flag']: true
    }
}
const test = builPayload('order', 12345);
console.log(test);
test.print();
console.log('#####################');


//20)
let a = 10;
let b = a;
b++;
console.log(a, b);//10,11
console.log('#####################');
//explaination
//becaue a is stored its value in heap and the pointer (referasnce) on the stack lets assume 1101
//then when b=a it means b copy a by value so its different referance 


//21)
const person11 = { name: "SSS", child: { age: 5 } };
const person22 = person1;
person22.name = "AAA";
console.log(person11.name);//AAA
//because person11 now stored in heap and its pointer stored in the stack 
//when person22= person11 its mean that person2 has same referance of person1 which points to the same value 
//so any change will happen on person11 or person22 will effect the other


//22)

const originall = { x: 1, nested: { y: 2 } };
// const copyShallow = { ...originall };
// copyShallow.x = 4;
// copyShallow.nested.y = 9;

// console.log("the original one: ", originall);
// console.log("the shallow copy one: ", copyShallow);
//because shallow copy just copy one layer if there are nested objects it will not shaallow copy them.
console.log('#####################');


//23)
const copyShallow = Object.assign({}, originall);
copyShallow.nested.y = 9;
console.log("the original one: ", originall);
console.log("the shallow copy one: ", copyShallow);
//yes the original object changed same as the old way of ...original
console.log('#####################');


//24)
const deepSrc = {
    n: 1,
    d: new Date(),
    arr: [1, { k: 2 }],
    set: new Set([1, 2, 3])
};

const deepClone = structuredClone(deepSrc);
deepClone.arr[1].k = 999;
console.log(deepSrc.arr[1].k);
console.log(deepClone.arr[1].k);
console.log('#####################');

//25)
const arr3 = [1, [2, 3]];
const arr4 = structuredClone(arr3);
arr3[1][0] = 99;
console.log(arr4[1][0]);
console.log('#####################');


//26)
const m1 = new Map([["k", { v: 1 }]]);
// const m2 = new Map(m1);
// m2.get("k").v = 42;
// console.log(m1.get("k").v); //42

//because new Map(m1) is a shallow copy of m1
// console.log('#####################');


//27)
const m3 = structuredClone(m1);
m3.get("k").v = 7;
console.log(m1.get("k").v); //1 its deap copy


//28)
const products = [101, 102, 101, 103, 102, 104];
const uniqueProducts = [...new Set(products)];
const stored = new Map();
for (const p of uniqueProducts) {
    stored.set(p, 'avaliable');
}

console.log("size of stored unique ids is: ", stored.size);
console.log("all entries: ", stored);
console.log('#####################');



//29)
const titlee = "JS Core";
const dynamicKey = "category";
const course = {
    titlee,
    [dynamicKey]: "Programming",
    info() {
        return `${this.titlee} (${this.category})`;
    }
};

for (const [key, value] of Object.entries(course)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
}


//30)

let personA = { name: "SSSSSSS", son: { age: 5 } };
let personB = personA;
personB.name = "UpdatedB";

let personC = structuredClone(personA);
personC.son.age = 12;

console.log("personA:", personA);
console.log("personB:", personB);
console.log("personC:", personC);

