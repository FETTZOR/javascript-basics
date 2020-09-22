
// Factory function
function createCircle(radius) {
    return {
        radius, // same as radius: radius,
       draw: function() {
        console.log('draw');
        }
    };
}
const myCircle = createCircle(1);

// Contructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);