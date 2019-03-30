function getTime() {
    let fullDate = new Date();
    let hour = fullDate.getHours()
    let min = fullDate.getMinutes()
    let sec = fullDate.getSeconds()

    document.getElementById('hours').innerHTML = hour + ":"
    document.getElementById('minutes').innerHTML = min + ":"
    document.getElementById('seconds').innerHTML = sec
}

setInterval(getTime, 1000)
