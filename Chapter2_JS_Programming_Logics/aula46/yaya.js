let counter = 0;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

const timer = setInterval(function () {
    console.log(`Counter: ${formatTime(counter)}`);
    counter++;
}, 1000);

setTimeout(function () {
}, 1000);
