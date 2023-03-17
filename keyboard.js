//output
let output = document.querySelector("#userInputs")

//all Buttons
let buttons = document.querySelectorAll("button")

let cpl = document.querySelector(".cpl")

//Alternative buttons
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",(e)=>{

        if(buttons[i].classList.contains("bsp")){
            currentOutput = output.value.slice(0,output.value.length-1)
            output.value = currentOutput
        }
        else if(buttons[i].classList.contains("cpl")){
            cpl.classList.toggle("actives")
                for(let k=0;k<buttons.length;k++){
                    if(cpl.classList.contains("actives")){
                        if(buttons[k].innerText != "CapsLock" && buttons[k].innerText != "Backspace" && buttons[k].innerText != "Tab" && buttons[k].innerText != "Enter" && buttons[k].innerText != "Shift" && buttons[k].innerText != "Space" && buttons[k].innerText != "com"){
                            buttons[k].innerText = buttons[k].innerText.toUpperCase()
                        }
                    }else{
                        if(buttons[k].innerText != "CapsLock" && buttons[k].innerText != "Backspace" && buttons[k].innerText != "Tab" && buttons[k].innerText != "Enter" && buttons[k].innerText != "Shift" && buttons[k].innerText != "Space" && buttons[k].innerText != "com"){
                            buttons[k].innerText = buttons[k].innerText.toLowerCase()
                        }
                    }
                }
        }
        else if(buttons[i].classList.contains("enter")){
            output.value += "\n"
        }
        else if(buttons[i].classList.contains("space")){
            output.value += " "
        }
        else if(buttons[i].classList.contains("tab")){
            output.value += "    "
        }
        else if(buttons[i].classList.contains("shift")){

        }
        else{
            output.value += e.target.innerText
        }
    })
}





// A	65
// B	66
// C	67
// D	68
// E	69
// F	70
// G	71
// H	72
// I	73
// J	74
// K	75
// L	76
// M	77
// N	78
// O	79
// P	80
// Q	81
// R	82
// S	83
// T	84
// U	85
// V	86
// W	87
// X	88
// Y	89
// Z	90














// let backtik = document.querySelector(".backtik")
// let bsp = document.querySelector(".bsp")
// let tab = document.querySelector(".tab")
// let slash = document.querySelector(".slash")

// let enter = document.querySelector(".enter")
// let shift = document.querySelectorAll(".shift")

// let com = document.querySelector(".com")
// let at = document.querySelector(".at")
// let space = document.querySelector(".space")