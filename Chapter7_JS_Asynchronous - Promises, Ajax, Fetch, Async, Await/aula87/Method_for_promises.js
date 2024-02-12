function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.rand() * (max - min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(new Error('Bad Value'))
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passed the promised');
            return;
        }, time)
    })
}

//Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    wait('Promise 1', 3000),
    wait('Promise 2', 500),
    wait('Promise 3', 1000),
    //wait(1000, 1000),
    'Other Value'
]

Promise.all(promises) // executes all resolved promise
    .then(value => {
        console.log(value)
    })
    .catch(e => {
        console.log(e)
    })

/*
Output: [
'PROMISE 1 - Passed the promised',
'PROMISE 2 - Passed the promised',
'PROMISE 3 - Passed the promised',
'Other Value'
]
*/

Promise.race(promises) // executes the first resolved promise, if it catches an error it will display the error
    .then(value => {
        console.log(value); // Other Value
    })
    .catch(err => {
        console.log(err);
    })

function test(){
    const test = 'I want this function to be called as a resolved promise'
    return test
}

function downloadPage() {
    const isCached = true;

    if (isCached) {
        return Promise.resolve(test());
    } else {
        return wait('Downloaded the page', 2000)
    }
}

downloadPage()
    .then(pageData => {
        console.log(pageData)
    })
    .catch(err => {
        console.log(err)
    })


