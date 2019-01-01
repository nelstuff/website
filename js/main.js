document.addEventListener('DOMContentLoaded', function() {
    
    var index = 0;
    var numImages = 6;
    var changeEvery = 10000;
    
    function displayNextImage() {
      
      document.body.style.backgroundImage = "url('../img/bg"+index.toString()+".jpg')";
      index = (index+1)%numImages;
      //setInterval(displayNextImage, changeEvery);
      setTimeout(displayNextImage,changeEvery);
      //console.log(index);
    }
    
    displayNextImage();
    
}, false);