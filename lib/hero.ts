import { Character } from './character';

interface HeroEvent {}

export class Hero extends Character<HeroEvent> {
    constructor() {
        super();
    }
}
