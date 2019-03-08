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
        filter : {frontmatter: {visibility:{eq:"show"},type:{eq:"blog"}}},
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
      cities:allMarkdownRemark(
        filter : {frontmatter: {visibility:{eq:"show"}}},
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
      },
      gcmsdata{
        cities(where: {status: PUBLISHED}){
          id
          meta
        }
        demoes(where: {status: PUBLISHED}){
          id
          meta
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

                // const cities = result.data.cities.edges
                const cities = result.data.gcmsdata.cities
                const requests = result.data.gcmsdata.demoes


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

                cities.forEach((city)=>{
                    createPage({
                        path: city.meta.path,
                        component: path.resolve("./src/templates/city-template.js"),
                        context:{
                            id:city.id,
                        }
                    })
                })

                requests.forEach((request)=>{
                    createPage({
                        path: request.meta.path,
                        component: path.resolve("./src/templates/request-template.js"),
                        context:{
                            id:request.id,
                        }
                    })
                })
                
                // cities.forEach(({node})=>{
                //     createPage({
                //         path: node.frontmatter.path,
                //         component: path.resolve("./src/templates/city1.js"),
                //         context: {
                //             slug: node.fields.slug,
                //         }, 
                //     })
                // })
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
