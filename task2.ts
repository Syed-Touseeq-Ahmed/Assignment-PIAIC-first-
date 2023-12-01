// function for adding the value
function add (x:number, y:number):number{
        return x+y;   //sum of two number 
    }
    console.log(add(2,4));
    
    //function for checking the number is even or odd
    function checkEvenOrOdd(x:number):string{
        if(x % 2 == 0){
            return "the number is even";
        }
        else{
            return "the number is odd";
        }
    }
    
    console.log(checkEvenOrOdd(8));
    

    // function for calculating the area 
    function calculateArea (height:number, width:number):number{
        return height * width; //formula for the calculating the area
    }
    console.log(calculateArea(4,8));
    
    // function for the reverse string
    function reverseString(input:string):string{
        return input.split('').reverse().join('');
    }
    
    console.log(reverseString('touseeq'));

    
    // function for the conversion of the celsius to fahrenheit
    function convertCelsiusToFahrenheit(x:number):number{
        return x *(9/5) +32;  //formula for the conversion
    }
    
    console.log(convertCelsiusToFahrenheit(34));