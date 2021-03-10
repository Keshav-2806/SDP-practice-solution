//Question link- https://edabit.com/challenge/pLNavsePxJ87t9Nak
function calculateLosses(obj) {
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            let x=Object.values(obj);
            let c=0;
            for(let i of x){
                c=c+i;
            }
            return c;
        }
    }
    return "Lucky you!"

	
}
let obj={  tv: 30,
    skate: 20,
    stereo: 50,
  };
console.log(calculateLosses(obj));
let obj1={  painting: 20000,
};
console.log(calculateLosses(obj1));
let obj2={};
console.log(calculateLosses(obj2));