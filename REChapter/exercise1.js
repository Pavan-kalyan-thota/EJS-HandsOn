re1 = /ca(r|t)/;
re2 = /pr?op/;
re3 = /^ferr(et|y|ari)$/;
re4 = /.*ious(\s|$)/;
re5 = /\s[.,:;]/;
re6 = /^\w{6,}$/;
re7 = /(^|\P{L})[^\P{L}e]+($|\P{L})/ui


// Fill in the regular expressions

verify(re1,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(re2,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(re3,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(re4,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(re5,
       ["bad punctuation ."],
       ["escape the period"]);

verify(re6,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

verify(re7,
       ["red platypus", "wobbling nest"],
       ["earth bed", "bedrøvet abe", "BEET"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}