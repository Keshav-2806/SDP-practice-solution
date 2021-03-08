//Question link- https://edabit.com/challenge/48EJWLhF224na8po3
/*

Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter
*/

function generation(x, y) {
    if(x==-3 && y=='m'){
        return  ("great grandfather");
    }else if(x==-3 && y=='f'){
        return ("great grandmother");
    }else if(x==-2 && y=='m'){
        return ("grandfather")
    }else if(x==-2 && y=='f'){
        return ("grandmother");
    }else if(x==-1 && y=='m'){
        return ("father");
    }else if(x==-1 && y=='f'){
        return ("mother");
    }else if(x==0 && y=='m' && y=='f'){
        return ("me");
    }else if(x==1 && y=='m'){
        return ("son");
    }else if(x==1 && y=='f'){
        return ("daughter");
    }else if(x==2 && y=='m'){
        return ("grandson");
    }else if(x==2 && y=='f'){
        return ("granddaughter");
    }else if(x==3 & y=='m'){
        return ("great grandson");
    }else{
        return ("great granddaughter");
    }
	
}
console.log(generation(2,'f'));
console.log(generation(-3,'m'));
console.log(generation(1,'f'));