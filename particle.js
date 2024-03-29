function particle() {
  this.loc = new createVector(random(width), random(height));
  this.vel = new createVector(random(-0.5, 0.5), random(-0.5, 0.5));
  this.acc = new createVector(0, 0);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.lineWith = function(p) {
    // stroke(this.r, this.g, this.b, map(1300 - dist, 0, 1300, -1500, 255));
    stroke(255, 255, 255, map(1300 - dist, 0, 1300, -1500, 255));
    strokeWeight(2);
    line(this.loc.x, this.loc.y, p.x, p.y);
  };
  this.applyForce = function(f) {
    this.acc.add(f);
  };
  this.move = function() {
    this.loc.add(this.vel);
    this.check();
    this.vel.add(this.acc);
    this.acc.mult(0);
  };
  this.check = function() {
    if (this.loc.x < 0) {
      this.loc.x = 0;
      this.vel.x *= -1;
    }
    if (this.loc.x > width) {
      this.loc.x = width;
      this.vel.x *= -1;
    }
    if (this.loc.y < 0) {
      this.loc.y = 0;
      this.vel.y *= -1;
    }
    if (this.loc.y > height) {
      this.loc.y = height;
      this.vel.y *= -1;
    }
  };
  this.display = function() {
    this.move();
    noStroke();
    // fill(this.r, this.g, this.b);
    fill(255, 255, 255);
    ellipseMode(CENTER);
    ellipse(this.loc.x, this.loc.y, 8, 8);
  };
}
