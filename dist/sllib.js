'use strict';

/**
 * @description http请求方式枚举，使用 `RESTful` 标准
 * @export Method
 * @enum {number}
 */
(function (Method) {
    /**
     * @description 用于获取目的资源所支持的通信选项
     */
    Method[Method["OPTIONS"] = 1] = "OPTIONS";
    /**
     * @description 请求指定的资源,只用于获取数据
     */
    Method[Method["GET"] = 2] = "GET";
    /**
     * @description 整体更新，非幂等请求，连续调用一次或多次效果不同（有副作用）
     * @example 典型例子就是create一个记录，每次调用都会创建一个
     */
    Method[Method["POST"] = 4] = "POST";
    /**
     * @description 更新全部，不提供参数应当按照空来处理，幂等请求，连续调用一次或多次效果相同（无副作用）
     * @example 典型例子就是更新用户信息，每次调用相同数据都会产生相同的结果
     */
    Method[Method["PUT"] = 8] = "PUT";
    /**
     * @description 对资源进行部分修改，幂等请求
     * @example 只更新一部分信息，比如只更新头像，其他不动
     */
    Method[Method["PATCH"] = 16] = "PATCH";
    /**
     * @description 用于删除指定的资源
     */
    Method[Method["DELETE"] = 32] = "DELETE";
})(exports.Method || (exports.Method = {}));
(function (Method) {
    /**
     * @description 数字转Method枚举方法
     * @export Number2Method
     */
    function Number2Method(n) {
        return n;
    }
    Method.Number2Method = Number2Method;
})(exports.Method || (exports.Method = {}));

/**
 * @description 服务器响应状态码
 * @export StatusCode
 * @enum {number}
 */
(function (StatusCode) {
    /**
     * @description 成功
     */
    StatusCode[StatusCode["Ok"] = 200] = "Ok";
    /**
     * @description post请求创建成功
     */
    StatusCode[StatusCode["Created"] = 201] = "Created";
    /**
     * @description 更新成功,如果游览器自动刷新，则改为使用200
     */
    StatusCode[StatusCode["Put"] = 205] = "Put";
    /**
     * @description 部分更新成功，如果游览器出现不可预知的行为，则使用200
     */
    StatusCode[StatusCode["Patch"] = 206] = "Patch";
    /**
     * @description 永久重定向
     */
    StatusCode[StatusCode["Moved"] = 301] = "Moved";
    /**
     * @description 临时重定向
     */
    StatusCode[StatusCode["Found"] = 302] = "Found";
    /**
     * @description 坏的请求，参数不正确等
     */
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    /**
     * @description 未登录
     */
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    /**
     * @description 拒绝此请求，比如输入密码错误等
     */
    StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden";
    /**
     * @description 未找到
     */
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    /**
     * @description 请求超时
     */
    StatusCode[StatusCode["RequestTimeout"] = 408] = "RequestTimeout";
    /**
     * @description 冲突
     */
    StatusCode[StatusCode["Conflict"] = 409] = "Conflict";
    /**
     * @description 服务器出现错误
     */
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
    /**
     * @description 网关请求错误
     */
    StatusCode[StatusCode["BadGateway"] = 502] = "BadGateway";
    /**
     * @description 网关请求超时
     */
    StatusCode[StatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
})(exports.StatusCode || (exports.StatusCode = {}));

function hex62(number) {
    const chars = "0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ".split(""), radix = chars.length, arr = [];
    let mod;
    let qutient = +number;
    do {
        mod = qutient % radix;
        qutient = (qutient - mod) / radix;
        arr.unshift(chars[mod]);
    } while (qutient);
    return arr.join("");
}
function reverseHex62(hex62_string) {
    const chars = "0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ", radix = chars.length, len = hex62_string.length;
    hex62_string = String(hex62_string);
    let i = 0;
    let origin_number = 0;
    while (i < len) {
        origin_number +=
            Math.pow(radix, i++) * chars.indexOf(hex62_string.charAt(len - i));
    }
    return origin_number;
}

function testUa(regexp, ua) {
    return regexp.test(ua);
}
function testVs(regexp, ua) {
    return `${ua.match(regexp)}`.replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".");
}
function systemAbout(ua) {
    let systemName = "unknow";
    if (testUa(/windows|win32|win64|wow32|wow64/gi, ua)) {
        systemName = "windows"; // window系统
    }
    else if (testUa(/macintosh|macintel/gi, ua)) {
        systemName = "macos"; // macos系统
    }
    else if (testUa(/x11/gi, ua)) {
        systemName = "linux"; // linux系统
    }
    else if (testUa(/android|adr/gi, ua)) {
        systemName = "android"; // android系统
    }
    else if (testUa(/ios|iphone|ipad|ipod|iwatch/gi, ua)) {
        systemName = "ios"; // ios系统
    }
    else {
        systemName = "unknow";
    }
    let systemVsValue = "unknown";
    if (systemName === "windows") {
        if (testUa(/windows nt 5.0|windows 2000/gi, ua)) {
            systemVsValue = "2000";
        }
        else if (testUa(/windows nt 5.1|windows xp/gi, ua)) {
            systemVsValue = "xp";
        }
        else if (testUa(/windows nt 5.2|windows 2003/gi, ua)) {
            systemVsValue = "2003";
        }
        else if (testUa(/windows nt 6.0|windows vista/gi, ua)) {
            systemVsValue = "vista";
        }
        else if (testUa(/windows nt 6.1|windows 7/gi, ua)) {
            systemVsValue = "7";
        }
        else if (testUa(/windows nt 6.2|windows 8/gi, ua)) {
            systemVsValue = "8";
        }
        else if (testUa(/windows nt 6.3|windows 8.1/gi, ua)) {
            systemVsValue = "8.1";
        }
        else if (testUa(/windows nt 10.0|windows 10/gi, ua)) {
            systemVsValue = "10";
        }
        else {
            systemVsValue = "unknown";
        }
    }
    else if (systemName === "macos") {
        systemVsValue = testVs(/os x [\d._]+/gi, ua);
    }
    else if (systemName === "android") {
        systemVsValue = testVs(/android [\d._]+/gi, ua);
    }
    else if (systemName === "ios") {
        systemVsValue = testVs(/os [\d._]+/gi, ua);
    }
    let platformName = "unknow";
    if (systemName === "windows" ||
        systemName === "macos" ||
        systemName === "linux") {
        platformName = "desktop"; // 桌面端
    }
    else if (systemName === "android" ||
        systemName === "ios" ||
        testUa(/mobile/gi, ua)) {
        platformName = "mobile"; // 移动端
    }
    else {
        platformName = "unknow";
    }
    const obj = {
        system: systemName,
        systemVs: systemVsValue,
        platform: platformName,
    };
    return obj;
}
function engineAbout(ua) {
    // 内核
    let engineName = "unknow";
    // 载体
    let supporterName = "unknow";
    if (testUa(/applewebkit/gi, ua) && testUa(/safari/gi, ua)) {
        engineName = "webkit"; // webkit内核
        if (testUa(/edge/gi, ua)) {
            supporterName = "edge"; // edge浏览器
        }
        else if (testUa(/opr/gi, ua)) {
            supporterName = "opera"; // opera浏览器
        }
        else if (testUa(/opera/gi, ua)) {
            supporterName = "opera"; // opera浏览器
        }
        else if (testUa(/chrome/gi, ua)) {
            supporterName = "chrome"; // chrome浏览器
        }
        else if (testUa(/version\/([\d.]+).*safari/gi, ua)) {
            supporterName = "safari"; // safari浏览器
        }
        else {
            supporterName = "unknow";
        }
    }
    else if (testUa(/gecko/gi, ua) && testUa(/firefox/gi, ua)) {
        engineName = "gecko"; // gecko内核
        supporterName = "firefox"; // firefox浏览器
    }
    else if (testUa(/presto/gi, ua)) {
        engineName = "presto"; // presto内核
        supporterName = "opera"; // opera浏览器
    }
    else if (testUa(/trident|compatible|msie/gi, ua)) {
        engineName = "trident"; // trident内核
        supporterName = "IE"; // IE浏览器
    }
    // 内核版本
    let engineVsValue = "unknow";
    if (engineName === "webkit") {
        engineVsValue = testVs(/applewebkit\/[\d.]+/gi, ua);
    }
    else if (engineName === "gecko") {
        engineVsValue = testVs(/gecko\/[\d.]+/gi, ua);
    }
    else if (engineName === "presto") {
        engineVsValue = testVs(/presto\/[\d.]+/gi, ua);
    }
    else if (engineName === "trident") {
        engineVsValue = testVs(/trident\/[\d.]+/gi, ua);
    }
    // 载体版本
    let supporterVsValue = "unknow";
    if (supporterName === "chrome") {
        supporterVsValue = testVs(/chrome\/[\d.]+/gi, ua);
    }
    else if (supporterName === "safari") {
        supporterVsValue = testVs(/version\/[\d.]+/gi, ua);
    }
    else if (supporterName === "firefox") {
        supporterVsValue = testVs(/firefox\/[\d.]+/gi, ua);
    }
    else if (supporterName === "opera") {
        // tslint:disable-next-line max-line-length
        supporterVsValue =
            testVs(/opera\/[\d.]+/gi, ua) !== ""
                ? testVs(/opera\/[\d.]+/gi, ua)
                : testVs(/opr\/[\d.]+/gi, ua);
    }
    else if (supporterName === "IE") {
        supporterVsValue = testVs(/(msie [\d.]+)|(rv:[\d.]+)/gi, ua);
    }
    else if (supporterName === "edge") {
        supporterVsValue = testVs(/edge\/[\d.]+/gi, ua);
    }
    const obj = {
        engine: engineName,
        supporter: supporterName,
        engineVs: engineVsValue,
        supporterVs: supporterVsValue,
    };
    return obj;
}
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
function NavigatorUserAgent(userAgent) {
    const ua = userAgent.toLowerCase();
    const system = systemAbout(ua);
    const engine = engineAbout(ua);
    const obj = {
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

exports.NavigatorUserAgent = NavigatorUserAgent;
exports.hex62 = hex62;
exports.reverseHex62 = reverseHex62;
