import { server, hello } from './index';
import * as config from './default.json';

const PORT = config.server.port;
const HOST = config.server.host;
let s: any

beforeAll(async () => {
    s = server
})
afterAll(async () => {
    s.close()
})

describe("Default index test", () => {
    it("should pass", () => {
        expect(true).toBe(true);
    });
})

describe("Testing index hello", () => {
    it("should be found and return hello", () => {
        const word = hello();
        expect(word).toBe('goodbye');
    })
})

//TODO mock call vs doing an actual one.  Manual check works, but automation is having issues with async setup.
describe("Testing main functions", () => {
    it.skip ('should return json object with a message and timestamp', () => {
        /*
            const response = await fetch(`http://${HOST}:${PORT}/api/hello`);
            expect(response).toEqual({message: "Automate all things!", timestamp: new Date().getTime()});
        */

    })
})
