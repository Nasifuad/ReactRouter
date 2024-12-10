import { createContext } from "react";
export const Context = createContext(null);

let arr = [3, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2];

let k = 0;
let majorCount = 1;
let currentCount = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[k] == arr[i]) {
    majorCount++;
    if (i == arr.length - 1) {
      if (currentCount < majorCount) {
        currentCount = majorCount;
      }
      k += 1;
      i = 0;
    }
  }
}

console.log(currentCount);
