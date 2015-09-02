import Actor from '../actor';

class Farm extends Actor {
    constructor () {
        super();

        this.progress = {
            low: 10,
            high: 20
        };
        this.output = {
            low: 50,
            high: 125
        };
    }
}

export default Farm;
