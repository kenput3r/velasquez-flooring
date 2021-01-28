import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const FloorTypes = () => {
  const data = useStaticQuery(graphql`
    query FloorTypes {
      backgroundImage: file(relativePath: { eq: "floor-installation.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      laminate: file(relativePath: { eq: "laminate-flooring.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      engineered: file(relativePath: { eq: "engineered-flooring.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hardwood: file(relativePath: { eq: "hard-wood-flooring.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lvt: file(relativePath: { eq: "lvt-flooring.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Component>
      <BackgroundImage
        fluid={data.backgroundImage.childImageSharp.fluid}
        className="background-image"
      >
        <div className="wrapper">
          <div className="row">
            <div className="image-wrapper">
              <Img
                fluid={data.laminate.childImageSharp.fluid}
                alt="Office breakroom with laminate flooring"
              />
            </div>
            <div className="text">
              <h3>
                <span>Laminate Flooring</span>
              </h3>
              <p>
                Laminates allow considerable flexibility. They come in a wide
                variety of colors, and they’re incredibly durable. Our laminated
                flooring can be used to achieve a wide variety of decorative
                styles and moods. Laminates can be treated to look like almost
                any type of wood or light stone, giving you the opportunity to
                easily change the look of any room.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="text">
              <h3>
                <span>Engineered Flooring</span>
              </h3>
              <p>
                Engineered flooring has all the benefits of laminated
                flooring—including superior stability and easy installation—plus
                the look of solid wood. It requires minimal usage of natural
                wood, mostly in the form of waste products. Engineered flooring
                is just as durable as hardwood, but it’s less expensive, has a
                more modern look, and comes in a variety of colors and textures.
              </p>
            </div>
            <div className="image-wrapper">
              <Img
                fluid={data.engineered.childImageSharp.fluid}
                alt="Office breakroom with laminate flooring"
              />
            </div>
          </div>

          <div className="row">
            <div className="image-wrapper">
              <Img
                fluid={data.hardwood.childImageSharp.fluid}
                alt="Office breakroom with laminate flooring"
              />
            </div>
            <div className="text">
              <h3>
                <span>Hardwood Flooring</span>
              </h3>
              <p>
                Solid hardwood flooring is all wood and comes 5/8 to 3/4 inches
                thick. Because it’s solid wood, it can be sanded and refinished
                many times, allowing for maximum customization of color and
                finish. However, it’s susceptible to changes in humidity, and
                isn’t recommended for below-grade basements. The best hardwood
                floors are made with wood species that are readily available and
                very hard. Oak, maple, and cherry are all great choices.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="text">
              <h3>
                <span>LVT Flooring</span>
              </h3>
              <p>
                LVT (Luxury Vinyl Tile), which offers 3D printing technology
                which adds depth and realism, durability, with a high
                performance wear layer to a vinyl tile product. LVT offers the
                option of a less permanent floor than wood or ceramic tile,
                especially with the growing popularity of floating LVT floors.
                Luxury Vinyl is much easier to replace than laminates, hardwood,
                and engineered flooring.
              </p>
            </div>
            <div className="image-wrapper last">
              <Img
                fluid={data.lvt.childImageSharp.fluid}
                alt="Office breakroom with laminate flooring"
              />
            </div>
          </div>
        </div>
      </BackgroundImage>
    </Component>
  )
}

export default FloorTypes

const Component = styled.div`
  padding-top: 3rem;
  .background-image {
    padding-top: 6rem;
    padding-bottom: 10rem;
  }
  .wrapper {
    background-color: var(--color-blue);
    width: 960px;
    max-width: 77vw;
    margin: 0 auto;
  }
  .row {
    display: flex;
    flex-direction: row;
    position: relative;
    &:nth-of-type(1) {
      h3 {
        margin-top: 0;
        @media (min-width: 1025px) {
          span {
            border-top: 0;
            padding-top: 0;
            width: auto;
          }
        }
      }
    }
    &:nth-of-type(even) {
      h3 {
        text-align: right;
      }
    }
  }
  .image-wrapper {
    filter: drop-shadow(7px 7px 5px #000000);
    margin-top: -3rem;
    width: 480px;
    &:nth-of-type(odd) {
      margin-left: -240px;
    }
    &:nth-of-type(even) {
      margin-right: -240px;
    }
    &.last {
      position: absolute;
      margin-right: 0;
      margin-left: calc(100% - 240px);
    }
  }
  .text {
    color: var(--color-grey);
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    padding: 2rem;
    width: calc(100% - 240px);
    p {
      line-height: 1.2;
      text-align: justify;
    }
  }
  h3 {
    font-size: 1.7rem;
    margin-top: -100px;
    padding-top: 1.45rem;
    span {
      border-top: 4px solid var(--color-grey-dark);
      display: inline-block;
      padding-top: 1.45rem;
      width: 400px;
    }
  }
  @media (max-width: 1440px) {
    .image-wrapper {
      width: 22.222vw;
      &:nth-of-type(odd) {
        margin-left: -11.111vw;
      }
      &:nth-of-type(even) {
        margin-right: -11.111vw;
      }
      &.last {
        margin-left: calc(100% - 11.111vw);
      }
    }
    .text {
      width: calc(100% - 11.111vw);
    }
  }
  @media (max-width: 1024px) {
    .background-image {
      padding-top: 0;
      padding-bottom: 0;
    }
    .wrapper {
      background-color: transparent;
      width: 100%;
      max-width: 100%;
    }
    .row {
      background-color: var(--color-blue-st);
      &:nth-of-type(4) {
        padding-bottom: 1.45rem;
      }
    }
    .image-wrapper {
      margin-top: 3.45rem;
      width: 30%;
      &:nth-of-type(odd) {
        margin-left: 2rem;
        margin-right: 0;
      }
      &:nth-of-type(even) {
        margin-right: 2rem;
        margin-left: 0;
      }
      &.last {
        position: relative;
        margin-top: 3.45rem;
        margin-right: 2rem;
        margin-left: 0;
      }
    }
    .text {
      font-size: 1.2rem;
      width: 70%;
      h3 {
        margin-top: 0;
      }
    }
  }
  @media (max-width: 767px) {
    .row {
      flex-wrap: wrap;
      &:nth-of-type(odd) {
        flex-wrap: wrap-reverse;
      }
      &:nth-of-type(4) {
        padding-bottom: 2rem;
      }
    }
    .image-wrapper {
      margin-top: 0;
      width: calc(100% - 4rem);
      &:nth-of-type(even) {
        margin-left: 2rem;
      }
      &.last {
        margin-top: 0;
      }
    }
    .text {
      width: 100%;
      p {
        margin-bottom: 0;
      }
      h3 span {
        max-width: 100%;
      }
    }
  }
  @media (max-width: 500px) {
    .image-wrapper {
      width: calc(100% - 2rem);
      &:nth-of-type(odd),
      &:nth-of-type(even),
      &.last {
        margin-right: 1rem;
        margin-left: 1rem;
      }
    }
    .text {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`
