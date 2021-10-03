class BaseClass{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,30,30)
    }
}