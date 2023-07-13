window.onload = function() {
    let playButton = document.getElementById("play");
    
    playButton.addEventListener("click", function() {
      document.getElementById("my_audio").play();
    });
    let pauseButton = document.getElementById('pause')
    pauseButton.addEventListener('click', function(){
        document.getElementById('my_audio').pause()
    })  
    
    function redirectHandler(){
      
        window.location = 'historiafinal2.html'
    }
    document.getElementById('my_audio').addEventListener('ended', redirectHandler, false)
  };