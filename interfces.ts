interface User{
    readonly _id: String,
    name: string,
    email: string,
    userId: number,
    startTrial: () => String,
    getCoupon(couponName: string): number
}

// here if the User is an extention we can add our specific type like this rather than directly editing the extention.
interface User{
    github: string
}

//also we can inherit like this
interface Admin extends User{
    role: 'admin' | 'staff' | 'learner'
}

const irshad: Admin = {_id:'342qwer', name: 'jfdsalkfj', email: 'dkfjalks', userId:678, role: 'admin',
    
    startTrial: () =>{
        return 'fkds'
    },

    getCoupon: (name:'fdsaf') =>{
        return 43
    },
    github:'github'

};



export {}