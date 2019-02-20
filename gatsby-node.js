var webpack = require('webpack')
exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
    }) => {
    actions.setWebpackConfig({
        module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            },
        ],
        },
        plugins: [
            new webpack.ProvidePlugin({   
                jQuery: 'jquery',
                $: 'jquery',
                jquery: 'jquery'
            })
        ],
    })
    }
