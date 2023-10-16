let use;
document.getElementById("myButton").onclick = function () {

      use = document.getElementById("myText").value;
      console.log(use);
      document.getElementById("myLabel").innerHTML = use;



}