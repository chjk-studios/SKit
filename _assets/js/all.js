const params = new URLSearchParams(window.location.search);
const type = params.get('type');

const allTitle = document.getElementById('all-title');

if (type) {
    allTitle.textContent = "All " + type + " Skripts";
} else {
    allTitle.textContent = "Not found..."
}

