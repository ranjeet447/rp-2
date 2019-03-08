import React from 'react';
import Layout from '../components/layout';
import {graphql} from  'gatsby'
import Navbar from '../components/navbar'
import SEO from "../components/seo"


function City(props) {
	const city = props.data.gcmsdata.cities[0]
	const {title,description}=city.meta
	const header = city.header
	const cards = city.cards
	const map = city.map
	return (
		<Layout>
			<SEO title={title} description={description} keywords={[]} />
			<Navbar/>
        <header className="header bg-gray">
          <div className="container">
						<header className="section-header">
							<h2 className="display-3">{header.title}</h2>
							<hr/>
							<p className="lead">{header.description}</p>
						</header>


						<div className="row gap-y text-center">
							{cards.map((card,key)=>(
								<div className="col-lg-4" key={key}>
									<div className="card border p-5">
									<h5 className="mb-4">{card.title}</h5>
									<p className="small-1">{card.description}</p>
									<a href={card.link}>{card.link_text}</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</header>

				<main className="main-content">
					{/* | Map */}
					<section className="section p-0">
						<div className="h-400" data-provide="map" data-lat={map.lat} data-lng={map.long} data-marker-lat={map.lat} data-marker-lng={map.long} data-info={map.address}></div>
					</section>

					{/* | Contact form */}
					<section className="section bg-gray">
						<div className="container">
							<header className="section-header">
								<small>Contact</small>
								<h2 className="display-4">Let's Talk</h2>
								<hr/>
								<p className="lead">They original on mountains, drew the support time. The of to graduate. Into to is the to she.</p>
							</header>

							<form className="form-row input-border" action="../assets/php/sendmail.php" method="POST" data-form="mailer">
								<div className="col-12">
										<div className="alert alert-success d-on-success">We received your message and will contact you back soon.</div>
								</div>
								<div className="form-group col-sm-6 col-xl-3">
										<input className="form-control form-control-lg" type="text" name="name" placeholder="Name"/>
								</div>
								<div className="form-group col-sm-6 col-xl-3">
										<input className="form-control form-control-lg" type="email" name="email" placeholder="Email"/>
								</div>
								<div className="form-group col-sm-6 col-xl-3">
										<input className="form-control form-control-lg" type="text" name="subject" placeholder="Subject"/>
								</div>
								<div className="form-group col-sm-6 col-xl-3">
										<input className="form-control form-control-lg" type="text" name="company" placeholder="Company Name"/>
								</div>
								<div className="form-group col-12">
										<textarea className="form-control form-control-lg" rows="4" placeholder="Message" name="message"></textarea>
								</div>
								<div className="col-12 text-center">
										<button className="btn btn-xl btn-block btn-primary" type="submit">Submit Inquiry</button>
								</div>
							</form>
						</div>
					</section>


							</main>
         
    </Layout>
  )
}
export default City

export const query = graphql`
query($id:ID!){
	gcmsdata{
    cities(where:{id:$id}) {
      meta
      header
      cards
      map
    }
  }
}
`