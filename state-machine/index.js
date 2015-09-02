class StateMachine {
    constructor (name = 'Default') {
        this.name = name;

        this.states = [];
        this.states.push(this.noop.bind(this));
    }

    noop () { return true; }

    execute () {
        let state = this.getCurrentState();
        return state === null? null: state();
    }

    getCurrentState () {
        return this.states.length > 0?
            this.states[0]:
            null;
    }

    remove () {
        return this.states.shift();
    }

    add (state) {
        if (this.getCurrentState() !== state) {
            this.states.unshift(state);
        }
    }
}

export default StateMachine;
