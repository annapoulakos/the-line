import Planet from './planet';

class GameData {
    constructor (universeSize) {
        this.planets = Array.apply(null, Array(universeSize)).map(elem => new Planet());
    }
}

export default GameData;
