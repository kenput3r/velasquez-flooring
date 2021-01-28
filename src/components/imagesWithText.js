import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ImagesWithText = () => {
  const data = useStaticQuery(graphql`
    query ImagesWithText {
      image1: file(relativePath: { eq: "orange-county-flooring-example.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(
        relativePath: { eq: "orange-county-flooring-example-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(
        relativePath: { eq: "orange-county-flooring-example-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Component>
      <div className="wrapper">
        <div className="col">
          <Img
            fluid={data.image1.childImageSharp.fluid}
            alt="Living room with laminate flooring"
          />
        </div>
        <div className="col">
          <div className="text">
            <p></p>
            <h3>High Quality Products, Low Prices &amp; Excellent Service</h3>
            <p>
              have made Velasquez Flooring one of Southern California's most
              trusted installers of laminate, hardwood, and engineered flooring.
            </p>
            <p></p>
          </div>
          <div className="images">
            <div>
              <Img
                fluid={data.image2.childImageSharp.fluid}
                alt="Common area with engineered flooring"
              />
            </div>
            <div>
              <Img
                fluid={data.image3.childImageSharp.fluid}
                alt="Bar with laminate flooring"
              />
            </div>
          </div>
        </div>
      </div>
    </Component>
  )
}

export default ImagesWithText

const Component = styled.div`
  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1440px;
    max-width: 90vw;
    margin: 1.45rem auto;
    @media (max-width: 500px) {
      max-width: 95vw;
    }
  }
  .col {
    display: flex;
    flex-direction: column;
    flex: 1;
    &:nth-of-type(1) {
      flex: 0.75;
      padding-right: 2rem;
    }
    @media (max-width: 767px) {
      flex: none !important;
      padding-right: 0 !important;
      margin-bottom: 1.45rem;
      width: 100%;
    }
  }
  .text {
    border-top: 8px solid var(--color-blue);
    border-bottom: 8px solid var(--color-blue);
    margin-bottom: 1.45rem;
    @media (max-width: 1440px) {
      margin-top: 0;
    }
  }
  h3 {
    font-size: 2.5rem;
    margin-bottom: 0;
    @media (max-width: 1024px) {
      font-size: 2rem;
    }
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1.5rem;
    &:nth-of-type(1) {
      background-color: #ffffff;
      height: 12px;
      width: 60%;
      margin-left: calc(40% + 1px);
      margin-top: -10px;
      position: relative;
      z-index: 2;
    }
    &:nth-of-type(2) {
      line-height: 1.2;
      padding-right: 1.45rem;
    }
    &:nth-of-type(3) {
      background-color: #ffffff;
      height: 12px;
      width: 60%;
      margin-left: calc(40% + 1px);
      margin-bottom: -10px;
      position: relative;
      z-index: 2;
    }
  }
  .images {
    display: flex;
    flex-direction: row;
    div {
      flex: 1;
      &:nth-of-type(2) {
        flex: 0.9;
        padding-left: 2rem;
        @media (max-width: 500px) {
          padding-left: 5vw;
        }
      }
    }
  }
`
