'use strict'

const homeButton = document.querySelector('#home');
const showcaseButton = document.querySelector('#showcase');
const cartButton = document.querySelector('#cart');

const tabs = document.querySelector('.tabcontainer');

homeButton.onclick = () => {
  showTab('home');
}

showcaseButton.onclick = () => {
  showTab('showcase')
}

cartButton.onclick = () => {
  showTab('cart')
}

function showTab(tabName) {
  if (tabName == 'home') {
    tabs.scroll(0, 0);
  }

  if (tabName == 'showcase') {
    tabs.scroll(375, 0);
  }

  if (tabName == 'cart') {
    tabs.scroll(750, 0);
  }
}
