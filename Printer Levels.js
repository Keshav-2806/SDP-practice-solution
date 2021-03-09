//Question link- https://edabit.com/challenge/QXWM2oo7rQNiyDsip
function inkLevels(inks) {
    let x=Object.values(inks);
    x.sort(function(a,b){
        return a-b
    })
    return x[0];
    
	
}
let inks={  "cyan": 23,
"magenta": 12,
"yellow": 10
};
console.log(inkLevels(inks));
let inks2={ "cyan": 432,
"magenta": 543,
"yellow": 777
};
console.log(inkLevels(inks2));
let inks3={"cyan": 700,
"magenta": 700,
"yellow": 0
};
console.log(inkLevels(inks3));
