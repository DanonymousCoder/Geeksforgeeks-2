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

	function colour() {
	
		setInterval(function() {
	
			if (document.getElementById('var').style.color == 'black')
				var col1 = 'blue';
			else
				col1 = 'black';
	
			// setting value of color 1 through var
			if (document.getElementById('let').style.color == 'black') {
				let col2 = 'red';
			} else {
				col2 = 'black';
			}
	
			// setting value of color 2 through let
			document.getElementById('var').style.color = col1;
	
			document.getElementById('let').style.color = col2;
	
			// changing color of h1 in html
		}, 500);
	
	}

	let petName = 'Rocky' // Global variable
	myFunction()
	
	function myFunction() {
		fruit = 'apple'; // Considered global
		console.log(typeof petName +
			'- ' +
			'My pet name is ' +
			petName)
	}
	
	console.log(
		typeof petName +
		'- ' +
		'My pet name is ' +
		petName +
		'Fruit name is ' +
		fruit)
		function fun(){
			let num=10;
			console.log(num);
		}
		fun(); // calling the function
		console.log(num);
	let r = 2;
	 {
		let r = 4;

	}