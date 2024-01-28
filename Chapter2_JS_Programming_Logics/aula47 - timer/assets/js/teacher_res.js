function watch(){
    let counter = 0;
    let timer;
    
    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000); // Multiply by 1000 to convert seconds to milliseconds
    
        return date.toLocaleTimeString('pt-PT', {
            timeZone: 'GMT'
        });
    }
    
    function startCounter() {
    
        timer = setInterval(function () {
            watch.innerHTML = getTimeFromSeconds(counter);
            counter++;
        }, 1000)
    
        return timer;
    }
    const watch = document.querySelector('.watch');
    // const start = document.querySelector('.start');
    // const pause = document.querySelector('.pause');
    // const clear = document.querySelector('.clear');
    
    
    document.addEventListener('click', function (e) {
        const el = e.target;
    
        if (el.classList.contains('start')) {
            console.log('clicked on start')
            watch.classList.remove('paused');
            clearInterval(timer);
            startCounter();
        }
    
        if (el.classList.contains('pause')) {
            clearInterval(timer);
            watch.classList.add('paused');
        }
    
        if (el.classList.contains('clear')) {
            clearInterval(timer);
            watch.innerHTML = '00:00:00';
            counter = 0;
        }
    })
}

watch();



// start.addEventListener('click', function (event) {

//     watch.classList.remove('paused');
//     event.preventDefault();
//     clearInterval(timer);
//     startCounter();
// });

// pause.addEventListener('click', function (event) {
//     event.preventDefault();
//     clearInterval(timer);
//     watch.classList.add('paused');

// });

// clear.addEventListener('click', function (event) {
//     event.preventDefault();

//     clearInterval(timer);
//     watch.innerHTML = '00:00:00';
//     counter = 0;
// });