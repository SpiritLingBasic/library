import { hex62, reverseHex62 } from "@src/hexConvert/hex62";

describe("strTo62", () => {
    it("test 123456", () => {
        expect(hex62(123456)).toEqual("w7e");
    });
});

describe("62ToStr", () => {
    it("test u90", () => {
        expect(reverseHex62("u90")).toEqual(115878);
    });
});
