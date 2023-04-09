function receivesAFunction(callback) {
    return  callback();
}

function returnsANamedFunction() {
    return function Matt(){
        return 'Hello, Matt!'
    }
}

function returnsAnAnonymousFunction() {
    return function (){
        return 'Hello, world!'
    }
}
