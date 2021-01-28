import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Tagline from "../components/tagline"
import ImagesWithText from "../components/imagesWithText"
import FloorTypes from "../components/floorTypes"
import Services from "../components/services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Tagline text="Flooring can make or break your home, so go with a leader in laminate, LVT, engineered and hardwood flooring." />
    <ImagesWithText />
    <FloorTypes />
    <Services />
  </Layout>
)

export default IndexPage
