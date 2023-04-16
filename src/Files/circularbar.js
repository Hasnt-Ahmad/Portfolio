
import $ from 'jquery';
$(document).ready(function(){
    let circularProgress = $(".circular-progress"),
    progressValue = $(".progress-value");

let progressStartValue = 0,
    progressEndValue = 80,
    speed = 30;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.text(`${progressStartValue}%`);
    circularProgress.css("background", `conic-gradient(red ${progressStartValue * 3.6}deg, white 0deg)`);

    if(progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);
}) 