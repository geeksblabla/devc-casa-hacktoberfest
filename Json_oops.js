//another way by making a class
function fruit(taste,color){
    this.color=color;
    this.taste=taste;

}
//creating object using new keyword
let orange =new fruit("sour","orange");
let cucumber =new fruit("bitter","green");
let mango =new fruit("sweet","yellow");


//one way of creating objects 
var apple = {
    taste:"sweet",//take care here to use : instead of
    color:"red",
}

//Class Keyword introduce in  [ECMAScript 2015]
//Class Declaration(not hoisted)
class car{
    constructor(tyres,color){
        this.color=color;
        this.tyres=tyres;
    }
};
//Function -Declaration, Function Expression
let bmw = new car("3","red");


//Class Expression(not hoisted)
let car_by_expression= class{
    constructor(tyres,color){
        this.color=color;
        this.tyres=tyres;
    }

};
//Function -Declaration, Function Expression
let audi=new car_by_expression("4","white");
/*means if u move both the function above 
them then both declartion and expression 
will not work as  they are not hoisted
*/ 
class fruit_by_anothermethod{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
};
//Function -Declaration, Function Expression
let kiwi = new fruit_by_anothermethod("sweet","green");
