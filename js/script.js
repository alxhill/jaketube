(function() {
  var __indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === item) return i;
    }
    return -1;
  };
  $(function() {
    var i, random, videosArray;
    window.randomArray = [];
    for (i = 1; i <= 16; i++) {
      random = Math.ceil(Math.random() * 15);
      while (__indexOf.call(randomArray, random) >= 0) {
        random = Math.ceil(Math.random() * 15);
      }
      randomArray.push(random);
    }
    window.audio = new Audio();
    videosArray = $("video").toArray();
    return $("video").click(function() {
      if (!this.paused) {
        this.pause();
        return audio.pause();
      } else {
        $.each(videosArray, function(i, el) {
          if (!el.paused) {
            return el.pause();
          }
        });
        audio.src = "" + (Math.ceil(Math.random() * 5)) + " + .mp3";
        this.play();
        return audio.play();
      }
    });
  });
}).call(this);
