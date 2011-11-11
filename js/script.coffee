$ ->
  window.randomArray = []
  for i in [1..9]
    random = Math.ceil Math.random()*15
    while random in randomArray
      random = Math.ceil Math.random()*15
    randomArray.push random
  
  for num, index in randomArray
    videoTag = "<video src='videos/#{num}.webm' muted></video>"
    if index >= 0 and index < 3
      theClass = '.c1'
    else if index >= 3 and index < 6
      theClass = '.c2'
    else if index >= 6 and index < 9
      theClass = '.c3'
    else
      console.log "you fucked up"
    
    $(theClass).append videoTag
  
  window.audio = new Audio()
  videosArray = $("video").toArray()
  $("video").click ->
    if not @paused
      @pause()
      audio.pause()
    else
      $.each videosArray, (i, el) ->
        el.pause() unless el.paused

      audio.src = "audio/#{Math.ceil(Math.random()*5)}.mp3" #Random number from 1 to how many files there are
      @play()
      audio.play()