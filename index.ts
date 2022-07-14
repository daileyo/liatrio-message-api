import express, { Express, Request, Response }  from 'express';
import cors from 'cors';
import * as config from './default.json';

const PORT = config.server.port;
const app: Express = express();

app.disable('x-powered-by')
app.use(
    cors(),
    express.json(),
    express.urlencoded({extended: true})
);


//TODO: JWT and security

app.get('/', (req: Request, res: Response, next) => {
    res.json({message: "Automate all things!", timestamp: new Date().getTime()});
    //next();
});


export const server = app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));


export function hello() {
    return 'Hello';
}