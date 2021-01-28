import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Dialog } from "@reach/dialog"
import Layout from "../components/layout"
import Tagline from "../components/tagline"
import "@reach/dialog/styles.css"

const Gallery = ({ data }) => {
  const [modalImage, setModalImage] = useState(
    data.allFile.edges[0].node.childImageSharp.fluid
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const viewportWidth = typeof window === undefined ? 0 : window.innerWidth
  const handleClick = (e, fluid) => {
    e.preventDefault()
    if (viewportWidth > 500) {
      setModalImage(fluid)
      setIsModalOpen(true)
    }
  }
  return (
    <Layout>
      <Page>
        <Tagline text="GALLERY" className="page-heading" />
        <div className="row">
          {data.allFile.edges.map((edge, i) => (
            <a
              key={edge.node.childImageSharp.id}
              href="/gallery"
              role="button"
              className="image-wrapper"
              onClick={e => handleClick(e, edge.node.childImageSharp.fluid)}
            >
              <Img
                fluid={edge.node.childImageSharp.fluid}
                alt={`Velasquez Flooring Example ${i}`}
              />
            </a>
          ))}
        </div>
        <Dialog
          isOpen={isModalOpen}
          onDismiss={() => setIsModalOpen(false)}
          aria-label="Enlarged Image"
        >
          <p style={{ textAlign: "right", marginBottom: 0 }}>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                border: "none",
                backgroundColor: "transparent",
                fontSize: "2rem",
                marginRight: "-10px",
              }}
            >
              &times;
            </button>
          </p>
          <Img
            fluid={modalImage}
            alt="An example of flooring by Velasquez Flooring"
          />
        </Dialog>
      </Page>
    </Layout>
  )
}

export default Gallery

const Page = styled.div`
  .page-heading {
    div {
      margin: 3rem auto;
      width: 640px;
    }
    h3 {
      color: var(--color-blue);
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .image-wrapper {
    display: block;
    width: 33vw;
    max-width: 33vw;
    margin-bottom: 0.25vw;
    overflow: hidden;
  }
  @media (max-width: 767px) {
    .image-wrapper {
      width: 49.5vw;
      max-width: 49.5vw;
    }
  }
  @media (max-width: 500px) {
    .page-heading {
      div {
        margin-top: 1.45rem;
      }
    }
    .image-wrapper {
      width: 99vw;
      max-width: 99vw;
      margin-bottom: 0.5vw;
    }
  }
`

export const query = graphql`
  query GalleryQuery {
    allFile(
      filter: {
        relativeDirectory: { eq: "gallery" }
        ext: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(
              cropFocus: CENTER
              fit: COVER
              maxWidth: 2048
              maxHeight: 1536
            ) {
              ...GatsbyImageSharpFluid
            }
            id
          }
        }
      }
    }
  }
`
