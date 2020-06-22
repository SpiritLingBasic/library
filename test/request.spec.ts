import { Add } from "@src/request/fun";

describe("add", () => {
    it("show test", () => {
        expect(Add(1, 2)).toEqual(3);
    });
});
