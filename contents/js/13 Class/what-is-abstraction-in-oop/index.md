---
title: What is Abstraction in OOP ?
---

Making coffee with a coffee machine is a good example of abstraction.
You need to know how to use your coffee machine to make coffee. You need to provide water and coffee beans, switch it on and select the kind of coffee you want to get.
The thing you don’t need to know is how the coffee machine is working internally to brew a fresh cup of delicious coffee. You don’t need to know the ideal temperature of the water or the amount of ground coffee you need to use.
Someone else worried about that and created a coffee machine that now acts as an abstraction and hides all these details. You just interact with a simple interface that doesn’t require any knowledge about the internal implementation.

```javascript
class CoffeeMachine {
	constructor(power, capacity) {
		this.power = power;
		this.capacity = capacity;
		this.waterAmount = 0;
	}
	getWaterAmount() {
		return this.waterAmount;
	}
	setWaterAmount(amount) {
		this.waterAmount = amount;
	}
	getPower() {
		return this.power;
	}
	getCapacity() {
		return this.capacity;
	}
	getTimeToBoil() {
		return (this.waterAmount * 80) / this.power;
	}
	boil() {
		this.waterAmount = 0;
	}
	makeCoffee(amount) {
		this.waterAmount += amount;
		if (this.waterAmount > this.capacity) {
			console.log('Too hot!');
			this.boil();
		}
	}
}

const coffeeMachine = new CoffeeMachine(10000, 400);
coffeeMachine.makeCoffee(200);
```
