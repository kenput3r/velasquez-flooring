import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo-new.png"
import facebook from "../images/facebook.png"
import yelp from "../images/yelp.png"
import google from "../images/google.png"
import mail from "../images/mail.png"

const Header = () => (
  <Component>
    <div className="row">
      <nav role="navigation" aria-label="Main">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <h1>
        <img src={logo} alt="Velasquez Flooring" />
      </h1>
      <div>
        <ul>
          <li>
            <a
              href="mailto:velasquezflooring@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mail} alt="email" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/velasquezflooring1"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.yelp.com/biz/velasquez-flooring-la-habra-2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={yelp} alt="Yelp" />
            </a>
          </li>
          <li>
            <a
              href="https://g.page/r/CahlAWfd8ZBMEAE"
              target="_blank"
              rel="noreferrer"
            >
              <img src={google} alt="Google" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Component>
)

export default Header

const Component = styled.header`
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 1.45rem;
  }
  .row nav,
  .row h1,
  .row div {
    flex: 1;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 0;
  }
  li {
    display: inline-block;
    list-style-type: none;
  }
  h1 {
    margin-bottom: 0;
  }
  h1 img {
    display: block;
    max-width: 100%;
    max-height: 250px;
    margin: 0 auto;
  }
  li a {
    color: var(--color-blue);
    font-family: var(--title-font-stack);
    text-decoration: none;
    padding: 5px;
  }
  li a img {
    max-height: 25px;
  }
  @media (max-width: 991px) {
    .row h1 {
      flex: 0.5;
    }
  }
  @media (max-width: 639px) {
    .row {
      flex-wrap: wrap-reverse;
    }
    .row nav,
    .row h1,
    .row div {
      flex: none;
      width: 100%;
    }
    h1 img {
      margin-bottom: 1.45rem;
    }
  }
`
