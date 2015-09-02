import Utilities from '../../utilities';
import StateMachine from '../../state-machine';

class Actor {
        constructor () {
        this.stateMachine = new StateMachine();

        this.progress = {
            low: 1,
            high: 5
        };
        this.output = {
            low: 1,
            high: 2
        };

        this.currentProgress = 0;
        this.stateMachine.add(this.working.bind(this));
    }

    execute () {
        return this.stateMachine.execute();
    }
    upgrade () {
        if (Utilities.Random(0,1)) {
            this.progress.low++;
        }
        if (Utilities.Random(0,3)) {
            this.progress.high++;
        }
        if (Utilities.Random(0,1)) {
            this.output.low++;
        }
        if (Utilities.Random(0,2)) {
            this.output.high++;
        }
    }

    working () {
        this.currentProgress += Utilities.Random(this.progress.low, this.progress.high);

        if (this.currentProgress >= 100) {
            this.stateMachine.add(this.producing.bind(this));
        }

        return 0;
    }
    producing () {
        this.currentProgress = 0;
        this.stateMachine.remove();
        return Utilities.Randome(this.output.low, this.output.high);
    }
}

export default Actor;
