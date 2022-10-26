import { Character } from './character';
import { MotaEventMap, MotaEventTarget } from './event';

type ItemType = 'items' | 'constants' | 'tools';

interface ItemEvent {}

export class Item<
    T extends ItemType,
    E extends MotaEventMap<keyof E & string> = ItemEvent
> extends Character<ItemEvent & E> {
    /** 装备类型 */
    type: T;
    /** 物品id */
    id: string;

    constructor(type: T, id: string) {
        super();
        this.type = type;
        this.id = id;
    }

    use(): boolean {
        return true;
    }
}
