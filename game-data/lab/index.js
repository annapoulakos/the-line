import Actor from '../actor';

class Lab extends Actor {
    constructor () {
        super();

        this.progress = {
            low: 1,
            high: 2
        };
        this.output = {
            low: 1,
            high: 1
        };
    }
}

export default Lab;
