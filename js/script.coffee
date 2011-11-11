$ ->
  videosArray = $("video").toArray()
  $("video").click ->
    if not @paused and not @audio?
      @pause()
    else
      $.each videosArray, (i, el) ->
        el.pause()  unless el.paused

      @audio = new Audio()  not @audio?
      @play()