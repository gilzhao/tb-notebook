function cal2(n) {
	let sum = 0;
	let i = 1;
	let j = 1;
	for (; i <= n; i++) {
		j = 1;
		for (; j <= n; j++) {
      sum += i * j;
		}
  }
  return sum;
}

function cal(n) {
	let sum = 0;
	let i = 1;
	for (; i <= n; i++) {
		sum += i;
	}
	return sum;
}


console.log(cal2(2))
