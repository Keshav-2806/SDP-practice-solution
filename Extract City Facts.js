//Question link - https://edabit.com/challenge/FzDAgSR84zeyRa278
function cityFacts(city) {
	return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`
}
let x={name:"Paris",population:"2,140,526",continent:"Europe"};
let x1={name:"Tokyo",population:"13,929,286",continent:"Asia"};
console.log(cityFacts(x));
console.log(cityFacts(x1));