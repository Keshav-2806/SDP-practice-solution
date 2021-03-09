//Question link- https://edabit.com/challenge/5qYYauQwYwxz3nd9R
function freeShipping(order) {
    let x=Object.values(order);
    let c=0;
    for(let i of x){
        c=c+i;
    }
    if(c>50){
        return true
    }else{
        return false
    }
    
	
}
let order={ "Shampoo": 5.99, "Rubber Ducks": 15.99 };
console.log(freeShipping(order));
let order1={ "Flatscreen TV": 399.99 };
console.log(freeShipping(order1));
let order2={ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }
console.log(freeShipping(order2));