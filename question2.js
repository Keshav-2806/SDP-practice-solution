function getVote(votes){
    return votes={
        upvotes:upvotes,
        downvotes:downvotes
    }
}
let user= getVote(13,0);
let user1=getVote(2,33);
console.log(user.upvotes-user.downvotes);
console.log(user1.upvotes-user1.downvotes);