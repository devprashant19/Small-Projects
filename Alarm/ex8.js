const play = () => {
    let p = new Audio("F:\\Java Script\\js ex-8\\file.mp3")
    p.play()
    clearInterval(rep)
}
arr1.addEventListener("click", () => {
    let h = hours.innerHTML
    h = Number.parseInt(h)
    if (h == 0) {
        hours.innerHTML = `23`
    }
    else if (h <= 10) {
        hours.innerHTML = `0${h - 1}`
    }
    else if (h > 10) {
        hours.innerHTML = `${h - 1}`
    }
})
arr2.addEventListener("click", () => {
    let h = min.innerHTML
    h = Number.parseInt(h)
    if (h == 0) {
        min.innerHTML = `59`
    }
    else if (h <= 10) {
        min.innerHTML = `0${h - 1}`
    }
    else if (h > 10) {
        min.innerHTML = `${h - 1}`
    }
})
arr3.addEventListener("click", () => {
    let h = hours.innerHTML
    h = Number.parseInt(h)
    if (h < 9) {
        hours.innerHTML = `0${h + 1}`
    }
    else if (h == 23) {
        hours.innerHTML = `00`
    }
    else if (h >= 9) {
        hours.innerHTML = `${h + 1}`
    }
})
arr4.addEventListener("click", () => {
    let h = min.innerHTML
    h = Number.parseInt(h)
    if (h < 9) {
        min.innerHTML = `0${h + 1}`
    }
    else if (h == 59) {
        min.innerHTML = `00`
    }
    else if (h >= 9) {
        min.innerHTML = `${h + 1}`
    }
})
smallbtn.addEventListener("click", () => {
    if (localStorage.length == 12) {
        alert("Alarms cannot exceed 12")
    }
    else {
        let hinput = document.getElementById("hrsinput").value
        let minput = document.getElementById("mininput").value
        if (hinput === "" || minput === "" || hinput >= 24 || hinput < 0 || minput < 0 || minput >= 60) {
            alert("Choose correct value")
        }
        else {
            hinput = Number.parseInt(hinput)
            minput = Number.parseInt(minput)
            localStorage.setItem(hinput, minput)
            location.reload()
        }
    }
}
)
bigbtn.addEventListener("click", () => {
    if (localStorage.length == 12) {
        alert("Alarms cannot exceed 12")
    }
    else {
        let hinput = document.getElementById("hours").innerHTML
        hinput = Number.parseInt(hinput)
        let minput = document.getElementById("min").innerHTML
        minput = Number.parseInt(minput)
        localStorage.setItem(hinput, minput)
        location.reload()
    }
})
window.onload = () => {
    if (localStorage.length == 0) {
        document.getElementsByClassName("boxlist")[0].innerHTML = `<h2>No Alarms Set ....</h2>`
    }
    else {
        for (let i = 0; i < localStorage.length; i++) {
            let hrs = localStorage.key(i)
            hrs = Number.parseInt(hrs)
            let min = localStorage.getItem(hrs)
            min = Number.parseInt(min)
            let div = document.createElement("div")
            div.classList = "box"
            const timefunc = (tm) => {
                if (tm < 10) {
                    return `0${tm}`
                }
                else {
                    return tm
                }
            }
            div.innerHTML = `<h5>Alarm</h5>
        <h4 style="font-weight: bold;">${timefunc(hrs)}:${timefunc(min)}</h4>
        <button id="del${i + 1}" onclick="clicked(this.id)" type="button" class="btn btn-danger">Delete</button>`
            document.getElementsByClassName("boxlist")[0].appendChild(div)
        }
    }
}
const clicked = (clicked_id) => {
    let del = document.getElementById(clicked_id)
    let del_key = del.parentElement.firstElementChild.nextElementSibling.innerHTML.charAt(0)
    if (del_key == 0) {
        del_key = del.parentElement.firstElementChild.nextElementSibling.innerHTML.charAt(1)
        localStorage.removeItem(del_key)
        location.reload()
    }
    else {
        del_key = del.parentElement.firstElementChild.nextElementSibling.innerHTML.substring(0, 2)
        localStorage.removeItem(del_key)
        location.reload()
    }
}
const rep = setInterval(() => {
    let date = new Date()
    let hrs1 = date.getHours()
    let min1 = date.getMinutes()
    for (let i = 0; i < localStorage.length; i++) {
        let hrs = localStorage.key(i)
        hrs = Number.parseInt(hrs)
        let min = localStorage.getItem(hrs)
        min = Number.parseInt(min)
        if (hrs1 == hrs && min1 == min) {
            play()
            break
        }
        else {
            continue
        }
    }
}, 1000)