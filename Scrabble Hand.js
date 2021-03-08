//Question link- https://edabit.com/challenge/i6YqzHcSiPiEQKjeX
/*
maximumScore([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]) ➞ 28*/
function maximumScore(tileHand) {
    let initialValue=0;
    let x=tileHand.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.score
    }, initialValue)
    return x;
}
let tileHand=[
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ]
  console.log(maximumScore(tileHand));
  let tileHand1=[
    { tile: "B", score: 2 },
    { tile: "V", score: 4 },
    { tile: "F", score: 4 },
    { tile: "U", score: 1 },
    { tile: "D", score: 2 },
    { tile: "O", score: 1 },
    { tile: "U", score: 1 }
  ]
  console.log(maximumScore(tileHand1));
