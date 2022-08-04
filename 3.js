// 3)

class car {
    constructor(brand,model){
    this.brand = brand
    this.model = model
    this.speed = '0'
    this.motion = this.speed > 0 ? 
    "The car is moving" : "The car is not moving" 
    }
checkMotion ()
 { if (this.speed > 0) console.log(this.motion)
    if (this.speed = 0) console.log(this.motion)
    }
 
    brake () 
    {
        this.speed -= 5;
        if(this.speed < 0 ) this.speed = 0;
        console.log(`${this.brand} ${this.speed} `)
    }


    accelerate ()
     {
        this.speed += 25
        console.log(`${this.brand}  ${this.speed} `)
    }
    emergencyBrake () {
        if(this.speed >= 0)  console.log(` საავარიო შეჩერება ${this.speed = 0} კმ/სთ`);
    };

status ()
{
this.speed = 67 
console.log('${this.brand} ${this.model} მიდის  ${this.speed} კმ/სთ')
}

}





