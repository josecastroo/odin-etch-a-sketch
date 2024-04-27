const gridContainer = document.querySelector("#divs-container");
for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("item");
    gridContainer.appendChild(div);
}

gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";
gridContainer.style.height = "400px";
gridContainer.style.width = "400px";

