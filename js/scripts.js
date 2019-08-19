var window_width;

// Run JS only when Dom is ready
function DomReady(Ready)
{
	document.addEventListener("DOMContentLoaded", Ready);
	if(document.readyState === "interactive" || document.readyState === "complete")
		Ready();
}

// Proceed when Dom it's ready
DomReady(function() {
	// Tracking Windows width
	window.addEventListener("resize", () => {
		window_width = window.innerWidth; // get new width
		// Toggle nav based on window size
		if(window_width > 768) 
			document.querySelector('header nav').style.display = "block";
		else document.querySelector('header nav').style.display = "none";
	})

	// Add Event listener to toggle menu in small screen
	let menu_icon = document.querySelector("#menu-icon");
	menu_icon.addEventListener("click", MenuHandler);

	// Close menu item if open and window is clicked
	window.addEventListener("click", (e) => {
		if(e.target.className !== "miconic" && e.target.id !== "menu-icon" && window.innerWidth < 768)
			document.querySelector('header nav').style.display = "none";
	})

	// Add Event listener to li that contains nav links
	let li = document.querySelectorAll("header li");
	li.forEach((e)=> {
		e.addEventListener("click", (ele)=> {
			let link = ele.target.querySelector('a');
			if(link) link.click();
		})
	})

});

// Hide menu on small devices
// Toggle menu
function MenuHandler()
{
	let nav = document.querySelector('header nav');
	
	// Toggling menu
	if(nav.style.display === "" || nav.style.display === "none")
		nav.style.display = "block";
	else nav.style.display = "none";
}