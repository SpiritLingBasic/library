function testUa(regexp: RegExp, ua: string): boolean {
    return regexp.test(ua);
}

function testVs(regexp: RegExp, ua: string): string {
    return `${ua.match(regexp)}`.replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".");
}

interface SystemAboutObj {
    /**
     * 系统类型
     */
    system: string;
    /**
     * 系统版本号
     */
    systemVs: string;
    /**
     * 平台：desktop:桌面端,mobile:移动端
     */
    platform: string;
}

function systemAbout(ua: string): SystemAboutObj {
    let systemName: string = "unknow";
    if (testUa(/windows|win32|win64|wow32|wow64/gi, ua)) {
        systemName = "windows"; // window系统
    } else if (testUa(/macintosh|macintel/gi, ua)) {
        systemName = "macos"; // macos系统
    } else if (testUa(/x11/gi, ua)) {
        systemName = "linux"; // linux系统
    } else if (testUa(/android|adr/gi, ua)) {
        systemName = "android"; // android系统
    } else if (testUa(/ios|iphone|ipad|ipod|iwatch/gi, ua)) {
        systemName = "ios"; // ios系统
    } else {
        systemName = "unknow";
    }
    let systemVsValue: string = "unknown";
    if (systemName === "windows") {
        if (testUa(/windows nt 5.0|windows 2000/gi, ua)) {
            systemVsValue = "2000";
        } else if (testUa(/windows nt 5.1|windows xp/gi, ua)) {
            systemVsValue = "xp";
        } else if (testUa(/windows nt 5.2|windows 2003/gi, ua)) {
            systemVsValue = "2003";
        } else if (testUa(/windows nt 6.0|windows vista/gi, ua)) {
            systemVsValue = "vista";
        } else if (testUa(/windows nt 6.1|windows 7/gi, ua)) {
            systemVsValue = "7";
        } else if (testUa(/windows nt 6.2|windows 8/gi, ua)) {
            systemVsValue = "8";
        } else if (testUa(/windows nt 6.3|windows 8.1/gi, ua)) {
            systemVsValue = "8.1";
        } else if (testUa(/windows nt 10.0|windows 10/gi, ua)) {
            systemVsValue = "10";
        } else {
            systemVsValue = "unknown";
        }
    } else if (systemName === "macos") {
        systemVsValue = testVs(/os x [\d._]+/gi, ua);
    } else if (systemName === "android") {
        systemVsValue = testVs(/android [\d._]+/gi, ua);
    } else if (systemName === "ios") {
        systemVsValue = testVs(/os [\d._]+/gi, ua);
    }
    let platformName: string = "unknow";
    if (
        systemName === "windows" ||
        systemName === "macos" ||
        systemName === "linux"
    ) {
        platformName = "desktop"; // 桌面端
    } else if (
        systemName === "android" ||
        systemName === "ios" ||
        testUa(/mobile/gi, ua)
    ) {
        platformName = "mobile"; // 移动端
    } else {
        platformName = "unknow";
    }
    const obj: SystemAboutObj = {
        system: systemName,
        systemVs: systemVsValue,
        platform: platformName,
    };
    return obj;
}

interface EngineAboutObj {
    /**
     * 内核
     */
    engine: string;
    /**
     * 游览器载体
     */
    supporter: string;
    /**
     * 内核版本
     */
    engineVs: string;
    /**
     * 载体版本
     */
    supporterVs: string;
}

function engineAbout(ua: string): EngineAboutObj {
    // 内核
    let engineName: string = "unknow";
    // 载体
    let supporterName: string = "unknow";
    if (testUa(/applewebkit/gi, ua) && testUa(/safari/gi, ua)) {
        engineName = "webkit"; // webkit内核
        if (testUa(/edge/gi, ua)) {
            supporterName = "edge"; // edge浏览器
        } else if (testUa(/opr/gi, ua)) {
            supporterName = "opera"; // opera浏览器
        } else if (testUa(/opera/gi, ua)) {
            supporterName = "opera"; // opera浏览器
        } else if (testUa(/chrome/gi, ua)) {
            supporterName = "chrome"; // chrome浏览器
        } else if (testUa(/version\/([\d.]+).*safari/gi, ua)) {
            supporterName = "safari"; // safari浏览器
        } else {
            supporterName = "unknow";
        }
    } else if (testUa(/gecko/gi, ua) && testUa(/firefox/gi, ua)) {
        engineName = "gecko"; // gecko内核
        supporterName = "firefox"; // firefox浏览器
    } else if (testUa(/presto/gi, ua)) {
        engineName = "presto"; // presto内核
        supporterName = "opera"; // opera浏览器
    } else if (testUa(/trident|compatible|msie/gi, ua)) {
        engineName = "trident"; // trident内核
        supporterName = "IE"; // IE浏览器
    }

    // 内核版本
    let engineVsValue: string = "unknow";
    if (engineName === "webkit") {
        engineVsValue = testVs(/applewebkit\/[\d.]+/gi, ua);
    } else if (engineName === "gecko") {
        engineVsValue = testVs(/gecko\/[\d.]+/gi, ua);
    } else if (engineName === "presto") {
        engineVsValue = testVs(/presto\/[\d.]+/gi, ua);
    } else if (engineName === "trident") {
        engineVsValue = testVs(/trident\/[\d.]+/gi, ua);
    }

    // 载体版本
    let supporterVsValue: string = "unknow";
    if (supporterName === "chrome") {
        supporterVsValue = testVs(/chrome\/[\d.]+/gi, ua);
    } else if (supporterName === "safari") {
        supporterVsValue = testVs(/version\/[\d.]+/gi, ua);
    } else if (supporterName === "firefox") {
        supporterVsValue = testVs(/firefox\/[\d.]+/gi, ua);
    } else if (supporterName === "opera") {
        // tslint:disable-next-line max-line-length
        supporterVsValue =
            testVs(/opera\/[\d.]+/gi, ua) !== ""
                ? testVs(/opera\/[\d.]+/gi, ua)
                : testVs(/opr\/[\d.]+/gi, ua);
    } else if (supporterName === "IE") {
        supporterVsValue = testVs(/(msie [\d.]+)|(rv:[\d.]+)/gi, ua);
    } else if (supporterName === "edge") {
        supporterVsValue = testVs(/edge\/[\d.]+/gi, ua);
    }
    const obj: EngineAboutObj = {
        engine: engineName,
        supporter: supporterName,
        engineVs: engineVsValue,
        supporterVs: supporterVsValue,
    };
    return obj;
}
export interface NavigatorObj extends EngineAboutObj, SystemAboutObj {}
// tslint:disable max-line-length
/**
 * 判断游览器信息
 *
 * ### Example
 * ```js
 * console.log(NavigatorUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36'));
 * => {engine: 'webkit',engineVs: '537.36',platform: 'desktop',supporter: 'chrome',supporterVs: '78.0.3904.70',system: 'windows',systemVs: '10',}
 * ```
 *
 * @param userAgent 游览器标识
 * @returns InavigatorObj { system: 系统类型, systemVs: 系统版本, platform: 平台, engine: 内核, engineVs: 内核版本, supporter: 游览器, supporterVs: 游览器版本  }
 */
// tslint:enable max-line-length
export function NavigatorUserAgent(userAgent: string): NavigatorObj {
    const ua = userAgent.toLowerCase();
    const system = systemAbout(ua);
    const engine = engineAbout(ua);
    const obj: NavigatorObj = {
        system: system.system,
        systemVs: system.systemVs,
        platform: system.platform,
        engine: engine.engine,
        engineVs: engine.engineVs,
        supporter: engine.supporter,
        supporterVs: engine.supporterVs,
    };
    return obj;
}
