"use client";

import { useState, useEffect } from "react";
import "./service.css";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    financial: false,
    business: false,
  });

  useEffect(() => {
    // Trigger animations on load
    setIsVisible({
      hero: true,
      financial: true,
      business: true,
    });
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Financial Advisory Services
  const financialServices = [
    {
      id: 1,
      title: "Core Financial Services",

      description:
        "Our firm provides comprehensive support throughout the deal process, from initial planning to final closure.",
      details: [
        "a) Accounting & Bookkeeping: Streamlined processes to ensure accurate and timely financial records.",
        "b) Preparation of Financial Statements: Comprehensive balance sheets, cash flow statements, and P&Ls for better decision-making.",
        "c) Chart of Accounts Setup or Revision: Customized account structures tailored to your business operations.",
      ],
    },
    {
      id: 2,
      title: "Cash Flow & Financial Management",
      description:
        "Our firm assists clients in securing growth capital through various sources such as venture capital, private equity, or non-equity financing from banks.",
      details: [
        "a) Cash Flow Statements: Insightful reports to manage liquidity and optimize working capital.",
        "b) Bank Reconciliations: Timely reconciliations to ensure accuracy and mitigate errors.",
      ],
    },
    {
      id: 3,
      title: "Other Services",
      description:
        "Our firm utilizes internationally accepted valuation techniques to determine a fair business value before accepting or making an offer.",
      details: [
        "a) Accounts Payable & Receivable: Efficient tracking to ensure smooth vendor payments and timely customer collections.",
        "b) Vendor Management: Streamlined processes for managing suppliers and optimizing purchasing.",
        "c) Preparation of Project Reports.",
        "d) Valuation Reports",
      ],
    },
    // {
    //   id: 4,
    //   title: "Due Diligence",
    //   description:
    //     "Our firm provides comprehensive due diligence services, including desktop investigations into promoter and company backgrounds, as well as in-depth Financial and Tax Due Diligence.",
    // },
  ];

  // Business Advisory Services
  const businessServices = [
    {
      id: 5,
      title: "Entry Strategy",
      description:
        "Our firm provides strategic recommendations for structuring your India business, ensuring compliance with regulations. We guide you through the registration and establishment process.",
      details:
        "Our firm provides strategic recommendations for structuring your India business, ensuring compliance with regulations. We guide you through the registration and establishment process, advise on optimal legal entity structures, and help navigate complex regulatory requirements. Our approach considers tax implications, operational flexibility, and long-term business objectives.",
    },
    {
      id: 6,
      title: "Regulatory Compliances",
      description:
        "Our firm provides ongoing assistance in meeting statutory requirements, including drafting and maintaining various records.",
      details:
        "Our firm provides ongoing assistance in meeting statutory requirements, including drafting and maintaining various records. We ensure timely compliance with regulatory filings, help establish robust compliance frameworks, and keep you updated on changing regulations that may impact your business operations.",
    },
    {
      id: 7,
      title: "Compliance Diagnostics",
      description:
        "Our firm conducts thorough diagnostic checks of your business to identify compliance gaps, assess risks, and propose mitigation measures.",
      details:
        "Our firm conducts thorough diagnostic checks of your business to identify compliance gaps, assess risks, and propose mitigation measures. Our comprehensive review covers corporate, tax, labor, and industry-specific regulations. We deliver detailed reports with practical recommendations to strengthen your compliance posture and minimize regulatory exposure.",
    },
    {
      id: 8,
      title: "Virtual CFO",
      description:
        "As your Virtual CFO, we offer analytics and business insights to support decision-making, eliminating the need for a full-fledged finance function.",
      details:
        "As your Virtual CFO, we offer analytics and business insights to support decision-making, eliminating the need for a full-fledged finance function. Our services include financial planning and analysis, cash flow management, budgeting and forecasting, management reporting, and strategic financial advice tailored to your business objectives and growth stage.",
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className={`hero-section ${isVisible.hero ? "fade-in" : ""}`}>
        <div className="hero-content">
          <h1>Services</h1>
          <p>
            At AccrualEdge Advisors, we offer a full suite of outsourced
            financial services designed specifically for startups and small to
            mid-sized businesses. Whether you're looking to streamline your
            accounting, stay compliant, or gain better visibility into your
            finances — we’re here to make your numbers work for you.
          </p>
        </div>
      </section>

      {/* Financial Advisory Section */}
      <section
        className={`service-section ${isVisible.financial ? "slide-up" : ""}`}
      >
        <div className="section-header">
          <h2>FINANCIAL ADVISORY & CORPORATE FINANCE</h2>
          <div className="divider"></div>
        </div>
        <p className="section-description">
          We offer specialized service where we assist businesses in complex
          financial transactions involving multiple stakeholders, complex
          structures, and diverse sources of funding. It typically involves a
          customized approach that is tailored to the unique needs and goals of
          each business.
        </p>

        <div className="service-cards">
          {financialServices.map((service) => (
            <div className="service-card" key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="read-more" onClick={() => openModal(service)}>
                Read more
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Business Advisory Section */}
      <section
        className={`service-section ${isVisible.business ? "slide-up" : ""}`}
      >
        <div className="section-header">
          <h2>BUSINESS ADVISORY & OTHER SERVICES</h2>
          <div className="divider"></div>
        </div>
        <p className="section-description">
          We help businesses achieve their financial & commercial goals and save
          operational costs through the right advice and timely compliance.
        </p>

        <div className="service-cards">
          {businessServices.map((service) => (
            <div className="service-card" key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="read-more" onClick={() => openModal(service)}>
                Read more
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              ×
            </button>
            <h2>{selectedService?.title}</h2>

            {Array.isArray(selectedService?.details) ? (
              <ul>
                {selectedService.details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{selectedService?.details}</p>
            )}
          </div>
        </div>
      )}

      {/* Back to top button */}
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </div>
  );
}
