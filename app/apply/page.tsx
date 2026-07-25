import type { Metadata } from "next"
import ApplyForm from "./ApplyForm"

export const metadata: Metadata = {
  title: "Apply · Apexdot",
  description: "Share your phone, resume, and salary expectation. A partner will reach out.",
}

export default function ApplyPage() {
  return (
    <main className="apply-page">
      <div className="apply-layout">

        {/* Left — founder card */}
        <aside className="apply-founder">
          <div className="founder-photo-wrap">
            <img
              src="/jesse.jpeg"
              alt="Jesse Dragstra, Founder of Apexdot"
              className="founder-photo"
            />
          </div>
          <div className="founder-info">
            <p className="founder-name">Jesse Dragstra</p>
            <p className="founder-role">Founder, Apexdot</p>
            <a
              href="https://www.linkedin.com/in/jesse-dragstra-724344206"
              target="_blank"
              rel="noreferrer"
              className="founder-linkedin"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </aside>

        {/* Right — form */}
        <div className="apply-shell">
          <a className="apply-logo" href="/" aria-label="Apexdot home">
            <img src="/logomark.png" alt="Apexdot" width={38} height={38} />
          </a>

          <header className="apply-head">
            <p className="apply-kicker">For lawyers</p>
            <h1>Get in front of the top 1%.</h1>
            <p className="apply-lede">
              Three things. Your number, your resume, and what you expect to earn.
              We take it from there.
            </p>
          </header>

          <ApplyForm />
        </div>

      </div>
    </main>
  )
}
