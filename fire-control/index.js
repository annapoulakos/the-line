const ModuleName = 'FireControlModule';
const ModuleDeps = [];

var FireControlModule = angular.module(ModuleName, ModuleDeps);

class FireControl {
    constructor () {}
}

FireControl.$inject = [];

FireControlModule.controller('FireControl', FireControl);

export default FireControlModule;
