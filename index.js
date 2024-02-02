'use strict';


// nav drop down 

const dropMenuBtn = document.querySelector('.drop__menu--btn');
const dropMenu = document.querySelector('.drop__menu');

dropMenuBtn.addEventListener('click', () => {
  if (dropMenu.classList.contains('translate-y-0')) {
    dropMenu.classList.remove('translate-y-0');
    dropMenu.classList.remove('opacity-0');
  } else {
    dropMenu.classList.add('translate-y-0');
    dropMenu.classList.add('opacity-90');
  }
});


// Background images

const background = document.querySelector('.background__overlay');
// console.log(background);
background.innerHTML = '';
// console.log(background.innerHTML);
for (let i = 1; i <= 8; i++) {
  const num = Math.trunc(Math.random() * 23 + 1);
  const html = `<img  class=" h-full w-full object-cover object-center lg:h-full lg:w-full img${i}" src="booksImg/img${num}.jpg" alt="">`;
  background.insertAdjacentHTML('beforeend', html)
}


// card-UI_verse

const cardsUIv = document.querySelector('.cards__UIv')

for (let i = 1; i <= 8; i++) {
  const num = Math.trunc(Math.random() * 10 + 1);
  const html = `
  <div class="flex flex-col border-2 border-black bg-slate-50 bg-opacity-60 p-4 sm:hover:scale-105  delay-100 ease-linear shadow-2xl">
				<!-- <div class="card__img "> -->
				<img class=" border-2 border-black w-56 h-64" src="booksImg/img${num}.jpg" alt="">
				<div class="flex flex-col space-y-2 text-xl my-4 ">
					<span class="name__text">Book_No:${i}</span>
					<span class="price__text ">$${100 * i + 199} <span class="line-through mx-2">$${100 * i + 399 * i}</span></span>
				</div>
				<a class="addCart__btn text-2xl p-2 border-2 hover:scale-95 border-white bg-black text-white flex flex-row justify-center items-center space-x-2 "
					>
					<span class="material-symbols-outlined  ">
						shopping_cart
					</span>
					<span class="">Add to cart</span>
				</a>
			</div>
  `;
  cardsUIv.insertAdjacentHTML('beforeend', html);

}


// Shopping cart

const addCartBtns = document.querySelectorAll('.addCart__btn');
const cartBtn = document.querySelector('.cart__btn');
const cartBtnNote = document.querySelector('.cart__btn--note');
console.log(cartBtnNote);


let i = 0;
const data = { name: [], price: [] }
addCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('Added to cart')
    cartBtnNote.classList.remove('hidden');
    cartBtnNote.textContent = `${i + 1}`;
    data.name[i] = btn.parentElement.querySelector('.name__text').textContent
    data.price[i] = btn.parentElement.querySelector('.price__text').textContent.split(' ')[0]
    console.log(data);
    i++;
  });
});

data.name.forEach(name => {
  const html = `<h1>${name}</h1>`;
  cardsUIv.insertAdjacentHTML('beforeend', html);
});

// check out
const displayCheckout = document.querySelector('.checkOut');
const bg0 = document.querySelector('header');
const bg1 = document.querySelector('main');
const bg2 = document.querySelector('section');
const bg3 = document.querySelector('footer');

cartBtn.addEventListener('click', () => {
  bg0.classList.add('blur')
  bg1.classList.add('blur')
  bg2.classList.add('blur')
  bg3.classList.add('blur')
  displayCheckout.classList.remove('hidden')
});

const backBtn = document.querySelector('.back__btn');
backBtn.addEventListener('click', () => {
  bg0.classList.remove('blur')
  bg1.classList.remove('blur')
  bg2.classList.remove('blur')
  bg3.classList.remove('blur')
  displayCheckout.classList.add('hidden')
});

// Footer 

const now = new Date();
const nowYr = now.getFullYear();

// Newsletter 
const emailInput = document.querySelector('.email__input');
const emailBtn = document.querySelector('.email__btn');

function isValidEmail(email) {
  // Regular expression for a simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

emailBtn.addEventListener('click', () => {
  if (isValidEmail(emailInput.value)) alert('Email has been received successfully, Newsletters are now Active.');
  else alert('Input a valid email!!')
})



// Copy right content
const cpyRtDateEl = document.querySelector('.cpyRtDate');
cpyRtDateEl.textContent = nowYr;

// Currently in development

const devStage = document.querySelectorAll('.dev_stage');
devStage.forEach(element => element.addEventListener('click', () => alert(`Access denied!!\nThis section is under development.`)));

