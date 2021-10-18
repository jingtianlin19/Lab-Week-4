function callTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(callTime, 1000);