/*
Card:
        <div class="card">
            <div class="card-head">
                <div class="card-title">
                    <h2>Name.SKit</h2>
                    <span class="tag" class="tag-blue">Tag</span>         
                </div>
            </div>
            <p>Short Desc</p>
        </div>
*/

function makeCard(id, name, tags, short_desc, ver) {
    let card_link = document.createElement("a")
    card_link.href = "skript.html?id=" + id
    let card_div = document.createElement("div")
    card_div.classList.add("card")
    card_link.appendChild(card_div)

    let card_head_div = document.createElement("div")
    card_head_div.classList.add("card-head")
    card_div.appendChild(card_head_div)

    let card_title_div = document.createElement("div")
    card_title_div.classList.add("card-title")
    card_head_div.appendChild(card_title_div)

    let card_title_text = document.createElement("h2")
    card_title_text.innerHTML = name + '<span id="version-plain">' + ver + '</span>'
    card_title_div.appendChild(card_title_text)

    for (let tag of tags) {
        let span = document.createElement("span")
        span.classList.add("tag", "tag-" + tagColors[tag])
        span.textContent = tag
        card_title_div.appendChild(span)
    }

    let card_short_desc_text = document.createElement("p")
    card_short_desc_text.innerText = short_desc
    card_div.appendChild(card_short_desc_text)

    return card_link
}