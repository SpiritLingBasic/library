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
export interface NavigatorObj extends EngineAboutObj, SystemAboutObj {
}
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
export declare function NavigatorUserAgent(userAgent: string): NavigatorObj;
export {};
//# sourceMappingURL=NavigatorUserAgent.d.ts.map