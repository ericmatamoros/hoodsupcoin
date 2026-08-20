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

  assert.match(layout, /\$HOODSUP — Hoods Up\. Coin Out\./i);
  assert.match(page, /HOODS UP\./);
  assert.match(page, /STONK.*BONKER/s);
  assert.match(page, /RISK RUNE/);
  assert.match(page, /walk-sprite/);
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
