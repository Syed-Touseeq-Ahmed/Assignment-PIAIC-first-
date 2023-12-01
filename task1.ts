// import inquirer for taking the input form the user
import inquirer  from "inquirer";

// making the shopping interface for the shopping variable 
interface shopping{
    catagory: 'fruits'|'vegetables';
}
// make the grocerychoies interface
interface grocerychoices{
    fruits: string[];
    vegetables:string[];
    [key:string]:string[]|undefined
    
}
// pricees variable where all the prices of the item which is use in the store
const prices:{[key:string]:number} ={
    banana: 80,
    apple: 120,
    mango: 95,
    orange:100,
    patatoes: 50,
    onion: 70,
    beens: 50,
    carrot:60,
    radish:50,

}

//  shoping variable which take value form the user in which catagory the user in interested
let shopping = await inquirer.prompt([
    {
        name:'catagory', //giving name 
        type:'list',
        choices:['fruits','vegetables'], 
        message:'what you want to buy'
    }
]);

//  store the value in the catagory variable which come from the shopping variable
let catagory = shopping.catagory;

// another variable for the groceryitem and giving the array
let choice:grocerychoices = {
    fruits: [],
    vegetables: [],
    
};

// apply condition statement 
if(catagory === 'fruits'){   
    let fruit = await inquirer.prompt([
        {
            name:'fruits',
            type: 'checkbox',
            choices:['banana', 'apple', 'mango','orange'],
            meassage: 'select your fruits'
        }
    ]);

    choice = fruit
}
else if(catagory == 'vegetables'){
    let vegetable = await inquirer.prompt([
        {
            name:'vegetables',
            type: 'checkbox',
            choices:['patatoes','onion','beens','carrot','radish'],
            message: "select the vegetables"
        }
    ]);

    choice = vegetable;

    console.log(`selected ${catagory}`)

}

// amout  variable for the item prices
let amount = 0;

// make the for loop which take the price value form the price variable and then take the item form the condation statemnt which is in the choices variable
for(const selectedCategory of Object.keys(choice)){ //take value form the prices 
    for(const selected of choice[selectedCategory] as string[]){ 
        const price = prices[selected];
        // console.log(`- ${selected} - price: ${price}`);
        amount += price;
    }
}

console.log(`TotalAmout = ${amount}`)

let  totalAmount= amount;  // giving value of amout to the total amount

let discountprice = 0; //variable for the discount price 

let payableamount = 0; // variable for the payable amount


// adding the condition for the discout offer
if(totalAmount >= 300){
    discountprice = totalAmount - 50;  // 
    payableamount = discountprice;
    console.log(`DiscountAmout: ${payableamount}`)
   
}
else{
    console.log("you have to buy more item for taking the discount")
    payableamount = totalAmount;
    console.log(`DiscountAmount: ${payableamount}`)
}

// decelear another varivale for the payment method

let paymentMethod =  await inquirer.prompt([
    {
        name: 'paymentmethod',
        type: 'list',
        choices: ['cash', 'use card'],
        message: 'Select the payment method'
    }
]);

if (paymentMethod === 'cash'){
    console.log("payment by cash");
    console.log(`Payable Amount = ${payableamount}`)
    

}
else{
    console.log("sorry card method is not availabel today You have to pay by cash");
    console.log(`Payable Amount = ${payableamount}`);
    

}


