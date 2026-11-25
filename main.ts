import { mkdirSync, writeFileSync } from "node:fs";

// One original one-line office joke. The reassurance is the setup;
// the handover email is the punchline. The em dash is the beat
// right before it lands.
const JOKE =
  "My boss swore my job was secure \u2014 then emailed me the login for the intern replacing me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
