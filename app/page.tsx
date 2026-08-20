"use client";

import { useEffect, useState } from "react";

const lore = [
  { number: "01", title: "THE MANCERS", copy: "Pixel-born collectors, wanderers and spellcasters. Every cloak holds a story. Every shadow hides a face." },
  { number: "02", title: "THE SIGNAL", copy: "One ritual travelled through the collection: hoods up. A tiny gesture became a banner the whole realm could wear." },
  { number: "03", title: "THE COIN", copy: "$HOODSUP turns the signal into a coin — built for the Mancer community, powered by lore, and ready to leave the cave." },
];

const launchFacts = [["SUPPLY", "SEALED"], ["DISTRIBUTION", "AT LAUNCH"], ["LIQUIDITY", "ONCHAIN"], ["CONTRACT", "VERIFIED"]];

const roadmap = [
  ["I", "THE WHISPER", "Lore awakens. The site opens. The hoods gather on X."],
  ["II", "THE REVEAL", "Final launch parameters and the verified contract are published."],
  ["III", "THE BONK", "$HOODSUP steps out through STONKBONKER."],
  ["IV", "THE WALK", "Community quests, pixel drops and whatever the Mancers conjure next."],
];

const faqs = [
  ["What is $HOODSUP?", "$HOODSUP is a community meme coin born from the hoods-up spirit of the Mancer NFT collection — a pixel-art signal for the people already in the shadows and everyone arriving next."],
  ["Where will it launch?", "$HOODSUP is preparing to launch through STONKBONKER. The official link will be published here and on @hoodsupcoin when it is ready."],
  ["What are the tokenomics?", "Final supply, allocation, liquidity and fee details are still sealed. This page will show the confirmed numbers before trading begins — never invented placeholders."],
  ["Where is the contract address?", "There is no public contract address yet. Trust only the address posted on this website and the official @hoodsupcoin X account at launch."],
  ["Is this financial advice?", "No. $HOODSUP is a meme coin and crypto is volatile. Do your own research and never risk more than you can afford to lose."],
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
      <div className="walker" aria-hidden="true"><span /></div>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="HOODSUP home"><span className="brand-rune">H</span><span>$HOODSUP</span></a>
        <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><span /><span /><span /></button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <a href="#lore">Lore</a><a href="#hoodonomics">Hoodonomics</a><a href="#launch">Launch</a><a href="#roadmap">Roadmap</a><a href="#faq">FAQ</a>
          <a className="nav-x" href="https://x.com/hoodsupcoin" target="_blank" rel="noreferrer">X ↗</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art" aria-hidden="true" /><div className="hero-vignette" aria-hidden="true" />
        <div className="pixel-stars" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i key={index} />)}</div>
        <div className="hero-content">
          <p className="eyebrow"><span /> FROM THE MANCER SHADOWS <span /></p>
          <h1 id="hero-title"><span>HOODS UP.</span><strong>COIN OUT.</strong></h1>
          <p className="hero-copy">A pixel-born meme coin forged from the most iconic move in the Mancer realm. The hood is rising. The signal is spreading.</p>
          <div className="hero-actions">
            <button className="pixel-button primary" type="button" onClick={() => setRevealed(true)}><span>{revealed ? "THE COIN AWAKENS" : "LIFT THE HOOD"}</span></button>
            <a className="pixel-button ghost" href="https://x.com/hoodsupcoin" target="_blank" rel="noreferrer">FOLLOW THE SIGNAL ↗</a>
          </div>
          <div className="launch-status" role="status"><span className="status-light" /><span>PRE-LAUNCH RITUAL ACTIVE</span><b>CA: SEALED</b></div>
        </div>
        <button className="relic" type="button" onClick={() => setRevealed(true)} aria-label="Reveal the HOODSUP coin"><span className="relic-ring" /><span className="relic-core">H</span><span className="relic-copy">CLICK TO REVEAL</span></button>
        <a className="scroll-cue" href="#lore">SCROLL INTO THE REALM <span>↓</span></a>
      </section>

      <div className="marquee" aria-label="HOODSUP highlights"><div><span>✦ PIXEL BORN</span><span>✦ MANCER MADE</span><span>✦ HOODS UP</span><span>✦ STONKBONKER LAUNCH</span><span>✦ CA SEALED</span><span>✦ PIXEL BORN</span><span>✦ MANCER MADE</span><span>✦ HOODS UP</span><span>✦ STONKBONKER LAUNCH</span></div></div>

      <section id="lore" className="section lore-section">
        <div className="section-kicker">{"// ORIGIN STORY"}</div>
        <div className="section-heading split-heading"><h2>EVERY COIN<br />NEEDS A <em>MYTH.</em></h2><p>This one started with a collection of hooded pixel Mancers and a gesture everyone understood without saying a word.</p></div>
        <div className="lore-grid">{lore.map((item) => <article className="lore-card" key={item.number}><span className="card-number">{item.number}</span><div className="mini-hood" aria-hidden="true"><span /></div><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="hoodwalk" aria-label="The hoodwalk">
        <div className="hoodwalk-copy"><span>{"// THE HOODWALK"}</span><h2>ONE MANCER.<br />ONE SIGNAL.<br /><em>EVERY SCREEN.</em></h2><p>Our pixel wanderer keeps moving while the realm gets ready. Catch the three green eyes crossing your screen.</p></div>
        <div className="walk-stage" aria-hidden="true"><div className="moon">H</div><div className="mountain mountain-one" /><div className="mountain mountain-two" /><div className="walk-sprite" /><div className="walk-ground" /></div>
      </section>

      <section id="hoodonomics" className="section token-section">
        <div className="section-kicker">{"// HOODONOMICS"}</div>
        <div className="token-layout">
          <div className="token-copy"><h2>NO FAKE NUMBERS.<br /><em>ONLY ONCHAIN TRUTH.</em></h2><p>The final token structure is still under the hood. Supply, distribution, fees and liquidity details will appear here once confirmed — before the contract goes live.</p><div className="truth-note"><span>!</span><p>Until then, any address claiming to be $HOODSUP is an impostor in a cheap cloak.</p></div></div>
          <div className="coin-seal" aria-label="HOODSUP tokenomics sealed until launch"><div className="coin-orbit"><span>HOODSUP • HOODSUP • HOODSUP • </span></div><div className="coin-face"><small>PRE-LAUNCH</small><strong>H</strong><b>SEALED</b></div></div>
        </div>
        <div className="fact-grid">{launchFacts.map(([label, value]) => <div className="fact-card" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
      </section>

      <section id="launch" className="launch-section"><div className="launch-window"><div className="launch-pixels" aria-hidden="true" /><p className="section-kicker">{"// THE PORTAL"}</p><p className="launch-overline">LAUNCHING THROUGH</p><h2>STONK<span>BONKER</span></h2><p>When the signal is ready, the contract and official launch route will be revealed here and on X. Bookmark the source. Ignore the mimics.</p><a className="pixel-button primary" href="https://x.com/hoodsupcoin" target="_blank" rel="noreferrer">WATCH @HOODSUPCOIN ↗</a></div></section>

      <section id="roadmap" className="section roadmap-section">
        <div className="section-kicker">{"// THE PATH"}</div>
        <div className="section-heading split-heading"><h2>THE HOOD<br /><em>KEEPS MOVING.</em></h2><p>A simple path from whisper to launch — with no fake utility or impossible promises stitched into the cloak.</p></div>
        <div className="roadmap-list">{roadmap.map(([phase, title, copy], index) => <article key={phase} className={index === 0 ? "roadmap-item current" : "roadmap-item"}><span className="phase">PHASE {phase}</span><span className="roadmap-dot" /><h3>{title}</h3><p>{copy}</p><b>{index === 0 ? "ACTIVE" : "LOCKED"}</b></article>)}</div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="section-kicker">{"// QUESTIONS FROM THE CAVE"}</div>
        <div className="faq-layout"><div><h2>ASK THE<br /><em>MANCER.</em></h2><p className="faq-intro">No smoke. No mirrors. Just the answers we can verify today.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><b>+</b></summary><p>{answer}</p></details>)}</div></div>
        <div className="risk-box"><span>⚠ RISK RUNE</span><p>$HOODSUP is a meme coin with no promise of financial return. Crypto assets are volatile, and you may lose everything you put in. Nothing on this site is financial, legal or tax advice. Verify every link and contract address through the official channels before interacting.</p></div>
      </section>

      <footer>
        <div className="footer-mark"><span className="brand-rune">H</span><div><strong>$HOODSUP</strong><small>THE SIGNAL FROM THE SHADOWS</small></div></div>
        <div className="footer-cta"><h2>THE HOOD IS RISING.</h2><a href="https://x.com/hoodsupcoin" target="_blank" rel="noreferrer">JOIN THE SIGNAL ON X ↗</a></div>
        <div className="footer-bottom"><span>© 2026 HOODSUP. ALL HOODS RESERVED.</span><span>MEME COIN · NOT FINANCIAL ADVICE</span></div>
      </footer>
    </main>
  );
}
