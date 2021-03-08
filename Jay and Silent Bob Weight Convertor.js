//Question link- https://edabit.com/challenge/6DJKnHKELiAnf6tF8

function jayAndBob(str) {

	if(str === "half") {
	  str = 14;
	}
	else if(str === "quarter") {
	  str = 7;
	}
	else if(str === "eighth") {
	  str = 3.5;
	}
	else if(str === "sixteenth") {
	  str = 1.75;
	}
	return str + " grams";
	}
	console.log(jayAndBob('half'));
	console.log(jayAndBob('quarter'));
	console.log(jayAndBob('eighth'));
	console.log(jayAndBob('sixteenth'));
	