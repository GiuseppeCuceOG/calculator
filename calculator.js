let input_var = document.getElementById('userInput');
let clearBtn = document.getElementById('clearScreen');
let back = document.getElementById('back');
let computation = document.getElementById('compute');
let division = document.getElementById('division');
let multiply = document.getElementById('multiply');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let plusMinus = document.getElementById('plusMinus');
let dot = document.getElementById('dot');

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');

const getInt = (num) => {
	
	switch(num) {
		case 1:
			input_var.value += '1';
			break;
		case 2:
			input_var.value += '2';
			break;
		case 3:
			input_var.value += '3';
			break;
		case 4:
			input_var.value += '4';
			break;
		case 5:
			input_var.value += '5';
			break;
		case 6:
			input_var.value += '6';
			break;
		case 7:
			input_var.value += '7';
			break;
		case 8:
			input_var.value += '8';
			break;
		case 9:
			input_var.value += '9';
			break;
		case 0:
			input_var.value += '0';
			break;
	}
}

const getOperand = (op) => {

	switch(op) {
		case '+':
			if(isNaN(input_var.value.slice(-1))) {
				backspace();
				input_var.value += '+';
			}
			else if(input_var.value.length == 0) {
				input_var.value += '';
			}
			else if(!isNaN(input_var.value.slice(-1))) {
				input_var.value += '+';
			}
			break;

		case '-':
			if(isNaN(input_var.value.slice(-1))) {
				backspace();
				input_var.value += '-';
			}
			else if(input_var.value.length == 0) {
				input_var.value += '';
			}
			else if(!isNaN(input_var.value.slice(-1))) {
				input_var.value += '-';
			}
			break;

		case '*':
			if((input_var.value.length == 1 && isNaN(input_var.value.slice(-1))) || input_var.value.length == 0) {
				input_var.value += '';
			}
			else if(isNaN(input_var.value.slice(-1))) {
				backspace();
				input_var.value += '*';
			}
			else if(!isNaN(input_var.value.slice(-1))) {
				input_var.value += '*';
			}
			break;

		case '/':
			if((input_var.value.length == 1 && isNaN(input_var.value.slice(-1))) || input_var.value.length == 0) {
				input_var.value += '';
			}
			else if(isNaN(input_var.value.slice(-1))) {
				backspace();
				input_var.value += '/';
			}
			else if(!isNaN(input_var.value.slice(-1))) {
				input_var.value += '/';
			}
			break;

		case '+/-':
			if(input_var.value.length == 0) {
				input_var.value += '-';
			}
			else if(input_var.value.length == 1 && input_var.value.slice(-1) == '-') {
				backspace()
				input_var.value += '+';
			}
			else if(input_var.value.length == 1 && input_var.value.slice(-1) == '+') {
				backspace()
				input_var.value += '-';
			}
			break;

		case '.':
			if(!isNaN(input_var.value.slice(-1))) {
				input_var.value += '.';
			}
			else {
				input_var.value += '';
			}
			break;
	}
}

const clearScreen = () => {
	input_var.value = "";
}

const backspace = () => {
	var x = input_var.value;
	if(x.length > 0) {
		x = x.substring(0, x.length-1);
		input_var.value = x;
	}
}

const compute = () => {
	var tot = eval(input_var.value);
	input_var.value = tot;
}

clearBtn.addEventListener("click", clearScreen);
back.addEventListener("click", backspace);
computation.addEventListener("click", compute);
division.addEventListener("click", () => getOperand('/'));
multiply.addEventListener("click", () => getOperand('*'));
plus.addEventListener("click", () => getOperand('+'));
minus.addEventListener("click", () => getOperand('-'));
plusMinus.addEventListener("click", () => getOperand('+/-'));
dot.addEventListener("click", () => getOperand('.'));
one.addEventListener("click", () => getInt(1));
two.addEventListener("click", () => getInt(2));
three.addEventListener("click", () => getInt(3));
four.addEventListener("click", () => getInt(4));
five.addEventListener("click", () => getInt(5));
six.addEventListener("click", () => getInt(6));
seven.addEventListener("click", () => getInt(7));
eight.addEventListener("click", () => getInt(8));
nine.addEventListener("click", () => getInt(9));
zero.addEventListener("click", () => getInt(0));