import { has } from './utils';

/**
 * 事件
 */
export interface MotaEvent<K extends string, T extends MotaEventMap<K>> {
    target: MotaEventTarget<T>;
    type: K;
}

/**
 * 事件映射
 */
export type MotaEventMap<T extends string = string> = {
    [K in T]: MotaEvent<any, any>;
};

/**
 * 事件执行器，包括函数和配置
 */
export type EventExecutor<T extends MotaEvent<any, any>> = {
    fn: EventFn<T>;
    option: MotaEventOption;
};

/**
 * 事件监听函数
 */
export type EventFn<T extends MotaEvent<any, any>> = (event: T) => void;

/**
 * 事件列表
 */
export type MotaEventList<T extends MotaEventMap> = {
    [E in keyof T]: EventExecutor<T[E]>[];
};

/**
 * 事件配置
 */
export type MotaEventOption = {};

/**
 * 事件目标，T是事件接口
 */
export class MotaEventTarget<T extends MotaEventMap<keyof T & string>> {
    /** 所有的事件 */
    private readonly events: MotaEventList<T> = {} as MotaEventList<T>;

    constructor() {}

    /**
     * 添加事件监听器
     */
    on<K extends keyof T>(
        type: K,
        listener: EventFn<T[K]>,
        option: MotaEventOption = {}
    ): void {
        if (!has(this.events[type])) this.events[type] = [];
        this.events[type].push({
            fn: listener,
            option
        });
    }

    /**
     * 移除事件监听器
     */
    off<K extends keyof T>(type: K, listener: EventFn<T[K]>): void {
        const i = this.events[type].findIndex(v => v.fn === listener);
        if (i === -1)
            throw new ReferenceError(
                `You are trying to remove a nonexistent listener.`
            );
        this.events[type].splice(i, 1);
    }

    /**
     * 触发指定类型的事件
     * @returns 是否成功执行了监听
     */
    protected dispatch<K extends keyof T>(
        type: K,
        event: T[K],
        option: MotaEventOption = {}
    ): boolean {
        if (!has(this.events[type])) this.events[type] = [];
        try {
            for (const { fn, option: opt } of this.events[type]) {
                fn(event);
            }
        } catch (e) {
            throw e;
        }
        return true;
    }
}
