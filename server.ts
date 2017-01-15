import * as express from 'express';
import * as bodyParser from 'body-parser';

import { bodyProxy } from './body-proxy';
import { configureHook } from './hook';

bodyProxy.initialize();

// const service = express();
// service.use(bodyParser.json());

//configureHook(service);

let port = (process.env.PORT || 5000);
// service.listen(port, function () {
//   console.log(`Server listening on http://localhost:${port}/`);
// });
