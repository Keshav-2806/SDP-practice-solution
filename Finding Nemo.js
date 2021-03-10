//Question link- https://edabit.com/challenge/c23dFfNiKbnguSQtq
function findNemo(sentence) {
    let x=sentence.split(" ")
    for(let i=0;i<x.length;i++){
        if(x[i]=="Nemo"){
            let y=i+1
            return  "I found Nemo at "+ y +"!";
        }
    }
    return x;

	
}
let sentence="I am finding Nemo !";
console.log(findNemo(sentence));
let sentence1="Nemo is me";
console.log(findNemo(sentence1));
let sentence2="I Nemo am";
console.log(findNemo(sentence2));

