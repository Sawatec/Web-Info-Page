(function() {
  'use strict';
  window.addEventListener('DOMContentLoaded', init, false);

  function init(){
    let submitBtn = document.getElementById("sbtBtn").addEventListener("click", submitClick);
    function submitClick(e){
      let name = document.getElementById('name').value;
      console.log(name);
      let email = document.getElementById("em").value;
      let message = document.getElementById('text').value;
      let nameCorrect = checkName(name);
      let emailCorrect = checkMail(email);
      let messageCorrect = checkMessage(message);

      if(nameCorrect && emailCorrect && messageCorrect){
        let modal = document.getElementById("modal");
        modal.style.display = "block";
        let closeBtn = document.getElementById('closeBtn');
        closeBtn.addEventListener("click", event => modal.style.display = "none");
        document.getElementById('content').innerHTML = "Thank you for your message " + name;
      }
    }

    function checkName(name){
      if(!(name.length <= 0) && !(name.length > 15)){
        console.log("yess");
        for(let i = 0; i < name.length; i++){
          if(!isNaN(name.charAt(i))){
            console.log("oops");
            document.getElementById('name').style.border = ' 2px solid red';
            document.getElementById('name').value = '';
            break;
          } else {
            document.getElementById('name').style.border = ' 1px solid lightgrey';
            return true;
          }
        }
      }
    }

    function checkMail(email) {
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        document.getElementById('em').style.border = ' 2px solid red';
        document.getElementById('em').value = '';
      } else {
        document.getElementById('em').style.border = ' 1px solid lightgrey';
        return true;
      }
    }

    function checkMessage(message) {
      if(message.length <= 0 || message.length > 400){
        document.getElementById('text').style.border = ' 2px solid red';
        document.getElementById('text').style.color = ' red';
        document.getElementById('text').placeholder = 'Min: 0   Max: 400';
      } else {
        document.getElementById('text').style.border = ' 1px solid lightgrey';
        return true;
      }
    }
  }
}());
