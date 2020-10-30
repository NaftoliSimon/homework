(function () {
    'use strict';

    class Vehicle {

        constructor(color) {
            this.color = color;
        }

        go(speed) {
            this.speed = speed;
            console.log("now going at speed", speed);
        }
        print() {
            console.log(`color is ${this.color}, speed is ${this.speed} `);
        }
    }

    const v1 = new Vehicle('green');
    v1.go(5);
    v1.print();
    console.log(v1);

    class Plane extends Vehicle {
        constructor(color) {
            super(color);
        }

        go(speed) {
            this.speed = speed;
            console.log("now FLYING at speed", this.speed);
        }
    }

    const p1 = new Plane('silver');
    p1.go(500);
    p1.print();
    console.log(p1);
}());