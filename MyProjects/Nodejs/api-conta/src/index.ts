import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Welcome } from './controller/welcome'

const app: express.Application = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/welcome', Welcome);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});