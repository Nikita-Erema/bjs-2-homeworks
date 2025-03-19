function parseCount(parse) {
    if (isNaN(Number.parseFloat(parse))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(parse);
}
function validateCount(parse) {
    try {
        return parseCount(parse);
    } catch (Error) {
        console.log(Error)
    }
}
class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
        if ((secondSide + thirdSide < firstSide) || (firstSide + thirdSide < secondSide) || (firstSide + secondSide < thirdSide)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter () {
        return this.firstSide + this.secondSide + this.thirdSide;
    }
    get area () {
        let semiper = this.perimeter / 2
        let _area = Math.sqrt(semiper*(semiper - this.firstSide)*(semiper - this.secondSide)*(semiper - this.thirdSide));
        return Number(_area.toFixed(3));
    }
}
function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch (error) {
        console.log(error);
    }
}