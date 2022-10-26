interface MotaOption {}

export class Mota {
    constructor(container: HTMLElement, option?: Partial<MotaOption>) {}
}

/**
 * 在某个容器上创建一个魔塔游戏
 * @param container 容器，是一个html元素
 * @returns 创建的游戏实例
 */
export function create(
    container: HTMLElement,
    option?: Partial<MotaOption>
): Mota {
    return new Mota(container);
}
