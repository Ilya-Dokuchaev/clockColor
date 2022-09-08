let clock = document.getElementById("clock");
let color = document.getElementById("color");

function colorClock() {
  let time = new Date();
  let hour = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();
  if (hour.length < 2) {
    hour = "0" + hour;
  }
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  let hexHour = Math.floor((255 * hour) / 23).toString(16);
  let hexMin = Math.floor((255 * minutes) / 60).toString(16);
  let hexSec = Math.floor((255 * seconds) / 60).toString(16);
  if (hexHour.length < 2) {
    hexHour = ("0" + hexMin).substr(-2);
  }
  if (hexMin.length < 2) {
    hexMin = ("0" + hexMin).substr(-2);
  }
  if (hexSec.length < 2) {
    hexSec = ("0" + hexSec).substr(-2);
  }
  function shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt((R * (100 + percent)) / 100);
    G = parseInt((G * (100 + percent)) / 100);
    B = parseInt((B * (100 + percent)) / 100);

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    let RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
    let GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
    let BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

    return "#" + RR + GG + BB;
  }
  let setClock = hour + ":" + minutes + ":" + seconds;
  let setColor = "#" + hexHour + hexMin + hexSec;
  clock.innerHTML = setClock;

  document.getElementById("container").style.cssText = `
 background: linear-gradient(145deg, ${shadeColor(setColor, -50)}, ${shadeColor(
    setColor,
    50
  )});
  box-shadow: 10px 10px 20px ${shadeColor(setColor, -50)},
             -10px -10px 20px ${shadeColor(setColor, -10)};`;
  document.body.style.background = shadeColor(setColor, -30);
}

colorClock();
setInterval(colorClock, 1000);
