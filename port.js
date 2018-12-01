'use strict';
var pause = 15;
var speed = 5;
var texts = [' Developer', ' Programmer'];
(function() {
  var text = texts[0];
  var cur = 0,
    dir = 1,
    cur_text = 0;

  var s = 0;

  setInterval(function loop() {
    cur += dir;
    if (cur < 0) {
      cur = 0;
      dir = -dir;
      cur_text = (++cur_text) % 2;
      text = texts[cur_text];
    }
    if (cur > text.length) {
      cur = text.length;
      if (s++ > pause) {
        s = 0
        dir = -dir;
      }
    }
    document.querySelector('#type').setAttribute('class', text.toLowerCase())
    document.querySelector('#type').innerHTML = text.substring(0, cur);
  }, 500 / speed)

})()