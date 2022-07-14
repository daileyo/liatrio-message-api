import {hello} from './index';

describe("Default index test", () => {
    it("should pass", () => {
        expect(true).toBe(true);
    });
})

describe("Testing index hello", () => {
    it("should be found and return hello", () => {
        const word = hello();
        expect(word).toBe('Hello');
    })
})