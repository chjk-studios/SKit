const params = new URLSearchParams(window.location.search);
const type = params.get('type');
const allDiv = document.getElementById("all-skripts");
const filterContainer = document.getElementById("filter-container")
const searchBar = document.getElementById("search-bar")

const allTitle = document.getElementById('all-title');

let data = [];


async function GenerateInitCards() {
    data = await getSkriptData()
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
            generateFilteredCards()
        });

        filterContainer.appendChild(tagSpan);
    }
}

function getActiveFilters() {
    return Array.from(document.querySelectorAll('.filter-active'))
                .map(el => el.innerText);
}

function shouldShowOnFiltered(value) {
    const filteredByTag = getActiveFilters().every(element => value.tags.includes(element))
    const filteredBySearch = value.name.toUpperCase().includes(searchBar.value.toUpperCase()) || value.short_desc.toUpperCase().includes(searchBar.value.toUpperCase()) || searchBar.value == ""
    return filteredByTag && filteredBySearch
}

function generateFilteredCards() {
    const filtered_data = data.filter(shouldShowOnFiltered)
    allDiv.innerHTML = ""
    generateCards(filtered_data)
}

generateTagFilters()
GenerateInitCards()

if (type == "featured") {
    const featuredFilter = document.getElementById("featured-filter")
    featuredFilter.classList.add("filter-active")
    generateFilteredCards()
}