let a = "This only works if and only if";
let b = a.slice(a.indexOf("only"));
console.log("b ---->  ", b);
let c = b.lastIndexOf("only");
console.log("c ---->  ", c);
b[c] = "i";
console.log(a);
console.log(b);
