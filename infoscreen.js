function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function onLoadDocument() {
    // Refresh Page every six hours (to load new content)
    while (1) {
        await sleep( 2160000);
        location.reload();
    }
}

function fillDates(){

}

function showTime(){
    // Update the clock
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 5

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}
showTime();

//NOTE: Diashow
//anouncement Ordner kann nicht von Javascript ausgelesen werden, deswegen sind alle Dateien im folgenden Array gespeichert
var file_array = ['Secret Hitler Plakat.svg', 'Einladung Heimrat.jpeg', 'Tutorenfahrt Save the Date.svg', 'Einladung Vollversammlung.jpeg']

var counter = 0;
function changeAnouncement(index){
  diashow_src = "anouncement/" + String(file_array[index]);
  console.log(diashow_src);
  console.log(index);
  if (document.getElementById("anouncement_img")) {
    document.getElementById("anouncement_img").src=diashow_src;
  }

  counter++;
  if (counter == file_array.length) {
    counter = 0;
  }
}

changeAnouncement(counter);
setInterval(function(){
    changeAnouncement(counter);
}, 10000)
