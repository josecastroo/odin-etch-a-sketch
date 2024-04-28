const gridContainer = document.querySelector("#divs-container");

for (let i = 0; i < 16 * 16; i++) {
    var div = document.createElement("div");
    //div.classList.add("item");

    div.style.height = "calc(500px / 16)";
    div.style.width = "calc(500px / 16)";
    div.style.border = "1px solid black";
    div.style.boxSizing = "border-box";

    div.addEventListener("mouseover", function() {
        this.style.backgroundColor = "black";
    });

    gridContainer.appendChild(div);
}

gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";
gridContainer.style.height = "500px";
gridContainer.style.width = "500px";

const updateButton = document.querySelector("#update-button");
updateButton.addEventListener("click", updateGridValue);

function updateGridValue () {
    var size = document.querySelector("#grid-size-input").value;
    
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let i = 0; i < size * size; i++) {
        var div = document.createElement("div");

        div.style.height = `calc(500px / ${size})`;
        div.style.width = `calc(500px / ${size})`;
        div.style.border = "1px solid black";
        div.style.boxSizing = "border-box";

        div.addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
        });

        gridContainer.appendChild(div);
    }
}
