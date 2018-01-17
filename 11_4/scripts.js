function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var samsungGalaxy = new Phone("Samsung", 2150, "black");
var onePlus = new Phone("OnePlus", 1900, "swhite");

iPhone6S.printInfo();
samsungGalaxy.printInfo();
onePlus.printInfo();