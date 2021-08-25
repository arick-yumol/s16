function createLoop (num1, num2) {
	if (num1 < num2) {
		for (num1; num1 <= num2; num2--) {
			console.log(num2);
		}
	}
	else if (num1 == num2) {
		console.log("The numbers are the same.");
	}
	else {
		console.log("Please make sure the 1st number is lower than the 2nd.")
	}
}

// function createLoop (num1, num2) {
// 	if (num1 == num2) {
// 		console.log("The numbers are the same.");
// 	}
// 	else if (num1 > num2) {
// 		console.log("Please make sure the 1st number is lower than the 2nd.")
// 	}
// 	else {
// 		while (num2 >= num1) {
// 			console.log(num2);
// 			num2--;
// 		}
// 	}
// }

// function createLoop (num1, num2) {
// 	if (num1 < num2) {
// 		do {
// 			console.log(num2);
// 			num2--;
// 		}
// 		while (num1 <= num2);
// 	}
// 	else if (num1 == num2) {
// 		console.log("The numbers are the same.");
// 	}
// 	else {
// 		console.log("Please make sure the 1st number is lower than the 2nd.")
// 	}
// }