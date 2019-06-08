var content = document.getElementById('content');

var nim = "Replace this with your own abstraction of Nim"

var pebblesLeft = 16;
var pebblesPicked = 0;

content.innerHTML = renderGame(pebblesPicked, pebblesLeft);

function renderPebbles(pebblesPicked, pebblesLeft) {
    pebblesHTML = ""
    for (var i = 0; i < pebblesPicked; i++) {
        pebblesHTML += `<div class="pebble taken"></div>`
    };
    for (var i = 0; i < pebblesLeft; i++) {
        pebblesHTML += `<div class="pebble notTaken"></div>`
    };
    //console.log("Picked Pebbles: " + pebblesPicked)
    //console.log("Left Pebbles: " + pebblesLeft)
    return pebblesHTML;
};

take.addEventListener("click", function () {
    console.log("Picked Pebbles: " + pebblesPicked);
    console.log("Left Pebbles: " + pebblesLeft);
    console.log(takeInput.value);
    pebblesLeft = pebblesLeft - takeInput.value;
    pebblesPicked = (16 - pebblesLeft);
    console.log("Picked Pebbles: " + pebblesPicked)
    console.log("Left Pebbles: " + pebblesLeft)
    pebblecontainer.innerHTML = renderPebbles(pebblesPicked, pebblesLeft);
}
);

function renderGame(pebblesPicked, pebblesLeft) {
    // Change this render function to use the "game" parameter
    pebblesHTML = renderPebbles(pebblesPicked, pebblesLeft)
    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>There are ${pebblesLeft} pebbles left</h4>
            <div class="w-50 text-center pebble-container" id="pebblecontainer">
                ${pebblesHTML}
            </div>
            <h4 class="mt-5">It's player 1's turn! How many pebbles will you take?</h4>
            <div>
                <select id="takeInput">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button class="btn btn-primary" id="take">Take</button>
            </div>
        </div>
    `
}