function getRange(charCode) {
	if (charCode >= 48 && charCode <= 90) {
		return [65, 90];
	} else if (charCode >= 97 && charCode <= 122) {
		return [97, 122];
	} else {
		return [null, null];
	}
}

function shiftChar(c, shift) {
	let charCode = c.charCodeAt(0);
	let [botRange, topRange] = getRange(charCode);
	if (botRange && topRange) {
		shift = shift % 26;
		if (shift + charCode > topRange) {
			charCode = botRange + (shift + charCode - topRange) - 1; 
		} else if (shift + charCode < botRange) {
			charCode = topRange + (shift + charCode - botRange) + 1;
		} else {
			charCode += shift;
		}
		return String.fromCharCode(charCode);
	} else {
		return c;
	}
}

const caesar = function(shiftStr, shift) {
	return [...shiftStr].map(c => shiftChar(c, shift)).join("");
}

module.exports = caesar
