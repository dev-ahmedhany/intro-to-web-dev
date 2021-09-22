import React from "react";
import { graphql } from "gatsby";
import TemplateWrapper from "../layouts";
import RandomTweet from "../components/RandomTweet";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <TemplateWrapper>
      <div className="lesson-container">
        <div className="lesson">
          <h1>{frontmatter.title}</h1>
          <div
            className="lesson-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <RandomTweet />
        </div>
      </div>
    </TemplateWrapper>
  );
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
