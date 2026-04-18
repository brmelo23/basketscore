let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homeassEl = document.getElementById("homeass-el")
let guestassEl = document.getElementById("guestass-el")

console.log(homeEl)
console.log(guestEl)

let homescore = 0
let guestscore = 0

let homeassist = 0
let guestassist = 0

function haddone() {
    homescore += 1
    homeassist += 1
    homeEl.textContent = homescore
    homeassEl.textContent = homeassist
    console.log(homeEl)
}

function haddtwo() {
    homescore += 2
    homeassist += 1
    homeEl.textContent = homescore
    homeassEl.textContent = homeassist
    console.log(homeEl)
}

function haddthree() {
    homescore += 3
    homeassist += 1
    homeEl.textContent = homescore
    homeassEl.textContent = homeassist
    console.log(homeEl)
}

function gaddone() {
    guestscore += 1
    guestassist += 1
    guestEl.textContent = guestscore
    guestassEl.textContent = guestassist
    console.log(guestEl)
}

function gaddtwo() {
    guestscore += 2
    guestassist += 1
    guestEl.textContent = guestscore
    guestassEl.textContent = guestassist
    console.log(guestEl)
}

function gaddthree() {
    guestscore += 3
    guestassist += 1
    guestEl.textContent = guestscore
    guestassEl.textContent = guestassist
    console.log(guestEl)
}

function newgame() {
    homescore = 0
    guestscore = 0
    homeassist = 0
    guestassist =0
    homeEl.textContent = homescore
    guestEl.textContent = guestscore
    homeassEl.textContent = homeassist
    guestassEl.textContent = guestassist
}