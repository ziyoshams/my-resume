import $ from 'jquery';

class RecentWorks{
  constructor (){
    this.x = $('.recent-work-section__projects');
    this.event();
  }

  event(){
    var that = this.x;
    this.x.hover(
      function(){
        $(this).addClass('test');
      },
      function(){
        $(this).removeClass('test');
      }
    );
  }


}

module.exports = RecentWorks;
