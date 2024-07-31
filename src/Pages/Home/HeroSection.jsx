import React from "react";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Toba Toluwase</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              𝙻𝚊𝚜𝚎_𝙲𝚕𝚘𝚝𝚑𝚒𝚗𝚐 𝙳𝚎𝚜𝚒𝚐𝚗
            </span>{" "}
          </h1>
          <p className="hero--section-description">
            Discover the future of fashion with our customizable eco-friendly{" "}
            <br />
            line. Every piece is made from sustainable materials and designed{" "}
            <br />
            to your specification, blending style, comfort, and responsibility
          </p>
        </div>
        <Link
          className="btn btn-primary"
          to="about"
          smooth={true}
          duration={500}
          offset={-500}
        >
          Learn More
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero-img.JPG" alt="Hero Section" />
      </div>
    </section>
  );
}
