import React, { Component } from "react";

import "./Footer.css";
import { NavbarMenuItems } from "../InfoItems/NavbarMenuItems";
import { FooterItems } from "../InfoItems/FooterItems";

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="sitemap-wrapper">
          <div className="sitemap-first-half">
            <div className="site-links-wrapper">
              <div className="site-logo">
                <img
                  className="site-image"
                  src="/static/logos/medium_red_white.png"
                  alt="site-logo"
                ></img>
              </div>
            </div>
            <div className="site-links-wrapper">
              <span className="site-subtitle">Location</span>
              <hr className="site-separator" />
              <div className="site-contact">
                3480 University Street <br />
                McConnell Engineering Building <br />
                Montreal, QC
                <br />
                H3A 0E9
                <br />
                Canada
                <br />
              </div>
            </div>
          </div>
          <div className="sitemap-second-half">
            <div className="site-links-wrapper">
              <span className="site-subtitle">Site Links</span>
              <hr className="site-separator" />
              <ul className="site-links-list">
                {NavbarMenuItems.map((item, index) => {
                  return (
                    <a className="site-link-item" href={item.url}>
                      <li>{item.title}</li>
                    </a>
                  );
                })}
              </ul>
            </div>
            <div className="site-links-wrapper">
              <span className="site-subtitle">McGill Links</span>
              <hr className="site-separator" />
              <ul className="site-links-list">
                {FooterItems.map((item, index) => {
                  return (
                    <a
                      className="site-link-item"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li>{item.title}</li>
                    </a>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-wrapper">
          &#169; {new Date().getFullYear()} DISCS Lab @ McGill. All Rights
          Reserved.
        </div>
        Big footer energy
      </section>
    );
  }
}

export default Footer;