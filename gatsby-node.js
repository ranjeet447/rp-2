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

const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    return new Promise((resolve, reject) => {
        resolve(graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 100
      ) {
        edges {
          node {
            fields{
                slug
            }
            id
            html
            frontmatter {
                title
                path
            }
          }
        }
      }
    }`)
    .then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    return reject(result.errors)
                }
                const blogTemplate = path.resolve('./src/templates/blog-post.js');
                const posts = result.data.allMarkdownRemark.edges
                const postsPerPage = 2
                const numPages = Math.ceil(posts.length / postsPerPage)
                Array.from({ length: numPages }).forEach((_, i) => {
                    createPage({
                      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                      component: path.resolve("./src/templates/blog-list-template.js"),
                      context: {
                        limit: postsPerPage,
                        skip: i * postsPerPage,
                        currentPage: i + 1,
                        numPages,
                      },
                    })
                })
                posts.forEach(({ node }) => {
                    createPage({
                        path: node.frontmatter.path,
                        component: blogTemplate,
                        context: {
                            slug: node.fields.slug,
                        }, // additional data can be passed via context
                    })
                })
                return
            })
        )
    })
}


exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}
