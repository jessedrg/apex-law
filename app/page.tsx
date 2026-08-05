import Image from "next/image";
import Clocks from "./Clocks";
import Nav from "./Nav";
import { mandates, practices, techPractices, OPEN_MANDATES } from "./data";

export default function Home() {
  return (
    <>
      <header className="site">
        <div className="strip">
          <div className="wrap mono">
            <span className="status">
              <span className="dot" />
              {OPEN_MANDATES} mandates open
            </span>
            <Clocks />
          </div>
        </div>
        <div className="bar">
          <Nav />
        </div>
      </header>

      <section id="top" className="hero">
        <div className="glow" />
        <div className="wrap">
          <div>
            <p className="eyebrow">Legal search &nbsp;&mdash; &nbsp;New York &amp; San Francisco</p>
            <h1 className="hero-title">
              <span className="mask">
                <span className="l1">The top 1%</span>
              </span>
              <span className="mask">
                <span className="l2">of legal talent,</span>
              </span>
              <span className="mask last">
                <span className="l3">introduced properly.</span>
              </span>
            </h1>
            <span className="rule" />
            <p className="hero-sub">
              A boutique search firm for partners, counsel and senior associates &mdash; retained by
              the firms and companies that set the market.
            </p>
          </div>

          <div className="mandates">
            <div className="head mono">
              <span>Current mandates</span>
              <span>Q3 &middot; 2026</span>
            </div>
            {mandates.map((m) => (
              <div className="row" key={m.role}>
                <div>
                  <p className="role">{m.role}</p>
                  <p className="client">{m.client}</p>
                </div>
                <span className="tag mono">{m.market}</span>
              </div>
            ))}
            <div className="foot">
              Confidential mandates are not listed. <a href="#contact">Ask us</a>.
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap">
          <div>
            <h3>Am Law 50</h3>
            <p>Searches run for firms in the top tier, plus the general counsel offices they compete with.</p>
          </div>
          <div>
            <h3>Two markets</h3>
            <p>Manhattan and the Bay Area only. Deep beats broad in legal search.</p>
          </div>
          <div>
            <h3>Discreet</h3>
            <p>No mass outreach, no r&eacute;sum&eacute; blasts. Every introduction is deliberate and confidential.</p>
          </div>
        </div>
      </section>

      <section className="cities">
        <div className="wrap">
          <div className="city">
            <Image
              src="https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80&w=2070&auto=format&fit=crop"
              alt="Midtown Manhattan skyline"
              fill
              sizes="(max-width: 800px) 100vw, 580px"
              priority
            />
            <div className="scrim" />
            <div className="cap">
              <p className="mono">Office 01 &nbsp;&mdash; &nbsp;40.7128&deg; N</p>
              <h3>New York</h3>
              <p>
                Lateral partners and group moves across Midtown and Downtown &mdash; M&amp;A, private
                equity, capital markets, litigation.
              </p>
            </div>
          </div>
          <div className="city">
            <Image
              src="https://images.unsplash.com/photo-1500111709600-7761aa8216c7?q=80&w=2070&auto=format&fit=crop"
              alt="San Francisco Bay Area"
              fill
              sizes="(max-width: 800px) 100vw, 580px"
            />
            <div className="scrim" />
            <div className="cap">
              <p className="mono">Office 02 &nbsp;&mdash; &nbsp;37.7749&deg; N</p>
              <h3>San Francisco</h3>
              <p>
                Emerging companies, tech transactions and in-house leadership from seed through IPO
                across the Bay Area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="firms" className="block">
        <div className="wrap">
          <p className="kicker">For firms</p>
          <h2 className="big">A shortlist you&rsquo;d have built yourself, if you had the time.</h2>
          <p className="lede">
            We map the practice, approach the handful of people who genuinely fit, and manage the
            process end to end &mdash; from first coffee to signed offer.
          </p>
          <div className="cards">
            <div className="card">
              <h3>Partner &amp; group moves</h3>
              <p>Lateral partners and full practice groups, with book analysis and conflicts handled early.</p>
            </div>
            <div className="card">
              <h3>Senior associates</h3>
              <p>Mid-level to counsel hires from peer firms, briefed on your bench and your gaps.</p>
            </div>
            <div className="card">
              <h3>In-house leadership</h3>
              <p>General counsel and deputy GC roles for funded startups and public companies.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="candidates" className="block">
        <div className="wrap">
          <div className="panel">
            <p className="kicker">For lawyers</p>
            <h2>One conversation. Then only the moves worth taking.</h2>
            <p className="lede">
              You tell us what you want your practice to look like in five years. We keep you off the
              market until something matches it &mdash; compensation, platform and partnership track
              included.
            </p>
            <div className="three">
              <div>
                <h3>Confidential</h3>
                <p>Nothing leaves our desk without your explicit sign-off.</p>
              </div>
              <div>
                <h3>Honest read</h3>
                <p>Real market data on your comp band, not a pitch.</p>
              </div>
              <div>
                <h3>Long view</h3>
                <p>We&rsquo;d rather place you once, well, than twice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="practice" className="block">
        <div className="wrap">
          <h2 className="mid">Where we work.</h2>
          <div className="list">
            {practices.map((p) => (
              <div className="item" key={p.name}>
                <span className="name">{p.name}</span>
                <span className="market">{p.market}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="block tech">
        <div className="wrap">
          <p className="kicker">Beyond legal</p>
          <h2 className="mid">We run tech searches too.</h2>
          <p className="lede">
            The same discreet, retained approach applied to the people who build and sell the
            product &mdash; from founding engineers to go-to-market leaders and applied AI teams.
          </p>
          <div className="list tech-list">
            {techPractices.map((t) => (
              <div className="item" key={t.name}>
                <span className="name">{t.name}</span>
                <span className="market">{t.market}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <h2 className="mid">How a search runs.</h2>
          <div className="steps">
            <div>
              <p className="n">01</p>
              <h3>Brief</h3>
              <p>A working session on the practice, the economics and the person who&rsquo;d actually thrive there.</p>
            </div>
            <div>
              <p className="n">02</p>
              <h3>Map</h3>
              <p>The full universe of qualified lawyers in the market, narrowed to a shortlist we can defend line by line.</p>
            </div>
            <div>
              <p className="n">03</p>
              <h3>Close</h3>
              <p>Interviews, references, comp negotiation and the first ninety days after the start date.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="wrap closing">
        <h2>
          Let&rsquo;s talk about
          <br />
          the next hire.
        </h2>
        <p>Confidential by default. A reply within one business day.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="/apply">
            Apply
          </a>
        </div>
      </section>

      <footer className="site">
        <div className="wrap">
          <div className="foot-brand">
            <img src="/logomark.png" alt="Apexdot" width={34} height={34} />
            <p>&copy; 2026 Apexdot LLC &middot; Legal search &middot; New York &amp; San Francisco</p>
          </div>
          <div className="links">
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
            <a
              href="https://www.linkedin.com/company/apexdot"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
