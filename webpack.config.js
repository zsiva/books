module.exports = {
    entry: {
        'app': './src/index.js'
    },
    output: {
        'filename': './build/[name].js'
    },
    resolve: {
        root: __dirname + '/src',
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            }
        ]

    }
}
