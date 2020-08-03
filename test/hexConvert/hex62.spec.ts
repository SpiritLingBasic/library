import * as hexConvert from "@src/hexConvert/index";

describe("strTo62", () => {
    it("test 123456", () => {
        expect(hexConvert.hex62(123456)).toEqual("w7e");
    });
});

describe("62ToStr", () => {
    it("test u90", () => {
        expect(hexConvert.reverseHex62("u90")).toEqual(115878);
    });
});
