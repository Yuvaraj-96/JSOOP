class circle{

    #radius=3;
    #color="red"

    // constructor(radius,color)
    // {
    //     this.#radius= radius;
    //     this.#color = color; 
    // }

     circle() {
        
    }
    circle(radius) {
        this.#radius= radius;
        
    }
    circle(radius,color) {
        this.#radius= radius;
        this.#color = color;  
    }
    getRadius()
    {
        return this.#radius;
    }
    setRadius(radius)
    {
     this.#radius = radius;
    }

    getColor()
    {
        return this.#color;
    }
    setColor(color)
    {
     this.#color = color;
    }
    toSting()
    {

        return `Radius is ${this.#radius} and Color is ${this.#color}`;
    }

    getArea()
    {
        return Math.PI*Math.pow(this.#radius,2) ;
    }
    getCircumference()
    {
        return Math.PI*2*this.#radius
    }



}

var radi= new circle();
console.log(radi.getRadius());
console.log(radi.getColor());
console.log(radi.toSting());
console.log(radi.getArea());
console.log(radi.getCircumference());
