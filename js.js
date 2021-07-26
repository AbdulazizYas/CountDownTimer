
 var input  = document.getElementById("input"),
     start  = document.getElementById("strt"),
     stop  = document.getElementById("stp"),
     pause  = document.getElementById("pse"),
     counter = document.getElementById("count"),
     clickedP = false,
     clickedS = false,
     countDown,
     time,
     inTime;

  function timePass() {


       var min  = Math.floor(time / 60),

           sec  = time % 60;


       if(sec < 10){
         sec = "0" + sec;
       }

       if(min < 10 ){
         counter.innerHTML = "0" + min + ":" + sec;
       }else{
         counter.innerHTML = min + ":" + sec;
       }

       if(time >= 0){
         time = time - 1;
       }else{
         clearInterval(countDown);
         counter.innerHTML = "Done . . !";
       }
     }

  function startTimer() {

     time  = parseInt(input.value);

    if(isNaN(input.value)){
      window.alert("Please Enter a Number");
    }else{
      if(!clickedS){
        countDown = setInterval(_ => timePass(), 1000);
        clickedS = true;
      }else{
        clearInterval(countDown);
        countDown = setInterval(function (){
          timePass();
        }, 1000);
      }

    }
  }
  function stopTimer() {
    clearInterval(countDown);
    counter.innerHTML = "00:00";
  }
  function pauseTimer() {
  //  var remTime = time;
    if(!clickedP){
      pause.innerHTML = "Resume";
      clearInterval(countDown);
      clickedP = true;
    }else{
      pause.innerHTML = "Pause";
      clearInterval(countDown);
      countDown = setInterval(function (){
        timePass();
      }, 1000);
      clickedP = false;
    }

  }
  start.onclick = startTimer;
  stop.onclick  = stopTimer;
  pause.onclick = pauseTimer;
