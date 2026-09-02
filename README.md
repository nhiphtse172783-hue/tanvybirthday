# A little website, for one person

An 11-page interactive birthday site. No build step, no backend — just open
`index.html` in a browser.

## Running it locally

Double-click `index.html`, or open it from your browser with `File > Open`.
Everything works from the file system directly — no server required.

(If you want to be extra safe about browser file-permissions for the photo
gallery and audio, you can also run a tiny local server from this folder —
e.g. `python3 -m http.server` — then visit `http://localhost:8000`. This is
optional; opening the file directly works fine.)

## The one file you need to edit

Everything personal lives in **`js/config.js`**. Open it in any text editor
and replace the placeholder values:

```js
const birthdayConfig = {
  name: "HER_NAME",
  birthday: "BIRTHDAY_DATE",
  age: "AGE",
  littleThings: [ /* 11 short lines, page 2 */ ],
  memories: [ /* timeline entries, page 3 */ ],
  constellation: [ /* 6–10 one-line memories, page 6 */ ],
  photos: [ /* image paths + captions, page 7 */ ],
  letter: [ /* one string per paragraph, page 8 */ ],
  music: "assets/music/birthday.mp3"
};
```

Nothing else needs to change — every page reads from this object.

### Changing her name
Edit `name` at the top of `js/config.js`. It's used automatically on the
celebration page (10) and the closing page (11).

### Changing the "11 little things" (page 2)
Edit the `littleThings` array. Keep it to 11 short, specific lines — the
more specific, the better it lands ("the way you narrate your own thoughts
out loud" beats "you're funny").

### Changing the memories / timeline (page 3)
Edit the `memories` array. Each entry is `{ date, title, description }`.
Add or remove entries freely — the timeline lays itself out automatically.

### Changing the constellation (page 6)
Edit the `constellation` array — one short line per star. 6–10 works best
visually.

### Adding your own photos (page 7)
1. Drop your image files into `assets/images/` (jpg or png, a few hundred KB
   each is plenty — this keeps the page fast).
2. In `js/config.js`, update the `photos` array with the matching filenames
   and an optional caption for each:
   ```js
   photos: [
     { src: "assets/images/us-at-the-beach.jpg", caption: "that day" },
     ...
   ]
   ```
   If a listed image is missing, that photo frame will simply show a small
   note telling you which file to add — nothing breaks.

### Adding music
Drop an mp3 into `assets/music/` and make sure the filename matches the
`music` path in `js/config.js` (defaults to `assets/music/birthday.mp3`).
A small sound toggle appears in the bottom-right corner of every page; it
stays off until she turns it on, and if no file is found, the toggle just
hides itself automatically.

### Changing the letter (page 8)
Edit the `letter` array — each string is one paragraph. Add or remove as
many as you like; they reveal one at a time as she scrolls.

## Structure

```
birthday/
├── index.html   → Page 1  — A Little Secret
├── page2.html   → Page 2  — 11 Little Things
├── page7.html   → Page 3  — Our Months
├── page9.html   → Page 4  — The Question
├── page10.html  → Page 5  — Today
├── css/style.css     shared design system (type, color, motion, cursor)
├── js/config.js      ← edit this one
├── js/main.js         shared runtime (cursor, transitions, audio)
└── assets/
    ├── images/   put your photos here
    ├── music/    put your mp3 here
    └── fonts/    (optional — the site uses Google Fonts by default)
```

## Notes

- Every page shares the same transition: a small point of light that opens
  and closes each scene. That light is the one visual thread running through
  the whole site.
- The site respects `prefers-reduced-motion` — if that's turned on in the
  visitor's OS, animations are shortened automatically.
- Everything is vanilla HTML/CSS/JS. No frameworks, no build step, no
  external dependencies besides Google Fonts (loaded via CDN — the site
  still works offline, just with fallback system fonts).
