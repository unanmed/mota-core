import { MotaEventMap, MotaEventTarget } from '../event';

interface BlockEvent {}

// block 和 character 应该什么关系？
export class Block<
    E extends MotaEventMap<keyof E & string> = BlockEvent
> extends MotaEventTarget<E & BlockEvent> {
    constructor() {
        super();
    }
}
