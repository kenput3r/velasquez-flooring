import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Tagline from "../components/tagline"
import SEO from "../components/seo"

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact Velasquez Flooring" />
      <Page>
        <div className="wrapper">
          <Tagline text="Contact" className="page-heading" />
          <div className="row">
            <div className="col">
              <h3>Send Us A Messgae</h3>
              <form
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="contact"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  aria-label="Name"
                  placeholder="Name"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Email"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  aria-label="Phone Number"
                  placeholder="Phone"
                />
                <textarea
                  id="message"
                  name="message"
                  aria-label="Message"
                  placeholder="Message"
                ></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
            <div className="col">
              <h3>Other Ways To Get In Touch</h3>
              <ul>
                <li>
                  <a href="tel:+1-562-706-2384">Call (562) 706-2384</a>
                </li>
                <li>
                  <a href="mailto:velasquezflooring@gmail.com">
                    Email velasquezflooring@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/velasquezflooring1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.yelp.com/biz/velasquez-flooring-la-habra-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Yelp
                  </a>
                </li>
                <li>
                  <a href="https://google.com" target="_blank" rel="noreferrer">
                    Google
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Page>
    </Layout>
  )
}

export default Contact

const Page = styled.div`
  .wrapper {
    max-width: 992px;
    margin: 0 auto;
  }
  .page-heading {
    div {
      margin: 3rem auto;
      width: 640px;
    }
    h3 {
      color: var(--color-blue);
    }
  }
  h1 {
    line-height: 0.5;
    span {
      font-size: 1rem;
      padding-left: 5px;
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .col {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 10px;
    @media (max-width: 767px) {
      flex: none;
      width: 100%;
    }
  }
  input,
  textarea {
    display: block;
    width: 100%;
    margin-bottom: 1.45rem;
  }
  a {
    color: var(--color-blue);
  }
  @media (max-width: 500px) {
    .page-heading {
      div {
        margin-top: 1.45rem;
      }
    }
  }
`
