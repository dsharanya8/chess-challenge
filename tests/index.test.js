"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe('greet', () => {
    it('greets user by name', () => {
        expect((0, src_1.greet)("Sharanya")).toBe("Hello, Sharanya!");
    });
});
