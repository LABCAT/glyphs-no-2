import AnimatedGlyph from './AnimatedGlyph.js';
import ShuffleArray from '../functions/ShuffleArray.js';

export default class FlowerGlyph extends AnimatedGlyph {

    constructor(p5, x, y, width) {
        super(p5, x, y, width, p5.width * 1.5, p5.random(3000, 6000));
        this.hueSet = ShuffleArray([30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]);
    }

    update() {
        if(this.width < this.maxWidth) {
            this.width = this.width + (Math.random() / 4);
        }
        if(this.clockwiseRotation){
            this.rotation = this.rotation + 0.1;
        }
        else {
            this.rotation = this.rotation - 0.1;
        }
    }

    draw() {
        const currentTime = this.p.millis();
        if(currentTime < this.endTime){
            const scale = this.p.min(1, (currentTime - this.startTime) / (this.endTime - this.startTime)),
                dist = window.p5.Vector.sub(this.destination, this.origin).mult(scale),
                pos = window.p5.Vector.add(this.origin, dist);

            this.p.translate(pos.x, pos.y);
            this.p.rotate(this.rotation);
            this.p.noStroke();
            for (let i = 0; i < 12; i ++) {
                // this.p.stroke(this.hueSet[i % 4], 100, 100);
                this.p.fill(this.hueSet[i % 4], 100, 50, 0.75);
                this.p.ellipse(0, 30, this.width / 4, this.width);
                this.p.rotate(30);
            }
            this.p.rotate(-this.rotation);
            this.p.translate(-pos.x, -pos.y);
        }
    }
}