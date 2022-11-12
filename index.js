function add(a, b){
    return a + b
}

console.log(add(20, 5));

function subtract(a, b){
    return a - b
}

console.log(subtract(20, 5));

function multiply(a, b){
    return a * b
}

console.log(multiply(20, 5));

function divide(a, b){
    return a/b
}

console.log(divide(20, 5));

function increment(n){
    n++
    return n
}

console.log(increment(20));

function decrement(n) {
    n--
    return n
}

console.log(decrement(20));

function makeInt(n){
    return parseInt(n, 10)
}

console.log(makeInt("10.5"));

function preserveDecimal(n){
    return parseFloat(n)
}

console.log(preserveDecimal("18.9546"));
