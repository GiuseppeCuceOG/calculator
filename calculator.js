let input_var = document.getElementById('input');
let result = document.getElementById('result');

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
			if(input_var.value.length < 1 || isNaN(input_var.value.slice(-1))) {
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
			if(input_var.value.length < 1 || isNaN(input_var.value.slice(-1))) {
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
	result.value = "";
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
	result.value = tot;
	input_var.value = "";
}