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