//1

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}

class ProductDetails {
    static showDetails(product) {
        console.log(`Name: ${product.name}`);
        console.log(`Price: ${product.price}`);
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(cartItem) {
        this.items.push(cartItem);
    }

    checkout() {
        console.log("Checkout realizado com sucesso!");
    }
}

//2

class Resource {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
}

class TimeSlotResource extends Resource {
    constructor(id) {
        super(id, ResourceType.TIME_SLOT);
    }
}

class SpaceSlotResource extends Resource {
    constructor(id) {
        super(id, ResourceType.SPACE_SLOT);
    }
}

class ResourceAllocator {
    allocate(resource) {
        throw new Error("ERROR: Attempted to allocate invalid resource");
    }

    free(resource) {
        throw new Error("ERROR: Attempted to free invalid resource");
    }
}

class TimeSlotAllocator extends ResourceAllocator {
    allocate(resource) {
        if (resource instanceof TimeSlotResource) {
            this.findFreeTimeSlot();
            this.markTimeSlotBusy(resource.id);
        } else {
            super.allocate(resource);
        }
    }

    free(resource) {
        if (resource instanceof TimeSlotResource) {
            this.markTimeSlotFree(resource.id);
        } else {
            super.free(resource);
        }
    }

    findFreeTimeSlot() {
        console.log("Encontrei um tempo livre");
    }

    markTimeSlotFree(resourceId) {
        console.log("Liberei um tempo ocupado");
    }

    markTimeSlotBusy(resourceId) {
        console.log("Ocupei um tempo livre");
    }
}

class SpaceSlotAllocator extends ResourceAllocator {
    allocate(resource) {
        if (resource instanceof SpaceSlotResource) {
            this.findFreeSpaceSlot();
            this.markSpaceSlotBusy(resource.id);
        } else {
            super.allocate(resource);
        }
    }

    free(resource) {
        if (resource instanceof SpaceSlotResource) {
            this.markSpaceSlotFree(resource.id);
        } else {
            super.free(resource);
        }
    }

    findFreeSpaceSlot() {
        console.log("Encontrei um espaço livre");
    }

    markSpaceSlotFree(resourceId) {
        console.log("Encontrei um espaço ocupado");
    }

    markSpaceSlotBusy(resourceId) {
        console.log("Ocupei um espaço livre");
    }
}

// 3

class Duck {
    quack() {
        console.log("Quack...");
    }

    swim() {
        console.log("Swim...");
    }
}

class RegularDuck extends Duck {
}

class ElectronicDuck extends Duck {
    constructor() {
        super();
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
        const hughie = new RegularDuck();
        const electricDewie = new ElectronicDuck();
        this.quackAndSwim(hughie, electricDewie);
    }

    quackAndSwim(...ducks) {
        for (const duck of ducks) {
            duck.quack();
            duck.swim();
        }
    }
}

const pool = new Pool();
pool.run();




