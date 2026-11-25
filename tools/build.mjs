// Stamp core.js into every component file so each file works on its own.
//   node tools/build.mjs          (run it after editing core.js)
//   node tools/build.mjs --check  (exits 1 if any file is out of date, and changes nothing)
import { readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
export const NAMES = ['button', 'toggle', 'slider', 'checkbox', 'radio', 'input', 'tabs', 'progress', 'rating', 'toast', 'tooltip', 'select', 'dialog', 'accordion', 'counter', 'drawer', 'badge'];
const check = process.argv.includes('--check');
const core = readFileSync(join(root, 'core.js'), 'utf8').trim();
const between = (src, name, body, file) => {
  const re = new RegExp(`(// >>> ${name}[^\\n]*\\n)[\\s\\S]*?(// <<< ${name})`);
  if (!re.test(src)) throw new Error(`${file}: no ${name} markers`);
  return src.replace(re, (_, a, b) => a + body + '\n' + b);
};
let stale = 0;
for (const n of NAMES) {
  const file = join(root, n, n + '.js'), was = readFileSync(file, 'utf8');
  const src = between(was, 'irina core', core, file);
  if (src !== was) { stale++; if (!check) writeFileSync(file, src); console.log(`${check ? 'stale' : 'wrote'} ${n}/${n}.js`); }
}
if (!check) copyFileSync(join(root, 'core.js'), join(root, 'skills/irina-vfx/core.js'));
if (check && stale) process.exit(1);
