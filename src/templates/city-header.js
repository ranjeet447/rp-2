import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Head(){
    return(
        <StaticQuery
            query={pageQuery}
            render={data=>{
                const header = data.allCityYaml.edges[0].node.header[0]
                return(
                <header className="header text-white" style={{backgroundImage: 'linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)'}}>
                    <div className="container">
                    <header className="section-header">
                        <h2 className="display-3">{header.title}</h2>
                        <p className="lead">{header.description}</p>
                    </header>
                    </div>
                </header>
                )
            }}
    />
    )
}

const pageQuery = graphql`
{
  allCityYaml{
    edges{
      node{
        header{
          title
          description
        }
      }
    }
  }
}
`