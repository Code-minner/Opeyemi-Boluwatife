/**
 * Prefetch a single video URL. Deduped so we never open parallel downloads
 * for the same file.
 */

const warmed = new Set<string>();

export function warmVideo(url: string, mode: "metadata" | "auto" = "auto") {
  if (typeof document === "undefined" || !url || warmed.has(`${mode}:${url}`)) return;
  warmed.add(`${mode}:${url}`);

  const probe = document.createElement("video");
  probe.muted = true;
  probe.playsInline = true;
  probe.preload = mode;
  probe.src = url;
  // Detached element — just kick the network cache.
  probe.load();
}
