/* ==========================================================================
   BIRTHDAY CONFIG
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to personalize the whole site.
   Replace the placeholder text below with your own. Every page reads
   from this object, so a change here updates the entire experience.
   ========================================================================== */

const birthdayConfig = {

  // Her name, used across every page.
  name: "em iu",

  // Shown on the celebration page. Format however you like.
  birthday: "",
  age: "",

  // PAGE 10 — invitation details
  eventDate: "17/09/2026",
  eventTime: "19h30",
  eventLocation: "Chiik Steak & Pasta (7 Đỗ Quang, Phường Thảo Điền, Quận 2)",

  // ------------------------------------------------------------------
  // PAGE 2 — "11 Little Things"
  // Exactly 11 short, specific, personal lines. Specific beats poetic.
  // ------------------------------------------------------------------
  littleThings: [
    "The way you laugh before the joke is even finished.",
    "How you narrate your own thoughts out loud.",
    "Your terrible, wonderful taste in snacks.",
    "The face you make when you're concentrating.",
    "How you remember things I forgot I told you.",
    "The way you say my name when you're annoyed.",
    "Your 2am voice notes about nothing.",
    "How you always know when something's wrong.",
    "The way you fall asleep mid-sentence.",
    "Your very specific opinions about very small things.",
    "The way you make ordinary days feel like something."
  ],

  // ------------------------------------------------------------------
  // PAGE 3 — "Time"
  // A handful of milestones along the timeline thread.
  // ------------------------------------------------------------------
  memories: [
    { date: "DATE 01", title: "The first message", description: "[SHORT STORY — what happened, how it felt]" },
    { date: "DATE 02", title: "The first time we met", description: "[SHORT STORY]" },
    { date: "DATE 03", title: "That trip", description: "[SHORT STORY]" },
    { date: "DATE 04", title: "The hard week", description: "[SHORT STORY]" },
    { date: "DATE 05", title: "The stupid inside joke", description: "[SHORT STORY]" },
    { date: "DATE 06", title: "The best ordinary day", description: "[SHORT STORY]" }
  ],

  // ------------------------------------------------------------------
  // PAGE 6 — "Our Little Universe"
  // Each star is one clickable memory. Keep them short — one line each.
  // ------------------------------------------------------------------
  constellation: [
    "That night we didn't sleep.",
    "The joke that still isn't funny to anyone but us.",
    "The place we keep saying we'll go back to.",
    "The moment I knew.",
    "The song that's ours now, for no good reason.",
    "The fight that taught us something.",
    "The trip that almost didn't happen.",
    "Every ordinary Tuesday."
  ],

  // ------------------------------------------------------------------
  // PAGE 2 MEDIA
  // Each light can play its own voice note. Add more entries if you want
  // a different clip per light. Supported: mp3, m4a, mp4.
  // ------------------------------------------------------------------
  page2Media: [
    "assets/music/P. Long Bình.m4a",
    "assets/music/P. Long Bình 2.m4a",
    "assets/music/P. Long Bình 3.m4a",
    "assets/music/P. Long Bình 4.m4a",
    "assets/music/P. Long Bình 5.m4a",
    "assets/music/P. Long Bình 6.m4a",
    "assets/music/P. Long Bình 7.m4a",
    "assets/music/P. Long Bình 8.m4a",
    "assets/music/P. Long Bình 9.m4a",
    "assets/music/P. Long Bình 10.m4a",
    "assets/music/P. Long Bình 10.m4a"
  ],

  // ------------------------------------------------------------------
  // PAGE 7 — "Photographs"
  // Drop image files into assets/images/ and list the filenames here.
  // Captions are optional — leave "" for none.
  // ------------------------------------------------------------------
  photos: [
    { month: "January", src: "assets/images/january.jpg", caption: "our first cozy month" },
    { month: "February", src: "assets/images/february.jpg", caption: "the sweetness of us" },
    { month: "March", src: "assets/images/march.jpg", caption: "a little more daring" },
    { month: "April", src: "assets/images/april.jpg", caption: "soft spring days" },
    { month: "May", src: "assets/images/may.jpg", caption: "all the laughter" },
    { month: "June", src: "assets/images/june.jpg", caption: "sunlight and us" },
    { month: "July", src: "assets/images/july.jpg", caption: "the best kind of chaos" },
    { month: "August", src: "assets/images/august.jpg", caption: "warm evenings" },
    { month: "September", src: "assets/images/september.jpg", caption: "the slow blink of fall" },
    { month: "October", src: "assets/images/october.jpg", caption: "the magic month" },
    { month: "November", src: "assets/images/november.jpg", caption: "the quiet before wonder" },
    { month: "December", src: "assets/images/december.jpg", caption: "the birthday glow" }
  ],

  // ------------------------------------------------------------------
  // PAGE 8 — "A Letter"
  // Each string is one paragraph. Add or remove as many as you like.
  // ------------------------------------------------------------------
  letter: [
    "[WRITE YOUR PERSONAL LETTER HERE — paragraph one.]",
    "[Paragraph two.]",
    "[Paragraph three.]",
    "[Sign it however feels like you.]"
  ],

  // Background music. See README for how to add your own file.
  music: "assets/music/birthday.mp3"
};
