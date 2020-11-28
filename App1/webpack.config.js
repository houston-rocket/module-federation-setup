const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './App.js',
    output: {
        filename: 'app1.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "http://localhost:9501/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app1",
            filename: "remoteEntry.js",
            library: { type: 'var', name: 'app1' },
            exposes: {
              "./App": "./App"
            }
        }),
    ]
};