interface LoadTaskProgress {
    name: string;
    loadedSize: number;
    totalSize: number;
    processing: boolean;
}

interface LoadLog {
    name: string;
    status: 'add' | 'loaded' | 'compelete' | 'error';
}

interface LoadQueueProgress {
    name: string;
    loadedSize: number;
    totalSize: number;
    loadedCount: number;
    completeCount: number;
    totalCount: number;
    log: LoadLog;
}

type LoadTaskExecutor<T> = (
    progress: (loaded: number, total: number) => void,
    compelete: (data: T) => void,
    fail: (reason?: any) => void
) => void;

interface LoadTask<T> {
    /** 加载进度，用reactive包裹 */
    progress: LoadTaskProgress;
    process<R>(handler: (data: T) => R | Promise<R>): LoadTask<R>;
    catch<R>(handler: (e: Error) => R): LoadTask<R>;
    then<R>(handler: (data: T) => R): Promise<R>;
}

interface LoadQueue<T> {
    /** 加载进度，用reactive包裹 */
    progress: LoadQueueProgress;
    process<R>(handler: (data: T) => R | Promise<R>): LoadQueue<R>;
    catch<R>(handler: (e: Error) => R): LoadQueue<R>;
    then<R>(handler: (data: T) => R): Promise<R>;
}

interface LoadTaskConstructor {
    new <T>(executor: LoadTaskExecutor<T>, name?: string): LoadTask<T>;
    queue<T extends readonly unknown[] | []>(
        tasks: T,
        name?: string
    ): LoadQueue<{ -readonly [P in keyof T]: Awaited<T[P]> }>;
}

declare var LoadTask: LoadTaskConstructor;

// 默认提供的loader:

export function loadImage(src: string): LoadTask<HTMLImageElement> {}

export function loadAudio(src: string): LoadTask<HTMLAudioElement> {}

export function loadText(src: string): LoadTask<string> {}

export function loadJSON<T = any>(src: string): LoadTask<T> {}

export function loadFont(src: string): LoadTask<void> {}

export function loadBlob(src: string): LoadTask<Blob> {}

// export async function unzip(
//     data: Blob,
//     entryHandler: (entry: Entry) => Promise<void>
// ): Promise<void> {}
