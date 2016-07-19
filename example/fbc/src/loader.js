document.getElementById('load').style['margin-top'] = screenHeight / 2 - 35 + 'px';

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
               run();
          }
     });

     loader.start();
})();
