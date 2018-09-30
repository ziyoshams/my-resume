import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $('.header-box__menu-icon');
    this.menuContent = $('.header-box__menu-content');
    this.navMenu = $('.main-nav');
    this.buttonClicked = $('.main-nav a');
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    this.buttonClicked.click(this.removeTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass('header-box__menu-content--is-visible');
    this.menuContent.toggleClass('header-box__menu-content--is-expanded');
    this.menuIcon.toggleClass('header-box__menu-icon--close-x');
    this.navMenu.toggleClass('main-nav--is-visible');
  }

  removeTheMenu() {
    this.menuContent.removeClass('header-box__menu-content--is-visible');
    this.menuContent.removeClass('header-box__menu-content--is-expanded');
    this.menuIcon.removeClass('header-box__menu-icon--close-x');
    this.navMenu.removeClass('main-nav--is-visible');
  }
}

module.exports = MobileMenu;
