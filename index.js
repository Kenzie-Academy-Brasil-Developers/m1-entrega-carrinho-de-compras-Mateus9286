const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Agua de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name:"Água Tônica",
        price: 17.98
    },
 
]


let body = document.querySelector("body")

let main = document.createElement("main")

let h1 = document.createElement("h1")
h1.innerText = "Virtual Market"
main.appendChild(h1)

let div = document.createElement("div")
let tagh3 = document.createElement("h3")
tagh3.innerText = "Item"
tagh3.classList.add("h33")
let tagh30 = document.createElement("h3")
tagh30.innerText = "Valor"
div.appendChild(tagh3)
div.appendChild(tagh30)
main.appendChild(div)
let ul = document.createElement("ul")
body.appendChild (main)
main.appendChild (ul)
 

let total = 0

for(let i = 0; i< productsCart.length; i++){
let li = document.createElement("li")
let h3 = document.createElement("h3")
let h5 = document.createElement("h5")


h3.innerText = productsCart[i].name
h5.innerText = productsCart[i].price


li.appendChild (h3)
li.appendChild (h5)
ul.appendChild(li)

total+= productsCart[i].price

}


let section = document.createElement("section")
let h33 = document.createElement("h3")
let h55 = document.createElement("h5")
h33.innerText = "Valor"
h33.classList.add("h33")
h55.innerText = total

section.appendChild(h33)
section.appendChild(h55)
main.appendChild(section)

let button = document.createElement("button")
button.innerText = "Finalizar Compra"
main.appendChild(button)
