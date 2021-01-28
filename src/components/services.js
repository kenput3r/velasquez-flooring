import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      residentialDesign: file(
        relativePath: { eq: "services-residential-flooring.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      customStairs: file(relativePath: { eq: "services-custom-stairs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      freeConsultation: file(
        relativePath: { eq: "services-free-consultation.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      servicesBackground: file(
        relativePath: { eq: "services-background_1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Component>
      <Background
        fluid={data.servicesBackground.childImageSharp.fluid}
        className="background-image"
      >
        <div className="row">
          <div className="col">
            <Img fluid={data.residentialDesign.childImageSharp.fluid} />
            <div className="text">
              <div className="lines"></div>
              <h3>Residential Design</h3>
              <p>
                With over 10 years of custom wood floor design, working with
                high demanding Orange and San Diego County clients, we are able
                to confidently tackle the most complicated projects and complete
                them with unrivaled quality.{" "}
              </p>
            </div>
          </div>
          <div className="col">
            <Img fluid={data.customStairs.childImageSharp.fluid} />
            <div className="text">
              <div className="lines"></div>
              <h3>Custom Staircases</h3>
              <p>
                Beautifully designed and constructed staircase can be the focal
                point of any residential or commercial property. At Velasquez
                Flooring we help our client’s custom staircase design ideas come
                to life.{" "}
              </p>
            </div>
          </div>
          <div className="col">
            <Img fluid={data.freeConsultation.childImageSharp.fluid} />
            <div className="text">
              <div className="lines"></div>
              <h3>Free Consultation</h3>
              <p>
                We provide on-premise free consultatio. We will meet with you to
                discuss our products and services, show samples, and help you
                visualize and choose options that will best fit your design
                preferences.
              </p>
            </div>
          </div>
        </div>
      </Background>
    </Component>
  )
}

export default Services

const Component = styled.div`
  margin-top: 1.45rem;
  padding-top: 1.45rem;
  .row {
    display: flex;
    flex-direction: row;
    width: 1440px;
    max-width: 100%;
    margin: 0 auto;
    padding-top: 3rem;
  }
  .col {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1.45rem;
    &:nth-of-type(2) {
      margin-top: 3rem;
    }
    &:nth-of-type(3) {
      margin-top: 6rem;
    }
  }
  .text {
    p {
      border-left: 4px solid var(--color-blue);
      padding-left: 5px;
    }
  }
  .lines {
    border-top: 4px solid var(--color-blue);
    border-right: 4px solid var(--color-blue);
    height: 2rem;
    margin: 1.45rem 2px 5px auto;
    width: 79%;
  }
  h3 {
    color: var(--color-blue);
    font-size: 2rem;
    text-align: right;
  }
  @media (max-width: 1024px) {
    padding-top: 0;
    .row {
      padding-top: 0;
    }
    .col {
      padding-top: 0;
    }
  }
  @media (max-width: 991px) {
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 732px) {
    .row {
      flex-wrap: wrap;
    }
    .col {
      flex: none;
      flex-direction: column-reverse;
      padding: 0 1rem 1rem 1rem;
      width: 100%;
      &:nth-of-type(2) {
        margin-top: 1.45rem;
      }
      &:nth-of-type(3) {
        margin-top: 1.45rem;
      }
    }
  }
`
const Background = styled(BackgroundImage)`
  background-size: 45% !important;
  background-repeat: no-repeat !important;
  background-position: top right !important;

  @media (max-width: 732px) {
    background-image: none;
    background: none;
    ::before,
    ::after {
      background-image: none !important;
    }
  }
`
