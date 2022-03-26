function callback(){
    return "Does this work?";
}

function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    let thisIsAFunction = function() {
        return "Hello"
    }
    return thisIsAFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        return "Does this work?";
    }
}