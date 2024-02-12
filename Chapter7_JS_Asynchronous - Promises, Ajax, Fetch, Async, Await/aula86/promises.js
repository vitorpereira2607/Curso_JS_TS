function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, time)
    });
}

wait('Connecting DB', rand(1, 3))
    .then(answer => {
        console.log(answer);
        return wait('Searching data from DB', rand(1, 3));
    })
    .then(answer => {
        console.log(answer)
        //return wait('Handling the data', rand(1, 3));
        return wait(1234, rand(1, 3)); // Displays the error from here: 'Error:  BAD VALUE'
    })
    .then(answer => {
        console.log(answer);
    })
    .then(() => {
        console.log('Display data')
    })
    .catch(e => {
        console.log('Error: ', e)
    })
