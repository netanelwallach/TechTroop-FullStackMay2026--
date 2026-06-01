let a = 3;
let c = 0;
let b = a;
b = a;
c = a;
b = c;
a = b;

// my guess all will be 3

console.log(a);
console.log(b);
console.log(c);
