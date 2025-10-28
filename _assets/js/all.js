const params = new URLSearchParams(window.location.search);
const type = params.get('type');
const allDiv = document.getElementById("all-skripts");
const filterContainer = document.getElementById("filter-container")

const allTitle = document.getElementById('all-title');

if (type == "featured") {
    allTitle.textContent = `All featured scripts`;
} else {
    allTitle.textContent = "All scripts"
}

async function generateAllCards() {
    const data = await getSkriptData()
    let sorted_data = data.sort().reverse()
    
    for (const cardData of sorted_data) {
        card = makeCard(cardData.id, cardData.name, cardData.tags, cardData.short_desc, cardData.version)
        allDiv.appendChild(card)
    }
}

function generateTagFilters() {
    for (const [key, value] of Object.entries(tagColors)) {
        const tagSpan = document.createElement("span");
        tagSpan.classList.add("filter", "tag-" + value);
        tagSpan.innerText = key;
        filterContainer.appendChild(tagSpan);
    }
}

generateTagFilters()
generateAllCards()