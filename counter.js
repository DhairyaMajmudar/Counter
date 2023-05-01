let onscreen = document.getElementById("num")
let repeat = document.getElementById("num")
let new_save = document.getElementById("calc")

let count = 0
function increment() {   //increment button
    count++
    onscreen.innerText = count
    console.log(count)
}

console.log(new_save)
function save() {  //save button
    new_save.textContent += count + " - "
}

function reset() {      //reset button
    count = 0
    repeat.innerText = count
}

let welcome = document.getElementById("Welcome")

let username = "Dhairya"
let greeting = "Welcome Back "

welcome.innerText = greeting + username + "👋"

console.log(welcome)
