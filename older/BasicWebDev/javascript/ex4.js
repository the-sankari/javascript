
// Task 5
function task5(a, b, p) {
    let result = a / b;
    return result.toFixed(p);
  };
  console.log(task5(19, 5, 2));
  // prints upto 2 decimal 3.80
//   console.log(task5(19, 5, 4));
  // prints upto 4 decimals 3.8000


// Task 6

function getEncryptor(alphabet, shift1, shift2, shift2freq) {
    const shiftAlphabet = (shift, str) => {
      return str
        .split("")
        .map((char) => {
          let index = str.indexOf(char);
          index = (index + shift + str.length) % str.length;
          return str[index];
        })
        .join("");
    };
  
    const alpha1 = shiftAlphabet(shift1, alphabet);
    const alpha2 = shiftAlphabet(shift2, alphabet);
  
    return function (message) {
      let result = "";
      for (let i = 0; i < message.length; i++) {
        let char = message[i];
        let index = alphabet.indexOf(char);
        result += (i + 1) % shift2freq === 0 ? alpha2[index] : alpha1[index];
      }
      return result;
    };
  }
  const abc = '0123456789abcdefghijklmnopqrstuvwxyz ';
  const encode = getEncryptor(abc, -1 , 4);

  console.log(encode('javascript'));
