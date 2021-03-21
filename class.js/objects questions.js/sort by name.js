var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  let x=items.sort(function(a,b){
      return a.value-b.value;
  });
console.log(x);
let y=items.sort(function(a,b){
    let name1=a.name.toUpperCase();
    let name2=b.name.toUpperCase();
    if(name1<name2){
        return -1;
    }
    if(name1>name2){
        return 1;
    }
    return 0;
});
console.log(y);