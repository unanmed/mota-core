import { MotaEventTarget } from './event';

/* -------------------- route.ts -------------------- * 
    录像记录相关内容，仅负责记录、存储录像，或者生成录像等，不负
    责如执行某个录像操作的功能
 * -------------------------------------------------- */

interface RouteEvent {}

export class Route extends MotaEventTarget<RouteEvent> {
    /**
     * 将一个ArrayLike转换成录像实例
     * @param arr 被转换的对象
     * @returns 转换后的录像实例
     */
    static from(arr: ArrayLike<string>): Route {
        return new Route();
    }

    constructor() {
        super();
    }

    /**
     * 向录像中添加一个录像操作
     * @param action 要添加的录像操作
     */
    push(action: string): void {}

    /**
     * 获取录像中的所有操作
     */
    get(): string[] {
        return [];
    }
}
