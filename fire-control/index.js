import GameData from '../game-data';

const ModuleName = 'FireControlModule';
const ModuleDeps = [];

var FireControlModule = angular.module(ModuleName, ModuleDeps);

class FireControl {
    constructor () {
        this.gameData = new GameData(10);
    }
}

FireControl.$inject = [];

FireControlModule.controller('FireControl', FireControl);

export default FireControlModule;
