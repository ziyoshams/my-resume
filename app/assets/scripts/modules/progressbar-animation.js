window.onload = function onLoad(){

    var strokeThickness = 4;
    var animationTime = 2500;

    var properties = {
      strokeWidth: strokeThickness,
      easing: 'easeInOut',
      duration: animationTime,
      trailColor: '#333',
      trailWidth: 0.1,
     
      svgStyle: {width: '100%', height: '100%'},
      text: {
        style: {
          color: '#000',
          position: 'absolute',
          left: '0',
          top: '-17px',
          padding: 0,
          margin: 0,
          transform: null
        }
      },
      from: {color: '#e74c3c'},
      to: {color: '#ED6A5A'},
      step: function(state, bar){
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    };
    
    properties['color'] = '#113F8C';
    var php = new ProgressBar.Line('#php', properties);

    php.animate(0.9);

    properties['color'] = '#01A4A4';
    var js  = new ProgressBar.Line('#js', properties);
    js.animate(0.8);

    properties['color'] = '#00A1CB';
    var c   = new ProgressBar.Line('#c', properties);
    c.animate(0.9);

    properties['color'] = '#61AE24';
    var Ruby = new ProgressBar.Line('#Ruby', properties);
    Ruby.animate(0.9);

    properties['color'] = '#D0D102';
    var jQuery = new ProgressBar.Line('#jQuery', properties);
    jQuery.animate(0.6);

    properties['color'] = '#F18D05';
    var Swift  = new ProgressBar.Line('#Swift', properties);
    Swift.animate(0.9);

    properties['color'] = '#E54028';
    var Java   = new ProgressBar.Line('#Java', properties);
    Java.animate(0.4);

    properties['color'] = '#D70060';
    var sql    = new ProgressBar.Line('#sql', properties);
    sql.animate(0.9);

    var tajik = new ProgressBar.Line('#tajik', properties);
    tajik.animate(1);

    var russian = new ProgressBar.Line('#russian', properties);
    russian.animate(1);

    var english = new ProgressBar.Line('#english', properties);
    english.animate(1);

};
