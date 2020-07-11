

var min = 0;
var sec = 0;
var milisec = 0;

var minGet = document.getElementById("min");
var secGet = document.getElementById("sec");
var milisecGet = document.getElementById("milisec");

var interval;

function timer(){
    milisec++;
   milisecGet.innerHTML = milisec;
   if(milisec >= 100){
       sec++;
       secGet.innerHTML = sec;
       milisec = 0;
   }else if(sec >= 10){
       min++;
       minGet.innerHTML = min;
       sec = 0;

   }
}

function start(){
    interval = setInterval(timer,10)
}


function stop(){
    clearInterval(interval)
}

function reset(){
    min = 0;
    sec = 0;
    milisec = 0;

    minGet.innerHTML = min;
    secGet.innerHTML = sec;
    milisecGet.innerHTML = milisec;
    stop()
}

function disableButton(){
    document.getElementById("start").disabled = true;
}

//when user click reset button so start button will automatically be enable
function enableButton(){
    document.getElementById("start").disabled = false;
}
