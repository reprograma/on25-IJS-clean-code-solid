// arquivo para testes do exercicio exercicio-em-aula.md

// 1. 
class Product {
    constructor(name, price, unit) {
        this.name = name;
        this.price = price;
        this.unit = unit;
    }

    showDetails() {
        console.log(`Product: ${this.name}, Price: ${this.price}, Unit: ${this.unit}`);
    }
}

class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    addToCart(product, quantity) {
        console.log(`Added ${quantity} ${product.unit} of ${product.name} to cart.`);
        this.cart.push({ product, quantity });
    }
}

// 2.
/*abstract class Resource {
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    abstract allocate(): void;
    abstract free(): void;
}

class TimeSlotResource extends Resource {
    allocate() {
        console.log("Allocated a time slot resource.");
    }

    free() {
        console.log("Freed a time slot resource.");
    }
}

class SpaceSlotResource extends Resource {
    allocate() {
        console.log("Allocated a space slot resource.");
    }

    free() {
        console.log("Freed a space slot resource.");
    }
}

class ResourceAllocator {
    allocate(resource: Resource) {
        resource.allocate();
    }

    free(resource: Resource) {
        resource.free();
    }
}*/

// 3.
/*
interface IDuck {
    quack(): void;
    swim(): void;
}

class Duck implements IDuck {
    quack() {
        console.log("Quack...");
    }

    swim() {
        console.log("Swim...");
    }
}

class ElectronicDuck implements IDuck {
    private _on: boolean;

    constructor() {
        this._on = false;
    }

    quack() {
        if (this._on) {
            console.log("Electronic duck quack...");
        } else {
            throw new Error("Can't quack when off");
        }
    }

    swim() {
        if (this._on) {
            console.log("Electronic duck swim");
        } else {
            throw new Error("Can't swim when off");
        }
    }

    turnOn() {
        this._on = true;
    }

    turnOff() {
        this._on = false;
    }
}

class Pool {
    run() {
        const hughie = new Duck();
        const electricDewie = new ElectronicDuck();
        this.quackAndSwim(hughie, electricDewie);
    }

    quackAndSwim(...ducks: IDuck[]) {
        for (const duck of ducks) {
            duck.quack();
            duck.swim();
        }
    }
}
*/
// 4.
/*
interface IWorker {
    work(): string;
}

interface IEater {
    eat(): string;
}

class Human implements IWorker, IEater {
    work() {
        return "Human works";
    }

    eat() {
        return "Human eats";
    }
}

class Robot implements IWorker {
    work() {
        return "Robot works";
    }
}

class MessHall {
    private _eaters: IEater[];

    constructor() {
        this._eaters = [];
    }

    manage() {
        for (const eater of this._eaters) {
            eater.eat();
        }
    }
}

class Factory {
    private _workers: IWorker[];

    constructor() {
        this._workers = [];
    }

    manage() {
        for (const worker of this._workers) {
            worker.work();
        }
    }
}
*/
// 5.
/*
interface ILamp {
    turnOn(): void;
    turnOff(): void;
}

class Lamp implements ILamp {
    private _color: number;

    constructor() {
        this._color = 0;
    }

    turnOn() {
        console.log("Lamp turned on");
    }

    turnOff() {
        console.log("Lamp turned off");
    }

    getColor() {
        return this._color;
    }

    setColor(color: number) {
        this._color = color;
    }
}

class Button {
    private _lamp: ILamp;
    private _state: boolean;

    constructor(lamp: ILamp) {
        this._lamp = lamp;
        this._state = false;
    }

    toggle() {
        this._state = !this._state;
        const buttonOn = this._state;
        if (buttonOn) {
            this._lamp.turnOn();
        } else {
            this._lamp.turnOff();
        }
    }
}
*/