'use strict';

import { Config } from './config/config';
import Mongoose from 'mongoose';
import Express from './config/express';
import BodyParser from 'body-parser';
import http from 'http';
import _ from 'lodash';
import Passport from './config/passport';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config';
import path from 'path';

const compiler = webpack(webpackConfig);



Mongoose.connect(Config.db);
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log("connected!");
});

// Init the express application
const app = Express(db);

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
}));

app.use(webpackHotMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.listen(Config.port);

console.log('Smart Home application started on port ' + Config.port);