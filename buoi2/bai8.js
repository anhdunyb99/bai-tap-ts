var Circle = /** @class */ (function () {
    function Circle(radious, color) {
        this.radious = 1.0;
        this.color = 'red';
        this.radious = radious;
        this.color = color;
    }
    Circle.prototype.getRadious = function () {
        return this.radious;
    };
    Circle.prototype.setRadious = function (x) {
        this.radious = x;
        return this.radious;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (x) {
        this.color = x;
        return this.color;
    };
    return Circle;
}());
var a = new Circle(2, 'blue');
console.log(a.getRadious());
console.log(a.setRadious(3));
console.log(a.getColor());
console.log(a.setColor('green'));
console.log(a.radious.toString());
console.log(a.color.toString());
