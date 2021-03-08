//Question link- https://edabit.com/challenge/Ac8GiJBAzEJYmcqyF

function relationToLuke(name) {
	if(name === "Darth Vader"){
		return "Luke, I am your father.";
	} else if(name === "Leia"){
		return "Luke, I am your sister.";
	} else if(name === "Han"){
		return "Luke, I am your brother in law.";
	} else if(name === "R2D2"){
		return "Luke, I am your droid.";
	}
}
console.log(relationToLuke("Darth Vader"));
console.log(relationToLuke("Leia"));
console.log(relationToLuke("Han"));
console.log(relationToLuke("R2D2"));