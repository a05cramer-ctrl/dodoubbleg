import './App.css'
import heroImage from './image.png'
import { YouTubeLoopedVideo } from './YouTubeLoopedVideo'

function App() {
  return (
    <div className="landing">
      {/* Smoke / fog overlay */}
      <div className="smoke-layer" aria-hidden="true" />
      <div className="smoke-layer smoke-2" aria-hidden="true" />

      {/* Hero */}
      <header className="hero">
        <div className="hero-bg" />
        <nav className="nav">
          <span className="ticker">$D0UBLEG</span>
          <a href="#eras" className="nav-link">Era Progression</a>
          <a href="#clip" className="nav-link">Day Shift</a>
          <a href="#roll" className="nav-link cta-nav">Roll With The Boss</a>
          <div className="nav-buttons">
            <a href="https://x.com/DoDoubbleG_Dev" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://dextools.io" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Chart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>
            </a>
          </div>
        </nav>

        <div className="hero-content">
          <img
            src={heroImage}
            alt="DoDoubbleG"
            className="hero-image"
          />
          <p className="tagline">West Side for life</p>
          <h1 className="brand">
            <span className="brand-main">DoDoubbleG</span>
            <span className="brand-glow" aria-hidden="true">DoDoubbleG</span>
          </h1>
          <p className="ticker-hero">$D0UBLEG</p>
          <p className="vibe-line">
            By day, he hunts vampires. By night, he runs the block.
            <br />
            <span className="day-shift">Day Shift energy. West Coast legend.</span>
          </p>
          <a href="#roll" className="cta-primary">Roll With The Boss</a>
          <div className="hero-icon-row">
            <a href="https://x.com/DoDoubbleG_Dev" target="_blank" rel="noopener noreferrer" className="hero-icon-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Twitter
            </a>
            <a href="https://dextools.io" target="_blank" rel="noopener noreferrer" className="hero-icon-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>
              Chart
            </a>
          </div>
        </div>

        <div className="jewelry-shine" aria-hidden="true" />
      </header>

      {/* Day Shift clip - starts when gun runs out of ammo */}
      <section id="clip" className="section video-section">
        <h2 className="section-title">
          <span className="title-text">Day Shift</span>
          <span className="title-glow">Day Shift</span>
        </h2>
        <p className="section-sub">When the clip runs dry</p>
        <div className="video-wrapper">
          <YouTubeLoopedVideo />
        </div>
      </section>

      {/* Era Progression = Roadmap */}
      <section id="eras" className="section eras">
        <h2 className="section-title">
          <span className="title-text">Era Progression</span>
          <span className="title-glow">Era Progression</span>
        </h2>
        <p className="section-sub">The journey. The legacy.</p>
        <div className="era-timeline">
          <div className="era-item">
            <span className="era-num">01</span>
            <h3>Genesis</h3>
            <p>Launch. Community. First vampires hunted.</p>
          </div>
          <div className="era-item">
            <span className="era-num">02</span>
            <h3>Rise</h3>
            <p>CEX listings. Partnerships. West Side expansion.</p>
          </div>
          <div className="era-item">
            <span className="era-num">03</span>
            <h3>Legend</h3>
            <p>Merch. Collabs. Eternal block dominance.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="roll" className="section cta-section">
        <div className="cta-box">
          <p className="cta-tagline">West Side for life</p>
          <h2 className="cta-headline">Roll With The Boss</h2>
          <p className="cta-desc">Join the crew. Stack the bag. Hunt the night.</p>
          <div className="cta-buttons">
            <a href="#" className="cta-button">Roll With The Boss</a>
            <div className="cta-icon-row">
              <a href="https://x.com/DoDoubbleG_Dev" target="_blank" rel="noopener noreferrer" className="cta-icon-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Twitter
              </a>
              <a href="https://dextools.io" target="_blank" rel="noopener noreferrer" className="cta-icon-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>
                Chart
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>$D0UBLEG — DoDoubbleG. West Side for life.</p>
      </footer>
    </div>
  )
}

export default App
