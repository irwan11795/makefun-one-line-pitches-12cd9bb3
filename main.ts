import { mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const pitch = "You've had that app idea for years — describe it in plain words, let an AI agent on make.fun build your first app, and only pay if you love what comes back.";

const dirs = [process.env.MAKEFUN_OUTPUT_DIR || "", "/output", "output", join(tmpdir(), "mf-out")].filter(Boolean);
for (const dir of dirs) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "entry.txt"), pitch, "utf8");
    break;
  } catch {}
}
