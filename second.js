// Currying questions.ex -  sum(1,2)(3)(4,5,6). Practise all variants of currying

/* Q. What is currying in JavaScript?
- Currying is a technique where a function that takes multiple arguments is broken down into a series of functions that each take a single argument. */

// simple curried function to add three numbers in JavaScript. ⬇️

const Add = (x) =>{
    return function1 = (y) =>{
        return function2 = (z) =>{
            return x+y+z;
        }
    }
}

console.log(Add(1)(2)(3))

/* Q. Why is currying useful?
- Currying is useful because it allows for partial application of functions. This means you can create a new function by fixing some arguments of the original function. It improves code reusability and modularity. */


// Write a curried version of the function that checks if a string starts with a given character. ⬇️

const startsWith = (char) =>{
    return (str) =>{
        return str.startsWith(char);
    }
}
const start = startsWith('A');

console.log(start('Apple'));
console.log(start("w"))


// Create a generic currying function that can transform any function into a curried version.

const curry = (fn) =>{
    return curried = (...args) =>{

        if(args.length >= fn.length){
            return fn(...args);
        }else{
            return (...nextArg) =>{
                return curried(...args ,...nextArg);
            }
        }
    }
}
const sum = (a,b,c) => { return a+b+c };

const curriedSum = curry(sum);
console.log(curriedSum(1)(12)(5));



// Advanced Curry Implementation 

const Curry = (fn) =>{
    return function curried (...args){
        if(args.length >= fn.length){
            return fn.apply( this, args );
        }else{
            return function (...nextArgs){
                return curried.apply(this, args.concat(nextArgs))
            }
        }
    }
}

const Addition = (...args) =>{
    return args.reduce( (acc, curr) => {  acc + curr , 0 } );
}

const curriedsum= Curry(Addition);

console.log(curriedSum(11)(2)(3)(4)); 
console.log(curriedsum(1)(2)(3)(4) );


// Apply method ⬇️
