import {formatCurrency} from "../scripts/utils/money.js"; 

describe("formatCurrency", function() {
    it("should format 12345 cents as $123.45", function() {
        expect(formatCurrency(12345)).toBe("$123.45");
    });
    it("should format 0 cents as $0.00", function() {
        expect(formatCurrency(0)).toBe("$0.00");
    });
    it("should format 2000.5 cents as $20.01", function() {
        expect(formatCurrency(2000.5)).toBe("$20.01");
    });
    it("should format -150 cents as $-1.50", function() {
        expect(formatCurrency(-150)).toBe("$-1.50");
    });
});