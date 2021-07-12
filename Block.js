class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("block.png");
      World.add(world, this.body);
      this.Visibilty = 255;
    }
    display(){
      
     
      if(this.body.speed < 3){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      }
      else {
        
        World.remove(world,this.body);
        push();
        this.Visibilty = this.Visibilty - 10;
        tint(255,this.Visibilty)
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
      }
      
    }
}