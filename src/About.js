import React from "react";

import "../src/global.css";

/*------React Bootstrap--------- */
import { Carousel } from "react-bootstrap";

function About() {
  return (
    <div className="aboutsection">
      {/*-----------------------Heading---------------------- */}
      <h1 className="Header">About Us</h1>
      {/*--------------------User-Image-------------------- */}
      <Carousel>
        <Carousel.Item>
          <img
            src="../images/JohnWeak.jpg"
            className="d-block user"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/company.jpg"
            className="d-block user"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      {/*-----------------Introduction------------------- */}
      <p>
        We are a team of dedicated professionals driven by creativity,
        innovation, and a passion for exceptional design. With years of
        expertise in mobile application and website design, we specialize in
        transforming ideas into captivating digital experiences that seamlessly
        combine functionality and aesthetics. Our approach is centered on
        understanding the unique needs of each client, ensuring every project we
        undertake not only ailgns with their vision but also elevates their
        brand in the digital space. At the core of our work is our mastery of
        modern design tools like Figma, which allows us to bring concepts to
        life with precision and style. We take pride in crafting user-centric
        designs that are intuitive, visually appealing, and optimized for
        performance. From creating sleek mobile applications to designing
        impactful websites, we aim to deliver solutions that resonate with users
        and leave a lasting impression.
      </p>
    </div>
  );
}

export default About;
