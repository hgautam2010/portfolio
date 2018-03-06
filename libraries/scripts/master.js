var sth = [[-100,200],[200,-50],[300,-100],[50,-90],[-110,-110],[80,150]];
var dev = [[-100,200],[200,-50],[300,-100],[-424,436],[543,-111],[-276,131]];
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
