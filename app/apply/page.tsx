import type { Metadata } from "next"
import ApplyForm from "./ApplyForm"

export const metadata: Metadata = {
  title: "Apply · Apexdot",
  description: "Share your phone, resume, and salary expectation. A partner will reach out.",
}

export default function ApplyPage() {
  return (
    <main className="apply-page">
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
    </main>
  )
}
