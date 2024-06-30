let score: number | string;
score = 324;
score = 'rerwfds';


type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let irshad: User | Admin = {name:'fdsf', id:3424};
let someName: User | Admin = {username:'fdjslf', id:2344}



getId('243dfsasda');
getId(3424);

function getId(id: string | number){
    if(typeof id === 'string'){
        id.toUpperCase();
    }
}



const unionArr: (number | string | boolean)[] = [32,21,'gfdg','fdsaf',false, true];



let seatAllotment: 'aisle' | 'middle' | 'middle';
seatAllotment = "aisle";

export {}