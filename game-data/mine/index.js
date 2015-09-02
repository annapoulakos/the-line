import Actor from '../actor';

class Mine extends Actor {
    constructor () {
        super();

        this.progress = {
            low: 1,
            high: 7
        };
        this.output = {
            low: 1,
            high: 3
        };
    }
}

export default Mine;
