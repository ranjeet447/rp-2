import React from 'react';
import Layout from '../components/layout';
import {graphql} from  'gatsby'
import Navbar from '../components/navbar'
import SEO from "../components/seo"


function City(props) {
    const post = props.data.markdownRemark;
    const { title,date} = post.frontmatter;
    return (
        <Layout>
            <SEO title={title}keywords={[]} />
            <Navbar/>
            <main className="main-content">
                <div className="section">
                    <div className="container">

                        <div className="text-center mt-8">
                            <h2>{title}</h2>
                            <p>{date}</p>
                        </div>

                        <div className="text-center my-8">
                            {/* <img className="rounded-md" src={post.frontmatter.image.childImageSharp.fluid.src} alt=""/> */}
                        </div>

                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div dangerouslySetInnerHTML={{ __html: post.html }} />                        
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default City

export const query = graphql`
 query CityQuery($path: String!) {
     markdownRemark(frontmatter: { path: { eq: $path } }) {
       html
       fields {
        slug
       }
       frontmatter {
        path
        title
        
       }
   }
}`


// cities: allMarkdownRemark(
//     filter : {frontmatter: {visibility:{eq:"show"},type:{eq:"city"}}},
//   ) {
//     edges {
//       node {
//         fields{
//             slug
//         }
//         id
//         html
//         frontmatter {
//             title
//             path
//         }
//       }
//     }
//   }

