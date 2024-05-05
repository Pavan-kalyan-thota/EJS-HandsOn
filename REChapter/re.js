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

console.log(/a(?=e)/.exec("banae"));
console.log(/a(?! )/.exec("a bn"));


let animalCount = /\d+ (pig|cow|chicken)s?/;

console.log(animalCount.exec("15 pigs"));
console.log(animalCount.exec("15 pugs"));


console.log("Liskov, Barbara\nMcCarthy, John\nMilner, Robin".replace(/(\p{L}+), (\p{L}+)/gu, "$2 $1"));


let stock = "1 lemon, 2 cabbage, and 101 eggs";

function minusOne(match, amount, unit){
    amount = Number(amount) - 1;
    if(amount === 1){
        unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0){
        amount = "no";
    }

    return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\p{L}+)/gu, minusOne));

function stripComments(code){
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

console.log(stripComments("1 + /* 2 */ 3"));
console.log(stripComments("1 /* a */+/* b */ 1"));


let userName = "harry";

let regExp = new RegExp("(^|\\s)" + userName + "($|\\s)", "gi");

console.log(regExp.exec("Harry is a dodgy character"));

userName = "dea+hL[]rd";
let escaped = userName.replace(/[\\[.+*?(){|^$]/g, "\\$&")
let regexp = new RegExp("(^|\\s)" + escaped + "($|\\s)", "gi");
let text = "This dea+hL[]rd is super annoying";

console.log(regexp.exec(text));

console.log("  word".search(/\S/));

let pattern = /y/g;
pattern.lastIndex = 3;
match = pattern.exec("xyzzzy");
console.log(match.index);
console.log(pattern.lastIndex);

let global = /abc/g;
console.log(global.exec("xyz abc"));

let sticky = /abc/y;
console.log(sticky.exec("xyz abc"));
console.log(sticky.exec("abc"));

console.log("Banana".match(/na/g));

let input = "A string with 3 numbers in it.. 42 and 88.";
let matches = input.matchAll(/\d+/g);
for (let match of matches){
    console.log(match[0], match.index);
}

function parseINI(string){
    let result = {};
    let section = result;
    for(let line of string.split(/\r?\n/)){
        let match;
        if(match = line.match(/^(\w+)=(.*)$/)){
            section[match[1]] = match[2];
        } else if (match = line.match(/^\[(.*)\]$/)){
            section = result[match[1]] = {}
        } else if(!/^\s*(;|$)/.test(line)){
            throw new Error("Line '" + line + "' is not valid.");
        }
    }
    
    return result;
}


console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));
// → {name: "Vasilis", address: {city: "Tessaloniki"}}
