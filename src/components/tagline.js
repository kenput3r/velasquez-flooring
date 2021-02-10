import React from "react"
import styled from "styled-components"

const Tagline = ({ text, className, heading_type }) => {
  const returnHeading = () => {
    if (heading_type === "h2") {
      return <h2>{text}</h2>
    } else {
      return <h3>{text}</h3>
    }
  }
  return (
    <Component className={className}>
      <div>
        <p></p>
        {returnHeading()}
        <p></p>
      </div>
    </Component>
  )
}

export default Tagline

const Component = styled.div`
  div {
    width: 1440px;
    max-width: 90vw;
    margin: 6rem auto;
  }
  h2,
  h3 {
    border: 8px solid var(--color-blue);
    color: var(--color-grey-dark);
    font-size: 2.5rem;
    margin-bottom: 0;
    padding: 40px 30px;
    text-align: center;
  }
  p:nth-of-type(1) {
    background-color: #ffffff;
    height: 12px;
    width: 80%;
    margin-bottom: -10px;
    margin-left: -1%;
    position: relative;
    z-index: 2;
  }
  p:nth-of-type(2) {
    background-color: #ffffff;
    height: 12px;
    width: 80%;
    margin-top: -10px;
    margin-left: 21%;
    position: relative;
    z-index: 2;
  }
  @media (max-width: 1024px) {
    h2,
    h3 {
      font-size: 2rem;
    }
  }
  @media (max-width: 500px) {
    div {
      margin: 3rem auto;
      max-width: 95vw;
    }
    h2,
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 320px) {
    h2,
    h3 {
      font-size: 1.2rem;
    }
  }
`
