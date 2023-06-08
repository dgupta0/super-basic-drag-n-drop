const items = document.getElementsByClassName("item");
const outputCtn = document.getElementById("output-container")
const inputCtn = document.getElementById("input-container")
const ctns = document.getElementsByClassName("ctn")
const resetBtn = document.getElementById("reset")

for (let item of items) {
    item.addEventListener("dragstart", () => {
        item.classList.add("dragging")

    })

    item.addEventListener("dragend", (e) => {
        item.classList.remove("dragging")
    })

    for (let ctn of ctns) {
        ctn.addEventListener("dragover", (e) => {
            e.preventDefault()
            const dragItem = document.querySelector(".dragging")
            ctn.appendChild(dragItem);
        })
        ctn.addEventListener("mouseover", e => {
            console.log(e)
        })
    }
}

resetBtn.addEventListener("click", () => {
    window.location.reload();
})

