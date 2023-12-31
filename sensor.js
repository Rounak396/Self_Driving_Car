class Sensor{
    constructor(car){
        this.car = car;
        this.rayCount = 3;
        this.rayLength = 100;
        this.raySpread = Math.PI/3;

        this.rays = [];
    }

    update(){
        this.rays = [];
        for(let i=0; i<this.rayCount; i++){
            const rayAngle = lerp(
                this.raySpread/2,
                -this.raySpread/2,
                i/(this.rayCount-1)
            );

            const start = {x:this.car.x, y:this.car.y};
            const end = {
                x: this.car.x-Math.sin(rayAngle)*this.rayLength,
                y: this.car.y-Math.cos(rayAngle)*this.rayLength
            };
            this.rays.push([start, end]);
        }
    }
}