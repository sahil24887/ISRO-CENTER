async function fetchData() {
    const response = await fetch('https://isro.vercel.app/api/centres');
    const Data = await response.json();
    return Data;
}
async function createSection() {
    const data = await fetchData();
    let html = " ";
    data.centres.forEach(element => {
        html += `<div class="section">
        <div class="center"><h3 class="sub-heading">CENTER</h3><h4>${element.name}</h4></div>
        <div class="city"><h3 class="sub-heading">CITY</h3><h4>${element.Place}</h4></div>
        <div class="state"><h3 class="sub-heading">STATE</h3><h4>${element.State}</h4></div>
        </div>`
    });
    document.querySelector(".main-section").innerHTML = html;
}
createSection();
async function commonFun(e) {
    let section = document.querySelectorAll(".section");
    var value = document.querySelector(".input").value;
    if (value == "" && e.id != "all") {
        alert("Field is empty.")
    }
    else {
        const data = await fetchData();
        var filterData = data.centres.filter((item, index) => {
        return e.id == "city" ? item.Place.toLowerCase() == value.toLowerCase() : 
                e.id == "state" ? item.State.toLowerCase() == value.toLowerCase() :
                e.id == "center" ? item.name.toLowerCase() == value.toLowerCase() :
                e.id == "all" ? item : "";
    })
    section.forEach(item => item.remove())
    let html = " ";
    filterData.forEach(element => {
        html += `<div class="section">
        <div class="center"><h3 class="sub-heading">CENTER</h3><h4>${element.name}</h4></div>
        <div class="city"><h3 class="sub-heading">CITY</h3><h4>${element.Place}</h4></div>
        <div class="state"><h3 class="sub-heading">STATE</h3><h4>${element.State}</h4></div>
        </div>`
    });
    document.querySelector(".main-section").innerHTML = html;
    }
    
}