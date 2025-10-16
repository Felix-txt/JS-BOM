function Change_Bg(){
    const colors = ["red", "blue", "green", "purple", "yellow"]
    let r = Math.floor((Math.random()*colors.length))
    document.getElementById("body").style.backgroundColor = colors[r]
}
function Change_Pic(){
    let img = document.getElementById("img1")
    const diceimg =[
    "bilder/dice1.png",
    "bilder/dice2.png",
    "bilder/dice3.png",
    "bilder/dice4.png",
    "bilder/dice5.png",
    "bilder/dice6.png",
    "bilder/Fun1.png",
    "bilder/FinPic.png"
    ]
    rand1 = Math.floor(Math.random()*diceimg.length)
    img.src = diceimg[rand1]
}
function Header(){
    let header = document.createElement("h1")
    header.id = "header"
    let text = document.createTextNode("vällkommen")
    header.appendChild(text)
    let curren_div = document.getElementById("div1")
    document.body.insertBefore(header, curren_div)
}
function Good_Vibs(){
    let newtag = document.createElement("h3")
    let text1 = document.createTextNode("Detta är good vibs")
    newtag.appendChild(text1)
    let currnet_div = document.getElementById("div1")
    document.body.insertBefore(newtag, currnet_div)
}
function Hide_Pic(){
    let img = document.getElementById("img1")
    img.classList.add("hide")
}
function Remov_header(){
    let element = document.getElementById("header")
    element.remove()
}
function Time(){
    const d = new Date();
    let year = d.getFullYear();
    let newtimetag = document.createElement("h1")
    let text1 = document.createTextNode("År " +year)
    newtimetag.appendChild(text1)  
    let currnet_div = document.getElementById("div1")
    document.body.insertBefore(newtimetag, currnet_div)
}
function Show_Pic(){
    let img = document.getElementById("img1")
    img.classList.remove("hide")
}