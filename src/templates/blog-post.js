import React from 'react';
import Layout from '../components/layout';
import {graphql} from  'gatsby'
import Navbar from '../components/navbar'
import SEO from "../components/seo"
import '../assets/scss/page.scss'
import MyImg from '../components/image';


function BlogPost(props) {
    const post = props.data.markdownRemark;
    const { title,date,image,description } = post.frontmatter;
    const {slug}=post.fields;
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
                        {console.log(`${slug.substr(1)}images/${image}`)}
                        <div class="text-center my-8 m-md-8">
                            <MyImg className="rounded-md" src={`${slug.substr(1)}images/${image}`}/>
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
        image
       }
   }
}`
