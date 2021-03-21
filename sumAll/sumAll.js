const sumAll = function(a, b) {
	if (typeof(a) != "number" || typeof(b) != "number") {
		return "ERROR";
	}
	if (a < 0 || b < 0) {
		return "ERROR";
	}

	let [min, max] = [null, null];
	if (a > b) {
		[min, max] = [b, a];
	} else {
		[min, max] = [a, b];
	}

	let sum = 0;
	for (let i = min; i <= max; i++) {
		sum += i;
	}
	return sum;
}

module.exports = sumAll
