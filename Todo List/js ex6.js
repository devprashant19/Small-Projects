window.onload = () => {
    let lslen = localStorage.length
    if (lslen===0){
        let no = document.getElementsByTagName("h4")[0]
        no.innerHTML = "<br> No Schedules Pending...."
        no.classList = "nil"
    }
    else{
        let table = document.getElementsByClassName("table")[0]
        table.innerHTML = `
        <thead style="color: whitesmoke;font-weight: bold;">
            <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Heading</th>
                <th scope="col">Description</th>
                <th scope="col">Delete Note</th>
            </tr>
        </thead>
        <tbody class="tablebody">
        </tbody>`
        for (let i = 0; i < lslen; i++) {
            let note = localStorage.key(i)
            let desc = localStorage.getItem(note)
            let tb = document.getElementsByClassName("tablebody")[0]
            let neww = document.createElement("tr")
            neww.innerHTML = `<th scope="row">${i + 1}</th>
            <td>${note}</td>
            <td>${desc}</td>
            <td><button id=del${i + 1} type="button" class="btn btn-danger" onclick="del(this.id)">Delete</button></td>`
            tb.appendChild(neww)
        }
    }
}
let btn = document.getElementsByClassName("btn")[0]
btn.addEventListener("click", () => {
    let note1 = document.getElementById("note")
    let desc1 = document.getElementById("description")
    if(note1.value=="" || desc1.value==""){
        alert("Enter any value")
    }
    else{
        localStorage.setItem(note1.value, desc1.value)
    }
})

const del = (clicked_id) => {
    let d1 = document.getElementById(clicked_id);
    let d1par = d1.parentElement.parentElement
    let d1key = d1par.firstElementChild.nextElementSibling.innerText
    console.log(d1key)
    localStorage.removeItem(d1key)
    location.reload()
}