var params = process.argv.slice(2);
var nums = params.map(Number);
var sum = nums.reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum);