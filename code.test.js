const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function eTest(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}

assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);

for(let i = 1; i < 1000; i*=2){
    assert(e(i) === eTest(i))
}