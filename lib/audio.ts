import { ref, Ref } from 'vue';

interface AudioOSS {
    set(key: string, audio: AudioBuffer): void;
    get(key: string): AudioBuffer;
    has(key: string): boolean;
}

interface LazyAudioOSS {
    set(key: string, src: string): void;
    get(key: string): HTMLElement;
    has(key: string): boolean;
    preload(key: string): void;
    free(key: string): void;
}

type CustomPlayer = (source: AudioNode) => void;

/** 淡入淡出效果 */
interface MusicFade {
    /** 当前音乐的淡入时间 */
    fadeIn: number;
    /** 上一个音乐的淡出时间 */
    fadeOut: number;
}

interface PlayMusicOption {
    time: number;
    volume: number;
    pitch: number;
    fade: Partial<MusicFade> | number;
    player: CustomPlayer;
}

interface PlaySoundOption {
    id: string;
    volume: number;
    pitch: number;
    player: CustomPlayer;
}

class Volumer {
    constructor() {}

    set(value: number): void {}

    get(): number {
        return 0;
    }

    mute(): void {}

    unmute(): void {}

    /** 获取一个只读的Ref */
    getRef(): Ref<number> {
        return ref(0);
    }
}

export class MusicPlayer {
    volume: Volumer = new Volumer();

    constructor() {}

    /**
     * 添加一个音乐
     * 如果音乐未被添加过，使用时会报错
     * @param name 名称
     * @param src 资源地址
     */
    add(name: string, src: string): void {}

    /**
     * 预加载一个音乐
     * @param name
     */
    preload(name: string): void {}

    /**
     * 释放一个音乐
     * @param name
     */
    free(name: string): void {}

    /**
     * 设置背景音乐
     * @param name
     * @param options
     */
    set(name: string, options?: Partial<PlayMusicOption>): void {}

    /**
     * 插入音乐，播放时会暂停背景音乐，播放后会
     * @param name
     * @param options
     */
    async insert(
        name: string,
        options?: Partial<PlayMusicOption>
    ): Promise<void> {}
    pause(fadeOut?: number): void {}

    resume(fadeIn?: number): void {}

    stop(fadeOut?: number): void {}
}

export class SoundPlayer {
    volume: Volumer = new Volumer();

    constructor() {}

    /** 设置一个BGS */
    set(name: string, options?: Partial<PlaySoundOption>): void {}

    /**
     * 根据id停止一个BGS的播放
     * @param id
     */
    drop(id: string): void {}

    /** 播放一个SE */
    play(name: string, options?: Partial<PlaySoundOption>): void {}

    stopAll(filter?: (name: string, isBGS: boolean) => boolean): void {}
}
