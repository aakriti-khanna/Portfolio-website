"use client";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import "./landingpage.css";

export default function Home() {
  const sectionRefs = {
    hero: useRef(null),
    introduction: useRef(null),
    services: useRef(null),
    about: useRef(null),
  };

  useEffect(() => {
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

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.querySelector(".hero-parallax");
      if (heroSection) {
        heroSection.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="hero-section">
        <div className="hero-parallax"></div>
        <div className="hero-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
          {/* <div className="animated-badge">Financial Excellence</div> */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 stagger-animate">
            <span className="block">Strategic Financial</span>
            <span className="block">Solutions for Your Business</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 stagger-animate delay-200">
            Providing comprehensive financial solutions to help your business
            thrive in today's complex economic landscapeage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 stagger-animate delay-400">
            <Link to="/services" className="btn-primary hover-slide-right">
              Our Services <FaArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/about" className="btn-secondary hover-slide-left">
              About Us <FaArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow-scroll">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div> */}
        </div>
      </section>

      {/* Introduction Section - Completely Redesigned */}
      <section
        ref={sectionRefs.introduction}
        className="py-20 bg-white animate-fade"
      >
        <div className="container mx-auto px-4">
          <div className="intro-grid">
            <div className="intro-content">
              <div className="section-header text-left">
                <h2 className="section-title">INTRODUCTION</h2>
                <div className="section-line ml-0"></div>
              </div>

              <p className="text-lg text-gray-700 mt-8 mb-6">
                At AccrualEdge Advisor, we are a team of young, driven financial
                professionals with a strong foundation in accounting and
                finance. Our core team includes Chartered Accountants from the
                Institute of Chartered Accountants of India (ICAI), complemented
                by professionals with diverse experience, including backgrounds
                at globally reputed investment banks. We bring specialized
                expertise in US accounting — particularly for niche industries
                like diamond trading and food chains — and a fresh,
                solutions-oriented approach to financial problem-solving.
                {/* Being
                a new entrant in the industry is our strength. We are not bound
                by outdated processes or rigid structures, allowing us to offer
                flexible, client-focused solutions. Our lean and agile setup
                helps us innovate quickly, respond faster, and deliver results
                without compromising on quality. We believe every business is
                unique — and so should be the financial strategy behind it.
                Whether you're an early-stage startup or a scaling small or
                medium-sized business (SMB), we tailor our services to meet your
                specific needs. With proactive communication, hands-on support,
                and dedicated account management, we focus on building
                meaningful partnerships that drive long-term growth. */}
              </p>

              <div className="intro-cards">
                <div className="intro-card hover-float">
                  <div className="intro-card-icon">
                    <FaChartLine className="h-8 w-8 text-white" />
                  </div>
                  <h3>Growth Focused</h3>
                  <p>
                    We help clients concentrate on value-enhancing tasks like
                    fund raising and business expansion.
                  </p>
                </div>

                <div className="intro-card hover-float">
                  <div className="intro-card-icon">
                    <FaShieldAlt className="h-8 w-8 text-white" />
                  </div>
                  <h3>Risk Management</h3>
                  <p>
                    Our comprehensive financial scrutiny helps identify and
                    mitigate potential risks.
                  </p>
                </div>

                <div className="intro-card hover-float">
                  <div className="intro-card-icon">
                    <FaUsers className="h-8 w-8 text-white" />
                  </div>
                  <h3>Expert Team</h3>
                  <p>
                    Our dedicated team of professionals brings decades of
                    combined experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="intro-stats">
              <div className="intro-stats-bg"></div>
              <div className="intro-stats-content">
                <div className="intro-stat-item reveal-right">
                  <div className="intro-stat-number">+50</div>
                  <div className="intro-stat-label">Projects Completed</div>
                </div>

                <div className="intro-stat-item reveal-right delay-200">
                  <div className="intro-stat-number">+10</div>
                  <div className="intro-stat-label">Team Members</div>
                </div>

                <div className="intro-stat-item reveal-right delay-400">
                  <div className="intro-stat-number">+20</div>
                  <div className="intro-stat-label">Satisfied Clients</div>
                </div>

                <div className="intro-stat-item reveal-right delay-600">
                  <div className="intro-stat-number">+4</div>
                  <div className="intro-stat-label">Decades of Experience</div>
                </div>
              </div>

              <div className="intro-quote">
                <blockquote>
                  "Founded on the 'Client First' principle, our firm acts as a
                  multiservice advisor offering expertise and hands-on support."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section - Completely Redesigned */}
      <section ref={sectionRefs.about} className="py-20 bg-white animate-fade">
        <div className="container mx-auto px-4">
          <div className="about-wrapper">
            <div className="about-content-wrapper">
              <div className="section-header text-left">
                <h2 className="section-title">ABOUT US</h2>
                <div className="section-line ml-0"></div>
              </div>

              <div className="about-content">
                <p className="text-lg text-gray-700 mt-8 mb-6">
                  With over 20 years of combined experience, our team of
                  financial experts is dedicated to providing exceptional
                  service and tailored solutions to meet your unique financial
                  needs.
                </p>

                <div className="about-principles">
                  <div className="principle-item reveal-bottom">
                    <div className="principle-number">01</div>
                    <div className="principle-content">
                      <h3>Client-Centric Approach</h3>
                      <p>
                        We put our clients' needs first, developing customized
                        solutions that address their specific challenges and
                        goals.
                      </p>
                    </div>
                  </div>

                  <div className="principle-item reveal-bottom delay-200">
                    <div className="principle-number">02</div>
                    <div className="principle-content">
                      <h3>Integrity & Transparency</h3>
                      <p>
                        We maintain the highest ethical standards in all our
                        dealings, ensuring complete transparency and
                        accountability.
                      </p>
                    </div>
                  </div>

                  <div className="principle-item reveal-bottom delay-400">
                    <div className="principle-number">03</div>
                    <div className="principle-content">
                      <h3>Innovation & Excellence</h3>
                      <p>
                        We continuously evolve our methodologies and embrace
                        innovative approaches to deliver exceptional results.
                      </p>
                    </div>
                  </div>
                </div>

                <Link to="/about" className="btn-gradient mt-8 hover-expand">
                  Learn More About Us <FaArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="about-image-wrapper">
              <div className="about-image-container">
                <div className="about-image about-image-1 floating">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Our team"
                    width={300}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="about-image about-image-2 floating-reverse">
                  <img
                    src="/placeholder.svg?height=300&width=250"
                    alt="Office environment"
                    width={250}
                    height={300}
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="about-image about-image-3 floating-slow">
                  <img
                    src="/placeholder.svg?height=250&width=200"
                    alt="Client meeting"
                    width={200}
                    height={250}
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="about-accent-circle"></div>
                <div className="about-accent-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
