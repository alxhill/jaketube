$ ->
  window.randomArray = []
  ###for i in [1..16]
    random = Math.ceil Math.random()*15
    while random in randomArray
      random = Math.ceil Math.random()*15
    randomArray.push random
  ###
  window.audio = new Audio()
  videosArray = $("video").toArray()
  $("video").click ->
    if not @paused
      @pause()
      audio.pause()
    else
      $.each videosArray, (i, el) ->
        el.pause() unless el.paused

      #audio.src = "audio/#{Math.ceil(Math.random()*5)} + .mp3" #Random number from 1 to how many files there are
      @play()
      audio.play()