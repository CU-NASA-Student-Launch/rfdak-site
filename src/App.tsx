import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDownload = () => {
    // Replace this URL with your actual .exe hosted on GitHub Releases or similar
    const link = document.createElement("a");
    link.href = "https://your-host.com/RFDAK.exe";
    link.download = "RFDAK-Setup.exe";
    link.click();
  };

  return (
    <div className="app">
      {/* Gradient orb background */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner">
          <div className="navbar__brand">
            <img src="/project-dominion-logo.jpg" alt="Project Dominion" className="navbar__logo" />
            <span className="navbar__title">Project Dominion</span>
          </div>
          <div className="navbar__links">
            <a href="#download" className="navbar__link">Download</a>
            <a href="#docs" className="navbar__link">Docs</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="circle">
          <img src="/project-dominion-logo.jpg" alt="Project Dominion" className="bigLogo" />
        </div>
        <div className="hero__badge">Now Available</div>
        <h1 className="hero__heading">
          Launch Your Mission<br />
          <span className="hero__heading--accent">with RFDAK</span>
        </h1>
        <p className="hero__sub" style={{marginBottom: '2px', fontSize: '2rem'}}>
          Rapid Field Data Analysis Kit (RFDAK).
        </p>
        <p className="hero__sub">
          A powerful desktop application built under Project Dominion.
          Engineered for precision, deployed with purpose.
          Rapidly analyze csv data with interactive plots and calculus integration of columns.
        </p>
        <a href="#download" className="hero__cta">
          Get Started
        </a>
      </section>

      {/* Download Section */}
      <section className="download" id="download">
        <div className="download__card">
          <div className="download__header">
            <img src="/project-dominion-logo.jpg" alt="Project Dominion" className="download__project-dominion-logo" />
            <div>
              <h2 className="download__title">RFDAK</h2>
              <p className="download__version">Latest Release &mdash; v1.0.0</p>
            </div>
          </div>

          <div className="download__divider" />

          <div className="download__platforms">
            <button className="download__btn download__btn--primary" onClick={handleDownload}>
              <img src="/rfdak-logo.png" alt="RFDAK" className="download__btn-logo" />
              <div className="download__btn-text">
                <span className="download__btn-label">Install for Windows</span>
                <span className="download__btn-sub">RFDAK.exe &bull; Windows 10/11</span>
              </div>
              <svg className="download__btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <p className="download__disclaimer">
            Windows Defender may flag unsigned executables. Click &ldquo;More info&rdquo; &rarr; &ldquo;Run anyway&rdquo; to proceed.
          </p>
        </div>
      </section>

      {/* Docs Section */}
      <section className="docs" id="docs">
        <h2 className="docs__heading">Documentation</h2>
        <p className="docs__intro">Everything you need to get up and running with RFDAK.</p>

        <div className="docs__grid">
          <div className="docs__card">
            <div className="docs__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="docs__card-title">Installation</h3>
            <p className="docs__card-body">
              Download the exe above and run. If Windows Defender pops up, click "More Info" then "Run anyway."
            </p>
          </div>

          <div className="docs__card">
            <div className="docs__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.325 4.317c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="docs__card-title">Get Started</h3>
            <p className="docs__card-body">
              To start streaming data, select the connected serial port using the dropdown on the left. Click the three dots next to the intial filepath displayed to change the path using file explorer. Then hit Start Acquisition. You can analyze an existing csv file by simply selecting it as the path. If it asks if you want to replace the file, select yes.
            </p>
          </div>

          <div className="docs__card">
            <div className="docs__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="docs__card-title">Plot Analysis</h3>
            <p className="docs__card-body">
              Select columns at the top to plot up to two columns. You can integrate a column by selecting the integrate option. To zoom into the plot, click the magnifying glass, and draw a rectangle on the plot to zoom in. Click the home button to zoom back out.
            </p>
          </div>

          <div className="docs__card">
            <div className="docs__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="docs__card-title">FAQ</h3>
            <p className="docs__card-body">
              Having issues? Check the FAQ below.
            </p>
          </div>
        </div>

        <div className="docs__faq">
          <h3 className="docs__faq-heading">Frequently Asked Questions</h3>

          <details className="docs__faq-item">
            <summary>Why does Windows Defender flag the installer?</summary>
            <p>New or unsigned executables are sometimes flagged by SmartScreen. The application is safe — click "More info" then "Run anyway" to proceed. You can also whitelist RFDAK in your antivirus settings.</p>
          </details>

          <details className="docs__faq-item">
            <summary>Why is RFDAK asking to replace the file upon selection when I want to analyze an existing file?</summary>
            <p>The is a known lack-of-clarity in RFDAK. RFDAK was originally designed to stream data from a flight computer and write to disk. However, it can also be used to analyze an exisiting csv file. However, if you use the file picker to select an existing csv file, it may ask if you want to replace it. Select yes. RFDAK will not replace it, unless you subsequently stream data from the Project Dominion flight computer.</p>
          </details>

          <details className="docs__faq-item">
            <summary>Why is RFDAK not loading data from a csv file or complaining about missing columns?</summary>
            <p>RFDAK expects a csv file that "msTime" as a column representing the time in milliseconds. It also expects no leading or trailing spaces in csv column header names.</p>
          </details>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <img src="/project-dominion-logo.jpg" alt="Project Dominion" className="footer__logo" />
        <p className="footer__copy">Built by Project Dominion, Cedarville University, Cedarville, OH, U.S.A.</p>
      </footer>
    </div>
  );
}

export default App;
