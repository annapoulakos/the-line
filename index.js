/* The Line - Appplication Base */
import FireControlModule from './fire-control';

const ModuleName = 'TheLine';
const ModuleDeps = [
    FireControlModule.name
];

var application = angular.module(ModuleName, ModuleDeps);
