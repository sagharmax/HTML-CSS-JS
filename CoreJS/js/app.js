var a = 4;
function testing() {
    var a = 5;
    console.log(`Inside testing(): ${a}`);
}
testing();
console.log(`global: ${a}`);


var b = 4;
if (true) {
    var b = 5
}
console.log(b);


let c = 4;
if (true) {
    let c = 5
}
console.log(c);


const d = 4;
if (true) {
    const d = 5
}
console.log(d);