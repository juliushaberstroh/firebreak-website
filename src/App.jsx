import { MeshGradient } from '@paper-design/shaders-react'
import './App.css'

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src="/assets/images/Horizontal Logo Transparent.svg" alt="Firebreak Logo" />
          </div>
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="shader-container">
          <MeshGradient
            distortion={0.75}
            swirl={0.76}
            offsetX={0.44}
            offsetY={0.1}
            scale={1}
            rotation={0}
            speed={0.64}
            colors={[
              "hsl(206, 73%, 25%)",
              "hsl(2, 81%, 60%)",
              "hsl(220, 80%, 41%)",
              "hsl(50, 23%, 95%)"
            ]}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
            }}
          />
          <MeshGradient
            distortion={0.75}
            swirl={0.76}
            offsetX={0.44}
            offsetY={0.1}
            scale={1}
            rotation={0}
            speed={0.2}
            colors={[
              "hsl(206, 73%, 25%)",
              "hsl(2, 81%, 60%)",
              "hsl(220, 80%, 41%)",
              "hsl(50, 23%, 95%)"
            ]}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
              opacity: 0.6,
            }}
          />
        </div>
        <div className="scrim"></div>
        <div className="hero-content">
          <h1>Also constantly feel overwhelmed?</h1>
          <p>Firebreak is here for you.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>How We Help</h2>
          <div className="features-grid">
            <article className="feature">
              <div className="feature-icon">🧠</div>
              <h3>Emotional Regulation</h3>
              <p>Learn evidence-based techniques to manage overwhelming emotions and build resilience.</p>
            </article>
            
            <article className="feature">
              <div className="feature-icon">⚡</div>
              <h3>ADHD Support</h3>
              <p>Transform ADHD challenges into strengths with personalized strategies and tools.</p>
            </article>
            
            <article className="feature">
              <div className="feature-icon">🌱</div>
              <h3>Personal Growth</h3>
              <p>Develop sustainable habits and mindset shifts for long-term emotional wellness.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="email-signup">
        <div className="container">
          <article className="signup-form">
            <p>Interested? Feel free to sign-up</p>
            <form className="signup-form-wrapper">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Submit</button>
            </form>
          </article>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Firebreak. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
