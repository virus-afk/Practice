// Navbar toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
	document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
	link.addEventListener("click", () => {
		document.body.classList.remove("nav-open");
	});
});

// Product modal
const productCards = document.querySelectorAll(".product-card");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");
const modalClose = document.querySelector(".modal__close");

productCards.forEach(card => {
	card.addEventListener("click", () => {
		const productImg = card.querySelector("img").src;
		const productName = card.querySelector("h3").textContent;
		const productPrice = card.querySelector("p").textContent;

		modalContent.innerHTML = `
			<img src="${productImg}">
			<h3>${productName}</h3>
			<p>${productPrice}</p>
			<button class="btn">Add to Cart</button>
		`;

		modal.classList.add("open");
	});
});

modalClose.addEventListener("click", () => {
	modal.classList.remove("open");
});

// Cart
const cartButton = document.querySelector(".cart-button");
const cartItems = document.querySelector(".cart__items");
let itemCount = 0;

cartButton.addEventListener("click", () => {
	cartItems.innerHTML = `
		<li>Product Name - $10</li>
		<li>Another Product - $15</li>
	`;

	itemCount += 2;
	cartButton.innerHTML = `Cart (${itemCount})`;
});
