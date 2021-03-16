const repeatString = function(baseStr, repeat) {
	if (repeat < 0) {
		return "ERROR"
	}
	let returnStr = "";
	for (let i = 0; i < repeat; i++) {
		returnStr += baseStr;
	}
	return returnStr
}

module.exports = repeatString
