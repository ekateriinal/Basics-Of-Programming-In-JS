//Write a function, returning a sum of three numbers.

function sum(a,b,c) {
    return a+b+c
}
sum(1,2,3)// Prints 6

//My first JS loop

//For loop modified 
for (let i = 10; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log('This is even number ' + i);
    }
}

//For loop modified to function
function numbers(a,b) {
    for(let i = a; i <= b; i++){
        if (i % 2 == 0) {
            console.log('This is even number ' + i);
        }
    }
}

// While loop
var a = 10;
while (a <= 20) {
    console.log(a);
    a++
}

//Do while loop
let a = 10;
let b = 20;
do {
    console.log(a);
    a++;
} while(a <= b );

// My first JS array

let myNumbers = [1,2,3,4,5,6,7,8,9,10];//Created an array
myNumbers.pop(); //Removed last element
myNumbers.push(15); // Added element to the end 
myNumbers[1] = 3; //Changed value of second element
//Changed the value of every third child to one
for(i = 0; i < myNumbers.length; i++) {
    if (i % 3 == 0) {
        myNumbers[i] = 1;
    }
};

// My first algorithm
function myAlgorithm(a,b) {
    let x = 1;
    while(x >= b) {
        a *=a
        x++}
            return a
}

