"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const launchIntel = [
  ["VENUE", "STONKBONKER"],
  ["STATUS", "PRE-LAUNCH"],
  ["CONTRACT", "NOT LIVE"],
  ["SOURCE", "@HOODSUPCOIN"],
];

const chapters = [
  {
    number: "01",
    title: "THE BELL GOES DARK",
    copy: "Daylight traders close their screens. The city quiets. Beneath the last glowing ticker, a different shift begins.",
  },
  {
    number: "02",
    title: "THE HOOD GOES UP",
    copy: "A raised hood blocks the noise. No names. No gurus. Just nerve, timing and a signal shared by the ones still moving.",
  },
  {
    number: "03",
    title: "THE VAULT ANSWERS",
    copy: "The old rule is simple: hood up, lock in, earn your cut. No promise of riches — only the courage to take your shot.",
  },
];

const verificationSteps = [
  ["01", "CHECK THE SOURCE", "Start at @hoodsupcoin. Screenshots, replies and lookalike accounts are not the signal."],
  ["02", "MATCH THE CONTRACT", "The exact contract will appear on this website and X at launch. If one character differs, walk away."],
  ["03", "USE THE OFFICIAL ROUTE", "Enter only through the STONKBONKER link published by HOODSUP. Never trust a link dropped into your DMs."],
];

const faqs = [
  ["Where does $HOODSUP launch?", "$HOODSUP is preparing to launch through STONKBONKER. The official route will be posted here and on @hoodsupcoin."],
  ["Is the contract live?", "No. There is no public contract address yet. Anything claiming otherwise is not $HOODSUP."],
  ["Where are the final token details?", "Confirmed supply, distribution, liquidity and fee details will replace this pre-launch notice before trading begins."],
];

export default function Home() {
  const [revealed, setRevealed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <main id="top" className={revealed ? "site is-revealed" : "site"}>
      <div className="noise" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="HOODSUP home">
          <span className="brand-hood" aria-hidden="true"><i /><i /><i /></span>
          <span>$HOODSUP</span>
        </a>
        <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          <span /><span /><span />
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <a href="#story">Story</a>
          <a href="#launch">Launch</a>
          <a href="#verify">Verify</a>
          <a href="#faq">FAQ</a>
          <a className="nav-x" href="https://x.com/hoodsupcoin" target="_blank" rel="noreferrer">X ↗</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-content">
          <p className="eyebrow"><span /> THE MIDNIGHT SIGNAL</p>
          <h1 id="hero-title"><span>HOODS UP.</span><strong>BAGS OUT.</strong></h1>
          <p className="hero-copy">When the lights go down, the hoods go up. $HOODSUP is the onchain signal for the ones who move before the crowd.</p>
          <div className="hero-actions">
            <a className="pixel-button primary" href="https://x.com/hoodsupcoin" target="_blank" rel="noreferrer">FOLLOW THE SIGNAL ↗</a>
            <a className="pixel-button ghost" href="#story">READ THE MYTH ↓</a>
          </div>
          <div className="launch-status" role="status">
            <span className="status-light" />
            <span>LAUNCHING ON STONKBONKER</span>
            <b>CONTRACT: NOT LIVE</b>
          </div>
        </div>

        <button className="hero-coin" type="button" onClick={() => setRevealed(true)} aria-label="Reveal the HOODSUP coin">
          <Image src="/assets/hoodsup-coin-v2.png" alt="A heavy gold HOODSUP coin embossed with a hooded figure" width={1254} height={1254} priority />
          <span>{revealed ? "THE SIGNAL IS LIVE" : "CLICK TO REVEAL"}</span>
        </button>
      </section>

      <div className="marquee" aria-label="HOODSUP highlights">
        <div>
          <span>✦ THE MIDNIGHT GUILD</span><span>✦ HOOD UP · LOCK IN · EARN YOUR CUT</span><span>✦ STONKBONKER</span><span>✦ CONTRACT NOT LIVE</span>
          <span>✦ THE MIDNIGHT GUILD</span><span>✦ HOOD UP · LOCK IN · EARN YOUR CUT</span><span>✦ STONKBONKER</span><span>✦ CONTRACT NOT LIVE</span>
        </div>
      </div>

      <section id="story" className="story-section">
        <div className="story-intro">
          <p className="section-kicker">{"// THE NIGHT GUILD"}</p>
          <h2>THE MYTH OF THE<br /><em>MIDNIGHT HOOD.</em></h2>
          <p className="story-lead">Before charts, tickers and glowing screens, the sharpest traders met after dark. A raised hood meant the hunt was on — no names, no noise, just a signal between people who knew where opportunity was moving.</p>
        </div>

        <figure className="story-art">
          <Image src="/assets/night-guild-story.png" alt="A hooded night guild crossing a purple market toward an open golden vault" width={2022} height={778} />
          <figcaption>One hood became ten. Ten became a crowd. Soon the city knew the rule: when the hoods go up, value is about to move.</figcaption>
        </figure>

        <div className="chapters">
          {chapters.map((chapter) => (
            <article key={chapter.number}>
              <span>{chapter.number}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="launch" className="launch-section">
        <div className="launch-copy">
          <p className="section-kicker">{"// LAUNCH INTEL"}</p>
          <h2>FACTS BEFORE<br /><em>FOMO.</em></h2>
          <p>Until the final parameters are confirmed, this is the only launch information that matters. No invented numbers. No mystery contract. No fake countdown.</p>
        </div>
        <div className="intel-panel">
          {launchIntel.map(([label, value]) => (
            <div className="intel-row" key={label}><span>{label}</span><strong>{value}</strong></div>
          ))}
          <a href="https://x.com/hoodsupcoin" target="_blank" rel="noreferrer">WATCH THE OFFICIAL SOURCE ↗</a>
        </div>
      </section>

      <section id="verify" className="verify-section">
        <div className="verify-heading">
          <p className="section-kicker">{"// VERIFY THE SIGNAL"}</p>
          <h2>DON&apos;T GET<br /><em>COUNTERFEIT HOODS.</em></h2>
        </div>
        <div className="verify-list">
          {verificationSteps.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="faq-section">
        <div className="faq-heading">
          <p className="section-kicker">{"// STRAIGHT ANSWERS"}</p>
          <h2>READ THE<br /><em>RUNES.</em></h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>{question}</span><b>+</b></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <aside className="risk-line">
        <b>⚠ RISK RUNE</b>
        <p>$HOODSUP is a meme coin with no promise of financial return. Crypto is volatile and you may lose everything you put in. Verify every link and contract before interacting.</p>
      </aside>

      <footer>
        <div className="footer-brand"><span className="brand-hood" aria-hidden="true"><i /><i /><i /></span><strong>$HOODSUP</strong></div>
        <div className="footer-cta"><h2>HOOD UP.<br />EYES OPEN.</h2><a href="https://x.com/hoodsupcoin" target="_blank" rel="noreferrer">JOIN THE NIGHT SHIFT ↗</a></div>
        <div className="footer-bottom"><span>© 2026 HOODSUP. ALL HOODS RESERVED.</span><span>MEME COIN · NOT FINANCIAL ADVICE</span></div>
      </footer>
    </main>
  );
}
