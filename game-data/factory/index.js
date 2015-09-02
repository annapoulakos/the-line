import Actor from '../actor';

class Factory extends Actor {
    constructor () {
        super();

        this.progress = {
            low: 1,
            high: 5
        };
        this.output = {
            low: 1,
            high: 2
        };
    }
}

export default Factory;
