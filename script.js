// initializing the time counting variables
let elapsedTime = 0;

// initializing the interval variable
let intervalId;

// targeting input section
const hoursInput = document.getElementById("hours-input");
const minutesInput = document.getElementById("minuts-input");
const secondsInput = document.getElementById("seconds-input");

// targeting output section
const hoursOutput = document.getElementById("hours-output");
const minutesOutput = document.getElementById("minuts-output");
const secondsOutput = document.getElementById("seconds-output");

// targeting all buttons from stop watch UI
const startBtn = document.getElementById("start-btn");
const infiniteBtn = document.getElementById("infinite-btn");
const stoptBtn = document.getElementById("stop-btn");
const resettBtn = document.getElementById("reset-btn");

// initializing and declaring disable function for reuse
function disableIt(child) {
    child.disabled = true;
}

// initializing and declaring enable function for reuse
function enableIt(child) {
    child.disabled = false;
}

// disabling user input for upper section of Stopwatch
function disableUpperSection() {
    disableIt(hoursInput);
    disableIt(minutesInput);
    disableIt(secondsInput);
    disableIt(startBtn);
    disableIt(infiniteBtn);
}

// enabling user input for upper section of Stopwatch
function enableUpperSection() {
    enableIt(hoursInput);
    enableIt(minutesInput);
    enableIt(secondsInput);
    enableIt(startBtn);
    enableIt(infiniteBtn);
}

// initializing and declaring function for user inputted data
function getInputedData() {
    return {
        hours: parseInt(hoursInput.value),
        minutes: parseInt(minutesInput.value),
        seconds: parseInt(secondsInput.value),
    };
}

// initializing and declaring function for updating values inside output section
function updateOutput() {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    hoursOutput.value = hours.toString().padStart(2, "0");
    minutesOutput.value = minutes.toString().padStart(2, "0");
    secondsOutput.value = seconds.toString().padStart(2, "0");
}

// creating interval function
function startStopwatch(targetedTime) {
    intervalId = setInterval(() => {
        if (targetedTime) {
            if (elapsedTime >= targetedTime) {
                clearInterval(intervalId);
                alert("Time⏰ Over!🛑");
                enableUpperSection();
                return;
            }
        }
        elapsedTime++;
        updateOutput();
    }, 1000);
}

// creating function for clear interval
function stopStopwatch() {
    clearInterval(intervalId);
}

// creating reset function to reset stopwatch
function resetStopwatch() {
    elapsedTime = 0;
    clearInterval(intervalId);
    updateOutput();
}

// adding event listener too particular buttons
startBtn.addEventListener("click", function () {
    console.log("Start Btn is clicked");
    let timeIs =
        getInputedData().hours * 3600 +
        getInputedData().minutes * 60 +
        getInputedData().seconds;
    elapsedTime = 0;
    disableUpperSection();
    startStopwatch(timeIs);
});

infiniteBtn.addEventListener("click", function () {
    console.log("Infinite Btn is clicked");
    elapsedTime = 0;
    disableUpperSection();
    startStopwatch();
});

stoptBtn.addEventListener("click", function () {
    console.log("Stop Btn is clicked");
    stopStopwatch();
    enableUpperSection();
});

resettBtn.addEventListener("click", function () {
    console.log("Reset Btn is clicked");
    resetStopwatch();
    enableUpperSection();
});
