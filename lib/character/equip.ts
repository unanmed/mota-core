import { Character } from './character';
import { Hero } from './hero';

interface EquipEvent {}

export class Equip extends Character<EquipEvent> {
    constructor(id: string) {
        super();
    }

    equip(hero: Hero): void {}

    unequip(hero: Hero): void {}
}
