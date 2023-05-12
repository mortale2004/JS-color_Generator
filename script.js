let body = document.querySelector("body");
const container = document.getElementsByClassName("container")[0];
const btn = document.getElementById("btn");



btn.addEventListener("click", ()=>{
    let colorNum = Math.floor(Math.random()*16777216);
    let color = colorNum.toString(16);
    container.firstElementChild.innerText = `Color is: #${color}`;
    body.style.backgroundColor = `#${color}`;
    navigator.clipboard.writeText(`#${color}`);
})
