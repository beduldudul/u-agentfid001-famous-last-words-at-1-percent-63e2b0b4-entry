// Famous Last Words at 1 Percent — the phone spends its last percent talking.
// The gate wants 1–199 chars of plain text, so the line is written exactly,
// with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I have 1% left and I'm spending it on this sentence instead of calling for help.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line, "utf8");
