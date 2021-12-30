"use strict";

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeActiveClass();
		panel.classList.add("active");
	});
});

function removeActiveClass() {
	// panels.forEach((panel) => {
	// 	panel.classList.remove("active");
	// });
	document.querySelector(".active").classList.remove("active");
}