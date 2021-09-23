import React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import TemplateWrapper from "../layouts";
import RandomTweet from "../components/RandomTweet";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, allMarkdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const prevLink =
    frontmatter.order > 0 ? (
      <Link
        className="prev"
        to={
          allMarkdownRemark.edges[frontmatter.order - 1].node.frontmatter.path
        }
      >
        {"← " +
          allMarkdownRemark.edges[frontmatter.order - 1].node.frontmatter.title}
      </Link>
    ) : null;
  const nextLink =
    frontmatter.order < allMarkdownRemark.edges.length - 1 ? (
      <Link
        className="next"
        to={
          allMarkdownRemark.edges[frontmatter.order + 1].node.frontmatter.path
        }
      >
        {allMarkdownRemark.edges[frontmatter.order + 1].node.frontmatter.title +
          " →"}
      </Link>
    ) : null;
  return (
    <TemplateWrapper>
      <div className="lesson-container">
        <div className="lesson">
          <h1>{frontmatter.title}</h1>
          <div
            className="lesson-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="lesson-links">
            {prevLink}
            {nextLink}
          </div>
          <br />
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
        order
      }
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            order
            path
            title
          }
        }
      }
    }
  }
`;
