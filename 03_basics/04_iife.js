// Immediately Invoked Funtion Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
}) ();

// IIFE - function immediately execute ho jaye or global scope ke pollution se problem hoti  h kai bar toh us global solution ke jo variable h use hatane ke liye hmne iife ka use kiya h 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('harpreet')