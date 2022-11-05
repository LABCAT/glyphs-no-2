import AnimatedGlyph from './AnimatedGlyph.js';

export default class FlowerGlyph extends AnimatedGlyph {

    constructor(p5, x, y, width, direction, size, hueSet) {
        super(p5, x, y, width, size, p5.random(5000, 10000), direction);
        this.hueSet = hueSet;
        this.opacity = 0.3;
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

    setOpacity(opacity) {
        this.opacity = opacity;
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
                this.p.fill(this.hueSet[i % 4], 100, 50, this.opacity);
                this.p.ellipse(0, 30, this.width / 4, this.width);
                this.p.rotate(30);
            }
            this.p.rotate(-this.rotation);
            this.p.translate(-pos.x, -pos.y);
        }
    }
}