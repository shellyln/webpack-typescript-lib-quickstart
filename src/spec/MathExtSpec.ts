
import {MathExt} from "../lib/MathExt";


describe("MathExt", function() {
    it("MathExt#add", function() {
        const mx = new MathExt();
        expect(mx.add(1, 2)).toEqual(3);
    });
});

