(function() {
  var __indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === item) return i;
    }
    return -1;
  };
  $(function() {
    var i, index, num, random, theClass, videoTag, videosArray, _len;
    window.randomArray = [];
    for (i = 1; i <= 9; i++) {
      random = Math.ceil(Math.random() * 15);
      while (__indexOf.call(randomArray, random) >= 0) {
        random = Math.ceil(Math.random() * 15);
      }
      randomArray.push(random);
    }
    for (index = 0, _len = randomArray.length; index < _len; index++) {
      num = randomArray[index];
      videoTag = "<video src='videos/" + num + ".webm' muted></video>";
      if (index >= 0 && index < 3) {
        theClass = '.c1';
      } else if (index >= 3 && index < 6) {
        theClass = '.c2';
      } else if (index >= 6 && index < 9) {
        theClass = '.c3';
      } else {
        console.log("you fucked up");
      }
      $(theClass).append(videoTag);
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
        audio.src = "audio/" + (Math.ceil(Math.random() * 5)) + ".mp3";
        this.play();
        return audio.play();
      }
    });
  });
}).call(this);
