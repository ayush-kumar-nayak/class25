class Ground extends BaseClass{
    constructor() {
        
        super(width/2, 390, width, 20)
        Matter.Body.setStatic(this.body,true)
    }
    display() {
        super.display()
    }
}