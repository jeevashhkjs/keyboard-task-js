//output
let output = document.querySelector("#userInputs")
// output.disabled = true
//all Buttons
let buttons = document.querySelectorAll("button")

let cpl = document.querySelector(".cpl")
let shiftKeysBtn = document.querySelectorAll(".shift")
let shiftKey1 = document.querySelector(".shft1")
let shiftKey2 = document.querySelector(".shft2")
let space = document.querySelector(".space")

let sun = document.querySelector(".sun")
let moon = document.querySelector(".moon")
moon.classList.add("showIc")
sun.addEventListener("click",()=>{
    sun.classList.remove("showIc")
    moon.classList.add("showIc")
})

moon.addEventListener("click",()=>{
    moon.classList.remove("showIc")
    sun.classList.add("showIc")
})
let icons = document.querySelectorAll("i")
for(let i=0;i<icons.length;i++){
    icons[i].addEventListener("click",()=>{
        if(icons[i].classList.contains("sun")){
            document.querySelector(":root").classList.remove("darkmode")
        }else{
            document.querySelector(":root").classList.add("darkmode")
        }
    })
}


let shiftKeys = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", '" "', "<", ">", "?"]
let DefaultKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', "'", ',', '.', '/']

function shiftChangeKey() {
    for (let i = 0; i < buttons.length; i++) {
        if (!(buttons[i].innerText.match((/^[A-Za-z]+$/)))) {
            buttons[i].setAttribute("id", "change")
        }
    }
}
shiftChangeKey()

let changeKeys = document.querySelectorAll("#change")
//Alternative buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {

        if (buttons[i].classList.contains("bsp")) {
            deleteBtn()
        }
        else if (buttons[i].classList.contains("cpl")) {
            capsLocks(cpl)
        }
        else if (buttons[i].classList.contains("enter")) {
            output.value += "\n"
        }
        else if (buttons[i].classList.contains("space")) {
            output.value += " "
        }
        else if (buttons[i].classList.contains("tab")) {
            output.value += "    "
        }
        else if (buttons[i].classList.contains("shft1")) {
            buttons[i].classList.add("showClicked")
            setTime(buttons[i])
            ShiftcapsLock(buttons[i])
            changeKys(buttons[i])
            if(shiftKey2.classList.contains("actives")){
                shiftKey1.classList.remove("actives")
                shiftKey2.classList.remove("actives")
            }

        }
        else if (buttons[i].classList.contains("shft2")) {
            buttons[i].classList.add("showClicked")
            setTime(buttons[i])
            ShiftcapsLock(buttons[i])
            changeKys(buttons[i])
            if(shiftKey1.classList.contains("actives")){
                shiftKey1.classList.remove("actives")
                shiftKey2.classList.remove("actives")
            }
        }
        else {
            output.value += e.target.innerText
        }
    })
}

window.addEventListener("keydown", (e) => {

    filterValue = e.key.toLowerCase()
    for (let j = 0; j < buttons.length; j++) {
        let buttonsText = buttons[j].innerText.toLowerCase()
        if (filterValue == buttonsText && filterValue != "shift") {
            buttons[j].classList.add("showClicked")
            setTime(buttons[j])
        }
    }
    if (e.keyCode == 8) {
        deleteBtn()
    }
    else if (e.keyCode == 9) {
        output.value += "    "
    }
    else if (e.keyCode == 13) {
        output.value += "\n"
    }
    else if (e.key == "CapsLock") {
        capsLocks(cpl)
    }
    else if (e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT && e.keyCode == 16) {
        capsLocks(shiftKey1)
        changeKys(shiftKey1)
    }
    else if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT && e.keyCode == 16) {
        capsLocks(shiftKey2)
        changeKys(shiftKey2)
    }
    else if(e.keyCode == 32){
        output.value += " "
        space.classList.add("showClicked")
        setTime(space)
    }
    if (filterValue.length == 1) {
        output.value += e.key
    }
})

function changeKys(getKeyElement) {
    for (let i = 0; i < changeKeys.length; i++) {
        if (getKeyElement.classList.contains("actives")) {
            changeKeys[i].innerText = shiftKeys[i]
        }
        else{
            changeKeys[i].innerText = DefaultKeys[i]
        }
    }
}

for(let i=0;i<changeKeys.length;i++){
    changeKeys[i].innerText = shiftKeys[i]
}

function setTime(targeter) {
    setTimeout(() => {
        targeter.classList.remove("showClicked")
    }, 200)
}

function deleteBtn() {
    currentOutput = output.value.slice(0, output.value.length - 1)
    output.value = currentOutput
}



function ShiftcapsLock(getTargetElement){

}

function capsLocks(diff) {
    diff.classList.toggle("actives")
    for (let k = 0; k < buttons.length; k++) {
        if (diff.classList.contains("actives")) {
            if (buttons[k].innerText != "CapsLock" && buttons[k].innerText != "Backspace" && buttons[k].innerText != "Tab" && buttons[k].innerText != "Enter" && buttons[k].innerText != "Shift" && buttons[k].innerText != "Space" && buttons[k].innerText != "com") {
                buttons[k].innerText = buttons[k].innerText.toUpperCase()
            }
        } else {
            if (buttons[k].innerText != "CapsLock" && buttons[k].innerText != "Backspace" && buttons[k].innerText != "Tab" && buttons[k].innerText != "Enter" && buttons[k].innerText != "Shift" && buttons[k].innerText != "Space" && buttons[k].innerText != "com") {
                buttons[k].innerText = buttons[k].innerText.toLowerCase()
            }
        }
    }
}

function disable() {
    document.onkeydown=function(e)
    {
    return false;
    } 
}




















// function ShiftcapsLock(getTargetElement){
//     getTargetElement.classList.toggle("actives")

//         if(shiftKey1.classList.contains("actives") && shiftKey2.classList.contains("actives")){
//             for(let k=0;k<buttons.length;k++){
//                 if (buttons[k].innerText != "CapsLock" && buttons[k].innerText != "Backspace" && buttons[k].innerText != "Tab" && buttons[k].innerText != "Enter" && buttons[k].innerText != "Shift" && buttons[k].innerText != "Space" && buttons[k].innerText != "com") {
//                     buttons[k].innerText = buttons[k].innerText.toLowerCase()
//                 }
//             }
//             for(let i=0;i<changeKeys.length;i++){
//                 changeKeys[i].innerText = DefaultKeys[i]
//             }
//         }
//         else{
//             for(let k=0;k<buttons.length;k++){
//                 if (buttons[k].innerText != "CapsLock" && buttons[k].innerText != "Backspace" && buttons[k].innerText != "Tab" && buttons[k].innerText != "Enter" && buttons[k].innerText != "Shift" && buttons[k].innerText != "Space" && buttons[k].innerText != "com") {
//                     buttons[k].innerText = buttons[k].innerText.toUpperCase()
//                 }
//             }
//             for(let i=0;i<changeKeys.length;i++){
//                 changeKeys[i].innerText = shiftKeys[i]
//             }
//         }
//     }