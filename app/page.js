"use client";

import Image from "next/image";
import { Gideon_Roman } from "next/font/google";
import "./pageStyle.css";

const gideon = Gideon_Roman({
  weight: "400",
  subsets: ["latin"],
});

/* ======================
   DATA (Professional Practice)
====================== */

const slides = [
  "/landingPage/slide1.png",
  "/landingPage/slide2.png",
  "/landingPage/slide3.png",
  "/landingPage/slide4.png",
  "/landingPage/slide5.png",
  "/landingPage/slide6.png",
  "/landingPage/slide7.png",
];

const courses = new Array(5).fill(null);

const featuredSections = [
  {
    title: "Make the most of your time for your enhancement",
    text: `Focus on driving engagement through personalized, AI-driven, 
    and interactive content, improving learning outcomes and efficiency.`,
    image: "/landingPage/featured1.png",
  },
  {
    title: "You can join anytime from anywhere",
    text: `Transform your classroom with AI-driven, interactive tools 
    designed for personalized learning and better communication.`,
    image: "/landingPage/featured2.png",
    reverse: true,
  },
];

/* ======================
   COMPONENT
====================== */

export default function Home() {
  return (
    <main id="Home">
      {/* ======================
           HERO
      ====================== */}
      <section className="bannerArea">
        <div className="container">
          <h1 className={`${gideon.className} bannerTitle`}>
            An easier, more powerful <br />
            platform to grow skills
          </h1>
          <p className="bannerSubTitle">
            Where Education Blooms Alive.
          </p>
        </div>
      </section>

      {/* ======================
           CAROUSEL
      ====================== */}
      <section className="carousel">
        <div className="carouselTrack">
          {[...slides, ...slides].map((src, index) => (
            <div key={index} className="carouselItem">
              <Image
                src={src}
                alt={`Slide ${index}`}
                width={300}
                height={200}
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ======================
           QUOTE SECTION
      ====================== */}
      <section className="growthMindSetArea">
        <div className="container">
          <p className={`${gideon.className} growthText`}>
            Starting is essential for progress.
            <br />
            ________________________________
            <br />
            "An investment in knowledge always pays the best interest."
            <br />– Benjamin Franklin
          </p>
        </div>
      </section>

      {/* ======================
           COURSES
      ====================== */}
      <section className="getCourseArea">
        <div className="container">
          <h2 className={`${gideon.className} getCoursesTitleText`}>
            Get enrolled in the courses <br />
            made by industry experts!
          </h2>

          <div className="heroWrapper">
            <div className="courseRow">
              {courses.map((_, index) => (
                <div key={index} className="courseCard" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================
           FEATURED
      ====================== */}
      <section className="featuredArea">
        <div className="container">
          {featuredSections.map((item, index) => (
            <div
              key={index}
              className={`ContainerBox ${
                item.reverse ? "reverse" : ""
              }`}
            >
              <div className="ContainerBoxInside featuredImg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={400}
                />
              </div>

              <div className={`${gideon.className} ContainerBoxInside`}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
