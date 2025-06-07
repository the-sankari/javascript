//Task 1
// initializing two variables with random numbers
var number1 = Math.floor(Math.random() * 5) + 1; //random number generating
var number2 = Math.floor(Math.random() * 5) + 1;

function task1(number1, number2) {
    if (number2 > number1) {
        console.log(number2 + " is greater than " + number1);
    } else if (number1 > number2) {
        console.log(number2 + " is less than " + number1);
    } else if (number1 == number2) {
        console.log(number1 + " is equal to " + number2);
    }
}

task1(number1, number2);

//Task 2

function task2(min, max) {
    for (i = min; i <= max; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
    for (i = min; i <= max; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

task2(3, 7);

//Task 3

function task3(min, max) {
    var even = [];
    var odd = [];
    for (i = min; i <= max; i++) {
        if (i % 2 == 0) {
            even.push(i);
        }
    }
    for (i = min; i <= max; i++) {
        if (i % 2 != 0) {
            odd.push(i);
        }
    }
    odd.reverse(); // using array.prototype.reverse()
    var arrays = even.concat(odd);
    console.log(arrays);
}
task3(3, 7);

//Task 4

function task4(string) {
    const arrayValues = string.split("");
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join("");

    if (string == reverseString) {
        console.log("True");
    } else {
        console.log("False");
    }
}

const string = "racecar";

task4(string.toLowerCase());