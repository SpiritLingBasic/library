import * as _ from "@src/_/index";

describe("userAgent", () => {
    const chromeObj = {
        engine: "webkit",
        engineVs: "537.36",
        platform: "desktop",
        supporter: "chrome",
        supporterVs: "78.0.3904.70",
        system: "windows",
        systemVs: "10",
    };
    const firefoxObj = {
        engine: "gecko",
        engineVs: "20100101",
        platform: "desktop",
        supporter: "firefox",
        supporterVs: "70.0",
        system: "windows",
        systemVs: "10",
    };
    const operaObj = {
        engine: "presto",
        engineVs: "2.12.388",
        platform: "desktop",
        supporter: "opera",
        supporterVs: "9.80",
        system: "windows",
        systemVs: "vista",
    };
    const operaWebkitObj = {
        engine: "webkit",
        engineVs: "537.36",
        platform: "desktop",
        supporter: "opera",
        supporterVs: "9.80",
        system: "windows",
        systemVs: "vista",
    };
    const oprObj = {
        engine: "webkit",
        engineVs: "537.36",
        platform: "desktop",
        supporter: "opera",
        supporterVs: "9.80",
        system: "windows",
        systemVs: "vista",
    };
    const edgeObj = {
        engine: "webkit",
        engineVs: "537.36",
        platform: "desktop",
        supporter: "edge",
        supporterVs: "18.18362",
        system: "windows",
        systemVs: "10",
    };
    class Iebase {
        public engine: string;
        public engineVs: string;
        public platform: string;
        public supporter: string;
        public supporterVs: string;
        public system: string;
        public systemVs: string;
        constructor(systemVsTemp: string) {
            this.engine = "trident";
            this.engineVs = "5.0";
            this.platform = "desktop";
            this.supporter = "IE";
            this.supporterVs = "10.0";
            this.system = "windows";
            this.systemVs = systemVsTemp;
        }
    }
    const iexploreObj = new Iebase("7");
    // let iexploreObj = {
    //     engine: 'trident',
    //     engineVs: '5.0',
    //     platform: 'desktop',
    //     supporter: 'iexplore',
    //     supporterVs: '10.0',
    //     system: 'windows',
    //     systemVs: '7',
    // };
    const androidObj = {
        engine: "webkit",
        engineVs: "537.36",
        platform: "mobile",
        supporter: "chrome",
        supporterVs: "78.0.3904.70",
        system: "android",
        systemVs: "8.0",
    };
    const iPhoneObj = {
        engine: "webkit",
        engineVs: "536.26",
        platform: "mobile",
        supporter: "safari",
        supporterVs: "6.0",
        system: "ios",
        systemVs: "6.0",
    };
    const iPadObj = {
        engine: "webkit",
        engineVs: "536.26",
        platform: "mobile",
        supporter: "safari",
        supporterVs: "6.0",
        system: "ios",
        systemVs: "6.0",
    };
    const macosObj = {
        engine: "webkit",
        engineVs: "537.75.14",
        platform: "desktop",
        supporter: "safari",
        supporterVs: "7.0.3",
        system: "macos",
        systemVs: "10.9.3",
    };
    const linux = {
        engine: "unknow",
        engineVs: "unknow",
        platform: "desktop",
        supporter: "unknow",
        supporterVs: "unknow",
        system: "linux",
        systemVs: "unknown",
    };
    const all = {
        engine: "unknow",
        engineVs: "unknow",
        platform: "unknow",
        supporter: "unknow",
        supporterVs: "unknow",
        system: "unknow",
        systemVs: "unknown",
    };
    const webkitUnknow = {
        engine: "webkit",
        engineVs: "537.75.14",
        platform: "desktop",
        supporter: "unknow",
        supporterVs: "unknow",
        system: "macos",
        systemVs: "10.9.3",
    };
    // tslint:disable max-line-length
    it("else", () => {
        expect(_.NavigatorUserAgent("")).toEqual(all);
    });
    it("Linux", () => {
        expect(_.NavigatorUserAgent("x11")).toEqual(linux);
    });
    it("unkonw", () => {
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Safari/537.36"
            )
        ).toEqual(webkitUnknow);
    });
    it("Chrome", () => {
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36"
            )
        ).toEqual(chromeObj);
    });
    it("FireFox", () => {
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:70.0) Gecko/20100101 Firefox/70.0"
            )
        ).toEqual(firefoxObj);
    });
    it("Opera", () => {
        expect(
            _.NavigatorUserAgent(
                "Opera/9.80 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Presto/2.12.388 Version/12.14"
            )
        ).toEqual(operaObj);
    });
    it("Opera Webkit", () => {
        expect(
            _.NavigatorUserAgent(
                "Opera/9.80 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/12.14 Safari/537.36"
            )
        ).toEqual(operaWebkitObj);
    });
    it("OPR", () => {
        expect(
            _.NavigatorUserAgent(
                "OPR/9.80 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/12.14 Safari/537.36"
            )
        ).toEqual(oprObj);
    });
    it("Edge", () => {
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18362"
            )
        ).toEqual(edgeObj);
    });
    it("Iexplore", () => {
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (MSIE 10.0; Windows NT 6.1; Trident/5.0)"
            )
        ).toEqual(iexploreObj);
    });
    it("win 2003", () => {
        const temp = new Iebase("2003");
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (MSIE 10.0; Windows NT 5.2; Trident/5.0)"
            )
        ).toEqual(temp);
    });
    it("win 8", () => {
        const temp = new Iebase("8");
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (MSIE 10.0; windows NT 6.2; Trident/5.0)"
            )
        ).toEqual(temp);
    });
    it("win 8.1", () => {
        const temp = new Iebase("8.1");
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (MSIE 10.0; windows NT 6.3; Trident/5.0)"
            )
        ).toEqual(temp);
    });
    it("win 2000", () => {
        const temp = new Iebase("2000");
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (MSIE 10.0; windows NT 5.0; Trident/5.0)"
            )
        ).toEqual(temp);
    });
    it("win xp", () => {
        const temp = new Iebase("xp");
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (MSIE 10.0; windows NT 5.1; Trident/5.0)"
            )
        ).toEqual(temp);
    });
    it("win unknown", () => {
        const temp = new Iebase("unknown");
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (MSIE 10.0; windows unknown; Trident/5.0)"
            )
        ).toEqual(temp);
    });
    it("Android", () => {
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Mobile Safari/537.36"
            )
        ).toEqual(androidObj);
    });
    it("IPhone", () => {
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25"
            )
        ).toEqual(iPhoneObj);
    });
    it("Ipad", () => {
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25"
            )
        ).toEqual(iPadObj);
    });
    it("MacOS", () => {
        expect(
            _.NavigatorUserAgent(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A"
            )
        ).toEqual(macosObj);
    });
    // tslint:enable max-line-length
});
