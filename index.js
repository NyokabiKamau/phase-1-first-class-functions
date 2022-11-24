function receivesAFunction(spy) {
    spy()
}

function returnsANamedFunction() {
    function namedFunc() {
        const msg = "Hi"
        return msg
    }
    return namedFunc
}
//console.log(returnsANamedFunction()())

function returnsAnAnonymousFunction() {
    return (greeting) => "Hello there"
}
//console.log(returnsAnAnonymousFunction()())