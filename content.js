// content.js


//alert("<insert question here>?13");
// the confirmation script
/*
function postWarning(length) {
    var txt;
    if (confirm("You are about to like a post from " + length + " ")) {
        txt = "Action successful.";
    } else {
        txt = "Action aborted.!";
    }
    document.getElementById("demo").innerHTML = txt;
}
*/


window.setInterval(function() {
    document.querySelectorAll('[data-testid="fb-ufi-likelink"]').forEach(function(element) 
    {
        element.addEventListener("click", function(event) {
            var r = confirm("You clicked like");
            if (r == true) {
              alert("you clicked OK");     
            } else {
              alert("you clicked Cancel");
              event.stopPropagation();
            }           
         }, false);
     });
}, 5000);







    