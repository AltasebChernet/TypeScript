// const div = document.querySelector('div');
// console.log(div.textContent);
// console.log(div.innerText);


class user{
    #id
    constructor(id){
        this.#id =id;
    }
    getId(){
        return this.#id;
        
    }
}
const u =  new user(1);
console.log(u.getId());
// console.log(u.#id); // Error: Private field '#id' must be declared in an enclosing class


function map(array, callback){
    const result = [];
    for(const element of array){
        result.push(callback(element))
    }
    return result;
}

const double = function(x){
    return x*2;
    
}

const numbers = [1,3,2,5,6,7,9];
const doubleNumbers =map(numbers, double);

// console.log(doubleNumbers);


const num = [1,2,3,4,5,6,7,8,9,10];
const doublenum = num.map(x=> x*3);
const evnum = doublenum.filter(y=> y%2 !== 0);
console.log(doublenum);
console.log(evnum);

