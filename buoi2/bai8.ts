class Circle {
    public radious : any = 1.0
    public color : string = 'red'
    
    constructor(radious : any,color : string){
        this.radious = radious
        this.color = color
    }
    getRadious() : any{
        return this.radious
    }

    setRadious(x : any) : any{
        this.radious = x
        return this.radious
    }

    getColor() : any {
        return this.color
    }

    setColor(x : any) : any {
        this.color = x
        return this.color
    }
}
let a = new Circle (2,'blue')
console.log(a.getRadious());
console.log(a.setRadious(3));
console.log(a.getColor());
console.log(a.setColor('green'));
console.log(a.radious.toString());
console.log(a.color.toString());







