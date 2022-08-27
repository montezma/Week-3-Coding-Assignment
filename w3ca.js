/* QUESTION 1 Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    (A) Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
    (B) Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
    (C) Use a loop to iterate through the array and calculate the average age. Print the result to the console. */

//(A)
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
        val = ages.shift() - ages.pop();
console.log(" Subtracted = " + val);

//(B) added (46)

ages.push(46);
val = ages.shift() - ages.pop();
console.log(" Subtracted = " + val);

//(C)
var total = 0;
for(i = 0; i < ages.length; i++) {
    total += ages[i];
}
var average = total / ages.length;
console.log(average)

/*Question 2 Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
    (A)Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
    (B)Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
*/

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let nameL = 0;


// (A)
for ( i = 0 ; i < names.length; i++){
    nameL += names[i].length;
}
console.log((nameL / names.length).toFixed(2));

// (B)
let allNames = " "
for (i in names) {
    allNames += names[i] + " ";
}console.log(allNames);


//Question 3 How do you access the last element of any array?
console.log( "use arr.pop() to remove and use the last element of the array. Or use [array.length-1] to simply select it." )
// Question 4 How do you access the first element of any array?
console.log( "Use arr.shift() to remove and use the first element of the array. Or use array[0] to select it." )
/*Question 5 Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array */
let nameLengths = []

for ( let i = 0; i < names.length; i++ ) {
    nameLengths.push( names[i].length );
} console.log( nameLengths )

//Question 6 Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let sum = 0;
for ( let i = 0; i < nameLengths.length; i++ ){
    sum += nameLengths[i];
}console.log(sum)

// Question 7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
stringTimes( "Hello", 5 );
function stringTimes ( word, n ) {
    let repeatedtext = "" ;
while ( n > 0 ) {
    repeatedtext += word ; n--;
}
console.log( repeatedtext );
}

//Question 8 Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullname ( firstName, lastName ){
    console.log( firstName + " " + lastName );
}
fullname( "Noah","Montez" )

// Question 9 Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let num = [ 99, 10, 42 ]
    sum100( num );
function sum100( number ) {
    let sumNumber = 0; 
    for ( let i = 0; i < number.length; i++ ) {
        sumNumber += number[i];
    }
    if( sumNumber > 100 ) {
        
        console.log(true);
    }
    
    else {console.log(false);}
}


// Question 10 Write a function that takes an array of numbers and returns the average of all the elements in the array.

let numToBeAvg = [1, 22, 42, 92, 15, 10, 33];

function avgNumber( number ){
    totalNum = 0;

    for( let i = 0; i < number.length; i++ ) {
        totalNum += number[i]; 
    } console.log(( totalNum / number.length ).toFixed(2))
} avgNumber( numToBeAvg )


// Question 11 Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let firstSet = [5, 30, 22, 99]
let secondSet = [1, 28, 3, 78]

function avgArrays( first, second )  {
    let one = 0;

    let two = 0; 

    for ( let i = 0; i < firstSet.length;i++ ) {
        one += firstSet[i]; 
    }
    for ( let a = 0; a < secondSet.length;a++ ){
        two += secondSet[a]; 
    }
    if(( one / firstSet.length ) > ( two / secondSet.length )){
        console.log( true );
    }
    else {console.log(false);}
}

avgArrays( firstSet, secondSet );


//Question 12 Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true;
let moneyInPocket = 10.15;

function willBUyDrink( boole, money ){
    if( boole=true && money > 10.50 ){
        console.log(true);
    }
    else {console.log(false); 
    }
}
willBUyDrink( isHotOutside, moneyInPocket );


//Question 13 Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//A group of people want sodas on a hot day. One person is going to purchase one soda for each person.

let numberOfPeople = 7;
let perPerson = 1;
let costPerCan = 1.27;

function costForSoda ( numOfPeople, canPerPerson, costPerCan ){
    let sodaCans = ( numOfPeople * canPerPerson ); 
    let totalCost = sodaCans * costPerCan; 
    console.log("You have " + numOfPeople + " people, it will cost you $" + totalCost + " for a can of soda for each person." ); 
}

costForSoda(numberOfPeople,perPerson,costPerCan); 