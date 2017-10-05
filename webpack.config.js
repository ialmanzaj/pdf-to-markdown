const webpack = require('webpack');

//plugins
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');


const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

const SOURCE_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'lib');
const NODEMODULES_DIR = path.resolve(__dirname, 'node_modules');
const JAVASCRIPT_DIR = SOURCE_DIR + '/javascript';

let libraryName = 'PdfConverterLibrary';
let outputFile = "pdfconverter" + '.js';

const config =  {
    entry: JAVASCRIPT_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['','.js','.json'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        // Special compilation rules
        loaders: [
            {
                // Ask webpack to check: If this file ends with .js, then apply some transforms
                test:  /\.jsx?$/,
                // Transform it with babel
                loader: 'babel',
                // don't transform node_modules folder (which don't need to be compiled)
                include: [JAVASCRIPT_DIR],
                query: {
                    plugins: [
                        ['transform-runtime'],
                        ["transform-es2015-modules-umd"]
                    ],
                    presets: ['es2015', 'stage-0', 'react'],

                }
            },
            {
                test: /\.json$/, loader: "json"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'version': JSON.stringify(process.env.npm_package_version),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        new CopyWebpackPlugin([
            {
                from: NODEMODULES_DIR + '/pdfjs-dist/build/pdf.worker.js',
                to: 'bundle.worker.js'
            },
        ]),
    ]
}

module.exports = config;
