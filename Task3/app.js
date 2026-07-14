var fullName = 'Mario Milad Helmy';
console.log(fullName.length);


var sentence = "I am learning JavaScript";
console.log("this is result in uppercase: " + sentence.toUpperCase());
console.log("this is result in lowercase: " + sentence.toLowerCase());

var email = "student@nti.com";
console.log("is email contain @? " + email.includes('@'));

var word = "JavaScript";
console.log(word[0] + " and the last character is" + word[word.length - 1]);

var text = "This is a bad day";
var newText = text.replace('bad', 'good');
console.log(newText);

sentence = "I love coding";
var splitWord = sentence.split(' ');
sentence = splitWord.join("-");
console.log(sentence);

text = " nti egypt training ";
console.log((text.trim()).toUpperCase().replace('EGYPT', 'CAIRO'));


//part b numbers

var number = '45.8';
console.log(parseFloat(number));

number = 7.6;
console.log("the rounded value is: " + Math.round(number) + " and the floor value is: " + Math.floor(number) + " and the ceil value is: " + Math.ceil(number));

var numbers = [12, 5, 28, 9];
console.log("the largest numer is: " + Math.max(numbers));

console.log(Math.floor(Math.random() * 20));

var price = 19.4567;
console.log(price.toFixed(2));

var numberss = [Math.floor(Math.random() * 50),
Math.floor(Math.random() * 50),
Math.floor(Math.random() * 50),
Math.floor(Math.random() * 50),
Math.floor(Math.random() * 50)]
var total = 0;
for (let num of numbers){
    total+=num;
}
console.log("the max number between these random numbers is: "+Math.max(...numberss));
console.log("the min number between these random numbers is: "+Math.min(...numberss));
console.log("the avg number between these random numbers is: "+(total/numberss.length).toFixed(2));


for (let i=1;i<=20;i++){
    console.log(i);
}
console.log("##########################")
for(let i=1;i<=15;i++){
    (i%2===1) ?  console.log(i) :null;
   
}
console.log("##########################")
var count =10;
while(count>0){
    console.log("count is: " +count);
    count--;
}
console.log("##########################")

var array =["Sara", "Omar", "Mona", "Youssef"] 
for(let name of array){
    console.log(name);
}
console.log("##########################")

for(let i=1;i<=10;i++){
    if(i>=7){
        break;
    }
    console.log(i);
}
console.log("##########################")

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
console.log("##########################")

for(let i=1;i<=30;i++){
    if(i===25){
        break;
    }else if(i%3===0){
        continue;
    }
    console.log(i);
}
console.log("##########################")

var letters = "HELLO";
for(let char of letters){
    console.log(char);
}
console.log("##########################")

numbers = [10,20,30,40];
var sum =0;
for(let num of numbers){
    sum+=num;
}
console.log(sum);

sentence = "JavaScript is amazing and awesome";
var counter =0;
for(let char of sentence){
    if(char==='a'||char ==='A'){
        counter++;
    }
   
}
console.log(counter);
console.log("##########################");

var grades = [700,85,92,60,77,88]
for(let g of grades){
    if(g%2===0){
        console.log(g);
    }
}
console.log("##########################")
var s='';
for(let i=1;i<5;i++){
    for(let j=1;j<=i;j++){
        s+='*';
    }
    console.log(s);
    s=""
}

console.log("##########################")

var names =["ahmed", "sara", "omar", "laila", "hassan"] ;
counter =0;
for(let name of names){
   
    if(name.toUpperCase().startsWith('S')||name.toUpperCase().startsWith('A')){
        console.log(name.toUpperCase());
        counter++;
    }
}
console.log("number of matched names is: "+counter);