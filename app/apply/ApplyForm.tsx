"use client"

import { useRef, useState } from "react"

export default function ApplyForm() {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)
  const [done, setDone] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)
    const phone = String(data.get("phone") ?? "").trim()

    if (!phone) {
      setError("Please enter your phone number.")
      return
    }
    if (!file) {
      setError("Please attach your resume.")
      return
    }
    if (file.size > 8 * 1024 * 1024) {
      setError("Resume must be under 8MB.")
      return
    }

    setPending(true)
    try {
      const res = await fetch("/api/apply", { method: "POST", body: data })
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean
        error?: string
      }

      if (res.ok && json.ok) {
        setDone(true)
      } else {
        setError(json.error ?? "Something went wrong. Please try again.")
      }
    } catch (err) {
      console.log("[v0] apply submit error:", (err as Error)?.message, err)
      setError("We couldn’t submit your application. Please try again.")
    } finally {
      setPending(false)
    }
  }

  if (done) {
    return (
      <div className="apply-done">
        <div className="apply-check" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2>You&apos;re in.</h2>
        <p>Thanks — a partner will reach out to the number you gave us.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="apply-form" noValidate>
      <div className="apply-field">
        <label htmlFor="fullName">Name</label>
        <input id="fullName" name="fullName" type="text" autoComplete="name" placeholder="Optional" />
      </div>

      <div className="apply-field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+1 555 000 0000"
          required
        />
      </div>

      <div className="apply-field">
        <label htmlFor="resume">Resume</label>
        <button
          type="button"
          className="apply-file"
          onClick={() => fileRef.current?.click()}
        >
          <span className={file ? "has-file" : ""}>
            {file ? file.name : "Attach PDF or Word document"}
          </span>
          <em>{file ? "Change" : "Browse"}</em>
        </button>
        <input
          ref={fileRef}
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="apply-file-native"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
      </div>

      <div className="apply-field">
        <label>Salary expectation</label>
        <div className="apply-salary">
          <select name="currency" aria-label="Currency" defaultValue="USD">
            <option value="USD">$</option>
            <option value="EUR">€</option>
            <option value="GBP">£</option>
          </select>
          <input name="salaryMin" type="text" inputMode="numeric" placeholder="Min" aria-label="Minimum salary" />
          <span className="apply-dash" aria-hidden="true">–</span>
          <input name="salaryMax" type="text" inputMode="numeric" placeholder="Max" aria-label="Maximum salary" />
        </div>
        <p className="apply-hint">Annual base, per year.</p>
      </div>

      {error ? <p className="apply-error" role="alert">{error}</p> : null}

      <button type="submit" className="apply-submit" disabled={pending}>
        {pending ? "Sending…" : "Submit application"}
      </button>
    </form>
  )
}
