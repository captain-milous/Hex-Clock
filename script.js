setInterval(showTime, 1000);
function showTime() {
    var current = new Date();
    let hour = current.getHours();
    let min = current.getMinutes();
    let sec = current.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentHex = "#" + hour + min + sec;
 	document.body.style.background = currentHex;
    document.getElementById("hex-time").innerHTML = currentHex;
}
showTime();