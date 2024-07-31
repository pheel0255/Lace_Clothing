export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About </p>
          <h2 className="skills-section--heading">About Us</h2>
          <p className="hero--section-description">
            Welcome to Lase_Clothing, where styles meets elegance. Founded with
            a passion for design and commitment to quality, we aim to bring you
            the latest trends and timeless classics that elevate your wardrobe.
            Our journey began in 2019, and since then, we've been dedicated to
            curating collections that inspire confidence and celebrate
            individuality. Each piece is crafted with meticulous attention to
            detail, using only the finest materials, ensuring that you not only
            look good but feel great.
          </p>
          <div>
            <h4 className=" hero--section-description about">
              {" "}
              <b>Why Choose Us</b>
            </h4>
            <u>
              <li className="hero--section-description line">
                {" "}
                "Unparalleled Quality: We believe in quality over quantity.
                Every item in our collection is made from premium fabrics and
                materials, designed to last and keep you looking your best
                season after season.
              </li>
              <li className="hero--section-description line">
                Exclusive Designs: Our in-house designers work tirelessly to
                create unique pieces that stand out. We blend contemporary
                fashion with classic styles, offering a diverse range of outfits
                for every occasion
              </li>
            </u>
          </div>
        </div>
      </div>
    </section>
  );
}
