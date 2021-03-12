//Question link- https://edabit.com/challenge/yXSTvCNen2DQHyrh6
function getLength(arr) {
    let x=arr.flat(Infinity);
    let y=x.length;
    return y;
	
}
console.log(getLength([1, [2, 3]]) );
console.log(getLength([1, [2, [3, 4]]]) );
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
console.log(getLength([1, [2], 1, [2], 1]));