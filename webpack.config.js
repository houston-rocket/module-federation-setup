const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/Orchestrator.js',
    output: {
        filename: 'orchestrator.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "http://localhost:9500/",
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new ModuleFederationPlugin({
            name: "orchestrator",
            library: {type: 'var', name: 'orchestrator'},
            remotes: {
                app1: "app1",
                app2: "app2"
            }
        })
    ]
};