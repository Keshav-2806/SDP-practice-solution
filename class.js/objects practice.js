function x(inks){
    let y =Object.values(inks);
   let z= y.sort(function(a,b){
        return a-b;
    })
    return z[0];

}
let inks={
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
  };
console.log(x(inks));
let inks1={
    "cyan": 678,
    "magenta": 543,
    "yellow": 777
  };
  console.log(x(inks1));
  let inks2={
    "cyan": 700,
    "magenta": 700,
    "yellow": 0
  };
  console.log(x(inks2));
