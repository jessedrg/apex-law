import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

const MAX_BYTES = 8 * 1024 * 1024 // 8MB
const ALLOWED = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const fullName = String(formData.get("fullName") ?? "").trim()
    const phone = String(formData.get("phone") ?? "").trim()
    const currency = String(formData.get("currency") ?? "USD").trim() || "USD"
    const salaryMinRaw = String(formData.get("salaryMin") ?? "").replace(/[^0-9]/g, "")
    const salaryMaxRaw = String(formData.get("salaryMax") ?? "").replace(/[^0-9]/g, "")
    const file = formData.get("resume") as File | null

    // Validation
    if (!phone) {
      return NextResponse.json({ error: "Please enter your phone number." }, { status: 400 })
    }
    if (!file || file.size === 0) {
      return NextResponse.json({ error: "Please attach your resume." }, { status: 400 })
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: "Resume must be under 8MB." }, { status: 400 })
    }
    if (file.type && !ALLOWED.includes(file.type)) {
      return NextResponse.json({ error: "Resume must be a PDF or Word document." }, { status: 400 })
    }

    const salaryMin = salaryMinRaw ? Number.parseInt(salaryMinRaw, 10) : null
    const salaryMax = salaryMaxRaw ? Number.parseInt(salaryMaxRaw, 10) : null
    if (salaryMin !== null && salaryMax !== null && salaryMax < salaryMin) {
      return NextResponse.json({ error: "Max salary can’t be lower than the minimum." }, { status: 400 })
    }

    // Upload the resume to Blob storage (server-side).
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_")
    const blob = await put(`resumes/${Date.now()}-${safeName}`, file, {
      access: "public",
      addRandomSuffix: true,
    })

    await sql`
      INSERT INTO candidate_submissions
        (full_name, phone, resume_pathname, resume_filename, salary_min, salary_max, salary_currency)
       VALUES (
         ${fullName || null},
         ${phone},
         ${blob.url},
         ${file.name},
         ${salaryMin},
         ${salaryMax},
         ${currency}
       )`

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.log("[v0] apply route error:", (error as Error)?.message, error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}
