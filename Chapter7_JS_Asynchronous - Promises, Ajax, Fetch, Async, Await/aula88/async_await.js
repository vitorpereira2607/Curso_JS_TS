function rand(min = 0, max = 3) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Bad Value');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passed the promise');
            return;
        }, time)
    })
}

async function execute() {
    try {
        const lvl1 = await wait('Level 1', rand());
        console.log(lvl1);
        const lvl2 = await wait('Level 2', rand());
        console.log(lvl2);
        const lvl3 = await wait(3, rand());
        console.log(lvl3);
    } catch (err) {
        console.log(err)
    }
}

execute();

/*
    Promises have three status:
    Pending -> promise has been created but hasn't been fullfield(resolved) or rejected yet.
    Fullfield -> promise was resolved
    rejected -> promise was rejected
*/

// wait('Level 1', rand())
//     .then(value => {
//         console.log(value);
//         return wait('Level 2', rand())
//     })
//     .then(value => {
//         console.log(value);
//         return wait('Level 3', rand());
//     })
//     .then(value => {
//         console.log(value)
//     })
//     .catch(err => console.log(err))
