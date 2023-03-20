//output
let output = document.querySelector("#userInputs")

//all Buttons
let buttons = document.querySelectorAll("button")

let tamilLetters = document.querySelectorAll(".tamil")

let cpl = document.querySelector(".cpl")
let shiftKeysBtn = document.querySelectorAll(".shift")
let shiftKey1 = document.querySelector(".shft1")
let shiftKey2 = document.querySelector(".shft2")
let space = document.querySelector(".space")

let sun = document.querySelector(".moon")
let emojParent = document.querySelector(".parent")
let emojsTag = document.querySelector(".emojs")

let atSymbol = document.querySelector(".at")

let editLetters = document.querySelectorAll(".edit")


let shiftKeys = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", '" "', "<", ">", "?"]
let DefaultKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', "'", ',', '.', '/']

let tamilEditkey = ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ', 'ஃ']

let notGo = ['ா', 'ி', 'ீ', 'ு', 'ூ', 'ெ', 'ே', 'ை', 'ொ', 'ோ', 'ௌ', '்']

let tamilKeys = ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ', 'ஃ', 'க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'த', 'ந', 'ப', 'ம', 'ய', 'ர', 'ற', 'ல', 'ள', 'ழ', 'வ', 'ன', 'ஜ', 'ஷ', 'ஸ', 'ஹ', 'க்ஷ', 'ா', 'ி', 'ீ', 'ு', 'ூ', 'ெ', 'ே', 'ை', 'ொ', 'ோ', 'ௌ', '்']

let englishLetters = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'com']

let mainDiv = document.querySelector(".go")
let selectedLang = document.querySelector("#language")
let welcome = document.querySelector(".welcome")
welcome.classList.add("showDiv")
let keyboard = document.querySelector(".keyboard")
mainDiv.addEventListener("click", () => {

    if (selectedLang.value != "") {
        if (selectedLang.value == "tamil") {
            for (let j = 0; j < tamilLetters.length; j++) {
                tamilLetters[j].innerText = tamilKeys[j]
            }
        } else {
            for (let j = 0; j < tamilLetters.length; j++) {
                tamilLetters[j].innerText = englishLetters[j]
            }
        }
        welcome.classList.remove("showDiv")
        keyboard.classList.add("showDiv")
    }
    else {
        alert("Please select language")
    }
})



emojParent.style.display = "none"
atSymbol.addEventListener("mouseover", () => {
    emojParent.style.display = "block"

    emojParent.addEventListener("mouseover", () => {
        emojParent.style.display = "block"
    })
    emojParent.addEventListener("mouseout", () => {
        emojParent.style.display = "none"
    })

})
atSymbol.addEventListener("mouseout", () => {
    emojParent.style.display = "none"
})

let emojs = [
    '&#128512', '&#128513', '&#128514',
    '&#128515', '&#128516', '&#128517',
    '&#128518', '&#128519', '&#128520',
    '&#128521', '&#128522', '&#128523',
    '&#128524', '&#128525', '&#128526',
    '&#128527', '&#128528', '&#128529',
    '&#128530', '&#128531', '&#128532',
    '&#128533', '&#128534', '&#128535',
    '&#128536', '&#128537', '&#128538',
    '&#128539', '&#128540', '&#128542'
]

for (let k = 0; k < emojs.length; k++) {
    let createPara = document.createElement("p")
    createPara.setAttribute("id", "emoj")
    createPara.innerHTML = emojs[k]
    emojsTag.append(createPara)
    createPara.addEventListener("click", (e) => {
        output.value += e.target.innerText
    })
}

sun.classList.add("showIc")
sun.addEventListener("click", () => {
    if (sun.classList.contains("fa-sun")) {
        sun.classList.remove("fa-sun")
        sun.classList.add("fa-moon")
    }
    else {
        sun.classList.remove("fa-moon")
        sun.classList.add("fa-sun")
    }
    darkMode()
})

function darkMode() {
    if (sun.classList.contains("fa-sun")) {
        document.querySelector(":root").classList.add("darkmode")
    }
    else {
        document.querySelector(":root").classList.remove("darkmode")
    }
}

// console.log(tamilKeys.length,"arra")

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
        else if (buttons[i].classList.contains("shift")) {
            let element = e.target
            ShiftcapsLock(element)
        } else if (buttons[i].innerText == "Emojs") {
            output.value += ""
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
        ShiftcapsLock(shiftKey1)
    }
    else if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT && e.keyCode == 16) {
        ShiftcapsLock(shiftKey2)
    }
    else if (e.keyCode == 32) {
        output.value += " "
        space.classList.add("showClicked")
        setTime(space)
    }
    if (filterValue.length == 1) {
        output.value += e.key
    }
})

function setTime(targeter) {
    setTimeout(() => {
        targeter.classList.remove("showClicked")
    }, 200)
}

function deleteBtn() {
    currentOutput = output.value.slice(0, output.value.length - 1)
    output.value = currentOutput
}



function ShiftcapsLock(eleMent) {
    eleMent.classList.toggle("actives")
    eleMent.classList.add("showClicked")
    setTime(eleMent)
    if (shiftKey1.classList.contains("actives") && shiftKey2.classList.contains("actives")) {
        shiftKey1.classList.remove("actives")
        shiftKey2.classList.remove("actives")
    }

    if ((shiftKey1.classList.contains("actives") || shiftKey2.classList.contains("actives"))) {

        for (let k = 0; k < buttons.length; k++) {
            if (buttons[k].innerText != "CapsLock" && buttons[k].innerText != "Backspace" && buttons[k].innerText != "Tab" && buttons[k].innerText != "Enter" && buttons[k].innerText != "Shift" && buttons[k].innerText != "Space" && buttons[k].innerText != "com" && buttons[k].innerText != "Emojs") {
                buttons[k].innerText = buttons[k].innerText.toUpperCase()
            }
        }
        if (selectedLang.value == "tamil") {
            for (let i = 0; i < tamilEditkey.length; i++) {
                editLetters[i].innerText = tamilEditkey[i]
            }
        } else if (selectedLang.value == "english") {
            for (let i = 0; i < changeKeys.length; i++) {
                changeKeys[i].innerText = shiftKeys[i]
            }
        }

    }
    else if (!(shiftKey1.classList.contains("actives") || shiftKey2.classList.contains("actives"))) {

        for (let k = 0; k < buttons.length; k++) {
            if (buttons[k].innerText != "CapsLock" && buttons[k].innerText != "Backspace" && buttons[k].innerText != "Tab" && buttons[k].innerText != "Enter" && buttons[k].innerText != "Shift" && buttons[k].innerText != "Space" && buttons[k].innerText != "com" && buttons[k].innerText != "Emojs") {
                buttons[k].innerText = buttons[k].innerText.toLowerCase()
            }
        }
        for (let i = 0; i < changeKeys.length; i++) {
            changeKeys[i].innerText = DefaultKeys[i]
        }

    }
}

function capsLocks(diff) {
    diff.classList.toggle("actives")
    for (let k = 0; k < buttons.length; k++) {
        if (diff.classList.contains("actives")) {
            if (buttons[k].innerText != "CapsLock" && buttons[k].innerText != "Backspace" && buttons[k].innerText != "Tab" && buttons[k].innerText != "Enter" && buttons[k].innerText != "Shift" && buttons[k].innerText != "Space" && buttons[k].innerText != "com" && buttons[k].innerText != "Emojs") {
                buttons[k].innerText = buttons[k].innerText.toUpperCase()
            }
        } else {
            if (buttons[k].innerText != "CapsLock" && buttons[k].innerText != "Backspace" && buttons[k].innerText != "Tab" && buttons[k].innerText != "Enter" && buttons[k].innerText != "Shift" && buttons[k].innerText != "Space" && buttons[k].innerText != "com" && buttons[k].innerText != "Emojs") {
                buttons[k].innerText = buttons[k].innerText.toLowerCase()
            }
        }
    }
}

function disable() {
    document.onkeydown = function (e) {
        return false;
    }
}

