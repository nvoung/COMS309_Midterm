
function fetchData(category) {
    fetch("../Products.json")
        .then(response => response.json())
        .then(data => {
            if (category === "rods") {
                loadItems(data.rods);
            } else if (category === "lures") {
                loadItems(data.lures);
            }
        })
        .catch(err => console.log("Error: " + err));
}

function loadItems(items) {
    var CardContainer = document.getElementById("col");
    // Clear previous data
    CardContainer.innerHTML = "";

    for (var i = 0; i < items.length; i++) {
        let name = items[i].name;
        let url = items[i].url;
        let price = items[i].price;
        let infoURL = items[i].infoURL;

        let AddCardItem = document.createElement("div");
        AddCardItem.classList.add("col"); // Add Bootstrap class to the column

        AddCardItem.innerHTML = `
            <a href="${infoURL}">
                <div class="card shadow-sm">
                    <img src=${url} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <p class="card-text"><strong>${name}</strong></p>
                        <p class="card-text"><strong>Price:</strong> $${price}</p>
                    </div>
                </div>
            </a>
        `;

        CardContainer.appendChild(AddCardItem);
    }
}
