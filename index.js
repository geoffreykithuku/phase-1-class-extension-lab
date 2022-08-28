// Your code here
class Polygon {
	
	constructor(sides) {
		this.sides = sides
	}
	
	// Counts the number of sides (each index in the array).
	get countSides() { 
		return this.sides.length 
	}
	
	// Calculates the sum of each side (each index in the array) of the polygon.
	get perimeter() {
		// Get total value with 0 passed as the starting initial value 
		let sum = this.sides.reduce((total, currentValue) => { return total + currentValue }, 0) 
		return sum
	}
}

// Checks if the given 3 sides for a triangle is valid.
class Triangle extends Polygon {
	get isValid() {
		let a = this.sides[0];
		let b = this.sides[1];
		let c = this.sides[2];
		// The sum of the lengths of any two sides of a triangle is greater than the length of the third side. 
		if (a + b < c || a + c < b || b + c < a) {
			return false;
		} else {
			return true;
		}
	}
}

// Checks if the given 4 sides for a square is valid.
class Square extends Polygon {
	get isValid() {
		// Is valid when the lengths of all sides are equal.
		return this.sides.every(val => val === this.sides[0]);
	}
	get area(){
		return this.sides[0] * this.sides[1];
	}
}