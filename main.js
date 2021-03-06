class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food = this.food + 2

    }
    eat() {
        if (this.food === 0) {
            this.isHealthy = false
        } else {
            this.food = this.food - 1

        }

    }
}


class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {

        return this.capacity - this.passengers.length

    }
    join(Traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(Traveler)


        }

    }
    shouldQuarantine() {

        for (let i = 0; i < this.passengers.length; i++) {
            let currentPassenger = this.passengers[i]
            if (!currentPassenger.isHealthy) {

                return true

            }
        }
        return false


    }
    totalFood() {
        let sum = 0
        for (let i = 0; i < this.passengers.length; i++) {
            let currentPassenger = this.passengers[i]
            sum = sum + currentPassenger.food



        }
        return sum
    }
}