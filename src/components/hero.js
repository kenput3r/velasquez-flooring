import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      image: file(relativePath: { eq: "hero-background.jpg" }) {
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
      <BackgroundImage
        className="hero-image"
        fluid={data.image.childImageSharp.fluid}
      >
        <div className="hero-text">
          <h2>About Us</h2>
          <p>
            We are a family owned business located in Orange County, California.
            We specialize in the installation and customization of modern and
            classic flooring. We install a wide range of wood floor products
            such as laminate flooring, engineered flooring, luxury vinyl tile,
            and solid hardwoods. Our services include standard installations,
            design patterns, steps, distressing and other custom finishes.
          </p>
        </div>
      </BackgroundImage>
    </Component>
  )
}

export default Hero

const Component = styled.div`
  margin: 3rem 0 1.45rem 0;
  @media (max-width: 500px) {
    margin-top: 1.45rem;
  }
  .hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    padding: 30px;
    @media (max-width: 1279px) {
      min-height: 50vh;
    }
    @media (max-width: 768px) {
      min-height: 65vh;
    }
    @media (max-width: 500px) {
      padding: 30px 15px;
      ::after,
      ::before {
        background-position: left !important;
      }
    }
  }
  .hero-text {
    background-color: #ffffff;
    width: 640px;
    max-width: 100%none;
    padding: 30px;

    h2 {
      color: var(--color-blue);
      font-size: 2.5rem;
    }
    p {
      color: var(--color-brown);
      font-size: 1.2rem;
      line-height: 1.5;
      text-align: justify;
      @media (max-width: 500px) {
        text-align: left;
      }
    }
    @media (max-width: 500px) {
      padding: 15px;
    }
  }
`
