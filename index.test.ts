import { hello } from './index';
import * as config from './default.json';

const PORT = config.server.port;
const HOST = config.server.host;

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

//TODO mock call vs doing an actual one
describe("Testing main functions", () => {
    it ('should return json object with a message and timestamp', async () => {
        expect(fetch(`http://${HOST}:${PORT}`)).resolves.toEqual({message: "Automate all things!", timestamp: expect.any(Number)});        
    })
})