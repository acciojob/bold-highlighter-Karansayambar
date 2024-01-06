const strongElement = document.getElementsByTagName("strong");

function highlight() {
    for(const strong of strongElement){
		strong.classList.add("highlighted");
	}
}
function return_normal() {
    for(const strong of strongElement){
		strong.classList.remove("highlighted");
	}
}

