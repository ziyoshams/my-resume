var ProgressBar = require ('progressbar.js');

class Bars{
  constructor(label, id, color, level, duration){
    this.container = id;
    this.color = color;
    this.level = level;
    this.duration = duration;
    this.label = label;
    this.createProgressBar();
  }

  createProgressBar(){
    var bar = new ProgressBar.Line(this.container,{
      strokeWidth: 20,
      easing: 'easeInOut',
      duration: this.duration,
      color: this.color,
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'},
      text: {
        value: this.label,
        className: 'progressbar__label',
        style: {
            color: '#fff',
            position: 'absolute',
            left: '10px',
            top: '50%',
            padding: 0,
            margin: 0,
            // You can specify styles which will be browser prefixed
            transform: {
                prefix: true,
                value: 'translate(0%, -50%)'
            }
        },
      }
    });
    bar.animate(this.level);
  }
}

module.exports = Bars;
