import * as React from 'react'
import { graphql } from 'gatsby'
import Card from "../components/TOCCard";

import "bootstrap/dist/css/bootstrap.css";
import 'codemirror/lib/codemirror.css'
import "prismjs/themes/prism-solarizedlight.css";
import "./index.css";

const IndexPage = ({data}) => (
  <div className="index">
    <div className="jumbotron gradient">
      <h1>Intro to Web Dev</h1>
      <h2>v2 - <a href="https://frontendmasters.com/courses/web-development-v2/">Videos on Frontend Masters</a></h2>
    </div>
    <Card
      title="Table of Contents"
      content={data.allMarkdownRemark.edges}
    />
  </div>
);

export const query = graphql`
query IndexPageQuery {
  allMarkdownRemark(sort: {fields: frontmatter___order}) {
    edges {
      node {
        id
        frontmatter {
          order
          path
          title
        }
      }
    }
  }
}`


export default IndexPage;
