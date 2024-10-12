

function showRods() {
    fetch("./FishingRods.JSON")
        .then(response => response.json())
        .then(myRods => loadRods(myRods, 1))
        .catch(err => console.log("Error :" + err));
}

function loadRods(myRods, n) {
    // ---------------------
    // make array of objects
    // ---------------------
    let arrayRods = [];
    for (let i = 0; i < myRods.rods.length; i++) {
        arrayRods.push(myRods.rods[i]);
    }
    console.log(arrayRods);

    let sortedRods = arrayRods;

    // ---------------------
    // Construct the CARD
    // ---------------------
    var CardRod = document.getElementById("col");

    // Clear previous rod data
    CardRod.innerHTML = ""; // This will clear the previous rod data and image

    for (var i = 0; i < sortedRods.length; i++) {
        let name = sortedRods[i].name;
        let url = sortedRods[i].url;
        let price = sortedRods[i].price;
        let infoURL = sortedRods[i].infoURL;
        let AddCardRod = document.createElement("div");
        AddCardRod.classList.add("col"); // Add Bootstrap class to the column
        AddCardRod.innerHTML = `
    <a href="${infoURL}">
    <div class="card shadow-sm">
    <img src=${url} class="card-img-top" alt="..."></img>
    <div class="card-body">
    <p class="card-text"> <strong>${name}</strong></p>
    <p class="card-text"> <strong>Price:</strong> $${price}</p>
    </div>
    </div>
    </a>
    `;
        CardRod.appendChild(AddCardRod);
    } // end of for
}

showRods();
