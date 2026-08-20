"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const launchIntel = [
  ["VENUE", "STONKBONKER"],
  ["STATUS", "PRE-LAUNCH"],
  ["SUPPLY", "1B FIXED"],
  ["CONTRACT", "NOT LIVE"],
  ["SOURCE", "@HOODSUPCOIN"],
];

const chapters = [
  { number: "01", title: "THE BELL GOES DARK", copy: "When the daylight bell rang for the last time, the city believed the market was asleep. Under the old quarter, another shift was only beginning.", image: "/assets/story-01-bell-dark.png", alt: "The final market bell rings at dusk while hooded figures descend into the old quarter" },
  { number: "02", title: "THE FIRST HOOD RISES", copy: "A lone trader pulled a hood over their face and stepped past the closed stalls. It was not a disguise. It was a promise to move without noise.", image: "/assets/story-02-first-hood.png", alt: "A lone orange-cloaked trader raises a hood in an empty market street" },
  { number: "03", title: "NAMES DISAPPEAR", copy: "No titles. No gurus. No one asking who arrived first. Beneath the hood, only nerve, timing and the green glint of a signal mattered.", image: "/assets/story-03-names-disappear.png", alt: "Anonymous hooded traders leave their masks and titles in a stone chamber" },
  { number: "04", title: "THE LANTERN IS SHARED", copy: "The signal passed from alley to alley. One hood became ten, ten became a guild, and every raised hood carried the same message: opportunity is moving.", image: "/assets/story-04-lantern-shared.png", alt: "Hooded traders pass a golden lantern signal across alleys and rooftops" },
  { number: "05", title: "THE VAULT ANSWERS", copy: "At midnight the sealed vault opened—not for kings, but for those who kept watch. Hood up. Eyes open. Bag ready. Take your cut if fortune allows.", image: "/assets/story-05-vault-answers.png", alt: "A golden vault opens before the hooded midnight guild" },
  { number: "06", title: "THE OATH GOES ONCHAIN", copy: "$HOODSUP carries the old midnight signal into a new market. No promise of riches—only a place for the ones willing to arrive before the crowd.", image: "/assets/story-06-oath-onchain.png", alt: "The midnight signal becomes a glowing onchain network above the city" },
];

const allocations = [
  ["91%", "PUBLIC LAUNCH & LIQUIDITY", "The overwhelming majority is reserved for the public launch and liquidity formation."],
  ["5%", "MANCER NFT HOLDER AIRDROP", "Reserved for eligible Mancer NFT holders. Snapshot and claim rules will be published before launch."],
  ["3%", "GROWTH & DEVELOPMENT", "Marketing, partnerships, ecosystem growth, product work and potential listing requirements."],
  ["1%", "TEAM", "Project team compensation and long-term operating commitments."],
];

const liquidityCards = [
  ["HOODSUP / STONKBROKER", "ECOSYSTEM PAIR", "At least 50% of the project’s initial deployed liquidity is planned to pair with $STONKBROKER, aligning HOODSUP with the wider ecosystem."],
  ["STONKBONKER", "SAFE SEEDING", "The planned launch uses single-sided seeding through STONKBONKER, with project liquidity routed through approved locker contracts."],
  ["33% → 0%", "LAUNCH SHIELD", "The target anti-sniper tax decays from 33% to 0% across the first 33 minutes. Final settings will be confirmed before trading."],
];

const verificationSteps = [
  ["01", "CHECK THE SOURCE", "Start at @hoodsupcoin. Screenshots, replies and lookalike accounts are not the signal."],
  ["02", "MATCH THE CONTRACT", "The exact contract will appear on this website and X at launch. If one character differs, walk away."],
  ["03", "VERIFY THE LIQUIDITY", "Pool and locker addresses will be published at launch. Confirm them onchain before interacting."],
  ["04", "USE THE OFFICIAL ROUTE", "Enter only through the STONKBONKER link published by HOODSUP. Never trust a link dropped into your DMs."],
];

const faqs = [
  ["Where does $HOODSUP launch?", "$HOODSUP is preparing to launch through STONKBONKER. The official route will be posted here and on @hoodsupcoin."],
  ["How is the supply allocated?", "The planned fixed supply is 1 billion: 91% public launch and liquidity, 5% Mancer-holder airdrop, 3% growth and development, and 1% team."],
  ["How does the holder airdrop work?", "Eligibility, snapshot timing and the official claim route will be announced before launch. No claim page or wallet connection is live today."],
  ["Is the contract live?", "No. There is no public contract address yet. Anything claiming otherwise is not $HOODSUP."],
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <span className={footer ? "footer-brand" : "brand-lockup"}>
      <Image className="brand-emblem" src="/assets/hoodsup-emblem-v1.png" alt="" width={1254} height={1254} priority={!footer} />
      <span className="brand-copy"><strong>$HOODSUP</strong><small>THE MIDNIGHT TOKEN</small></span>
    </span>
  );
}

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
      <div className="mancer-walker" aria-hidden="true"><Image src="/assets/mancer-walker-v1.png" alt="" width={1254} height={1254} priority /></div>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="HOODSUP home"><Brand /></a>
        <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><span /><span /><span /></button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <a href="#story">Story</a><a href="#tokenomics">Tokenomics</a><a href="#liquidity">Liquidity</a><a href="#launch">Launch</a><a href="#verify">Verify</a>
          <a className="nav-x" href="https://x.com/hoodsupcoin" target="_blank" rel="noreferrer">X ↗</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art" aria-hidden="true" /><div className="hero-vignette" aria-hidden="true" /><div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span /> THE MIDNIGHT SIGNAL</p>
          <h1 id="hero-title"><span>HOODS UP.</span><strong>BAGS OUT.</strong></h1>
          <p className="hero-copy">When the lights go down, the hoods go up. $HOODSUP is the onchain signal for the ones who move before the crowd.</p>
          <div className="hero-actions"><a className="pixel-button primary" href="https://x.com/hoodsupcoin" target="_blank" rel="noreferrer">FOLLOW THE SIGNAL ↗</a><a className="pixel-button ghost" href="#story">READ THE MYTH ↓</a></div>
          <div className="launch-status" role="status"><span className="status-light" /><span>LAUNCHING ON STONKBONKER</span><b>CONTRACT: NOT LIVE</b></div>
        </div>
        <button className="hero-coin" type="button" onClick={() => setRevealed(true)} aria-label="Reveal the HOODSUP coin">
          <Image src="/assets/hoodsup-coin-v2.png" alt="A heavy gold HOODSUP coin embossed with a hooded figure" width={1254} height={1254} priority />
          <span>{revealed ? "THE SIGNAL IS LIVE" : "CLICK TO REVEAL"}</span>
        </button>
      </section>

      <div className="marquee" aria-label="HOODSUP highlights"><div>
        <span>✦ 1B FIXED SUPPLY</span><span>✦ 91% PUBLIC LAUNCH + LIQUIDITY</span><span>✦ 5% MANCER HOLDER AIRDROP</span><span>✦ STONKBONKER</span><span>✦ CONTRACT NOT LIVE</span>
        <span>✦ 1B FIXED SUPPLY</span><span>✦ 91% PUBLIC LAUNCH + LIQUIDITY</span><span>✦ 5% MANCER HOLDER AIRDROP</span><span>✦ STONKBONKER</span><span>✦ CONTRACT NOT LIVE</span>
      </div></div>

      <section id="story" className="story-section">
        <div className="story-intro">
          <p className="section-kicker">{"// THE NIGHT GUILD"}</p><h2>THE MYTH OF THE<br /><em>MIDNIGHT HOOD.</em></h2>
          <div className="story-lead"><p>Before charts, tickers and glowing screens, the sharpest traders met after dark. A raised hood meant the hunt was on—no names, no noise, only a signal between people who knew where opportunity was moving.</p><p>They called themselves the Midnight Guild. The city never saw their faces, but it learned to watch the rooftops: when three green lights appeared beneath a hood, the night market was about to wake.</p></div>
        </div>
        <figure className="story-art"><Image src="/assets/night-guild-story.png" alt="A hooded night guild crossing a purple market toward an open golden vault" width={2022} height={778} loading="eager" /><figcaption>One hood became ten. Ten became a crowd. Soon the city knew the rule: when the hoods go up, value is about to move.</figcaption></figure>
        <div className="story-plates">
          {chapters.map((chapter) => (
            <article className="story-plate" key={chapter.number}>
              <figure className="story-plate-art">
                <Image src={chapter.image} alt={chapter.alt} width={1536} height={1024} sizes="(max-width: 980px) 100vw, 62vw" />
                <figcaption>MYTH PLATE {chapter.number} · THE MIDNIGHT ARCHIVE</figcaption>
              </figure>
              <div className="story-plate-copy">
                <span className="story-number">{chapter.number}</span>
                <span className="chapter-sigil">◆ THE SIGNAL MOVES</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="myth-coda"><p>“THE MARKET REWARDS NO FACE.<br />ONLY THE ONES STILL WATCHING.”</p><div><span>THE MIDNIGHT OATH</span><p>The guild’s oldest rule survived every market: never follow a voice you cannot verify, never reveal the vault before the bell, and never lower your hood while the signal is still moving.</p></div></div>
      </section>

      <section id="tokenomics" className="tokenomics-section">
        <div className="section-heading split-heading"><div><p className="section-kicker">{"// TOKENOMICS"}</p><h2>THE VAULT<br /><em>BREAKDOWN.</em></h2></div><p>A fixed 1,000,000,000 $HOODSUP supply built around public liquidity, a real holder airdrop and a tightly limited project allocation.</p></div>
        <div className="token-stats">
          <div><strong>1B</strong><span>FIXED SUPPLY</span></div><div><strong>91%</strong><span>PUBLIC LAUNCH & LP</span></div><div><strong>5%</strong><span>MANCER AIRDROP</span></div><div><strong>4% · 30D</strong><span>PROJECT ALLOCATION LOCK</span></div><div><strong>0%</strong><span>TAX AFTER 33 MIN</span></div>
        </div>
        <div className="allocation-visual" aria-label="Token allocation: 91% public launch and liquidity, 5% Mancer holder airdrop, 3% growth, 1% team"><span className="allocation-public">91%</span><span className="allocation-airdrop">5%</span><span className="allocation-growth">3%</span><span className="allocation-team">1%</span></div>
        <div className="allocation-legend"><span><i className="public-dot" />PUBLIC + LP 91%</span><span><i className="airdrop-dot" />MANCER AIRDROP 5%</span><span><i className="growth-dot" />GROWTH 3%</span><span><i className="team-dot" />TEAM 1%</span></div>
        <div className="allocation-cards">{allocations.map(([amount, label, copy]) => <article key={label}><strong>{amount}</strong><h3>{label}</h3><p>{copy}</p></article>)}</div>
        <aside className="airdrop-callout"><Image src="/assets/hoodsup-emblem-v1.png" alt="" width={1254} height={1254} /><div><span>MANCER HOLDER REWARD</span><h3>5% RESERVED FOR THE ONES WHO WORE THE HOOD FIRST.</h3><p>Snapshot timing, eligible collections, per-NFT rules and the official claim window will be announced before launch. No wallet connection is required today.</p></div></aside>
        <p className="plan-note">PLANNED PRE-LAUNCH CONFIGURATION · FINAL PARAMETERS AND CONTRACTS WILL BE CONFIRMED BEFORE TRADING.</p>
      </section>

      <section id="liquidity" className="liquidity-section">
        <div className="section-heading split-heading"><div><p className="section-kicker">{"// LIQUIDITY"}</p><h2>SEEDED SAFE.<br /><em>LOCKED IN PUBLIC.</em></h2></div><p>$HOODSUP is designed to launch through STONKBONKER with ecosystem pairing, single-sided seeding and locker addresses published for public verification.</p></div>
        <div className="liquidity-grid">{liquidityCards.map(([value, label, copy], index) => <article key={label} className={index === 0 ? "liquidity-feature" : ""}><span>{index === 0 ? "PAIR 01" : index === 1 ? "ROUTE 02" : "SHIELD 03"}</span><strong>{value}</strong><h3>{label}</h3><p>{copy}</p></article>)}</div>
        <div className="liquidity-proof"><span>ONCHAIN PROOF</span><p>Pool addresses, liquidity positions and approved locker contracts will be published here and on @hoodsupcoin at launch.</p><b>NOT LIVE YET</b></div>
      </section>

      <section id="launch" className="launch-section">
        <div className="launch-copy"><p className="section-kicker">{"// LAUNCH INTEL"}</p><h2>FACTS BEFORE<br /><em>FOMO.</em></h2><p>The structure is planned; the contract is not live. Final contract, pool and locker addresses will replace this notice before trading begins.</p></div>
        <div className="intel-panel">{launchIntel.map(([label, value]) => <div className="intel-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}<a href="https://x.com/hoodsupcoin" target="_blank" rel="noreferrer">WATCH THE OFFICIAL SOURCE ↗</a></div>
      </section>

      <section id="verify" className="verify-section">
        <div className="verify-heading"><p className="section-kicker">{"// VERIFY THE SIGNAL"}</p><h2>DON&apos;T GET<br /><em>COUNTERFEIT HOODS.</em></h2></div>
        <div className="verify-list">{verificationSteps.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>

      <section id="faq" className="faq-section"><div className="faq-heading"><p className="section-kicker">{"// STRAIGHT ANSWERS"}</p><h2>READ THE<br /><em>RUNES.</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><b>+</b></summary><p>{answer}</p></details>)}</div></section>

      <aside className="risk-line"><b>⚠ RISK RUNE</b><p>$HOODSUP is a meme coin with no promise of financial return. Crypto is volatile and you may lose everything you put in. Token allocations and launch settings remain planned until confirmed onchain. Verify every link and contract before interacting.</p></aside>

      <footer><Brand footer /><div className="footer-cta"><h2>HOOD UP.<br />EYES OPEN.</h2><a href="https://x.com/hoodsupcoin" target="_blank" rel="noreferrer">JOIN THE NIGHT SHIFT ↗</a></div><div className="footer-bottom"><span>© 2026 HOODSUP. ALL HOODS RESERVED.</span><span>MEME COIN · NOT FINANCIAL ADVICE</span></div></footer>
    </main>
  );
}
