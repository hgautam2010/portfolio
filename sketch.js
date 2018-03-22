var p = [];
var canvas;
var total;
var print;
function setup()
{
	canvas = createCanvas(windowWidth, windowHeight);
	background(255,252,244);
	total = (canvas.height * canvas.width) / 20000;
	if(total > 500)
		total = 500;
	for(let i = 0; i < 500; i++)
	{
		p.push(new particle());
	}
	print = ((canvas.height * canvas.width) < 640000)?0:1;
}

function draw()
{
	background(255,252,244);
	for(let i = 0; i < total; i++)
	{
		for(let j = i + 1; j < total; j++)
		{
			dist = sqrt((p[i].loc.x - p[j].loc.x)*(p[i].loc.x - p[j].loc.x) + (p[i].loc.y - p[j].loc.y)*(p[i].loc.y - p[j].loc.y));
			if(map(1300 - dist, 0, 1300, -1500, 255) > 0)
				p[i].lineWith(p[j].loc);
		}
		p[i].display();
	}
}
