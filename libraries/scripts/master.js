window.onresize = function() {
  var w = window.innerWidth;
	var h = window.innerHeight;
	canvas.size(w,h);
	total = (canvas.height * canvas.width) / 20000;
	if(total > 500)
		total = 500;
  width = w;
  height = h;
	print = ((canvas.height * canvas.width) < 640000)?0:1;
}

window.onload = function() {

}

function animateElements(e) {
    var x = e.clientX;
    var y = e.clientY;
    x = -map(x, 0, canvas.width, -20, 20);
    y = -map(y, 0, canvas.height, -20, 20);

    var el = document.getElementById("pp");
    if ( el.classList.contains('center-div') )
        el.classList.remove('center-div');
    el.style.left = (canvas.width/2 - 150 + x) + "px";
    el.style.top = (canvas.height*0.15 + y) + "px";
}
