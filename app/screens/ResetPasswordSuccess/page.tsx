'use client'

import { useEffect, useState } from 'react'

export default function ResetPasswordSuccess() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if user is on mobile device
    const checkMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    setIsMobile(checkMobile)

    // Only set timer for mobile users
    if (checkMobile) {
      const timer = setTimeout(() => {
        window.location.href = 'cheaperplan://'
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <div className="page">
      <header className="header">
        <div className="logo">CheaperPlan</div>
      </header>

      <main className="main">
        <div className="card">
          <div className="success-icon">✅</div>
          <h1 className="title">Password Reset Successful!</h1>
          
          <p className="message">
            Your password has been successfully updated.
          </p>
          
          {isMobile ? (
            <div className="mobileContent">
              <div className="countdown">
                <p>Automatically redirecting to the app in 5 seconds...</p>
              </div>
              
              <div className="fallbackLink">
                <p>
                  If you are not automatically redirected, please{' '}
                  <a 
                    href="cheaperplan://" 
                    className="appLink"
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.href = 'cheaperplan://'
                    }}
                  >
                    click here
                  </a>
                  .
                </p>
              </div>
            </div>
          ) : (
            <div className="desktopContent">
              <p className="instruction">
                Please log in again on the app.
              </p>
            </div>
          )}
          
        </div>
      </main>

      <footer className="footer">
        <p>Thank you for choosing CheaperPlan.</p>
      </footer>

      <style jsx>{`

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: white;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .logo {
          font-size: 2.5rem;
          font-weight: bold;
          color: #0070f3;
          margin-bottom: 1rem;
        }

        .main {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          width: 100%;
          max-width: 480px;
          background: white;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .success-icon {
          font-size: 4rem;
          color: #22c55e;
          margin-bottom: 1rem;
        }

        .title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .message {
          font-size: 1.2rem;
          color: #6b7280;
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .mobileContent {
          margin: 24px 0;
        }

        .countdown {
          margin: 0 0 16px;
        }

        .countdown p {
          color: #6b7280;
          font-size: 14px;
          margin: 0;
        }

        .fallbackLink p {
          color: #6b7280;
          font-size: 14px;
          margin: 0;
          line-height: 1.5;
        }

        .appLink {
          color: #0070f3;
          text-decoration: underline;
          cursor: pointer;
          font-weight: 600;
        }

        .appLink:hover {
          color: #0051cc;
          text-decoration: none;
        }

        .desktopContent {
          margin: 32px 0;
        }

        .instruction {
          color: #1f2937;
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          margin: 0;
        }


        .footer {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
          color: #6b7280;
        }

        @media (max-width: 480px) {
          .page { padding: 1rem; }
          .card { padding: 1.5rem; }
          .logo { font-size: 2rem; }
          .title { font-size: 1.5rem; }
          .message { font-size: 1rem; }
          .success-icon { font-size: 3rem; }
        }
      `}</style>
    </div>
  )
}