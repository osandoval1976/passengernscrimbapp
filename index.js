let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let countStr = 0
function increment() {
    count += 1
    countEl.textContent = count
   countStr= saveEl.textContent = "Previous entries: "+ count+ " - "
}

function save() {
    counStr = count + " - "
    saveEl.textContent += counStr
    countEl.textContent =0
    count = 0
}

console.log("Let's count people on the subway!")
