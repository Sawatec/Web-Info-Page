(function(){
  'use strict';
  window.addEventListener('DOMContentLoaded', init, false);

  function init(){
    var links = document.querySelectorAll('nav a');
    for(var i = 0; i < links.length; i++){
      links[i].addEventListener('click', function(e){
        var selected = document.getElementsByClassName('selected');
        selected[0].classList.remove("selected");
        this.classList.add("selected");
      }, false);
    }
    document.getElementById('menu').addEventListener("click", function(e) {
      console.log("klappt");
      document.getElementById("mySidenav").style.width = "250px";
    });
    document.getElementById('close').addEventListener("click", function(e) {
      console.log("klappt");
      document.getElementById("mySidenav").style.width = "0";
    });
  }
})();
