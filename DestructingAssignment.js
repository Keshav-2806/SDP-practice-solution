/*Question link- https://edabit.com/challenge/4KL8sW5Gi63ei3fjp
  arr = [1, 2, 3, 4, 5, 6, 7, 8]
first = arr[0]
second = arr[1]
third = arr[2]
other = arr.slice(3)

console.log(first) ➞ outputs 1
console.log(second) ➞ outputs 2
console.log(third) ➞ outputs 3
console.log(other) ➞ outputs [4, 5, 6, 7, 8]*/
let arr=[];
arr[0]=1;
arr[1]=2;
arr[2]=3;
arr[3]=9;
arr[4]=5;
arr[5]=6;
arr[6]=7;
arr[7]=8;
let [first,second,third,...other]=arr;
console.log(first);
console.log(second);
console.log(third);
console.log(other);
