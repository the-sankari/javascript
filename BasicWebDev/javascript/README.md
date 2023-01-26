Exercises done here according to these given tasks

Task 1 (comparison and randomness, max 2 XP)
Create function task1() that (pseudo)randomly draws two integer numbers between 1–5 (these
included, with about uniform distribution) and tells you (using console.log()) their mutual
order of magnitude as these three sample run outputs demonstrate:
1 is less than 3
3 is greater than 1
5 is equal to 5
To clarify: You should get two values in a predetermined order, in which you use them in the output
line, and select the comparing words based on them so that the claim presented by your output is
true.
N.B. The example lines are indeed outputs of three separate runs – one run should only result to one
line. Also, pay attention to spaces, using the same words as in the examples, correct characters, etc.
Task 2 (basic looping etc., max 2 XP)
Create function task2(min, max) that prints (with console.log(), one per line) first the
even numbers and then the odd numbers between min and max (these included). You can assume
that the min value is an integer not larger than max (also an integer value). Within the even numbers
part, the numbers are to be presented in order from the lowest to the highest. The same applies to
the part of the odd numbers. So, for instance, with min = 3 and max = 7, the output should be
4
6
3
5
7
Task 3 (arrays, max 2 XP)
Create function task3(min, max) that behaves otherwise just like task2(min, max), but
the order in which the odd numbers are reported should be reversed, and instead of printing each
number separately, print an array containing the resulting numbers in the correct order. So, for
instance, with min = 3 and max = 7, the output should look like
[ 4, 6, 7, 5, 3 ]
Task 4 (string manipulation, max 2 XP)
Create function task4(testString) so that it, when given a string as its parameter, tests, if
this string is a palindrome. I.e., the function should return true if and only if the string reads
similarly backwards and forwards (like, e.g., "racecar" or "step on no pets"). You can assume that
only characters belonging in the normal English alphabet (a–z, A–Z) and spaces are used in the
string. The capitalization should not matter; e.g., "REDder" should be accepted. If the parameter
string is not a palindrome, false should be returned. Depending on the applied definition of a
palindrome, sometimes spaces do not matter, but concerning this task, spaces are treated as normal
characters (so that, e.g., "taco cat" is not to be considered as a palindrome)