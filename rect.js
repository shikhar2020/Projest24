class Rect {
    constructor(x,y,width,height) {
        
        this.x=x;
        this.y=y;
        
        
        this.rect=Bodies.rectangle(x,y,this.width,this.height);
        World.add(world,this.rect);
    }
    display() {
        push ();
        //translate();
        imageMode(CENTER);
       
        
        pop ();
    }
}