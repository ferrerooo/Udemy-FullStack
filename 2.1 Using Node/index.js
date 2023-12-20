console.log("Hello from Node!")

async function test() {
    function testAsync() {
        return new Promise(function(resolve1, reject) {
            setTimeout(function() {
                if (true) {
                    console.log('requesting...')
                    resolve1('resolve return')
                } else {
                    reject('reject return')
                }
            }, 1000)
        })
    }
    var result =  testAsync();
    var result1 = "testAsync后执行";
    console.log(result);
    console.log(result1);
}

test()

console.log("Ending...")
