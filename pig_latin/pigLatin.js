function translateWord(word) {
	let vowelIdx = word.search(/[aeiou]/i)
	if (vowelIdx == -1) {
		return "ERROR";
	}

	if (vowelIdx == 0) {
		return word + "ay";
	}
	
	// Handle "qu" special case
	if (word[vowelIdx] == "u" && word[vowelIdx - 1] == "q") {
		vowelIdx += 1;
	}
	
	const prefix = word.slice(0, vowelIdx);
	const suffix = word.slice(vowelIdx);
	return suffix + prefix + "ay"
}

function translate(input) {
	const words = input.split(" ");
	const translated = words.map(w => translateWord(w))	;
	return translated.join(" ");
}


module.exports = {
	translate
}

