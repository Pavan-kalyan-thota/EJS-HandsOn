import { dayName } from "./dayName.js";
const { formatDate } =  require("./format-date.js");

let now = new Date();
console.log(`Today is ${dayName(now.getDay())}`);

console.log(formatDate(now, "dddd the Do"));