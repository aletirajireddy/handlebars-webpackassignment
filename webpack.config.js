const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4000,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.hbs$/,
                use: { 
                    loader: 'handlebars-loader', 
                    options: {
                        precompileOptions: {
                            knownHelpersOnly: false
                        },
                        helperDirs: path.resolve(__dirname, './src/utils/helpers')
                    }
                }
            }
        ]
    }
}
