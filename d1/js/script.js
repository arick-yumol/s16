// While Loop
// let count = 300;
// while (count < 11) {
// 	console.log("count is " + count);
// 	count++; 
// }

// while (count <= 10) {
// 	console.log(count);
// 	count += 2; 
// }

// WHILE LOOP: all numbers between -10 and 19
// while ((count > -10) && (count < 19)) {
// 	console.log(count);
// 	count++;
// }

// while (count < 38) {
// 	count += 2;
// 	console.log(count);
// }

// while (count < 40) {	//only works if count is 10
// 	count++;
// 	if ((count%2) == 0) {
// 		console.log(count);
// 	}
// }

// WHILE LOOP: all odd numbers between 300 and 333
// let count = 300;
// while (count < 333) {
// 	if(count%2 == 1) {
// 		console.log(count);
// 	}
// 	count++;
// } 

// while (count < 333) {
// 	if(count%2 != 0) {
// 		console.log(count);
// 	}
// 	count++;
// }

// Do... While Loop
// The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// let i = 10;
// do {
// 	console.log(i);
// 	i++;
// }
// while (i < 10);

// DO WHILE LOOP: all numbers between -10 and 19
// let i = -9;
// do {
// 	console.log(i);
// 	i++;
// }
// while (i < 19);

// DO WHILE LOOP: all even numbers between 10 and 40
// let i = 10;
// do {
// 	i++;
// 	if ((i%2) == 0) {
// 		console.log(i);
// 	}
// }
// while (i < 38);

// DO WHILE LOOP: all add numbers between 300 and 333
// let i = 300;
// do {
// 	i++;
// 	if ((i%2) != 0) {
// 		console.log(i);
// 	}
// }
// while (i < 331);

// For Loop
// for (let count = 0; count < 6; count++) {
// 	console.log(count)
// }

// FOR LOOP: all numbers between -10 and 19
// for (let count = -9; count < 19; count++) {
// 	console.log(count);
// }

// FOR LOOP: all even numbers between 10 and 40
// for (let count = 12; count < 40; count++) {
// 	if ((count%2) == 0) {
// 		console.log(count);
// 	}
// }

// FOR LOOP: all odd numbers between 300 and 333
for (let count = 301; count < 333; count++) {
	if ((count%2) == 1) {
		console.log(count);
	}
}

