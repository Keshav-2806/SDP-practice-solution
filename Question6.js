function jayAndBob(str) {
	let words = {
		'half': `${(28 / 2)} grams`,
		'quarter': `${(28 / 4)} grams`,
		'eighth': `${(28 / 8).toFixed(1)} grams`,
		'sixteenth': `${(28 / 16).toFixed(2)} grams`,
	}
	return words[str]
}