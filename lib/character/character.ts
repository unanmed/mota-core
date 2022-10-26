import { MotaEventMap, MotaEventTarget } from '../event';

interface CharacterEvent {}

export class Character<
    E extends MotaEventMap<keyof E & string> = CharacterEvent
> extends MotaEventTarget<E & CharacterEvent> {
    constructor() {
        super();
    }

    move(): this {
        return this;
    }

    render(): void {}
}
