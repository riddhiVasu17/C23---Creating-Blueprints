class box {

    constructor(x, y, width, height) {
    
    var option = {
        restitution : 1
    }
    
    this.body = Bodies.rectangle(x, y, width, height, option);
    World.add(world, this.body);
    
    this.width = width;
    this.height = height;

    }

    display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    fill("red");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);

    }

}