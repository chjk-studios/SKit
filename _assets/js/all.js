const params = new URLSearchParams(window.location.search);
const type = params.get('type');
const allDiv = document.getElementById("all-skripts");
const filterContainer = document.getElementById("filter-container")

const allTitle = document.getElementById('all-title');

async function GenerateInitCards() {
    const data = await getSkriptData()
    let sorted_data = data.sort().reverse()
    generateCards(sorted_data)
}

function generateCards(data) {
    for (const cardData of data) {
        card = makeCard(cardData.id, cardData.name, cardData.tags, cardData.short_desc, cardData.version)
        allDiv.appendChild(card)
    }
}

function generateTagFilters() {
    for (const [key, value] of Object.entries(tagColors)) {
        const tagSpan = document.createElement("span");
        tagSpan.classList.add("filter", "tag-" + value, "noselect");
        if (key == "Featured") { tagSpan.id = "featured-filter" }
        tagSpan.innerText = key;

        tagSpan.addEventListener("click", () => {
            tagSpan.classList.toggle("filter-active");
            console.log("Selected tag:", key);
        });

        filterContainer.appendChild(tagSpan);
    }
}

function getActiveFilters() {
    return Array.from(document.querySelectorAll('.filter-active'))
                .map(el => el.innerText);
}

generateTagFilters()
GenerateInitCards()

if (type == "featured") {
    const featuredFilter = document.getElementById("featured-filter")
    featuredFilter.classList.add("filter-active")
}