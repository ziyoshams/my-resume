import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class SmoothScroll {
  constructor() {
    this.link = $('.main-nav a');
    this.event();
  }

  event() {
    this.link.smoothScroll();
  }
}

export default SmoothScroll;
