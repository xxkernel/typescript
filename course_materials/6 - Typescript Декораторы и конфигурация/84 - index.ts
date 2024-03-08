interface ICar {
	fuel: string;
	open: boolean;
	freeSeats: number;
}

@changeDoorStatus(true)
@changeAmountOfFuel(95)
class myCar implements ICar {
	fuel: string = "50%";
	open: boolean = true;
	freeSeats: number;
	isOpen() {
		console.log(this.fuel);
		return this.open ? "open" : "close";
	}
}

// changeDoorStatus(changeAmountOfFuel(myCar))

function changeDoorStatus(status: boolean) {
	console.log("door init");
	return <T extends { new (...args: any[]): {} }>(constructor: T) => {
		console.log("door changed");
		return class extends constructor {
			open = status;
		};
	};
}

function changeAmountOfFuel(amount: number) {
	console.log("fuel init");
	return <T extends { new (...args: any[]): {} }>(constructor: T) => {
		console.log("fuel changed");
		return class extends constructor {
			fuel = `${amount}%`;
		};
	};
}

const car = new myCar();
console.log(car.isOpen());

// f(x(y()));
