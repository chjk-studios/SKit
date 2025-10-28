async function generateCards() {
    const data = await getSkriptData()

    let sorted_by_creation = data.sort().slice(0, 8).reverse()
    let card = null
    for (const cardData of sorted_by_creation) {
        card = makeCard(cardData.id, cardData.name, cardData.tags, cardData.short_desc, cardData.version)
        latestDiv.appendChild(card)
    }

    let filtered_by_featured = data.sort().filter(item => item.tags?.includes("Featured")).slice(0, 4).reverse()
    for (const cardData of filtered_by_featured) {
        card = makeCard(cardData.id, cardData.name, cardData.tags, cardData.short_desc, cardData.version)
        featuredDiv.appendChild(card)
    }
}

generateCards()