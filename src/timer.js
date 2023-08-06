
const workStartingMinutes = 1;
var workTime = workStartingMinutes * 60;

function workCount(){
    interval = setInterval(function updateWorkCountdown(){
        let workMin = Math.floor(workTime / 60);
        let workSec = workTime % 60;
        workSec= workSec < 10 ? '0' + workSec : workSec;
    
        document.getElementById('workTimerCount').innerHTML = workMin + ' : ' + workSec;
        workTime--;
    
        if ((workMin + workSec) <= 0){
            clearInterval(interval);
            restCount()
         }
    }, 1000);
}


const restStartingMinutes = 1;
var restTime = restStartingMinutes * 60;

function restCount(){
    interval = setInterval(function updateRestCountdown(){
        let restMin = Math.floor(restTime / 60);
        let restSec = restTime % 60;
        restSec= restSec < 10 ? '0' + restSec : restSec;
    
        document.getElementById('restTimerCount').innerHTML = restMin + ' : ' + restSec;
        restTime--;
    
        if ((restMin + restSec) <= 0){
            clearInterval(interval);
         }
    }, 1000);
}

