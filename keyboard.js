//output
let output = document.querySelector("#userInputs")
// output.disabled = true
//all Buttons
let buttons = document.querySelectorAll("button")

let emoj = document.querySelector(".emojs")
let cpl = document.querySelector(".cpl")
let shiftKeysBtn = document.querySelectorAll(".shift")
let shiftKey1 = document.querySelector(".shft1")
let shiftKey2 = document.querySelector(".shft2")

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
            capsLocks(buttons[i])
            changeKys(buttons[i])
        }
        else if (buttons[i].classList.contains("shft2")) {
            buttons[i].classList.add("showClicked")
            setTime(buttons[i])
            capsLocks(buttons[i])
            changeKys(buttons[i])
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

function setTime(targeter) {
    setTimeout(() => {
        targeter.classList.remove("showClicked")
    }, 200)
}

function deleteBtn() {
    currentOutput = output.value.slice(0, output.value.length - 1)
    output.value = currentOutput
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