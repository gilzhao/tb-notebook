const array = new Array(10);
let count = 10;
function insert(val) {
  if (count == array.length) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i]
    }
    array[0] = sum;
    count = 1;
  }

  array[count] = val
  count++;
}


function find(array, x) {
  let i = 0;
  let pos = -1;
  for (; i < array.length; i++) {
    if (array[i] == x) {
      pos = i;
      break
    }
  }
  return pos;
}

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


console.log(find([1,3,4,5,6]),5)
