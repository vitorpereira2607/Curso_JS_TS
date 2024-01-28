const watch = document.querySelector('.watch');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const clear = document.querySelector('.clear');

let counter = 0;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

start.addEventListener('click', function(event) {
    event.preventDefault();

    setInterval(function () {
        console.log(`${formatTime(counter)}`);
        watch.innerHTML = `${formatTime(counter)}`;
        counter++;
    }, 1000);
});

pause.addEventListener('click', function(event) {
    event.preventDefault();

});

clear.addEventListener('click', function(event) {
    event.preventDefault();

    counter = 0;
    watch.innerHTML = `${formatTime(counter)}`;
});