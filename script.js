const link = document.getElementById("link");

function highlight() {
    if (link) {
        link.classList.add("highlighted");
    }
}
function return_normal() {
    if (link) {
        link.classList.add("black");
    }
}

