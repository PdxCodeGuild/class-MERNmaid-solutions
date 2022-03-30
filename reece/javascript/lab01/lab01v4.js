// Reece Adams - ADV JS - 3/29/22 - lab 1: Refresher - Version 4 //

class Point {
    constructor(x, y) {
        this.xValue = x;
        this.yValue = y;
    };
    distance() {
        let answer = (this.xValue > this.yValue ? this.xValue - this.yValue : this.yValue - this.xValue );
        // console.log(this.xValue)
        return answer
    };

};

const pointDistance1 = new Point(1, 2);
console.log(pointDistance1.distance());