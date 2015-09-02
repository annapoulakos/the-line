import _ from 'lodash';

import Utilities from '../../utilities';

import Mine from '../mine';
import Lab from '../lab';
import Factory from '../factory';
import Farm from '../farm';

class Planet {
    constructor (name = null) {
        this.name = this.createName(name);

        this.planetSize = Utilities.Random(5,20);
        this.money = 0;
        this.resources = 0;
        this.research = 0;
        this.food = 100;

        this.population = 100;

        this.mines = [new Mine()];
        this.labs = [];
        this.factories = [];
        this.farms = [new Farm()];
    }

    execute () {
        this.resources += this.mines.map(mine => mine.execute()).reduce((p,c) => p + c, 0);
        this.research += this.labs.map(lab => lab.execute()).reduce((p,c) => p + c, 0);
        this.ships += this.factories.map(factory => factory.execute()).reduce((p,c) => p + c, 0);
        this.money += (this.population / 10)|0;

        this.updatePopulation();
    }

    updatePopulation () {
        var foodConsumption = Math.ceil(this.population / 10),
            foodProduction = this.farms.map(farm => farm.execute()).reduce((p,c) => p + c, 0);

        if (foodConsumption > foodProduction) {
            this.population++;
        } else {
            this.population--;
        }
    }

    createName (name) {
        if (name === null) {
            // TODO: Pull from random planetoid name list
            name = 'Default Planetoid Name';
        }

        return name;
    }

    addFarm () {
        if (this.money <= this.getCurrentFarmCost() && this.resources <= this.getCurrentFarmMaterials() && this.farms.length < (2*this.planetSize)) {
            this.money -= this.getCurrentFarmCost();
            this.resources -= this.getCurrentFarmMaterials();
            this.farms.push(new Farm());
        }
    }
    getCurrentFarmCost () {
        return 25 * (this.farms.length);
    }
    getCurrentFarmMaterials () {
        return 25 * (this.farms.length);
    }

    addMine () {
        if (this.money <= this.getCurrentMineCost() && this.mines.length < this.planetSize) {
            this.money -= this.getCurrentMineCost();
            this.mines.push(new Mine());
        }
    }
    getCurrentMineCost () {
        return 100 * this.mines.length;
    }

    addFactory () {
        if (this.resources <= this.getCurrentFactoryCost() && this.factories.length < this.planetSize) {
            this.resources -= this.getCurrentFactoryCost();
            this.factories.push(new Factory());
        }
    }
    getCurrentFactoryCost () {
        return 100 * (1 + this.factories.length);
    }

    addLab () {
        if (this.resources <= this.getCurrentLabMaterials() && this.money < this.getCurrentLabCost() && this.labs.length < (this.planetSize / 2)) {
            this.resources -= this.getCurrentLabMaterials();
            this.money -= this.getCurrentLabCost();
            this.labs.push(new Lab());
        }
    }
    getCurrentLabMaterials () {
        return 100 * (1 + this.labs.length);
    }
    getCurrentLabCost () {
        return 100 * (1 + this.labs.length);
    }

    upgradePlanet () {
        if (this.research < this.getCurrentResearchCost()) {
            this.research -= this.getCurrentResearchCost();
            this.upgrades++;

            _.each(this.mines, mine => { mine.upgrade(); });
            _.each(this.labs, lab => { lab.upgrade(); });
            _.each(this.factories, factory => { factory.upgrade(); });
            _.each(this.farms, farm => { farm.upgrade(); });
        }
    }
    getCurrentResearchCost () {
        return 100 * (Math.pow(1.25, this.upgrades))|0;
    }
}

export default Planet;
