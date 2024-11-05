class Password {
    static charsel() {
        let charlist = "abcdefghijklmnopqrstuvwxyz".split("")
        let sel = Math.floor(Math.random() * 26)
        return charlist[sel]
    }
    static numsel() {
        let sel = Math.floor(Math.random() * 10)
        return sel
    }
    static symsel() {
        let symlist = `~!@#$%^&*()_+{}:"<>?/][\=]`.split("")
        let sel = Math.floor(Math.random() * symlist.length)
        return symlist[sel]
    }
    static typesel() {
        let i = Math.floor(Math.random()*4)
        let sel;
        if (i == 0) {
            sel = Password.charsel()
        }
        else if (i == 1) {
            sel = Password.charsel().toUpperCase()
        }
        else if (i == 2) {
            sel = Password.numsel()
        }
        else if (i == 3) {
            sel = Password.symsel()
        }
        return sel
    }
    VeryStrongPass(){
        let pass =""
        for(let i = 0;i<12;i++){
            pass = pass + Password.typesel()
        }
        return pass
    }
    StrongPass(){
        let pass =""
        for(let i = 0;i<8;i++){
            pass = pass + Password.typesel()
        }
        return pass
    }
    WeakPass(){
        let pass =""
        for(let i = 0;i<4;i++){
            pass = pass + Password.typesel()
        }
        return pass
    }
    FunnyPass(){
        let funList = ["admin","Password","Aloo","Incorrect","Abracadabra","Bibble","Brouhaha","Malarky","Lollygag","Gubbins","Snickersnee","Cattywampus","Bumfuzzle","ahahaha","Yowai Mo","Tomato","Yamete Kudasai","Saale"]
        let funno = Math.floor(Math.random()*funList.length)
        return funList[funno]
    }
}
btn1.addEventListener("click",()=>{
    let password = new Password()
    finalpass = password.WeakPass()
    let btn = document.getElementById("res")
    btn.innerHTML = finalpass
})
btn2.addEventListener("click",()=>{
    let password = new Password()
    finalpass = password.StrongPass()
    let btn = document.getElementById("res")
    btn.innerHTML = finalpass   
})
btn3.addEventListener("click",()=>{
    let password = new Password()
    finalpass = password.VeryStrongPass()
    let btn = document.getElementById("res")
    btn.innerHTML = finalpass   
})
btn4.addEventListener("click",()=>{
    let password = new Password()
    finalpass = password.FunnyPass()
    let btn = document.getElementById("res")
    btn.innerHTML = finalpass   
})

