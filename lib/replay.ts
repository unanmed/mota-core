import { MotaEventTarget } from './event';
import { Route } from './route';

/* -------------------- replay.ts -------------------- * 
    录像的实际执行等功能，是否允许多次构造？多次构造时应该有什么
    操作？多次播放？
 * --------------------------------------------------- */

interface ReplayEvent {}

export class Replay extends MotaEventTarget<ReplayEvent> {
    /**
     * 注册一个录像操作
     * @param id 录像操作的唯一标识符
     * @param handler 录像运行到这一操作时执行的函数，为异步函数
     */
    static register(
        id: string,
        handler: (action: string) => Promise<boolean>
    ): void {}

    constructor() {
        super();
    }

    /**
     * 加载录像，准备进行播放
     * @param route 录像内容
     */
    async ready(route: Route): Promise<void> {}

    /**
     * 开始播放录像
     * @returns 是否开始成功
     */
    start(): boolean {
        return true;
    }

    /**
     * 等待当前操作执行完毕后暂停
     * @returns 是否暂停成功
     */
    async pause(): Promise<boolean> {
        return true;
    }

    /**
     * 继续录像的播放
     * @returns 是否继续成功
     */
    resume(): boolean {
        return true;
    }

    /**
     * 等待当前操作执行完毕
     */
    async wait(): Promise<void> {}

    /**
     * 等待当前操作执行完毕后停止录像播放
     * @returns 是否停止成功
     */
    async stop(): Promise<boolean> {
        return true;
    }
}
