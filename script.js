let fName = document.querySelector("#fName")
let lName = document.querySelector("#lName")
let email = document.querySelector("#email")
let pass = document.querySelector("#pass")
let fError = document.querySelector("#fError")
let lError = document.querySelector("#lError")
let eError = document.querySelector("#eError")
let pError = document.querySelector("#pError")

function vaildateFName() {
    if (fName.value == "") {
        console.log("hi")
        fName.style.border = "2px solid red"
        fError.style.display = "block"
    } else {
        fName.style.border = "2px solid #605a80"
        fError.style.display = "none"
        console.log("done")
    }

}

function vaildateLName() {
    if (lName.value == "") {
        console.log("hi")
        lName.style.border = "2px solid red"
        lError.style.display = "block"
    } else {
        lName.style.border = "2px solid #605a80"
        lError.style.display = "none"
        console.log("done")
    }

}
function vaildateEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value != "" && email.value.match(validRegex)) {
        email.style.border = "2px solid #605a80"
        eError.style.display = "none"
        console.log("done")
       
    } else {
        console.log("hi")
        email.style.border = "2px solid red"
        eError.style.display = "block"
    }

}

function vaildatePass() {
    if (pass.value == "") {
        console.log("hi")
        pass.style.border = "2px solid red"
        pError.style.display = "block"
    } else {
        pass.style.border = "2px solid #605a80"
        pError.style.display = "none"
        console.log("done")
    }

}

