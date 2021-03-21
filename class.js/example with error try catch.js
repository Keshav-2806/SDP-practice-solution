try{
    console.log("Start of try runs");
    lalala;
    console.log("End of try (never reached");
} catch(err){
    console.log("Error has occurred");
}

//try catch dont work here

try{
    {{{{{{{{{
} catch (err){
    console.log("the engine cant understand this")
}