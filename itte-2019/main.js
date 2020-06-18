const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d", {alpha: false});
ctx.imageSmoothingEnabled = false;

console.clear();

/** @typedef {Number} CSSPixels */
/** @type {CSSPixels} */
const css_width = window.innerWidth;
/** @type {CSSPixels} */
const css_height = window.innerHeight;

canvas.style.width = `${css_width}px`;
canvas.style.height = `${css_height}px`;

const dpr = window.devicePixelRatio || 1;
/** @typedef {Number} DevicePixels*/
/** @type {DevicePixels} */
const dp_width = canvas.width = css_width * dpr;
/** @type {DevicePixels} */
const dp_height = canvas.height = css_height * dpr;

function ctx_clear() {
   ctx.fillStyle = "black";
   ctx.fillRect(0, 0, dp_width, dp_height);
}

let fontSize = 18;
fontSize = Math.round(fontSize * dpr);

ctx.font = `${fontSize}px Consolas, 'Courier New', Monospace`;

const map = [
   "       O0o0oO0ooOo0o0Oo                  ",
   "   0oOo0o0Oo0oO0o0oO0oOO0oO:             ",
   " oO0............$.........0O:            ",
   " 0.......!...............¢..oO:          ",
   "0O........¢...........ǃ.......0oOooO0o   ",
   "o~.............@v??...........XXXXXXX^o  ",
   "0~~~..!.........i.....B....!..00OoOo00\" ",
   "O&%~~.....R..................oO          ",
   " o~~~.......¢............¢.\"O:          ",
   "  0O~...........\".........0o.0:         ",
   "   :oo0Oo0oO0o0oXo0oo0oOoOo?BoO:         ",
   "   :   O0O0oo0oO0oO0ooOO?.C.b?o0:        ",
   "   :   Oo......S.S..$.o0oO.a.b10:        ",
   "   :  0O¢.....`.,.`...|||a..C.Oo:        ",
   "   :   0o......a......ooo8.a8Oo:         ",
   "   :    0oOo.....0oOOo00OO00oo:          ",
   "   :      Oo0O.&o%0oo0o!::::::           ",
   "   ::::::::::ooOOOo0                     ",
].map(string => string.split(""));

const p = {
   x: 0,
   y: 0,
   on: '.',
}
const ctx_xoffset = 10;
const ctx_yoffset = fontSize;
function render_it() {
   console.log("rendered");
   ctx_clear();
   ctx.fillStyle = "white";
   const l = map.length;
   for (let y = 0; y < l; ++y) {
      const row = map[y];
      const l = row.length;
      for (let x = 0; x < l; ++x) {
         const c = row[x];
         if (c === ' ') {
            continue;
         }
         if (c === '@') {
            p.x = x;
            p.y = y;
         }
         console.log(`${c}@${x},${y}`);
         ctx.fillText(c, ctx_xoffset + x * fontSize / 2, ctx_yoffset + y * fontSize);
      }
   }
}

onkeypress = e => {
   const k = e.key;
   map[p.y][p.x] = p.on;
   if (k === 'w') {
      p.on = map[p.y - 1][p.x];
      map[p.y - 1][p.x] = '@';
   } else if (k === 'a') {
      
   }
   render_it();
};

window.addEventListener("load", () => {
   render_it();
   document.getElementById("loading").style.display = "none";
});
