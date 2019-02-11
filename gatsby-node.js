// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

// exports.onCreateWebpackConfig = ({
//     actions,
//     stage,
//     rules,
//     plugins,
//     loaders,
//   }) => {
//     // const sassRuleModules = {
//     //   test: /\.module\.s(a|c)ss$/,
//     //   use: [
//     //     'style-loader',
//     //     'css-loader',
//     //     'postcss-loader',
//     //     'sass-loader',
//     //     'resolve-url-loader',
//     //     {
//     //       loader: 'sass-resources-loader',
//     //       options: {
//     //         resources: [
//     //           './src/assets',
//     //           // 'src/assets/scss/_theme.scss',
//     //           // 'src/assets/scss/page.scss',
//     //         ],
//     //       },
//     //     },
//     //   ],
//     // };

//     const f = {
//         test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
//         use:{loader: "file-loader"}
//     }
  
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//             // sassRuleModules,
//             f,
//             {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
//             {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?mimetype=application/font-woff"},
//             {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?mimetype=application/font-woff"},
//             {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
//             {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
//         ],
//       },
//     });
//   };



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
                // use:'file-loader',
                exclude: /node_modules/,
                loader: 'file-loader'
            },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
        ],
        },
        plugins: [
        plugins.define({
            __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
        }),
        ],
    })
    }
            