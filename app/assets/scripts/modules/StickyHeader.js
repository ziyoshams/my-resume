import $ from 'jquery';
import '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.triggerElement = $('.skills-section');
    this.menu = $('.header-box__menu-content');
    this.event();
  }

  event() {
    const that = this;
    new Waypoint({
      element: that.triggerElement[0],
      handler: function(direction) {
        if (direction == 'down') {
          that.menu.addClass('header-box__menu-content--dark');
        } else {
          that.menu.removeClass('header-box__menu-content--dark');
        }
      }
    });
  }
}

export default StickyHeader;
