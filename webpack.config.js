const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('node:path');

module.exports = (env) => {
    return {
        entry: {
            app: './src/main.ts'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css?$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.tsx','.ts','.js'],
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        },
        plugins: [new HtmlWebpackPlugin({
            template: 'src/index.html'
        })],
        mode: env.mode,
        watchOptions: {
            ignored: [
                "**/dist/**"
            ]
        }
    };
};
