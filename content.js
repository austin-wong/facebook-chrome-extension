// content.js


confirm("<insert question here>?");
// the confirmation script
function postWarning(length) {
    var txt;
    if (confirm("You are about to like a post from " + length + " ")) {
        txt = "Action successful.";
    } else {
        txt = "Action aborted.!";
    }
    document.getElementById("demo").innerHTML = txt;
}

document.querySelectorAll('a[data-testid="fb-ufi-likelink"]').forEach(function(element){element.addEventListener('click', function(){alert("You clicked like")})});