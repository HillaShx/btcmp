var clockDOM = document.querySelector(".clock");

function startClock() {
  var time = new Date();
  var hh = time.getHours();
  hh = checkTime(hh);
  var mm = time.getMinutes();
  mm = checkTime(mm);
  var ss = time.getSeconds();
  ss = checkTime(ss);
  document.getElementById("hours").innerText = hh;
  document.getElementById("minutes").innerText = mm;
  document.getElementById("seconds").innerText = ss;

}
function checkTime(n) {
  if (n<10) {
    n = "0" + n;
  }
  return n;
}

startClock();
setInterval(startClock,1000);