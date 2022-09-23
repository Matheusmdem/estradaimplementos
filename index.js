window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(van)
  activateMenuAtCurrentSection(sider)
  activateMenuAtCurrentSection(bodywork)
  activateMenuAtCurrentSection(transtora)
  activateMenuAtCurrentSection(board)
  activateMenuAtCurrentSection(special)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
};

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
  
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  const sectionBoudaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline
  
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if(sectionBoudaries) {
      menuElement.classList.add('active')
  }
};

function showNavOnScroll() {
  let navigation = document.getElementById('navigation');
  
  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  } else {
    navigation.classList.add('scroll')
  }
};

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
};

function openMenu() {
    document.body.classList.add('menu-expanded')
};

function closeMenu() {
    document.body.classList.remove('menu-expanded')
};

function showProducts() {
  const elementProducts = document.querySelectorAll('.showHide');

  elementProducts.forEach(element => {
    element.classList.toggle('products')
  });
};

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 800,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #outdoor,
  #outdoor img,
  #outdoor .stats,
  #van,
  #van header,
  #van .card,
  #sider,
  #sider header,
  #sider .card,
  #bodywork,
  #bodywork header,
  #bodywork .card,
  #transtora,
  #transtora header,
  #transtora .card,
  #board,
  #board header,
  #board .card,
  #special,
  #special header,
  #special .card,
  #about,
  #about header,
  #about .content`
);

let time = 3500,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;
  
function nextImage() {

  images[currentImageIndex]
    .classList.remove("selected")

  currentImageIndex++

  if (currentImageIndex >= max) {
    currentImageIndex = 0
  }

  images[currentImageIndex]
    .classList.add("selected")
};

function start() {
  setInterval(() => {
    nextImage()
  }, time)
};

const openModalButton = document.querySelector('#items');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');
const imgModal = document.getElementById('imgModal');
const h3Modal = document.getElementById('h3-modal');

const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

openModalButton.addEventListener("click", function(e) {
  if (e.target.localName === 'img') {
    imgClicked = e.target.src
    imgModal.src = imgClicked
    
    h3Clicked = e.path[1].children[0].innerHTML
    h3Modal.textContent = h3Clicked

    toggleModal()
  };
});

window.addEventListener("load", start);