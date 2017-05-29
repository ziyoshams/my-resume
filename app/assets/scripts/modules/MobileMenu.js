import $ from 'jquery';

class MobileMenu{
  constructor(){
      this.menuIcon = $(".header-box__menu-icon");
      this.menuContent = $(".header-box__menu-content");
      this.events();
  }

  events(){
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu(){
    this.menuContent.toggleClass("header-box__menu-content--is-visible");
    this.menuContent.toggleClass("header-box__menu-content--is-expanded");
    this.menuIcon.toggleClass("header-box__menu-icon--close-x");
  }

}

module.exports = MobileMenu;
