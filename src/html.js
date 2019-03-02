import React from "react"
// import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <link rel="stylesheet" href="/assets/css/page.min.css"/>
          <link rel="stylesheet" href="/assets/css/style.css"/>
          <script src="/assets/js/page.min.js"></script>
          <script src="/assets/js/script.js"></script>
        </body>
      </html>
    )
  }
}