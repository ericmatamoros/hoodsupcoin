import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);
const previewRoot = new URL("../app/_sites-preview/", import.meta.url);

test("contains the complete HOODSUP landing-page narrative", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /\$HOODSUP — Hoods Up\. Bags Out\./i);
  assert.match(page, /HOODS UP\./);
  assert.match(page, /STONK.*BONKER/s);
  assert.match(page, /RISK RUNE/);
  assert.match(page, /night-guild-story\.png/);
  assert.match(page, /hoodsup-coin-v2\.png/);
  assert.match(page, /mancer-walker-v1\.png/i);
  assert.match(page, /MANCER NFT HOLDER AIRDROP/i);
  assert.match(page, /91%/);
  assert.match(page, /33% → 0%/);
  assert.match(page, /HOODSUP \/ STONKBROKER/);
  assert.match(page, /THE OATH GOES ONCHAIN/);
  assert.match(page, /story-01-bell-dark\.png/);
  assert.match(page, /story-02-first-hood\.png/);
  assert.match(page, /story-03-names-disappear\.png/);
  assert.match(page, /story-04-lantern-shared\.png/);
  assert.match(page, /story-05-vault-answers\.png/);
  assert.match(page, /story-06-oath-onchain\.png/);
  assert.match(page, /hoodsup-emblem-v1\.png/i);
  assert.match(layout, /icon-v2\.png/i);
  assert.doesNotMatch(page + layout, /walk-sprite/i);
  assert.doesNotMatch(page + layout, /codex-preview|react-loading-skeleton/i);
});

test("removes starter preview infrastructure", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /\$HOODSUP/);
  assert.match(layout, /generateMetadata/);
  assert.match(layout, /og\.png/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page + layout, /codex-preview|SkeletonPreview/);
  await assert.rejects(access(new URL("SkeletonPreview.tsx", previewRoot)));
  await assert.doesNotReject(access(new URL("public/og.png", templateRoot)));
});
