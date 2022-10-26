/**
 * 判断一个量是否不是null和undefined
 * @example has(0); // true
 * @example has(null); // false
 */
export function has<T>(v: T): v is NonNullable<T> {
    return v !== void 0 && v !== null;
}
