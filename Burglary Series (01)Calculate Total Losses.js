//Question link- https://edabit.com/challenge/pLNavsePxJ87t9Nak
function calculateLosses(obj) {
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            let c=0;
            let x=Object.values(obj);
            for(let j of x){
                c=c+j;
            }
            return c;
        }
    }
    return "lucky you";
	
}
let obj=  {tv: 30,
skate: 20,
stereo: 50
};
console.log(calculateLosses(obj));
let obj1={ painting: 20000,
};
console.log(calculateLosses(obj1));
let obj2={};
console.log(calculateLosses(obj2));
