import { greet } from "../src";

describe('greet', () => {
    it('greets user by name', () =>{
        expect(greet("Sharanya")).toBe("Hello, Sharanya!");
    });
});