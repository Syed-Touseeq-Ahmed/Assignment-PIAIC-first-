// giving array to the variable and then apply different array method on array
let numbers = [1, 2, 3, 4, 5, 6];
numbers.push(67); //push method
numbers.pop(); //pop method
numbers.shift(); // shift method
numbers.unshift(23); // unshift method
console.log(numbers);
// giving array to the number variable and implement the slice
let number = [45, 34, 23, 31, 78, 65];
console.log(number.slice(2, 5)); // slice make the new array from the array which given early
// giving array to the name variable and implement the splice 
let names = ['ali', 'hassan', 'attiques', 'noman', 'Asad', 'saboor', 'taqi'];
names.splice(2, 3, 'touseeq', 'sabtain');
console.log(names);
export {};
