const items = [];

//create
items.push("item1");
items.push("item2");
items.push("item3");
items.push("item4");

//raed

items.forEach((item) => {
    console.log(item);
})
console.log("###########################");

//update

items[2] = 'updated item at this index';
items.forEach((item) => {
    console.log(item);
});
console.log("###########################");

//delete

const newItems = items.splice(2, 1);
console.log('the array after removing item at index 2 which is item3');
items.forEach((item) => {
    console.log(item);
})
