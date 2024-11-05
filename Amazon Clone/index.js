let leftarr1 = document.getElementById("arrow-left1")
let rightarr1 = document.getElementById("arrow-right1")
let bbb = document.querySelectorAll(".deal-box")
rightarr1.addEventListener("click", () => {
    for (let i = 0; i < bbb.length; i++) {
        if (bbb[i].classList.contains("lmove") != true) {
            bbb[i].classList.add("lmove")
        }
        if (bbb[i].classList.contains("rmove") === true) {
            bbb[i].classList.remove("rmove")
        }
        if (bbb[i].classList.contains("tleft") !== true) {
            bbb[i].classList.add("tleft")
        }
        if (bbb[i].classList.contains("tright") === true) {
            bbb[i].classList.remove("tright")
        }
        if (leftarr1.classList.contains("hidden") === true) {
            leftarr1.classList.toggle("hidden")
        }
        if (rightarr1.classList.contains("hidden") != true) {
            rightarr1.classList.toggle("hidden")
        }
    }
})
leftarr1.addEventListener("click", () => {
    for (let i = 0; i < bbb.length; i++) {
        if (bbb[i].classList.contains("rmove") != true) {
            bbb[i].classList.add("rmove")
        }
        if (bbb[i].classList.contains("lmove") === true) {
            bbb[i].classList.remove("lmove")
        }
        if (bbb[i].classList.contains("tright") != true) {
            bbb[i].classList.add("tright")
        }
        if (bbb[i].classList.contains("tleft") === true) {
            bbb[i].classList.remove("tleft")
        }
        if (rightarr1.classList.contains("hidden") === true) {
            rightarr1.classList.toggle("hidden")
        }
        if (leftarr1.classList.contains("hidden") != true) {
            leftarr1.classList.toggle("hidden")
        }
    }
})
let leftarr2 = document.getElementById("arrow-left2")
let rightarr2 = document.getElementById("arrow-right2")
let bbox = document.querySelectorAll(".beauty-box")
rightarr2.addEventListener("click", () => {
    for (let i = 0; i < bbox.length; i++) {
        if (bbox[i].classList.contains("lmove") != true) {
            bbox[i].classList.add("lmove")
        }
        if (bbox[i].classList.contains("rmove") === true) {
            bbox[i].classList.remove("rmove")
        }
        if (bbox[i].classList.contains("tleft") !== true) {
            bbox[i].classList.add("tleft")
        }
        if (bbox[i].classList.contains("tright") === true) {
            bbox[i].classList.remove("tright")
        }
        if (leftarr2.classList.contains("hidden") === true) {
            leftarr2.classList.toggle("hidden")
        }
        if (rightarr2.classList.contains("hidden") != true) {
            rightarr2.classList.toggle("hidden")
        }
    }
})
leftarr2.addEventListener("click", () => {
    for (let i = 0; i < bbox.length; i++) {
        if (bbox[i].classList.contains("rmove") != true) {
            bbox[i].classList.add("rmove")
        }
        if (bbox[i].classList.contains("lmove") === true) {
            bbox[i].classList.remove("lmove")
        }
        if (bbox[i].classList.contains("tright") != true) {
            bbox[i].classList.add("tright")
        }
        if (bbox[i].classList.contains("tleft") === true) {
            bbox[i].classList.remove("tleft")
        }
        if (rightarr2.classList.contains("hidden") === true) {
            rightarr2.classList.toggle("hidden")
        }
        if (leftarr2.classList.contains("hidden") != true) {
            leftarr2.classList.toggle("hidden")
        }
    }
})
let leftarr3 = document.getElementById("arrow-left3")
let rightarr3 = document.getElementById("arrow-right3")
let dubox = document.querySelectorAll(".du-box")
rightarr3.addEventListener("click", () => {
    for (let i = 0; i < dubox.length; i++) {
        if (dubox[i].classList.contains("lmove") != true) {
            dubox[i].classList.add("lmove")
        }
        if (dubox[i].classList.contains("rmove") === true) {
            dubox[i].classList.remove("rmove")
        }
        if (dubox[i].classList.contains("tleft") !== true) {
            dubox[i].classList.add("tleft")
        }
        if (dubox[i].classList.contains("tright") === true) {
            dubox[i].classList.remove("tright")
        }
        if (leftarr3.classList.contains("hidden") === true) {
            leftarr3.classList.toggle("hidden")
        }
        if (rightarr3.classList.contains("hidden") != true) {
            rightarr3.classList.toggle("hidden")
        }
    }
})
leftarr3.addEventListener("click", () => {
    for (let i = 0; i < dubox.length; i++) {
        if (dubox[i].classList.contains("rmove") != true) {
            dubox[i].classList.add("rmove")
        }
        if (dubox[i].classList.contains("lmove") === true) {
            dubox[i].classList.remove("lmove")
        }
        if (dubox[i].classList.contains("tright") != true) {
            dubox[i].classList.add("tright")
        }
        if (dubox[i].classList.contains("tleft") === true) {
            dubox[i].classList.remove("tleft")
        }
        if (rightarr3.classList.contains("hidden") === true) {
            rightarr3.classList.toggle("hidden")
        }
        if (leftarr3.classList.contains("hidden") != true) {
            leftarr3.classList.toggle("hidden")
        }
    }
})
let ham = document.querySelector(".hamburger")
let nav_list = document.querySelector(".nav-list")
let navbar = document.querySelector(".navbar")
let loc_none = document.querySelector(".location")

ham.addEventListener("click", () => {
    nav_list.classList.toggle("hamup")
    navbar.classList.toggle("nav-h")
    loc_none.classList.toggle("loc-none")
})