module.exports = {
    entry: {
        'app': './src/index.js'
    },
    output: {
        'filename': './build/[name].js'
    },
    resolve: {
        root: __dirname + '/frontend/src',
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?presets[]=es2015' // 'babel-loader' is also a legal name to reference
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    }
}
