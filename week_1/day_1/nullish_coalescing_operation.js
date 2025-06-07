// Nullish Coalescing Operator Example
"use strict";

const coalBtn = document.querySelector("#coal");
let user = null;
const coal1 = () => {
  let fName = null;
  let lName = null;
  let nickName = "dummy coder"
  alert(fName ?? lName ?? nickName);

}

coalBtn.addEventListener("click", coal1)

/*coalBtn.addEventListener("click", () => {
  user = "John Doe";
  alert(user ?? "Anonymous"); // "John Doe"
});
*/
