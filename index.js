function myf() {
    //Declaring a variable
    let x, y;
    x = 2;
    y = 4;

    //Perform an operation of modulo
    const naModulo = y % x ;
    window.alert(naModulo);
}

/* This is a multi-line comment.
     It will not be displayed 
*/
window.prompt('Multi-line comment');

// Declaring single variable
var name;

// Declaring multiple variables
var name, title, num;

// Initializing variables
var name = "Harsh";
name = "Rakesh";
alert(name);

// Creating variable to store a number
var num = 5;

// Store string in the variable num
num = "GeeksforGeeks";

// calling x after definition
var x = 5;
document.write(x, "\n");
 
// calling y after definition
let y = 10;
document.write(y, "\n");
 
// calling var z before definition will return undefined
document.write(z, "\n");
var z = 2;
 
// calling let a before definition will give error
document.write(a);
let a = 3;