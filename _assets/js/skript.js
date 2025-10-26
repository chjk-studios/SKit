function getIdFromUrl() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const id = urlParams.get('id')
    return id
}

const SkriptID = getIdFromUrl();
const detailsDiv = document.getElementById("details");
const descField = document.getElementById("desc");

let skriptData = null;

getSkriptData().then(data => {
    skriptData = data.filter(item => item.id === SkriptID)[0]
    console.log(skriptData)
    updateDetails(skriptData)
});

function updateDetails(data) {
    const createdDate = new Date(data.created);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    document.getElementById("details-created").innerText = createdDate.toLocaleString(undefined, options);

    document.getElementById("details-name").innerText = data.name
    document.getElementById("details-version").innerText = data.version
    document.getElementById("details-downloadbutton").href = data.dlink

    const descMd2Html = marked.parse(data.desc);
    descField.innerHTML = descMd2Html;
}