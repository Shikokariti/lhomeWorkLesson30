let display = document.getElementById('stopperScreen');
let startButton = document.getElementById('startStopper');
let stopButton = document.getElementById('stopStopper');
let resetButton = document.getElementById('resetStopper');
let jobs = [];
startButton.addEventListener('click',()=>{
    start();
});
stopButton.addEventListener('click',()=>{
    stop();
});
resetButton.addEventListener('click',()=>{
    resetStopper();
});

function start() {
    let timeInterval = document.getElementById('stopperTimeInterval').value * 1000;
    if (display.value == undefined) {
        let startNumber = document.getElementById('stopperStartTime').value;
        display.value = startNumber;
        display.innerText = display.value;
        setTimeout(start, timeInterval);
    } else if (display.value != 0) {
        display.value--;
        display.innerText = display.value;
        jobs.push(setTimeout(start, timeInterval));
    } else if (display.value == 0) {
        display.innerText = '';
        display.value = undefined;
    }
}
function stop() {
    jobs.forEach((job)=>{
        clearTimeout(job);
    });
}
function resetStopper() {
    display.innerText = '';
    display.value = undefined;
    document.getElementById('stopper').reset();
    jobs.forEach((job)=>{
        clearTimeout(job);
    });
}


