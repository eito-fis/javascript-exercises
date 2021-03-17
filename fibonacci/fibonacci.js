const fibonacci = function(idx) {
	if (typeof idx === String) {
		idx = parseInt(idx);
	}
	if (idx < 0) {
		return "OOPS";
	}

	if (idx == 0 || idx == 1) {
		return 1;
	}
	let [first, second] = [1, 1];
	for (let i = 2; i < idx; i++) {
		[first, second] = [second, first + second]
	}
	return second
}

module.exports = fibonacci
