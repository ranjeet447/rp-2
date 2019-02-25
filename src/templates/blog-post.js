import React from 'react';
import Layout from '../components/layout';

import Navbar from '../components/navbar'



function BlogPost(props) {
    const post = props.data.markdownRemark;
    const { title,date,image } = post.frontmatter;
    return (
        <Layout>
            <Navbar/>
            <main class="main-content">
                <div class="section">
                    <div class="container">

                        <div class="text-center mt-8">
                            <h2>{title}</h2>
                            <p>{date}</p>
                        </div>


                        <div class="text-center my-8">
                            <img class="rounded-md" src={`/blogs/images/${image}`} alt="..."/>
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
       frontmatter {
        path
        title
        description
        date(formatString: "MMMM D, YYYY")
        image
       }
   }
}`
