const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './App.js',
    output: {
        filename: 'app2.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "http://localhost:9502/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app2",
            filename: "remoteEntry.js",
            library: { type: 'var', name: 'app2' },
            exposes: {
              "./App": "./App"
            }
        }),
    ]
};