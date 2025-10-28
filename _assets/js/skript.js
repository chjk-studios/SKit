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

getSingleSkriptData(SkriptID).then(data => {
    updateDetails(data)
});

function updateDetails(data) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (id && id == data.id) {
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

        document.getElementById("details-name").innerText = data.name;
        document.getElementById("details-author").innerText = "By " + data.author;
        document.getElementById("details-version").innerText = data.version;
        document.getElementById("details-downloadbutton").href = data.dlink;

        document.title = `${data.name} by ${data.author}`;

        const descMd2Html = marked.parse(data.desc);
        descField.innerHTML = descMd2Html;
    } else {
        document.getElementById("details-created").innerText = "Not Found!";

        document.getElementById("details-name").innerText = "Not Found!";
        document.getElementById("details-author").innerText = "Not Found!";
        document.getElementById("details-version").innerText = "Not Found!";
        descField.innerHTML = "<h3>The Skript You tried to Find was not found in the SKit database!</h3>";
        document.getElementById("details-downloadbutton").href = "/404.html";
    }
    
}

