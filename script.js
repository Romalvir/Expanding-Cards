// make the variable panels, more than one panel use all. node list
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeActiveClasses()
		panel.classList.add("active")
	})
} )


function removeActiveClasses(){
	panels.forEach( (panel) => {
		panel.classList.remove("active")
	} )
}