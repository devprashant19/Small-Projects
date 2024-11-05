let time = document.getElementById("time")
const daycheck = (d) => {
    if (d == 0) { return "Sunday" }
    else if (d == 1) { return "Monday" }
    else if (d == 2) { return "Tuesday" }
    else if (d == 3) { return "Wednesday" }
    else if (d == 4) { return "Thursday" }
    else if (d == 5) { return "Friday" }
    else if (d == 6) { return "Saturday" }
}
let a = new Date()
let d = a.getDay()
let f = daycheck(d)
let date = a.getDate()
let year = a.getFullYear()
const rep = () => {
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    time.innerHTML = `${h} : ${m} : ${s}`
}
let e = setInterval(rep, 1000, f)
let Day = document.getElementById("Day")
Day.innerHTML = `${f} ${date} , ${year}`