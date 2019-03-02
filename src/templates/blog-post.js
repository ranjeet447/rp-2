import React from 'react';
import Layout from '../components/layout';
import {graphql} from  'gatsby'
import Navbar from '../components/navbar'
import SEO from "../components/seo"
import '../assets/scss/page.scss'
import Img from 'gatsby-image'


function BlogPost(props) {
    const post = props.data.markdownRemark;
    const { title,date,description } = post.frontmatter;
    return (
        <Layout>
            <SEO title={title} description={description} keywords={[]} />
            <Navbar/>
            <main class="main-content">
                <div class="section">
                    <div class="container">

                        <div class="text-center mt-8">
                            <h2>{title}</h2>
                            <p>{date}</p>
                        </div>

                        <div class="text-center my-8">
                            <Img className="rounded-md" fluid={post.frontmatter.image.childImageSharp.fluid}/>
                        </div>

                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <div dangerouslySetInnerHTML={{ __html: post.html }} />                        
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default BlogPost

export const query = graphql`
 query PostQuery($path: String!) {
     markdownRemark(frontmatter: { path: { eq: $path } }) {
       html
       fields {
        slug
       }
       frontmatter {
        path
        title
        description
        date(formatString: "MMMM D, YYYY")
        image {
            childImageSharp{
                fluid{
                    ...GatsbyImageSharpFluid
                }
            }
        }
       }
   }
}`
