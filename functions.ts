function addTwo(num:number){
    return num + 2;
}
addTwo(10);


function signup(name: string, email: string, mobile: number){
    console.log(name, email, mobile);
}
signup('irshad', 'fdslf@', 1234324);


const login = (email: string, isLogged: boolean = false) => {}
login('@kdsjfas',)


function getUpperCase(name:string):string{
    return name.toUpperCase()
    // return 1000;
}
let name = getUpperCase('irshad');


const getHello = (str:string):string =>{
    return "hello";
}


// const names = ["irshad", "shahal", "razik"];
const names = [1, 2, 3]

names.map((name):string=>{
    return  `Name is ${name}`;
})


function consoleError(errMsg: string):void{
    console.log(errMsg);
}


function handleError(errMsg: string):never{
    throw new Error(errMsg);
    
}

export {};