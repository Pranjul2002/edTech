"use client";


import { useEffect, useRef, useState } from "react";
import { Gideon_Roman } from 'next/font/google';
import "./pageStyle.css";



const gideon = Gideon_Roman({
  weight: '400',
  subsets: ['latin'],
});


const text = `Starting is essential for progress.
____________________________________________________
"An investment in knowledge always pays the best interest." 
– Benjamin Franklin"`;


const images = [
  "/landingPage/slide1.png",
  "/landingPage/slide2.png",
  "/landingPage/slide3.png",
  "/landingPage/slide4.png",
  "/landingPage/slide5.png",
  "/landingPage/slide6.png",
  "/landingPage/slide7.png",
];

export default function Home() {


  return (
    <div id="Home">
      <div className="bannerArea">
        <div className="container">
          <div className={`${gideon.className} bannerTitle`}>
            An easier, more powerful <br />
            platform to grow skills
          </div>
          <div className="bannerSubTitle">
            Where Education Blooms Alive.
          </div>
        </div>
      </div>


      <div className='carousel'>
        <div className="carouselTrack">
          {[...images, ...images].map((src, index) => (
            <div key={index} className="carouselItem">
              <img src={src} alt={`slide-${index}`} />
            </div>
          ))}
        </div>
      </div>



      <div className="growthMindSetArea">
        <div className="container">
          <p className={`${gideon.className} growthText`}>
            Starting is essential for progress.<br/>
            _____________________________________________<br/>
            "An investment in knowledge always pays the<br/> best interest."<br/>
            – Benjamin Franklin
          </p>
        </div>
      </div>

      <div className="getCourseArea">
        <div className="getCoursesTitle">
          <p className={`${gideon.className} getCoursesTitleText`}>
            Get enrolled in the<br/>
            courses <br/>
            made by industry experts!
          </p>
        </div>
        <div className="heroWrapper">
          <div className="container">
            <div className="courseCard"></div>
            <div className="courseCard"></div>
            <div className="courseCard"></div>
            <div className="courseCard"></div>
            <div className="courseCard"></div>
          </div>
        </div>

        <div className="featuredArea">
          <div className="container">
            <div className="ContainerBox">
              <div className={`${gideon.className} ContainerBoxInside`}>
                <h1>Make the most of your <br/>
                time for your enhancement</h1>
                Focus on driving engagement
                through personalized, AI-driven, and interactive content,
                often highlighting improved
                learning outcomes and efficiency. Key messaging includes,
                "Transform your classroom with AI-driven, interactive tools designed for
                personalized learning". Effective communication templates for students include, Reminder.
              </div>
              <div className="ContainerBoxInside featuredImg">
                <img src="/landingPage/featured1.png"></img>
              </div>
            </div>
            <div className="ContainerBox">
              <div className="ContainerBoxInside featuredImg">
                <img src="/landingPage/featured2.png"></img>
              </div>
              <div className={`${gideon.className} ContainerBoxInside`}>
                <h1>You can join anytime<br/>
                from anywhere</h1>
                Focus on driving engagement
                through personalized, AI-driven, and interactive content,
                often highlighting improved
                learning outcomes and efficiency. Key messaging includes,
                "Transform your classroom with AI-driven, interactive tools designed for
                personalized learning". Effective communication templates for students include, Reminder.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}