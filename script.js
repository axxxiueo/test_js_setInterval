let elapstedTime = 5;
function writeTime(){
    document.getElementById("time").textContent = "残り" + elapstedTime + "秒です";
}
writeTime();

const timerId = setInterval(function(){
    elapstedTime--;
    writeTime();
    if (elapstedTime === 0){
        alert("時間です");
        clearInterval(timerId);
    }
}, 1000);