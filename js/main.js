document.addEventListener('DOMContentLoaded', function() {
    var numImages = 6;
    var index = Math.floor(Math.random() * numImages);
    var changeEvery = 5000;
    
    function displayNextImage() {
      
      document.body.style.backgroundImage = "url('../img/bg"+index.toString()+".jpg')";
      index = (index+1)%numImages;
      //setInterval(displayNextImage, changeEvery);
      setTimeout(displayNextImage,changeEvery);
      //console.log(index);
    }
    
    displayNextImage();
    
}, false);
