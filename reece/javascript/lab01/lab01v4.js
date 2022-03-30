// Reece Adams - ADV JS - 3/29/22 - lab 1: Refresher - Version 4 //

class Point {
    constructor(x, y) {
        this.xValue = x;
        this.yValue = y;
    };
    distance() {
        let answer = (this.xValue > this.yValue ? this.xValue - this.yValue : this.yValue - this.xValue ); 
        return answer
    }; // grabs distance between values and ensures it's positive

}; // Class created

const pointDistance1 = new Point(1, 2);
console.log(pointDistance1.distance()); // console logs distance value