/**
 * Task-1
 */

// initializing two variables with random numbers
var number1 = Math.floor(Math.random() * 5) + 1; //random number generating
var number2 = Math.floor(Math.random() * 5) + 1;

// task1 functions for comparison 
function task1(number1, number2) {
  if (number2 > number1) {
    console.log(number2 + " is greater than " + number1);
  }
 else if (number1 > number2) {
    console.log(number2 + " is less than " + number1);
  }else if(number1 == number2) {
    console.log(number1 + " is equal to " + number2);
  }
};

// function call
task1(number1, number2);

/**
 * Task-2
 */

function task2(min, max)
{
    for (i = min; i<=max;i++)
    {
        if (i%2 ==0)
        {
            console.log(i);
        }
    }
    for (i = min; i<=max;i++)
    {
        if (i%2 !=0)
        {
            console.log(i);
        }
    }

}

task2(3,7);


/**
 * Task-3
 */

function task3(min, max)
{
    var even=[];
    var odd = [];
    for (i = min; i<=max;i++)
    {
        if (i%2 ==0)
        {
            even.push (i);
        }
    }
    for (i = min; i<=max;i++)
    {
        if (i%2 !=0)
        {
            odd.push(i);
        }
    }
    odd.reverse();  // using array.prototype.reverse()
    var arrays = even.concat(odd);
    console.log(arrays);
}
task3(3,7);


/**
 * Task-4
 */

function task4(string) {

  // convert string to an array
  const arrayValues = string.split('');

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join('');

  if(string == reverseString) {
      console.log('True');
  }
  else {
      console.log('False');
  }
}

//take input
const string = 'RaceCar';

task4(string.toLowerCase());
