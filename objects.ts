
const user = {
    name: "irsahd",
    age: 23,
    isActive: true
}
function createUser({user:string, age:number, isActive:boolean}){}


function getDetails({fName: string, age:number}):{}{
    return {fName:'fdlkf', age:18}
}


function createAnotherUser({name:string,num:number}):{}{
    return {}
}
// createAnotherUser({name:'irsahd', num:456789, email:'fdsfas@gmail.com'});
let anotherUser = {name:'irshad', num:6789876, email:'fdsf@gmail.com'};
createAnotherUser(anotherUser);



// type aliases=====================> to define types in better way in functions

type User = {
    name: string
    email: string
    isPaid: boolean
}

function createDiffrentUser(user:User):User{
    return {name: '', email:'', isPaid:true}
}
createDiffrentUser({name:'', email:'', isPaid:true});


type User2 = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    cardDetials?: string
}

let myUser: User2 = {
    _id:'rqwr1243rewr32',
    name: 'irshad',
    email: 'fsdl@gmail.com',
    isActive: true
}

myUser.email = '@gmail.com';
// myUser._id = 'dsafs'            cannot do this

type cardNumber = {
    cardNumber: number
}

type cardDate = {
    cardDate: string
}

type cardDetials = cardNumber & cardDate & {
    cvv: number
}



export {};