class SlingShot {
    constructor(bodyA, bodyB,offSetX,offSetY) {
        var options = {
          bodyA:bodyA,
          bodyB:bodyB,
          stiffness:0.04,
          length:10,
          pointB:{x:this.offSetX,y:this.offSetY}
            //this.image = loadImage("paper.png");
        }
         this.sling=Constraint.create(options)
         World.add(world, this.sling);
    }
    display() {
        strokeWeight(2);
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x+this.offSetX,this.sling.bodyB.position.y+this.offSetY)
//console.log("hi");



    }



}
