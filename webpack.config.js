const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
                }
            ]
        },
        resolve: {
            extensions: ['.tsx','.ts','.js']
        },
        plugins: [new HtmlWebpackPlugin({
            template: 'src/index.html'
        })],
        mode: env.mode
    };
};
