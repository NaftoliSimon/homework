(function () {
    'use strict';

    function Vehicle(color) {
        this.color = color;
    }

    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log("now going at speed", speed);
    };

    Vehicle.prototype.print = function () {
        console.log(`color is ${this.color}, speed is ${this.speed} `);
    };

    const car = new Vehicle('red');
    console.log(car);

    car.go('5 mph');
    car.print();

    /////////////////////////////////////

    function Plane(color) {
        this.color = color;
    }

    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log("now FLYING at speed", this.speed);
    };

    const airplane = new Plane('white');
    console.log(airplane);
    airplane.go('50mph');
    airplane.print();

}());