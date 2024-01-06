const strongElement = document.getElementsByTagName("strong");

function highlight() {
    for(const strong of strongElement){
		strong.style.color="rgb(0, 128, 0)";
	}
}
function return_normal() {
    for(const strong of strongElement){
		strong.style.color= "black";
	}
}

