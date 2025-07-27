"use client";

import { useEffect, useRef } from "react";
import "./about.css";
import ChooseUs from "../../Assets/About-Choose.jpeg";
import kishore from "../../Assets/kishore.jpeg";
import himanshu from "../../Assets/himanshu.png";

export default function AboutUs() {
  const sectionRefs = {
    hero: useRef(null),
    mission: useRef(null),
    whyChooseUs: useRef(null),
    team: useRef(null),
  };

  useEffect(() => {
    // Animation observer for fade-in effects
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="hero-section animate-fade">
        <div className="hero-content">
          <h1>About Us</h1>
          <p className="subtitle">
            Transforming ideas into digital reality since 2015
          </p>
          <div className="hero-divider"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        ref={sectionRefs.mission}
        className="mission-section animate-fade"
      >
        <div className="section-container">
          <h2>Our Mission</h2>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                To simplify compliance and financial management for startups and
                small businesses across the globe, enabling founders to focus on
                what truly matters—growing their business
                {/* We're dedicated to creating innovative solutions that empower
                businesses to thrive in the digital age. Our mission is to
                combine cutting-edge technology with exceptional user
                experiences to deliver products that make a difference. */}
              </p>
              {/* <p>
                With a focus on quality, accessibility, and sustainability, we
                strive to be at the forefront of technological advancement while
                maintaining our commitment to ethical practices and inclusive
                design.
              </p> */}
            </div>
            <div className="values-container">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>Pushing boundaries with creative solutions</p>
              </div>
              <div className="value-card">
                <h3>Quality</h3>
                <p>Delivering excellence in every project</p>
              </div>
              <div className="value-card">
                <h3>Integrity</h3>
                <p>Building trust through honest practices</p>
              </div>
              <div className="value-card">
                <h3>Collaboration</h3>
                <p>Working together to achieve greatness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={sectionRefs.whyChooseUs}
        className="why-choose-us-section animate-fade"
      >
        <div className="section-container">
          <h2>Why Choose Us</h2>
          <div className="choose-us-content">
            <div className="choose-us-image">
              <img src={ChooseUs} alt="Our workspace" />
            </div>
            <div className="choose-us-reasons">
              <div className="choose-us-heading">
                <p>
                  At Accrual-Edge, we take a proactive, solution-oriented
                  approach to fuel your growth. With timely updates, transparent
                  reporting, and a responsive team always within reach, here’s
                  why partnering with us makes business sense:
                </p>
              </div>

              <div className="reason-item">
                <div className="reason-icon">
                  <div className="icon-circle">
                    <span>01</span>
                  </div>
                </div>

                <div className="reason-text">
                  <h3>Expertise You Can Trust</h3>
                  <p>
                    Our team of highly qualified Chartered Accountants has
                    extensive experience in international accounting standards,
                    including US GAAP, IFRS, ensuring reliable financial
                    reporting.
                  </p>
                </div>
              </div>

              <div className="reason-item">
                <div className="reason-icon">
                  <div className="icon-circle">
                    <span>02</span>
                  </div>
                </div>
                <div className="reason-text">
                  <h3>Tailored Services</h3>
                  <p>
                    Every business is unique and we offer customized solutions
                    that address your specific needs, ensuring that you receive
                    personalized, relevant support.
                  </p>
                </div>
              </div>
              <div className="reason-item">
                <div className="reason-icon">
                  <div className="icon-circle">
                    <span>03</span>
                  </div>
                </div>
                <div className="reason-text">
                  <h3>Proactive Planning & Client Education</h3>
                  <p>
                    We help clients stay ahead of evolving regulations through a
                    proactive, digital-first approach. Our focus on education
                    empowers you to navigate changes with clarity and
                    confidence.
                  </p>
                </div>
              </div>
              <div className="reason-item">
                <div className="reason-icon">
                  <div className="icon-circle">
                    <span>04</span>
                  </div>
                </div>
                <div className="reason-text">
                  <h3> Cost-Effective Solutions</h3>
                  <p>
                    Best in class services at competitive rates, helping cost
                    reduction without compromising quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={sectionRefs.team} className="team-section animate-fade">
        <div className="section-container">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            Our diverse team of experts brings together years of experience and
            a passion for excellence.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src={kishore} alt="Kishore Arora" />
              </div>
              <h3>Kishore Arora</h3>
              <p className="member-role">Partner</p>
              <p className="member-bio">
                Kishore, a Chartered Accountant with 3+ years of experience in
                FDD, assurance, and tax advisory, has worked with firms like
                Goldman Sachs in their Controllership division.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={himanshu} alt="Himanshu Rathore" />
              </div>
              <h3>Himanshu Rathore</h3>
              <p className="member-role">Partner</p>
              <p className="member-bio">
                Managing Financial reporting for US Diamond Merchants for over 3
                years with 100% on time deliverables & Zero Compliance Issues.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Aisha Patel"
                />
              </div>
              <h3>Aisha Patel</h3>
              <p className="member-role">Partner</p>
              <p className="member-bio">
                Aisha ensures our products deliver exceptional user experiences.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="David Rodriguez"
                />
              </div>
              <h3>David Rodriguez</h3>
              <p className="member-role">Partner</p>
              <p className="member-bio">
                David leads our development team with technical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
