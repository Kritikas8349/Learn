import React, { useState, useRef, useEffect } from "react";
import "./LandingPage.css";
import ContactPopup from "./ContactPopup";
import {
  FaBookOpen,
  FaChartLine,
  FaShieldAlt,
  FaLightbulb,
  FaHeadset,
  FaBrain
} from "react-icons/fa";






const faqs = [
  {
    question: "What is ForexLearn and who is it for?",
    answer:
      "ForexLearn is a structured forex education platform designed for beginners and intermediate learners who want to understand the forex market with clarity, discipline, and a step-by-step learning approach."
  },
  {
    question: "Do I need prior trading experience to join?",
    answer:
      "No prior experience is required. The course starts from the basics and gradually moves to advanced concepts, making it suitable for complete beginners."
  },
  {
    question: "Does this course guarantee profits?",
    answer:
      "No. Forex trading involves risk, and profits are never guaranteed. This program focuses on education, risk awareness, and responsible trading practices."
  },
  {
    question: "What topics are covered in the program?",
    answer:
      "The program covers forex market basics, currency pairs, technical and fundamental analysis, trade planning, risk management, and trading psychology."
  },
  {
    question: "Will I get guidance and support during learning?",
    answer:
      "Yes. Learners receive mentorship-style guidance, doubt resolution, and continuous support throughout the learning journey."
  }
];


const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef(null);
  const [activeIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // ✅ yahan lao
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // ✅ NOW WORKS
  };

  // ✅ yahan lao
  useEffect(() => {
    const closeOnScroll = () => {
      setMenuOpen(false);
    };

    if (menuOpen) {
      window.addEventListener("scroll", closeOnScroll);
    }

    return () => {
      window.removeEventListener("scroll", closeOnScroll);
    };
  }, [menuOpen]);

  // outside click effect (ye already sahi hai)
  useEffect(() => {
    const handleClick = (e) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target) &&
        !e.target.closest(".hamburger")
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <>

      {/* ================= HERO ================= */}
      <section className="hero-section" id="home">

         {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-dot"></span>
          LEARNYARD
        </div>

        <ul className="nav-links">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("features")}>Features</li>
        <li onClick={() => scrollToSection("learning")}>Who It’s For</li>
        <li onClick={() => scrollToSection("faq")}>FAQ</li>

        </ul>

        <button className="nav-btn desktop-only" onClick={() => setIsOpen(true)}>Sign Up Now</button>

        {/* Hamburger → Cross */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Backdrop */}
      {menuOpen && <div className="drawer-backdrop"></div>}

      {/* ================= RIGHT DRAWER ================= */}
      <aside
        ref={drawerRef}
        className={`side-drawer ${menuOpen ? "open" : ""}`}
      >
       <ul className="drawer-links">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("features")}>Features</li>
        <li onClick={() => scrollToSection("learning")}>Who It’s For</li>
        <li onClick={() => scrollToSection("faq")}>FAQ</li>
      </ul>


        <button className="drawer-cta" onClick={() => setIsOpen(true)}>Sign Up Now</button>
      </aside>


        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            Learn Forex Trading The Right Way
          </h1>

          <p className="hero-subtitle">
            Build your understanding of currency markets with structured forex
            education <br /> designed for beginners and intermediate learners.
          </p>

          <div className="hero-check-pill">
            <div className="check-item">
              <span className="check-icon"></span>
              Step-by-step learning process
            </div>
            <div className="check-item">
              <span className="check-icon"></span>
              Trading basics & core concepts
            </div>
            <div className="check-item">
              <span className="check-icon"></span>
              Risk-focused trading approach
            </div>
          </div>

          <button className="hero-btn" onClick={() => setIsOpen(true)}>Enroll Now</button>

          <p className="hero-disclaimer">
            Disclaimer: Forex trading involves risk. Education does not guarantee
            results.
          </p>
        </div>
      </section>




      <section className="about-section" id="about">
  {/* Left - Single Image Frame */}
  <div className="about-image-frame">
    <img src="/business.jpg" alt="About Us" />
  </div>

  {/* Right Content */}
  <div className="about-content">
    <p className="about-tag">ABOUT THE PROGRAM</p>

    <h2 className="about-title">
    What This Forex Learning Program Covers
    </h2>

    <p className="about-text">
    Our forex learning platform is built to help you understand 
    how the foreign exchange market works through practical education and guided training.
    </p>

    <blockquote className="about-quote">
    “Our mission is to transform beginners into confident 
    Forex traders through proven strategies, real-market insights, and disciplined learning.”
    </blockquote>

    <ul className="about-list">
      <li>✔ Basics of forex trading and market structure</li>
      <li>✔ Understanding currency pairs and price movements</li>
      <li>✔ Technical and fundamental analysis concepts</li>
      <li>✔ Trade planning and risk awareness</li>
      <li>✔ Personalized trading guidance and support</li>
    </ul>

    <button className="learn-btn" onClick={() => setIsOpen(true)}>
        Contact Us →
      </button>
      
  </div>
  </section>


  <section className="offer-section" id="features">
  <h2 className="offer-title">Why Choose Our Forex Learning Platform?</h2>

  <div className="offer-grid">

    <div className="offer-card">
      <FaBookOpen className="offer-icon" />
      <h3>Beginner-Friendly Modules</h3>
      <p>
        Easy-to-follow structured lessons designed specially for beginners with no prior trading experience.
      </p>
    </div>

    <div className="offer-card">
      <FaChartLine className="offer-icon" />
      <h3>Live Market Education Sessions</h3>
      <p>
        Learn how real Forex market movements are analyzed and traded in live market conditions.
      </p>
    </div>

    <div className="offer-card">
      <FaShieldAlt className="offer-icon" />
      <h3>Risk Management Training</h3>
      <p>
        Understand responsible trading practices, position sizing, and capital protection techniques.
      </p>
    </div>

    <div className="offer-card">
      <FaLightbulb className="offer-icon" />
      <h3>Strategy Building Concepts</h3>
      <p>
        Learn how professional traders build rule-based, structured, and repeatable trading strategies.
      </p>
    </div>

    <div className="offer-card">
      <FaBrain className="offer-icon" />
      <h3>Trading Psychology & Discipline</h3>
      <p>
        Master emotional control, trading mindset, and discipline required for long-term Forex success.
      </p>
    </div>

    <div className="offer-card">
      <FaHeadset className="offer-icon" />
      <h3>Support & Guidance</h3>
      <p>
        Get mentorship-style guidance, doubt resolution, and continuous learning support throughout the course.
      </p>
    </div>

  </div>
</section>




<section className="audience-white-section" id="learning">
  <div className="audience-white-container">

    <div className="audience-white-wrapper">

      {/* LEFT CONTENT */}
      <div className="audience-white-content">
        <h2 className="audience-white-title">Who This Course Is For?</h2>

        <p className="audience-white-subtitle">
          This program is built for learners who want to understand Forex trading
          with clarity, structure, and discipline.
        </p>

        <ul className="audience-white-list">
          <li>Students curious about Forex and financial markets</li>
          <li>Working professionals exploring trading education</li>
          <li>Beginners looking for step-by-step structured learning</li>
          <li>Traders who want better discipline and planning</li>
          <li>Anyone interested in understanding market fundamentals</li>
        </ul>

        <div className="audience-white-warning">
          ⚠ This course is not suitable for those seeking quick profit or guaranteed income.
        </div>
      </div>

      {/* RIGHT IMAGE COLLAGE */}
      <div className="audience-white-images">
        <img src="/learn1.avif" alt="Forex market learning" />
        <img src="/trades.avif" alt="Trader analyzing charts" />
        <img src="/trade4.jpg" alt="Trading psychology and discipline" />
      </div>

    </div>

  </div>
</section>



<section className="faq-section" id="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">
        Clear answers to common questions about ForexLearn
      </p>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>



    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-dot"></span>
            <span>LEARNYARD </span>
          </div>
          <p className="footer-desc">
            Learn Forex trading with structure, discipline, and risk awareness.
            Built for beginners and serious learners.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("features")}>Features</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("faq")}>FAQ</li>
        </ul>

        </div>

        {/* Legal */}
        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li>Disclaimer</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="footer-cta">
          <h4>Start Learning</h4>
          <p>Join ForexLearn and build real market understanding.</p>
          <button className="footer-btn" onClick={() => setIsOpen(true)}>Enroll Now</button>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ForexLearn. All rights reserved.
        </p>
      </div>
    </footer>


    <div className="risk-disclaimer">
        <p>
          <strong>Important Risk Disclaimer:</strong> Forex trading involves
          significant risk and may not be suitable for all individuals. This
          platform provides educational content only and does not offer financial
          advice, guaranteed returns, or investment services.
        </p>
      </div>

      <ContactPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default LandingPage;
