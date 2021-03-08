// Question Link - https://edabit.com/challenge/654ABGmNS5GqscE8C
function getVoteCount(votes) {
	return votes.upvotes-votes.downvotes;
}

let vote={upvotes:13,downvotes:0};
let vote1={upvotes:2,downvotes:33}
let vote2={upvotes:132,downvotes:132}
console.log(getVoteCount(vote));
console.log(getVoteCount(vote1));
console.log(getVoteCount(vote2));