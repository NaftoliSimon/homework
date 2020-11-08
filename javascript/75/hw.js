(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const antCount = document.getElementById('antAmount');
    const colorPicker = document.getElementById('color');
    const antAddAmount = document.getElementById('addAmount');

    let frame = 0;
    const maxConsecutiveFrames = 30;
    let numOfConsecutiveFrames = chooseRandomNum(maxConsecutiveFrames);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function chooseRandomNum(max) {
        return Math.floor(Math.random() * max + 1);
    }

    class Ant {
        // # experimental private so no one can change it - but makes jshint very unhappy
        // static #SIZE = 2;

        // js hint not ready for this experimental syntax yet
        static SIZE = 2; // jshint ignore:line

        constructor(color, context) {
            this.x = Ant.getRandomNumber(0, canvas.width); // start location is random so that new ants don't all appear in the same place and immediately have to fight and lose to an older stronger passing ant
            this.y = Ant.getRandomNumber(0, canvas.height);

            this.context = context;
            this.color = color;
            this.dx = Ant.getRandomNumber(-1, 1);
            this.dy = Ant.getRandomNumber(-1, 1);
            this.strength = 0;
            this.draw();
        }

        draw() {
            this.context.beginPath();
            this.context.fillRect(this.x, this.y, Ant.SIZE, Ant.SIZE);
            this.context.fillStyle = this.color;
        }
        move() {
            if (frame < numOfConsecutiveFrames) {
                this.x += this.dx;
                this.y += this.dy;
                frame++;
            } else {
                this.dx = Ant.getRandomNumber(-1, 1);
                this.dy = Ant.getRandomNumber(-1, 1);
                numOfConsecutiveFrames = chooseRandomNum(maxConsecutiveFrames);
                frame = 0;
            }

            if (this.x < Ant.SIZE) {
                this.x = Ant.SIZE;
            } else if (this.x > canvas.width - Ant.SIZE) {
                this.x = canvas.width - Ant.SIZE;
            }

            if (this.y < Ant.SIZE) {
                this.y = Ant.SIZE;
            } else if (this.y > canvas.height - Ant.SIZE) {
                this.y = canvas.height - Ant.SIZE;
            }
            this.draw();
        }

        static getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }

    const context = canvas.getContext('2d');

    const ants = [];

    document.getElementById('controls').addEventListener('submit', e => {
        e.preventDefault();
        for (let i = 0; i < antAddAmount.value; i++) {
            ants.push(new Ant(colorPicker.value, context));
        }
        antCount.innerText = ants.length;
    });

    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(ant => ant.move());

        //ant fight
        let antsBeforeFight = ants.length;

        ants.forEach((currentAnt, currentAntIndex) => {
            ants.forEach((otherAnt, otherAntIndex) => {
                const fightDistance = 6;
                if (currentAnt.color !== otherAnt.color && (currentAnt.x - otherAnt.x < fightDistance && currentAnt.y - otherAnt.y < fightDistance) && (currentAnt.x - otherAnt.x > -fightDistance && currentAnt.y - otherAnt.y > -fightDistance)) {
                    if (currentAnt.strength < otherAnt.strength) {
                        ants.splice(currentAntIndex, 1);
                        otherAnt.strength++;
                    }
                    else if (currentAnt.strength > otherAnt.strength) {
                        currentAnt.strength++;
                    }
                    else {
                        if (chooseRandomNum(2) === 1) {
                            ants.splice(currentAntIndex, 1);
                            otherAnt.strength++;
                        } else {
                            ants.splice(otherAntIndex, 1);
                            currentAnt.strength++;
                        }
                    }
                }
            });
        });
        if (ants.length !== antsBeforeFight) {
            antCount.innerText = ants.length;
        }
    }, 100); //17); 
}());