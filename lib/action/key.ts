import { KeyCode } from './keyCodes';

interface KeyEventContext {
    /** 原事件 */
    event: KeyboardEvent;
    /** 实际按下的键 */
    keyCode: KeyCode;
    /** 类似 react hook 的 useRef，用于高级处理 */
    useRef<T = any>(initValue?: T): { value: T };
}

type KeyEventHandler = (context: KeyEventContext) => any;

type KeyEventFilter = (handler: KeyEventHandler) => KeyEventHandler;

type KeyBindRule = [
    KeyCode | KeyCode[],
    KeyEventHandler | { down?: KeyEventHandler; up?: KeyEventHandler }
];

interface KeyboardHandlerOptions {
    /** 是否下穿，当启用下穿时，如果当前键盘事件处理器没有命中规则，会交由优先级仅次于其的键盘事件处理器，这个过程会递归进行 */
    fallthrough: boolean;
}

class KeyboardHandler {
    constructor() {}

    /** 激活 */
    active(): void {}

    /** 失活 */
    unactive(): void {}
}

/**
 * 创建一个键盘事件处理器
 * @param priority 处理器优先级，数字越大优先级越高，高优先级的处理器会遮蔽低优先级的处理器
 *      当激活多个相同优先级的键盘事件处理器时，会在控制台中显示警告
 * @param rules 键盘事件规则
 * @param options 可选配置
 */
export function createKeyboardHandler(
    priority: number,
    rules: KeyBindRule[],
    options?: Partial<KeyboardHandlerOptions>
): KeyboardHandler {
    return new KeyboardHandler();
}
