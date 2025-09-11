import { MeshGradient, StaticRadialGradient } from '@paper-design/shaders-react'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [heroOpacity, setHeroOpacity] = useState(1)
  const [menuOpen, setMenuOpen] = useState(false)

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
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {menuOpen && (
            <div className="mobile-menu">
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#safety">Safety</a>
              <a href="#about">About</a>
              <a href="#newsletter">Newsletter</a>
            </div>
          )}
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
            <button className="cta-button">Join our early access list</button>
          </div>
          <div className="hero-bottom-right">
            <StaticRadialGradient
              style={{ height: 167, width: 300, backgroundColor: 'transparent' }}
              colorBack="#ffffff00"
              radius={1.04}
              focalDistance={0}
              focalAngle={0}
              falloff={0}
              mixing={0.5}
              distortion={0.23}
              distortionShift={0}
              distortionFreq={12}
              grainMixer={0.16}
              grainOverlay={0}
              offsetX={0}
              offsetY={0}
              colors={["#ec4c46","#f4a462","#ffffff"]}
            />
            <div className="hero-bottom-right-text">
              <p>Need help now?</p>
            </div>
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
              <h3>your calm, one tap away</h3>
              <p style={{textAlign: 'justify'}}>When emotions rise fast, Firebreak gives you a simple button to press. The Pause Button System guides you through calming steps - helping you slow down, breathe, and regain clarity before things spiral out of control. It's designed to be quick, gentle, and always there when you need it most.</p>
            </article>
            
            <article className="feature">
              <h3>Personal support that learns with you</h3>
              <p style={{textAlign: 'justify'}}>Firebreak goes beyond generic tips. Our AI-based coaching adapts to your patterns, moods, and progress - offering strategies that fit your unique ADHD journey. Whether you need quick encouragement in the moment or structured guidance for the long term, Firebreak is there to help you grow, step by step.</p>
            </article>
            
            <article className="feature">
              <h3>Made for ADHD minds</h3>
              <p style={{textAlign: 'justify'}}>Every screen in Firebreak is designed with neurodivergent users in mind. Clear navigation, calming colors, and minimal clutter help you stay focused without overwhelm. The experience is simple, intuitive, and distraction-free - so the app supports you, not the other way around.</p>
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
