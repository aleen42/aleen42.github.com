document.querySelectorAll('div.start__btn')[0].style.top = screenHeight / 3 * 2 + 'px';
document.getElementById('load').style.top = screenHeight / 2 - 35 + 'px';
document.getElementById('load').style.opacity = 1;

const text = [
     'the Game',
     'the Forbidden City',
     'Walking Up'
];

var textOptions = {
     textArrayIndex: 0,
     textIndex: 0,
     dx: 1,
     backInterval: null,
     typeSpeed: 100,
     typeBackSpeed: 25,
     typeDelay: 2000
};

setInterval(function () {
     if (textOptions.dx === -1) {
          return;
     }

     textOptions.textIndex += textOptions.dx;
     document.getElementById('input_text').innerText = text[textOptions.textArrayIndex].substr(0, textOptions.textIndex);

     if (textOptions.textIndex == 0) {
          textOptions.dx = 1;
          textOptions.textArrayIndex = (textOptions.textArrayIndex + 1) % text.length;
     }

     if (textOptions.textIndex == text[textOptions.textArrayIndex].length) {
          textOptions.dx = -1;
          setTimeout(function () {
               textOptions.backInterval = setInterval(function () {
                    textOptions.textIndex += textOptions.dx;
                    document.getElementById('input_text').innerText = text[textOptions.textArrayIndex].substr(0, textOptions.textIndex);

                    if (textOptions.textIndex == 0) {
                         textOptions.dx = 1;
                         textOptions.textArrayIndex = (textOptions.textArrayIndex + 1) % text.length;

                         clearInterval(textOptions.backInterval);
                    }
               }, textOptions.typeBackSpeed);
          }, textOptions.typeDelay);
     }
}, textOptions.typeSpeed);

(function () {
     var loader = new resLoader({
          resources : [
               'images/bg2.jpg'
          ],
          onStart : function(total){
          },
          onProgress : function(current, total){
          },
          onComplete : function(total){
               setTimeout(function () {
                    document.getElementById('load').style.opacity = 0;

                    document.querySelectorAll('div.start__btn')[0].addEventListener('click', function () {
                         run();
                    });

                    setTimeout(function () {
                         document.querySelectorAll('div.start__btn')[0].style.opacity = 1;
                    }, 800);
               }, 2000);
          }
     });

     loader.start();
})();
