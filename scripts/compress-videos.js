/**
 * Compress portfolio MP4s for production.
 *
 * Requires ffmpeg on PATH:
 *   winget install Gyan.FFmpeg
 *
 * Then from the repo root:
 *   npm run compress:videos
 *
 * Writes optimized files into public/videos/_optimized, then swaps them in.
 */

const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const srcDir = path.join(root, "public", "videos");
const outDir = path.join(srcDir, "_optimized");

function whichFfmpeg() {
  const hit = spawnSync(process.platform === "win32" ? "where" : "which", ["ffmpeg"], {
    encoding: "utf8",
  });
  if (hit.status === 0 && hit.stdout.trim()) return "ffmpeg";
  return null;
}

function compress(file) {
  const input = path.join(srcDir, file);
  const output = path.join(outDir, file);
  console.log(`→ ${file}`);
  const result = spawnSync(
    "ffmpeg",
    [
      "-y",
      "-i",
      input,
      "-vf",
      "scale='min(1280,iw)':-2",
      "-c:v",
      "libx264",
      "-preset",
      "slow",
      "-crf",
      "28",
      "-movflags",
      "+faststart",
      "-an",
      output,
    ],
    { stdio: "inherit" },
  );
  if (result.status !== 0) throw new Error(`ffmpeg failed for ${file}`);
}

function main() {
  if (!whichFfmpeg()) {
    console.error("ffmpeg not found. Install with: winget install Gyan.FFmpeg");
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });
  const files = fs.readdirSync(srcDir).filter((f) => f.toLowerCase().endsWith(".mp4"));
  if (!files.length) {
    console.error("No mp4 files in public/videos");
    process.exit(1);
  }

  for (const file of files) compress(file);

  for (const file of files) {
    const from = path.join(outDir, file);
    const to = path.join(srcDir, file);
    fs.copyFileSync(from, to);
    console.log(`✓ replaced ${file}`);
  }

  console.log("Done. Commit the smaller public/videos/*.mp4 files.");
}

main();
