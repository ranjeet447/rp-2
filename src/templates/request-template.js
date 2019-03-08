import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from "../components/navbar_light"
import { graphql } from 'gatsby'


export default function Request(props){

	const request = props.data.gcmsdata.demoes[0]
	const {title,description,tags}=request.meta
	return(
		<Layout>
			<SEO title={title} description={description} keywords={tags} />
			<Navbar/>
			<header className="header text-white" style={{backgroundImage: `url(${request.headerImage.url})`}} data-overlay="7">
				<div className="container text-center">

					<div className="row">
						<div className="col-md-8 mx-auto">

							<h1>{request.header.title}</h1>
							<p className="lead-2 opacity-90 mt-6">{request.header.description}</p>

						</div>
					</div>

				</div>
			</header>
			{/* <section className="section">
					<div data-provide="slider" data-autoplay="true" data-slides-to-show="2" data-css-ease="linear" data-speed="12000" data-autoplay-speed="0" data-pause-on-hover="false">
						<div className="p-2">
							<div className="rounded bg-img h-400" style={{backgroundImage: 'url(../assets/img/thumb/14.jpg)'}}></div>
						</div>

						<div className="p-2">
							<div className="rounded bg-img h-400" style={{backgroundImage: 'url(../assets/img/thumb/15.jpg)'}}></div>
						</div>

						<div className="p-2">
							<div className="rounded bg-img h-400" style={{backgroundImage: 'url(../assets/img/thumb/12.jpg)'}}></div>
						</div>

						<div className="p-2">
							<div className="rounded bg-img h-400" style={{backgroundImage: 'url(../assets/img/thumb/13.jpg)'}}></div>
						</div>
					</div>
				</section>                 */}
		

			{/* <!-- Main Content --> */}
			<main className="main-content">
				{/* | Request form */}
				<section className="section">
					<div className="container">
						<div className="row align-items-center">

							<div className="col-lg-5 mr-auto text-center">
								<h3 className="heading-alt fw-300">{request.request.title}</h3><br/>
								<p>{request.request.description}</p>
								<br/>

								<form action="../assets/php/sendmail.php" method="POST" data-form="mailer">
									<div className="alert alert-success d-on-success">We received your request and will contact you back soon.</div>

									<input type="hidden" name="subject" value="Request demo"/>

									<div className="form-group">
										<input className="form-control" type="text" name="name" placeholder="Name"/>
									</div>

									<div className="form-group">
										<input className="form-control" type="text" name="company_name" placeholder="Company name"/>
									</div>

									<div className="form-group">
										<input className="form-control" type="email" name="email" placeholder="Work email"/>
									</div>

									<div className="form-group">
										<input className="form-control" type="text" name="phone" placeholder="Phone number"/>
									</div>

									<button className="btn btn-primary btn-block" type="submit">Schedule Demo</button>
								</form>
							</div>


							<div className="col-lg-5 mx-auto">
								<img src={request.requestImage.url} alt="..." data-aos="fade-up"/>
							</div>

						</div>
					</div>
				</section>
			</main>
		</Layout>
	)
}

export const query = graphql`
query($id:ID!){
	gcmsdata{
    demoes(where:{id:$id}) {
      meta
      header
      request
      headerImage{
          url
      }
      requestImage{
          url
      }
    }
  }
}
`
