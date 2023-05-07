// header burger

const navWrapper = document.querySelector(".nav-wrapper");
const navBurger = document.querySelector(".burger");
const navBurgerDiv1 = document.querySelector(".burger .burger-2-div");
const navBurgerDiv2 = document.querySelector(".burger .burger-3-div");




function navToggler() {
    navWrapper.classList.toggle("nav-links-burger");
    navBurger.style.rotate = "180deg"
    navBurgerDiv1.classList.toggle("burger-2");
    navBurgerDiv2.classList.toggle("burger-3");
}

navBurger.addEventListener("click", navToggler);


// carousel

let slideIndex = 1;
showSlides(slideIndex);

let prev = document.querySelector(".prev")
let next = document.querySelector(".next")


prev.addEventListener("click", function() {
    plusSlides(-1)
})
next.addEventListener("click", function() {
    plusSlides(1)
})

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}


// cards container 

const cardsWrapper = document.querySelector(".cards-wrapper");

const data = [
  {
    image: 'static/img/page1/png/card-flight.png',
    title: 'FLIGHT BOOKING',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
  },
  {
    image: 'static/img/page1/png/card-hotel.png',
    title: 'HOTEL & RESORT BOOKING',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
  },
  {
    image: 'static/img/page1/png/card-beach.png',
    title: 'FAMILY TRIP PLANNER',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
  },
  {
    image: 'static/img/page1/png/card-cruise.png',
    title: 'CRUISE TOUR',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
  },
  {
    image: 'static/img/page1/png/card-camp.png',
    title: 'FIRE CAMP',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
  },
  {
    image: 'static/img/page1/png/card-corporate.png',
    title: 'CORPORATE HOLIDAYS',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
  }
];

data.forEach((item) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.setAttribute('src', item.image);


  const content = document.createElement('div');
  content.classList.add('content');

  const title = document.createElement('h4');
  title.textContent = item.title;

  const description = document.createElement('p');
  description.textContent = item.description;

  content.appendChild(img);
  content.appendChild(title);
  content.appendChild(description);

  card.appendChild(content);
  cardsWrapper.appendChild(card);
});

const modalWrapper = document.querySelector('.modal-wrapper');
const closeButton = document.querySelector('.modal-close-button');

// open modal
function openModal(img, title, description) {
  const modalImage = modalWrapper.querySelector('.modal-img');
  modalImage.setAttribute('src', img);

  const modalTitle = modalWrapper.querySelector('.modal-header');
  modalTitle.textContent = title;

  const modalDescription = modalWrapper.querySelector('.modal-description');
  modalDescription.textContent = description;

  // show modal
  modalWrapper.classList.add('modal-wrapper-active');
}

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  const imageUrl = card.querySelector('img').getAttribute('src');
  const title = card.querySelector('h4').textContent;
  const description = card.querySelector('p').textContent;

  card.addEventListener('click', () => {
    openModal(imageUrl, title, description);
  });
});

closeButton.addEventListener('click', () => {
  modalWrapper.classList.remove('modal-wrapper-active');
});

window.addEventListener('click', (e) => {
  if (e.target == document.querySelector(".modal-wrapper")) {
    modalWrapper.classList.remove('modal-wrapper-active');
  }
})

// email validation

// const txt = document.querySelector(".txt")



const subscribe = document.querySelector(".sub-input")

function ValidateEmail(subscribe) {

  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (subscribe.value.match(validRegex)) {

    alert("you have subscribed successfully");

    return true;

  } else {

    alert("Invalid email address!");
  
    return false;

  }

}

  
// (function (d) {
//   var w = d.documentElement.offsetWidth,
//       t = d.createTreeWalker(d.body, NodeFilter.SHOW_ELEMENT),
//       b;
//   while (t.nextNode()) {
//       b = t.currentNode.getBoundingClientRect();
//       if (b.right > w || b.left < 0) {
//           t.currentNode.style.setProperty('outline', '1px dotted red', 'important');
//           console.log(t.currentNode);
//       }
//   };
// }(document));