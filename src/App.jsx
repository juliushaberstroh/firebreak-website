import { MeshGradient } from '@paper-design/shaders-react'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [heroOpacity, setHeroOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const fadeStart = windowHeight * 0.7
      const fadeEnd = windowHeight * 1.1
      
      // Hero fade logic
      if (scrollY <= fadeStart) {
        setHeroOpacity(1)
      } else if (scrollY >= fadeEnd) {
        setHeroOpacity(0)
      } else {
        const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart)
        setHeroOpacity(1 - fadeProgress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Call once to set initial state
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src="/assets/images/Landing Page Firebreak Logo Transprent.svg" alt="Firebreak Logo" />
          </div>
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <div className="hero-problem-wrapper">
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
        
        <section className="hero">
          <div className="hero-content" style={{ opacity: heroOpacity }}>
            <h1>What if you could pause anytime you needed?</h1>
            <p>Firebreak is more than an app. It's your personal guide for emtional regulation, reflection, and  resilience.</p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>

        <section className="problem-solution">
          <div className="container">
            <div className="problem-solution-content">
              <div className="problem-container">
                <h2>When emotions take over, life gets harder.</h2>
                <p>For many with ADHD, waves of rejection, stress, or overwhelm can feel impossible to stop. They cloud judgment, lead to impulsive decisions, and strain relationships. Existing apps focus on productivity — but few truly help with the emotional side of ADHD.</p>
              </div>
              <div className="solution-container">
                <h2>Firebreak gives you space to breathe.</h2>
                <p>Firebreak is built to help you pause in the moment, reflect afterwards, and grow stronger over time. It’s more than an app — it’s the first step toward an AI assistant designed to support ADHD minds with real emotional regulation tools and long-term guidance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

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
