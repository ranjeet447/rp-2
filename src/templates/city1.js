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
            <header class="header bg-gray">
                <div class="container">
                    <header class="section-header">
                    <h2 class="display-3">Contact Us</h2>
                    <hr/>
                    <p class="lead">They original on mountains, drew the support time. The of to graduate into to is the to she.</p>
                    </header>


                    <div class="row gap-y text-center">

                    <div class="col-lg-4">
                        <div class="card border p-5">
                        <h5 class="mb-4">Business</h5>
                        <p class="small-1">Some quick example text to build on the card title and make up the bulk.</p>
                        <a href="tel:08001234455">0 800 123 4455</a>
                        </div>
                    </div>


                    <div class="col-lg-4">
                        <div class="card border p-5">
                        <h5 class="mb-4">Press</h5>
                        <p class="small-1">Some quick example text to build on the card title and make up the bulk.</p>
                        <a href="#">info@example.com</a>
                        </div>
                    </div>


                    <div class="col-lg-4">
                        <div class="card border p-5">
                        <h5 class="mb-4">Meet</h5>
                        <p class="small-1">Some quick example text to build on the card title and make up the bulk.</p>
                        <a href="#">Get Direction</a>
                        </div>
                    </div>

                    </div>


                </div>
                </header>
                <main class="main-content">


                    {/* | Map */}
                    <section class="section p-0">

                    <div class="h-400" data-provide="map" data-lat="44.540" data-lng="-78.556" data-marker-lat="44.540" data-marker-lng="-78.556" data-info="&lt;strong&gt;Our office&lt;/strong&gt;&lt;br&gt;3652 Seventh Avenue, Los Angeles, CA"></div>

                    </section>
                    {/* | Contact form */}
                    <section class="section bg-gray">
                    <div class="container">
                        <header class="section-header">
                        <small>Contact</small>
                        <h2 class="display-4">Let's Talk</h2>
                        <hr/>
                        <p class="lead">They original on mountains, drew the support time. The of to graduate. Into to is the to she.</p>
                        </header>

                        <form class="form-row input-border" action="../assets/php/sendmail.php" method="POST" data-form="mailer">
                        <div class="col-12">
                            <div class="alert alert-success d-on-success">We received your message and will contact you back soon.</div>
                        </div>


                        <div class="form-group col-sm-6 col-xl-3">
                            <input class="form-control form-control-lg" type="text" name="name" placeholder="Name"/>
                        </div>

                        <div class="form-group col-sm-6 col-xl-3">
                            <input class="form-control form-control-lg" type="email" name="email" placeholder="Email"/>
                        </div>

                        <div class="form-group col-sm-6 col-xl-3">
                            <input class="form-control form-control-lg" type="text" name="subject" placeholder="Subject"/>
                        </div>

                        <div class="form-group col-sm-6 col-xl-3">
                            <input class="form-control form-control-lg" type="text" name="company" placeholder="Company Name"/>
                        </div>


                        <div class="form-group col-12">
                            <textarea class="form-control form-control-lg" rows="4" placeholder="Message" name="message"></textarea>
                        </div>

                        <div class="col-12 text-center">
                            <button class="btn btn-xl btn-block btn-primary" type="submit">Submit Inquiry</button>
                        </div>
                        </form>

                    </div>
                    </section>


                    </main>
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
   },
   
}`

