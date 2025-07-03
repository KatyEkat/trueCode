// document.addEventListener("DOMContentLoaded", () => {
// 	const burgerMenuBtn = document.querySelector(".burger-btn");
// 	const burgerMenu = document.querySelector(".burger-menu");
// 	const burgerBlock = document.querySelector(".burger-block");
// 	const burgerContacts = document.querySelector(".burger-contacts");

// 	burgerMenuBtn.addEventListener("click", () => {
// 		burgerMenu.classList.toggle("show-items");
// 		document.body.style.overflow = burgerMenu.classList.contains("show-items")
// 			? "hidden"
// 			: "auto";
// 	});

// 	const burgerItemMenu = document.querySelectorAll(".vacancy");
// 	const hiddenItems = document.querySelectorAll(".burger-items-hidden");

// 	burgerItemMenu.forEach((item) => {
// 		item.addEventListener("click", () => {
// 			hiddenItems.forEach((hiddenItem) => {
// 				hiddenItem.classList.toggle("show-items");
// 			});
// 			item.classList.toggle("active");
// 		});
// 	});

// 	document.addEventListener("click", (e) => {
// 		const isMenuOpen = burgerMenu.classList.contains("show-items");

// 		const clickInsideMenu =
// 			burgerBlock.contains(e.target) ||
// 			burgerContacts.contains(e.target) ||
// 			burgerMenuBtn.contains(e.target);

// 		if (isMenuOpen && !clickInsideMenu) {
// 			burgerMenu.classList.remove("show-items");
// 			document.body.style.overflow = "auto";
// 		}
// 	});
// });

document.addEventListener("DOMContentLoaded", () => {
	const burgerMenuBtn = document.querySelector(".burger-btn");
	const burgerMenu = document.querySelector(".burger-menu");
	const burgerBlock = document.querySelector(".burger-block");
	const burgerContacts = document.querySelector(".burger-contacts");

	burgerMenuBtn.addEventListener("click", () => {
		burgerMenu.classList.toggle("show-items");
		document.body.style.overflow = burgerMenu.classList.contains("show-items")
			? "hidden"
			: "auto";
	});

	const burgerItemMenu = document.querySelectorAll(".vacancy");
	const hiddenItems = document.querySelectorAll(".burger-items-hidden");

	burgerItemMenu.forEach((item) => {
		item.addEventListener("click", () => {
			hiddenItems.forEach((hiddenItem) => {
				hiddenItem.classList.toggle("show-items");
			});
			item.classList.toggle("active");
		});
	});

	document.addEventListener("click", (e) => {
		const isMenuOpen = burgerMenu.classList.contains("show-items");

		const clickInsideMenu =
			burgerBlock.contains(e.target) ||
			burgerContacts.contains(e.target) ||
			burgerMenuBtn.contains(e.target);

		if (isMenuOpen && !clickInsideMenu) {
			burgerMenu.classList.remove("show-items");
			document.body.style.overflow = "auto";
		}
	});

	const anchorLinks = document.querySelectorAll('.burger-menu a[href^="#"]');

	anchorLinks.forEach((link) => {
		link.addEventListener("click", () => {
			if (burgerMenu.classList.contains("show-items")) {
				burgerMenu.classList.remove("show-items");
				setTimeout(() => {
					document.body.style.overflow = "auto";
				}, 200); 
			}
		});
	});
});
