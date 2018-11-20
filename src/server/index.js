//Dependencies
import express from 'express';
import webpack from 'webpack';
import path, { dirname } from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

//Port
const port = 8000;

//Express
const app = express();

//Webpack Compiler
const webpackCompiler = webpack(webpackConfig);

//Webpack Middleware
app.use(webpackDevMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));

//Sending all trafic to react
app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/indexHTML'))
});

//Listen Port
app.listen(port, err =>{
    if (!err){
        open(`http//localhost:${port}`);
    }
} )
