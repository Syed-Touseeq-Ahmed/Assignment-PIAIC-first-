// function for adding the value
function add(x, y) {
    return x + y;
}
console.log(add(2, 4));
//function for checking the number is even or odd
function checkEvenOrOdd(x) {
    if (x % 2 == 0) {
        return "the number is even";
    }
    else {
        return "the number is odd";
    }
}
console.log(checkEvenOrOdd(8));
// function for calculating the area 
function calculateArea(height, width) {
    return height * width;
}
console.log(calculateArea(4, 8));
// function for the reverse string
function reverseString(input) {
    return input.split('').reverse().join('');
}
console.log(reverseString('touseeq'));
// function for the conversion of the celsius to fahrenheit
function convertCelsiusToFahrenheit(x) {
    return x * (9 / 5) + 32;
}
console.log(convertCelsiusToFahrenheit(34));
export {};
