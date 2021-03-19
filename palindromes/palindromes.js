const palindromes = function(palindrome) {
	const cleanedStr = palindrome.replace(/[^a-zA-Z]/g, '').toLowerCase();
	const revStr = cleanedStr.split("").reverse().join("");
	if (cleanedStr == revStr) {
		return true;
	}
	return false;
}

module.exports = palindromes
