// To create responsive canvas
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
