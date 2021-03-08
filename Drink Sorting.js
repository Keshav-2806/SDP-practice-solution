//Question link- https://edabit.com/challenge/nuXdWHAoHv9y38sn7

/*	

function x(a,b){
    if(a>b){
        return 1;
    }else if(a==b){
        return 0;
    }else{
        return -1;
    }
}
let arr=[{name: "lemonade", price: 50},
{name: "lime", price: 10}];
arr.sort(x);
console.log(arr);
*/

function sortDrinkByPrice(drinks) {
    drinks.sort(function (a,b){
        return a.price - b.price;
    });
    return drinks;
 
}
let drinks=[{name: "lemonade", price: 50},
{name: "lime", price: 10}];
console.log(sortDrinkByPrice(drinks));
