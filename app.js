let left_btn = document.getElementByclassName('bi-left')[0];
let right_btn = document.getElementByclassName('bi-right')[0];
let cards = document.getElementByclassName('cards')[0];

left_btn.addEventListener('click', () => {
	cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', () => {
	cards.scrollLeft += 140;
})
