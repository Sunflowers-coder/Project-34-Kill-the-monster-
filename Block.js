class Block {
    constructor(x, y, width, height) {
      var options = {
        isStatic: false,
        restitution :0.4,
        friction :1.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(2);
      stroke(0);
      fill("darkRed");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }