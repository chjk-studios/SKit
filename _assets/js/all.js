const params = new URLSearchParams(window.location.search);
const type = params.get('type');
const allDiv = document.getElementById("all-skripts");

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

generateAllCards()