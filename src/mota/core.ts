import { MotaCore } from '../types/core';

class Core implements MotaCore {
    material: {
        animates: {};
        images: {};
        bgms: {};
        sounds: {};
        items: {};
        enemys: {};
        icons: {};
        ground: null;
        grundCanvas: null;
        groundPattern: null;
        autotileEdges: {};
    };
    timeout: { turnHeroTimeout: null; onDownTimeout: null; sleepTimeout: null };
    interval: { heroMoveInterval: null; onDownInterval: null };
    animateFrame: {
        totalTime: number;
        totalTimeStart: number;
        globalAnimate: boolean;
        globalTime: number;
        selectorTime: number;
        selectorUp: boolean;
        animateTime: number;
        moveTime: number;
        lastLegTime: number;
        leftLeg: boolean;
        weather: {
            time: number;
            type: null;
            level: number;
            nodes: never[];
            data: null;
            fog: null;
            cloud: null;
            sun: null;
        };
        tip: null;
        asyncId: {};
        lastAsyncId: null;
    };
    musicStatus: {
        audioContext: null;
        bgmStatus: boolean;
        soundStatus: boolean;
        playingBgm: null;
        pauseTime: number;
        lastBgm: null;
        gainNode: null;
        playingSounds: {};
        userVolume: number;
        designVolume: number;
        bgmSpeed: number;
        bgmUsePitch: null;
        cachedBgms: never[];
        cachedBgmCount: number; // 缓存的bgm数量
    };
    platform: {
        isOnline: boolean;
        isPC: boolean;
        isAndroid: boolean;
        isIOS: boolean;
        string: string;
        isWeChat: boolean;
        isQQ: boolean;
        isChrome: boolean;
        supportCopy: boolean;
        fileInput: null;
        fileReader: null;
        successCallback: null;
        errorCallback: null; // 读取失败
    };
    domStyle: {
        scale: number;
        ratio: number;
        hdCanvas: string[];
        availableScale: never[];
        isVertical: boolean;
        showStatusBar: boolean;
        toolbarBtn: boolean;
    };
    bigmap: {
        canvas: string[];
        offsetX: number;
        offsetY: number;
        posX: number;
        posY: number;
        width: any;
        height: any;
        v2: boolean;
        threshold: number;
        extend: number;
        scale: number;
        tempCanvas: null;
        cacheCanvas: null; // A cache canvas
    };
    saves: {
        saveIndex: null;
        ids: {};
        autosave: {
            data: null;
            time: number;
            updated: boolean;
            storage: boolean;
            max: number;
            now: number;
        };
        favorite: never[];
        favoriteName: {};
        cache: {};
    };
    initStatus: {
        played: boolean;
        gameOver: boolean;
        // 勇士属性
        hero: {};
        heroCenter: { px: null; py: null };
        // 当前地图
        floorId: null;
        thisMap: null;
        maps: null;
        bgmaps: {};
        fgmaps: {};
        mapBlockObjs: {};
        checkBlock: {};
        damage: {
            posX: number;
            posY: number;
            data: never[];
            extraData: never[];
        };
        lockControl: boolean;
        // 勇士移动状态
        heroMoving: number;
        heroStop: boolean;
        // 自动寻路相关
        automaticRoute: {
            autoHeroMove: boolean;
            autoStep: number;
            movedStep: number;
            destStep: number;
            destX: null;
            destY: null;
            offsetX: null;
            offsetY: null;
            autoStepRoutes: never[];
            moveStepBeforeStop: never[];
            lastDirection: null;
            cursorX: number;
            cursorY: number;
            moveDirectly: boolean;
        };
        // 按下键的时间：为了判定双击
        downTime: null;
        ctrlDown: boolean;
        preview: {
            enabled: boolean;
            prepareDragging: boolean;
            dragging: boolean;
            px: number;
            py: number;
        };
        // 路线&回放
        route: never[];
        replay: {
            replaying: boolean;
            pausing: boolean;
            animate: boolean;
            failed: boolean;
            toReplay: never[];
            totalList: never[];
            speed: number;
            steps: number;
            save: never[];
        };
        // 录像折叠
        routeFolding: {};
        // event事件
        shops: {};
        event: {
            id: null;
            data: null;
            selection: null;
            ui: null;
            interval: null;
        };
        autoEvents: never[];
        textAttribute: {
            position: string;
            offset: number;
            title: number[];
            background: number[];
            text: number[];
            titlefont: number;
            textfont: number;
            bold: boolean;
            time: number;
            letterSpacing: number;
            animateTime: number;
        };
        globalAttribute: {
            equipName: any;
            statusLeftBackground: any;
            statusTopBackground: any;
            toolsBackground: any;
            borderColor: any;
            statusBarColor: any;
            floorChangingStyle: any;
            selectColor: any;
            font: any;
        };
        curtainColor: null;
        // 动画
        globalAnimateObjs: never[];
        floorAnimateObjs: never[];
        boxAnimateObjs: never[];
        autotileAnimateObjs: never[];
        globalAnimateStatus: number;
        animateObjs: never[];
    };
    markedFloorIds: {};
    status: {};
    dymCanvas: {};
    canvas: any;
    maps: any;
    loader: any;
    extensions: any;
    dom: any;
    flags: any;
    data: any;
    values: any;
    firstData: any;
    enemys: any;
    items: any;
    icons: any;
    floors: any;
    floorIds: any;
    control: any;
    plugin: any;
    constructor() {
        this._WIDTH_ = 13;
        this._HEIGHT_ = 13;
        this._PX_ = this._WIDTH_ * 32;
        this._PY_ = this._HEIGHT_ * 32;
        this._HALF_WIDTH_ = Math.floor(this._WIDTH_ / 2);
        this._HALF_HEIGHT_ = Math.floor(this._HEIGHT_ / 2);

        this.__SIZE__ = main.mode == 'editor' ? 15 : this._HEIGHT_;
        this.__PIXELS__ = this.__SIZE__ * 32;
        this.__HALF_SIZE__ = Math.floor(this.__SIZE__ / 2);
        this.material = {
            animates: {},
            images: {},
            bgms: {},
            sounds: {},
            items: {},
            enemys: {},
            icons: {},
            ground: null,
            grundCanvas: null,
            groundPattern: null,
            autotileEdges: {}
        };
        this.timeout = {
            turnHeroTimeout: null,
            onDownTimeout: null,
            sleepTimeout: null
        };
        this.interval = {
            heroMoveInterval: null,
            onDownInterval: null
        };
        this.animateFrame = {
            totalTime: 0,
            totalTimeStart: 0,
            globalAnimate: false,
            globalTime: 0,
            selectorTime: 0,
            selectorUp: true,
            animateTime: 0,
            moveTime: 0,
            lastLegTime: 0,
            leftLeg: true,
            weather: {
                time: 0,
                type: null,
                level: 1,
                nodes: [],
                data: null,
                fog: null,
                cloud: null,
                sun: null
            },
            tip: null,
            asyncId: {},
            lastAsyncId: null
        };
        this.musicStatus = {
            audioContext: null,
            bgmStatus: false,
            soundStatus: true,
            playingBgm: null,
            pauseTime: 0,
            lastBgm: null,
            gainNode: null,
            playingSounds: {},
            userVolume: 1.0,
            designVolume: 1.0,
            bgmSpeed: 100,
            bgmUsePitch: null,
            cachedBgms: [],
            cachedBgmCount: 8 // 缓存的bgm数量
        };
        this.platform = {
            isOnline: true,
            isPC: true,
            isAndroid: false,
            isIOS: false,
            string: 'PC',
            isWeChat: false,
            isQQ: false,
            isChrome: false,
            supportCopy: false,

            fileInput: null,
            fileReader: null,
            successCallback: null,
            errorCallback: null // 读取失败
        };
        // 样式
        this.domStyle = {
            scale: 1.0,
            ratio: 1.0,
            hdCanvas: ['damage', 'ui', 'data'],
            availableScale: [],
            isVertical: false,
            showStatusBar: true,
            toolbarBtn: false
        };
        this.bigmap = {
            canvas: ['bg', 'event', 'event2', 'fg', 'damage'],
            offsetX: 0,
            offsetY: 0,
            posX: 0,
            posY: 0,
            width: main.mode == 'editor' ? this.__SIZE__ : this._WIDTH_,
            height: main.mode == 'editor' ? this.__SIZE__ : this._HEIGHT_,
            v2: false,
            threshold: 1024,
            extend: 10,
            scale: 1.0,
            tempCanvas: null,
            cacheCanvas: null // A cache canvas
        };
        this.saves = {
            saveIndex: null,
            ids: {},
            autosave: {
                data: null,
                time: 0,
                updated: false,
                storage: true,
                max: 20,
                now: 0
            },
            favorite: [],
            favoriteName: {},
            cache: {}
        };
        this.initStatus = {
            played: false,
            gameOver: false,

            // 勇士属性
            hero: {},
            heroCenter: { px: null, py: null },

            // 当前地图
            floorId: null,
            thisMap: null,
            maps: null,
            bgmaps: {},
            fgmaps: {},
            mapBlockObjs: {},
            checkBlock: {},
            damage: {
                posX: 0,
                posY: 0,
                data: [],
                extraData: []
            },

            lockControl: false,

            // 勇士移动状态
            heroMoving: 0,
            heroStop: true,

            // 自动寻路相关
            automaticRoute: {
                autoHeroMove: false,
                autoStep: 0,
                movedStep: 0,
                destStep: 0,
                destX: null,
                destY: null,
                offsetX: null,
                offsetY: null,
                autoStepRoutes: [],
                moveStepBeforeStop: [],
                lastDirection: null,
                cursorX: 0,
                cursorY: 0,
                moveDirectly: false
            },

            // 按下键的时间：为了判定双击
            downTime: null,
            ctrlDown: false,
            preview: {
                enabled: false,
                prepareDragging: false,
                dragging: false,
                px: 0,
                py: 0
            },

            // 路线&回放
            route: [],
            replay: {
                replaying: false,
                pausing: false,
                animate: false,
                failed: false,
                toReplay: [],
                totalList: [],
                speed: 1.0,
                steps: 0,
                save: []
            },
            // 录像折叠
            routeFolding: {},

            // event事件
            shops: {},
            event: {
                id: null,
                data: null,
                selection: null,
                ui: null,
                interval: null
            },
            autoEvents: [],
            textAttribute: {
                position: 'center',
                offset: 0,
                title: [255, 215, 0, 1],
                background: [0, 0, 0, 0.85],
                text: [255, 255, 255, 1],
                titlefont: 22,
                textfont: 16,
                bold: false,
                time: 0,
                letterSpacing: 0,
                animateTime: 0
            },
            globalAttribute: {
                equipName: main.equipName || [],
                statusLeftBackground:
                    main.styles.statusLeftBackground ||
                    'url(project/materials/ground.png) repeat',
                statusTopBackground:
                    main.styles.statusTopBackground ||
                    'url(project/materials/ground.png) repeat',
                toolsBackground:
                    main.styles.toolsBackground ||
                    'url(project/materials/ground.png) repeat',
                borderColor: main.styles.borderColor || [204, 204, 204, 1],
                statusBarColor: main.styles.statusBarColor || [
                    255, 255, 255, 1
                ],
                floorChangingStyle:
                    main.styles.floorChangingStyle ||
                    'background-color: black; color: white',
                selectColor: main.styles.selectColor || [255, 215, 0, 1],
                font: main.styles.font || 'Verdana'
            },
            curtainColor: null,

            // 动画
            globalAnimateObjs: [],
            floorAnimateObjs: [],
            boxAnimateObjs: [],
            autotileAnimateObjs: [],
            globalAnimateStatus: 0,
            animateObjs: []
        };
        // 标记的楼层列表，用于数据统计
        this.markedFloorIds = {};
        this.status = {};
        this.dymCanvas = {};

        if (main.mode == 'editor') {
            document.documentElement.style.setProperty('--size', this.__SIZE__);
            document.documentElement.style.setProperty(
                '--pixel',
                this.__PIXELS__ + 'px'
            );
        }
    }
    _WIDTH_: number;
    _HEIGHT_: number;
    _PX_: number;
    _PY_: number;
    _HALF_WIDTH_: number;
    _HALF_HEIGHT_: number;
    __SIZE__: number;
    __PIXELS__: number;
    __HALF_SIZE__: number;
    /////////// 系统事件相关 ///////////
    ////// 初始化 //////
    init(coreData, callback) {
        this._forwardFuncs();
        for (var key in coreData) core[key] = coreData[key];
        this._init_flags();
        this._init_platform();
        this._init_others();
        this._init_plugins();
        var b = main.mode == 'editor';
        // 初始化画布
        for (var name in core.canvas) {
            if (core.domStyle.hdCanvas.indexOf(name) >= 0)
                core.maps._setHDCanvasSize(
                    core.canvas[name],
                    b ? core.__PIXELS__ : core._PX_,
                    b ? core.__PIXELS__ : core._PY_
                );
            else {
                core.canvas[name].canvas.width = b
                    ? core.__PIXELS__
                    : core._PX_;
                core.canvas[name].canvas.height = b
                    ? core.__PIXELS__
                    : core._PY_;
            }
        }

        core.loader._load(function () {
            core.extensions._load(function () {
                core._afterLoadResources(callback);
            });
        });
        core.dom.musicBtn.style.display = 'block';
        core.setMusicBtn();
    }
    setMusicBtn() {
        throw new Error('Method not implemented.');
    }
    _init_flags() {
        core.flags = core.clone(core.data.flags);
        core.values = core.clone(core.data.values);
        core.firstData = core.clone(core.data.firstData);
        this._init_sys_flags();

        // 让你总是拼错！
        window.on = true;
        window.off = false;
        window.ture = true;
        window.flase = false;

        core.dom.versionLabel.innerText = core.firstData.version;
        core.dom.logoLabel.innerText = core.firstData.title;
        document.title = core.firstData.title + ' - HTML5魔塔';
        document.getElementById('startLogo').innerText = core.firstData.title;
        (core.firstData.shops || []).forEach(function (t) {
            core.initStatus.shops[t.id] = t;
        });

        core.maps._initFloors();
        // 初始化怪物、道具等
        core.material.enemys = core.enemys.getEnemys();
        core.material.items = core.items.getItems();
        core.material.icons = core.icons.getIcons();

        // 初始化自动事件
        for (var floorId in core.floors) {
            var autoEvents = core.floors[floorId].autoEvent || {};
            for (var loc in autoEvents) {
                var locs = loc.split(','),
                    x = parseInt(locs[0]),
                    y = parseInt(locs[1]);
                for (var index in autoEvents[loc]) {
                    var autoEvent = core.clone(autoEvents[loc][index]);
                    if (autoEvent && autoEvent.condition && autoEvent.data) {
                        autoEvent.floorId = floorId;
                        autoEvent.x = x;
                        autoEvent.y = y;
                        autoEvent.index = index;
                        autoEvent.symbol =
                            floorId + '@' + x + '@' + y + '@' + index;
                        autoEvent.condition = core.replaceValue(
                            autoEvent.condition
                        );
                        autoEvent.data = core.precompile(autoEvent.data);
                        core.initStatus.autoEvents.push(autoEvent);
                    }
                }
            }
        }
        // 道具的穿上/脱下，视为自动事件
        for (var equipId in core.material.items) {
            var equip = core.material.items[equipId];
            if (equip.cls != 'equips' || !equip.equip) continue;
            if (!equip.equip.equipEvent && !equip.equip.unequipEvent) continue;
            var equipFlag = '_equipEvent_' + equipId;
            var autoEvent1 = {
                symbol: '_equipEvent_' + equipId,
                currentFloor: false,
                multiExecute: true,
                condition:
                    "core.hasEquip('" +
                    equipId +
                    "') && !core.hasFlag('" +
                    equipFlag +
                    "')",
                data: core.precompile(
                    [
                        {
                            type: 'setValue',
                            name: 'flag:' + equipFlag,
                            value: 'true'
                        }
                    ].concat(equip.equip.equipEvent || [])
                )
            };
            var autoEvent2 = {
                symbol: '_unequipEvent_' + equipId,
                currentFloor: false,
                multiExecute: true,
                condition:
                    "!core.hasEquip('" +
                    equipId +
                    "') && core.hasFlag('" +
                    equipFlag +
                    "')",
                data: core.precompile(
                    [
                        {
                            type: 'setValue',
                            name: 'flag:' + equipFlag,
                            value: 'null'
                        }
                    ].concat(equip.equip.unequipEvent || [])
                )
            };
            core.initStatus.autoEvents.push(autoEvent1);
            core.initStatus.autoEvents.push(autoEvent2);
        }

        core.initStatus.autoEvents.sort(function (e1, e2) {
            if (e1.floorId == null) return 1;
            if (e2.floorId == null) return -1;
            if (e1.priority != e2.priority) return e2.priority - e1.priority;
            if (e1.floorId != e2.floorId)
                return (
                    core.floorIds.indexOf(e1.floorId) -
                    core.floorIds.indexOf(e2.floorId)
                );
            if (e1.x != e2.x) return e1.x - e2.x;
            if (e1.y != e2.y) return e1.y - e2.y;
            return e1.index - e2.index;
        });
    }
    clone(flags: any): any {
        throw new Error('Method not implemented.');
    }
    replaceValue(condition: any): any {
        throw new Error('Method not implemented.');
    }
    precompile(data: any): any {
        throw new Error('Method not implemented.');
    }
    _init_sys_flags() {
        if (core.flags.equipboxButton) core.flags.equipment = true;
        core.flags.displayEnemyDamage = core.getLocalStorage(
            'enemyDamage',
            true
        );
        core.flags.displayCritical = core.getLocalStorage('critical', true);
        core.flags.displayExtraDamage = core.getLocalStorage(
            'extraDamage',
            true
        );
        core.flags.enableEnemyPoint = core.getLocalStorage(
            'enableEnemyPoint',
            core.flags.enableEnemyPoint
        );
        core.flags.leftHandPrefer = core.getLocalStorage(
            'leftHandPrefer',
            false
        );
        core.flags.extraDamageType = core.getLocalStorage('extraDamageType', 2);
        // 行走速度
        core.values.moveSpeed = core.getLocalStorage(
            'moveSpeed',
            core.values.moveSpeed || 100
        );
        core.values.floorChangeTime = core.getLocalStorage(
            'floorChangeTime',
            core.values.floorChangeTime
        );
        if (core.values.floorChangeTime == null)
            core.values.floorChangeTime = 500;
        core.flags.enableHDCanvas = core.getLocalStorage(
            'enableHDCanvas',
            !core.platform.isIOS
        );
    }
    getLocalStorage(arg0: string, arg1: boolean): any {
        throw new Error('Method not implemented.');
    }
    _init_platform() {
        core.platform.isOnline = location.protocol.indexOf('http') == 0;
        if (!core.platform.isOnline)
            alert('请勿直接打开html文件！使用启动服务或者APP进行离线游戏。');
        window.AudioContext =
            window.AudioContext ||
            window.webkitAudioContext ||
            window.mozAudioContext ||
            window.msAudioContext;
        core.musicStatus.bgmStatus = core.getLocalStorage('bgmStatus', true);
        core.musicStatus.soundStatus = core.getLocalStorage(
            'soundStatus',
            true
        );
        //新增 userVolume 默认值0.7
        core.musicStatus.userVolume = core.getLocalStorage('userVolume', 0.7);
        try {
            core.musicStatus.audioContext = new window.AudioContext();
            core.musicStatus.gainNode =
                core.musicStatus.audioContext.createGain();
            core.musicStatus.gainNode.gain.value = core.musicStatus.userVolume;
            core.musicStatus.gainNode.connect(
                core.musicStatus.audioContext.destination
            );
        } catch (e) {
            console.log('该浏览器不支持AudioContext');
            core.musicStatus.audioContext = null;
        }
        [
            'Android',
            'iPhone',
            'SymbianOS',
            'Windows Phone',
            'iPad',
            'iPod'
        ].forEach(function (t) {
            if (navigator.userAgent.indexOf(t) >= 0) {
                if (t == 'iPhone' || t == 'iPad' || t == 'iPod')
                    core.platform.isIOS = true;
                if (t == 'Android') core.platform.isAndroid = true;
                core.platform.isPC = false;
            }
        });
        core.platform.string = core.platform.isPC
            ? 'PC'
            : core.platform.isAndroid
            ? 'Android'
            : core.platform.isIOS
            ? 'iOS'
            : '';
        core.platform.supportCopy =
            document.queryCommandSupported &&
            document.queryCommandSupported('copy');
        var chrome = /Chrome\/(\d+)\./i.exec(navigator.userAgent);
        if (chrome && parseInt(chrome[1]) >= 50) core.platform.isChrome = true;
        core.platform.isSafari =
            /Safari/i.test(navigator.userAgent) &&
            !/Chrome/i.test(navigator.userAgent);
        core.platform.isQQ = /QQ/i.test(navigator.userAgent);
        core.platform.isWeChat = /MicroMessenger/i.test(navigator.userAgent);
        if (window.FileReader) {
            core.platform.fileReader = new FileReader();
            core.platform.fileReader.onload = function () {
                core.readFileContent(core.platform.fileReader.result);
            };
            core.platform.fileReader.onerror = function () {
                if (core.platform.errorCallback) core.platform.errorCallback();
            };
        }

        core.flags.enableHDCanvas = core.getLocalStorage(
            'enableHDCanvas',
            !core.platform.isIOS
        );
        if (main.mode != 'editor') {
            core.domStyle.scale = core.getLocalStorage('scale', 1);
            if (core.flags.enableHDCanvas)
                core.domStyle.ratio = Math.max(
                    window.devicePixelRatio || 1,
                    core.domStyle.scale
                );
        }
    }
    readFileContent(result: any) {
        throw new Error('Method not implemented.');
    }
    _init_others() {
        // 一些额外的东西
        core.material.groundCanvas = document
            .createElement('canvas')
            .getContext('2d');
        core.material.groundCanvas.canvas.width =
            core.material.groundCanvas.canvas.height = 32;
        core.material.groundPattern = core.material.groundCanvas.createPattern(
            core.material.groundCanvas.canvas,
            'repeat'
        );
        core.bigmap.tempCanvas = document
            .createElement('canvas')
            .getContext('2d');
        core.bigmap.cacheCanvas = document
            .createElement('canvas')
            .getContext('2d');
        core.loadImage('materials', 'fog', function (name, img) {
            core.animateFrame.weather.fog = img;
        });
        core.loadImage('materials', 'cloud', function (name, img) {
            core.animateFrame.weather.cloud = img;
        });
        core.loadImage('materials', 'sun', function (name, img) {
            core.animateFrame.weather.sun = img;
        });
        core.loadImage('materials', 'keyboard', function (name, img) {
            core.material.images.keyboard = img;
        });
        // 记录存档编号
        core.saves.saveIndex = core.getLocalStorage('saveIndex', 1);
        core.control.getSaveIndexes(function (indexes) {
            core.saves.ids = indexes;
        });
    }
    loadImage(arg0: string, arg1: string, arg2: (name: any, img: any) => void) {
        throw new Error('Method not implemented.');
    }
    _afterLoadResources(callback) {
        // 初始化地图
        core.initStatus.maps = core.maps._initMaps();
        core.control._setRequestAnimationFrame();
        // 图片裁剪
        (main.splitImages || []).forEach(function (one) {
            var name = core.getMappedName(one.name);
            if (!core.material.images.images[name]) {
                console.warn('找不到图片：' + name + '，无法裁剪');
                return;
            }
            if (!name.endsWith('.png')) {
                console.warn('无法裁剪非png格式图片：' + name);
                return;
            }
            var arr = core.splitImage(
                core.material.images.images[name],
                one.width,
                one.height
            );
            for (var i = 0; i < arr.length; ++i) {
                core.material.images.images[(one.prefix || '') + i + '.png'] =
                    arr[i];
            }
        });

        if (core.plugin._afterLoadResources) core.plugin._afterLoadResources();
        core.showStartAnimate();
        if (callback) callback();
    }
    getMappedName(name: any) {
        throw new Error('Method not implemented.');
    }
    splitImage(arg0: any, width: any, height: any) {
        throw new Error('Method not implemented.');
    }
    showStartAnimate() {
        throw new Error('Method not implemented.');
    }
    _init_plugins() {
        core.plugin = new (function () {})();

        for (var name in plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1) {
            if (
                plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1[name] instanceof
                Function
            ) {
                try {
                    plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1[name].apply(
                        core.plugin
                    );
                } catch (e) {
                    console.error(e);
                    console.error('无法初始化插件' + name);
                }
            }
        }

        core._forwardFunc('plugin');
    }
    _forwardFuncs() {
        for (var i = 0; i < main.loadList.length; ++i) {
            var name = main.loadList[i];
            if (name == 'core') continue;
            this._forwardFunc(name);
        }
    }
    _forwardFunc(name, funcname) {
        if (funcname == null) {
            for (funcname in core[name]) {
                if (
                    funcname.charAt(0) != '_' &&
                    core[name][funcname] instanceof Function
                ) {
                    this._forwardFunc(name, funcname);
                }
            }
            return;
        }

        if (core[funcname]) {
            console.error(
                'ERROR: 无法转发 ' +
                    name +
                    ' 中的函数 ' +
                    funcname +
                    ' 到 core 中！同名函数已存在。'
            );
            return;
        }
        var parameterInfo = /^\s*function\s*[\w_$]*\(([\w_,$\s]*)\)\s*\{/.exec(
            core[name][funcname].toString()
        );
        var parameters = (parameterInfo == null ? '' : parameterInfo[1])
            .replace(/\s*/g, '')
            .replace(/,/g, ', ');
        // core[funcname] = new Function(parameters, "return core."+name+"."+funcname+"("+parameters+");");
        eval(
            'core.' +
                funcname +
                ' = function (' +
                parameters +
                ') {\n\treturn core.' +
                name +
                '.' +
                funcname +
                '.apply(core.' +
                name +
                ', arguments);\n}'
        );
    }
    doFunc(func, _this) {
        if (typeof func == 'string') {
            func = core.plugin[func];
            _this = core.plugin;
        }
        return func.apply(_this, Array.prototype.slice.call(arguments, 2));
    }
}

function createCore() {}

export const core = new Core();
