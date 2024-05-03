let aPlus = /A\+/;

console.log(/abc/.test("abcde")); //true
console.log(/abc/.test("ab")); //false
console.log(/[0-9]/.test("kjwrbrbvl23")); //true

console.log(/\d\d-\d\d-\d\d\d\d \d\d:\d\d/.test("Mar-01-2000 02:00")); //true

console.log(/[^01]/.test("01010001001110101")); //false
console.log(/[^01]/.test("0100111001001200110"));  //true

console.log(/\p{L}/u.test("à"));

console.log(/\d+/.test("'123'"));
console.log(/\d+/.test("''"));

console.log(/\d*/.test("'123'"));
console.log(/\d*/.test("''"));

let neighbor = /neighbou?r/;

console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/
console.log(dateTime.test("1-03-2000 2:00"));

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));

let match = /\d+/.exec("One Two 100");
console.log(match);

console.log("one two 100".match(/\d+/));

let quotedText = /'([^']*)'/
console.log(quotedText.exec("She Said 'hello'"));

console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));
console.log(/ba(?:na)+/.exec("banana"));

