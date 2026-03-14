/* ============================================================
   KAALA RAHASYA — Black Magic Oracle JavaScript
   ============================================================ */

// ---- STATE ----
const state = {
  religion: null,
  name: '',
  gender: '',
  country: '',
  problems: [],
  description: '',
  duration: '',
  suspect: '',
  tantrik: null
};

// ---- TANTRIK DATABASE ----
const tantriks = [
  { name: "Baba Kaalanath Aghoreshwar", title: "Supreme Dark Aghori & Tantrik Master", avatar: "🧿", spec: ["Hindu","Tribal","Agnostic"] },
  { name: "Sheikh Iblis al-Qahira", title: "Grand Master of Sihr & Ruqya", avatar: "☪️", spec: ["Islam"] },
  { name: "Father Malachar de Noir", title: "Ordained Demonologist & Exorcist", avatar: "✝️", spec: ["Christianity"] },
  { name: "Rabbi Zev ben Shaitan", title: "Kabbalistic Dark Arts Practitioner", avatar: "✡️", spec: ["Judaism"] },
  { name: "Lama Dorje Tharpa Nyingma", title: "Bon Ritual Master & Dark Mantra Sage", avatar: "☸️", spec: ["Buddhism"] },
  { name: "Mama Delphine LaVeau III", title: "High Priestess of Voodoo & Juju", avatar: "🌑", spec: ["Tribal"] },
  { name: "High Witch Morrighan Blackthorn", title: "Elder of the Dark Moon Coven", avatar: "🌙", spec: ["Pagan"] },
  { name: "The Nameless Oracle", title: "Keeper of Universal Dark Mysteries", avatar: "⚫", spec: ["Agnostic"] },
];

// ---- ORACLE READINGS BY RELIGION ----
const readings = {
  Hindu: [
    "The ancient tantras reveal a deep Vashikaran influence cast upon your aura by someone close to you — possibly during a ritual performed on an Amavasya night. The black thread of Tantra has wound itself around your fate.",
    "Kali Mata's third eye sees it clearly — a powerful Maran Kriya has been attempted against your lineage. The energy of Shmashan (cremation ground) clings to your shadow.",
    "Your Kundali shows Rahu-Ketu affliction combined with deliberate dark ritual interference. This is not coincidence — it is someone's directed will against you."
  ],
  Islam: [
    "The jinnat of a lower realm have been bound to your name through Sihr-e-Tafriq — a black magic of separation and ruin. It was likely performed using your hair or worn garment.",
    "Your aura carries the mark of a Hasad (evil eye) so intense it has manifested physically. A knot-based Sihr ritual has been cast using your photograph.",
    "The dark Amal against you was performed at the hour of Maghrib. Your soul's protectors grow weary. The 99 names must be invoked tonight."
  ],
  Christianity: [
    "A generational hex has followed your bloodline for at least three generations. It was sealed with graveyard soil and a blood pact made long before your birth.",
    "The demonic attachment you carry entered through a moment of extreme grief. It feeds on doubt and despair. The binding is real, and it has a name.",
    "Someone commissioned a curse tablet against you — inscribed with your name in reverse, buried at a crossroads during a moonless Friday night."
  ],
  Judaism: [
    "The Kabbalah reveals a Dybbuk attachment — a restless soul that has bonded to your energy during a period of intense emotional vulnerability.",
    "A Golem of ill intent was created with your likeness in clay, buried near running water. The Shem written upon it distorts your luck and love.",
    "Your mazal has been twisted through forbidden use of the 72 Names. The energy signatures are ancient and deliberate."
  ],
  Buddhism: [
    "A Bon dark mantra ritual was performed during a lunar eclipse, sending malevolent thoughtforms into your life stream. The Yidam protectors have been temporarily blocked.",
    "Your karmic thread has been deliberately knotted by someone practicing Bardo manipulation. Dreams of falling and water are symptoms of this dark attachment.",
    "The Protector Deities see a shadow being following you since birth. This is a Tulpa — a thought-form entity sustained by someone's obsessive hatred of you."
  ],
  Tribal: [
    "A powerful Juju bag containing a lock of your hair, a black hen feather, and graveyard dirt has been buried at your doorstep. The spirit within is active and hungry.",
    "The Obeah woman's doll has been stuck with pins aligned to your chakra points. The energy disturbance is severe and has a 7-year window.",
    "Your Ori (spiritual head) has been clouded by a Vodou ceremony performed at a crossroads. The Loa of discord has answered someone's call against you."
  ],
  Pagan: [
    "During the last Samhain, a binding spell was cast using black cord tied nine times around your image in wax. The spell is active and tied to the moon's cycle.",
    "A coven worked against you during the waning moon — using your name in reverse, black candles, and baneful herbs. The hex has three layers.",
    "The shadow self you sometimes sense is not your own. A fetch was sent by someone with Wiccan knowledge, designed to drain your vital energy at night."
  ],
  Agnostic: [
    "Whether you believe or not, the dark energetic pattern surrounding you is measurable. Psychic interference of a deliberate kind has been identified in your energy field.",
    "Your subconscious has registered what your mind denies — someone with intent has been projecting destructive energy into your life with ritualistic consistency.",
    "The universe recognizes the dark current directed at you. Faith is irrelevant — the ritual was performed. The evidence is in what you experience every single day."
  ]
};

// ---- REMEDIES BY PROBLEM TYPE ----
const remedies = {
  "💔 Love / Breakup": ["🕯️ Light a red candle at midnight and write the beloved's name on a bay leaf — burn it with rose incense", "🌹 Carry a Vashikaran yantra wrapped in red cloth near your heart for 21 days", "💌 Recite the attraction mantra 108 times at sunrise facing east"],
  "👁️ Evil Eye (Nazar)": ["🧿 Hang a Nazar Boncuk blue eye amulet above your main entrance", "🌿 Burn dried chili, mustard seed and salt in a clockwise circle around yourself", "🪬 Have a trained tantrik perform Nazar Utarna using copper water and peacock feathers"],
  "💰 Financial Ruin": ["💎 Bury a coin of the afflicted year in the northeast corner of your home", "🟡 Offer yellow flowers and ghee to Kubera Yantra every Thursday", "📿 Chant Lakshmi Beej mantra 1008 times during a waxing moon"],
  "🏠 Family Conflict": ["🏮 Light incense at every corner of the home and recite protective prayers together", "🔔 Hang wind chimes at the entrance to dispel negative vibrations", "🧂 Sprinkle sea salt mixed with turmeric at every doorway threshold"],
  "😈 Enemy / Revenge": ["🔐 Create an enemy-binding talisman using black wax and iron filings under the full moon", "🌑 Perform a smoke banishment ritual using black pepper and camphor", "📌 Write the enemy's name on black paper and seal it in a black box with a black lock"],
  "🧿 Jinn / Spirit Attack": ["📿 Recite Ayat-ul-Kursi (2:255) 7 times before sleeping", "🔥 Burn Loban (frankincense) throughout the home at dawn and dusk", "💧 Prepare Ruqya water and sprinkle every corner of the affected space"],
  "🔗 Binding Spell": ["✂️ The tantrik must perform a cord-cutting ritual using a silver blade", "🌊 Bathe in water mixed with black salt, neem leaves and ash on a Saturday", "🕯️ Burn a black candle carved with your name while repeating the unbinding verse"],
  "🤒 Unexplained Illness": ["🌿 Neem leaf smoke purification of the body and home thrice weekly", "🩺 Consult both a medical doctor and a spiritual healer simultaneously — dual approach required", "📿 Wear a Kavach (protective amulet) blessed by a qualified tantrik under the new moon"],
  "💤 Sleep Disturbance / Nightmares": ["🌙 Place black tourmaline and selenite crystals under your pillow", "🫧 Burn camphor in your bedroom before sleeping for 40 consecutive nights", "🛡️ Draw a protective sigil in salt beneath your bed mat and renew it every new moon"],
  "🌀 Mental Unrest / Obsession": ["🧘 Ground yourself with a 40-day earth-touching meditation at sunrise", "💨 Smoke cleanse with white sage and frankincense, moving counter-clockwise", "🔮 A psychic cord cutting performed by the tantrik to sever the obsessive attachment"],
  "🧪 Black Magic Removal": ["⚗️ Full ritual purification — 7-layer black magic removal ceremony required", "🌊 River or ocean immersion at dawn on a Tuesday for spiritual cleansing", "🕯️ 21 black candle burning ceremony with the specific counter-sigil for the type of magic used"],
  "📿 Protection / Kavach": ["🛡️ Commission a personalized Kavach yantra engraved with your birth star", "🌿 Wear a black thread blessed with 108 protective mantras on your left wrist", "🏠 Create a protective salt ring around your entire home, renewed every full moon"],
  "💼 Career / Business Sabotage": ["📊 Place a Mercury yantra in your workspace during the waxing moon", "🟢 Light green candles every Wednesday and recite abundance intentions", "🔑 Bury a charged lodestone at the entrance of your business with copper coins"],
  "🔮 Future Reading": ["🌌 The stars and shadows together will reveal your path during the Oracle's deep reading", "📜 A detailed natal chart analysis combined with dark arts divination is recommended", "🎴 A full tarot and cowrie shell reading under moonlight will illuminate your destiny"]
};

// ---- RITUAL MESSAGES ----
const ritualMessages = [
  "Consulting the ancient scrolls...",
  "Summoning the ancestral spirits...",
  "Decoding the shadow patterns...",
  "Aligning with lunar energies...",
  "The tantrik enters deep trance...",
  "Reading your aura's dark frequencies...",
  "Cross-referencing the Book of Shadows...",
  "The Oracle awakens..."
];

// =====================================================
// SCREEN MANAGEMENT
// =====================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  target.classList.add('active');
  target.style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =====================================================
// RELIGION SELECTION
// =====================================================
function selectReligion(el) {
  document.querySelectorAll('.religion-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  state.religion = el.dataset.rel;

  const btn = document.getElementById('rel-next-btn');
  btn.classList.remove('disabled');

  // Flicker effect on select
  el.style.animation = 'none';
  setTimeout(() => el.style.animation = '', 50);
}

function goToDetails() {
  if (!state.religion) return;
  const sub = document.getElementById('details-subtitle');
  const relLabels = {
    Hindu: "The Tantrik reads your path through the lens of Dharma and Shakti.",
    Islam: "The Sheikh channels through the Quran and ancient Amal traditions.",
    Christianity: "The Oracle speaks through sacred scripture and demonological texts.",
    Judaism: "The Kabbalist peers through the Sefirot to illuminate your shadow.",
    Buddhism: "The Lama reads the karmic rivers that flow through your existence.",
    Tribal: "The ancestral spirits of your land speak through bone and shell.",
    Pagan: "The coven's collective sight turns toward you under the dark moon.",
    Agnostic: "The universal dark force does not require belief to work upon you."
  };
  if (sub) sub.textContent = relLabels[state.religion] || "Answer truthfully. The spirits see all.";
  showScreen('details-screen');
}

// =====================================================
// PROBLEM TAGS
// =====================================================
function toggleTag(el) {
  el.classList.toggle('active');
  if (el.classList.contains('active')) {
    state.problems.push(el.textContent.trim());
    createRipple(el);
  } else {
    state.problems = state.problems.filter(p => p !== el.textContent.trim());
  }
}

function createRipple(el) {
  el.style.transform = 'scale(1.05)';
  setTimeout(() => el.style.transform = '', 200);
}

// =====================================================
// GO TO READING
// =====================================================
function goToReading() {
  state.name = document.getElementById('inp-name').value.trim() || 'Seeker';
  state.country = document.getElementById('inp-country').value;
  state.moon = document.getElementById('inp-moon').value;
  state.description = document.getElementById('inp-problem').value.trim();

  const genderEl = document.querySelector('input[name="gender"]:checked');
  state.gender = genderEl ? genderEl.value : '';
  const durationEl = document.querySelector('input[name="duration"]:checked');
  state.duration = durationEl ? durationEl.value : '';
  const suspectEl = document.querySelector('input[name="suspect"]:checked');
  state.suspect = suspectEl ? suspectEl.value : '';

  // Find matching tantrik
  const matches = tantriks.filter(t => t.spec.includes(state.religion));
  state.tantrik = matches.length ? matches[Math.floor(Math.random() * matches.length)] : tantriks[0];

  showScreen('ritual-screen');
  runRitual();
}

// =====================================================
// RITUAL ANIMATION
// =====================================================
function runRitual() {
  const bar = document.getElementById('ritual-bar');
  const statusEl = document.getElementById('ritual-status');
  let progress = 0;
  let msgIdx = 0;

  const msgInterval = setInterval(() => {
    if (msgIdx < ritualMessages.length) {
      statusEl.textContent = ritualMessages[msgIdx++];
    }
  }, 700);

  const barInterval = setInterval(() => {
    progress += Math.random() * 4 + 1;
    if (progress >= 100) {
      progress = 100;
      bar.style.width = '100%';
      clearInterval(barInterval);
      clearInterval(msgInterval);
      setTimeout(showOracleScreen, 600);
    } else {
      bar.style.width = progress + '%';
    }
  }, 150);
}

// =====================================================
// ORACLE SCREEN POPULATION
// =====================================================
function showOracleScreen() {
  // Set tantrik info
  document.getElementById('tantrik-avatar').textContent = state.tantrik.avatar;
  document.getElementById('tantrik-name').textContent = state.tantrik.name;
  document.getElementById('tantrik-title').textContent = state.tantrik.title;

  // Pick random reading for religion
  const relReadings = readings[state.religion] || readings['Agnostic'];
  const chosenReading = relReadings[Math.floor(Math.random() * relReadings.length)];

  // Build personalized oracle text
  const genderAddr = state.gender === 'Female' ? 'sister' : state.gender === 'Male' ? 'brother' : 'seeker';
  const durationText = state.duration ? `You have suffered for ${state.duration}` : 'Your suffering has duration';
  const suspectText = state.suspect === 'yes' ? 'Your instinct about a specific person is correct — trust it.' :
                      state.suspect === 'no' ? 'The source of your affliction remains hidden — but the Oracle sees it.' :
                      'Your uncertainty about the source is itself part of the curse.';

  const fullReading = `
    ${state.name ? `<strong style="color:var(--gold)">${state.name}</strong>, my ${genderAddr}` : `My ${genderAddr}`}, the shadows have spoken clearly.<br><br>
    ${chosenReading}<br><br>
    ${durationText}. This aligns with the dark ritual cycle the Oracle has identified. ${suspectText}<br><br>
    ${state.country ? `The energy signature carries traces specific to the <em>${state.country}</em> region's tradition of dark workings.` : ''} 
    ${state.moon && state.moon !== "I don't know" ? `Your <em>${state.moon}</em> birth amplifies both your vulnerability and your power to fight back.` : ''}
    <br><br>
    Do not ignore these signs. The tantrik has seen hundreds of cases like yours. The solution exists — but time is critical.
  `;

  typeText('oracle-text', fullReading, 18);

  // Build remedies
  buildRemedies();

  showScreen('oracle-screen');
}

function typeText(elementId, html, speed) {
  const el = document.getElementById(elementId);
  el.innerHTML = '';
  const temp = document.createElement('div');
  temp.innerHTML = html;
  const text = temp.innerHTML;

  let i = 0;
  const interval = setInterval(() => {
    el.innerHTML = text.substring(0, i) + '<span class="cursor-blink">|</span>';
    i++;
    if (i > text.length) {
      el.innerHTML = text;
      clearInterval(interval);
    }
  }, speed);
}

function buildRemedies() {
  const container = document.getElementById('remedy-list');
  container.innerHTML = '';

  let selectedRemedies = [];

  // Get remedies for selected problem tags
  if (state.problems.length > 0) {
    state.problems.forEach(prob => {
      const key = Object.keys(remedies).find(k => prob.includes(k.substring(2).split('/')[0].trim()) || k.includes(prob.split(' ').slice(1).join(' ')));
      const actualKey = Object.keys(remedies).find(k => prob.startsWith(k.substring(0,3)));
      if (actualKey && remedies[actualKey]) {
        selectedRemedies.push(...remedies[actualKey].slice(0,2));
      }
    });
  }

  // Fallback
  if (selectedRemedies.length === 0) {
    selectedRemedies = [
      "🕯️ Light a black candle inscribed with your name every new moon for 3 months",
      "🌿 Perform a full-body smoke cleansing with neem, camphor and frankincense",
      "📿 Wear the protective Kavach provided by your assigned tantrik at all times",
      "💧 Take a ritual bath in black salt water every Saturday morning before sunrise"
    ];
  }

  // Deduplicate and limit
  [...new Set(selectedRemedies)].slice(0, 5).forEach(remedy => {
    const div = document.createElement('div');
    div.className = 'remedy-item';
    const parts = remedy.split(' ');
    const icon = parts[0];
    const text = parts.slice(1).join(' ');
    div.innerHTML = `<span class="remedy-icon">${icon}</span><span>${text}</span>`;
    container.appendChild(div);
  });
}

// =====================================================
// CONNECT (Placeholder for API)
// =====================================================
function fakeConnect(type) {
  const messages = {
    whatsapp: `🌑 Your WhatsApp consultation request has been sent to <strong>${state.tantrik?.name || 'the Oracle'}</strong>. They will contact you within the sacred hour. Keep your phone with you — the spirits will guide the timing.`,
    call: `📞 Your call request has been added to the sacred queue. <strong>${state.tantrik?.name || 'The Oracle'}</strong> performs consultations between dusk and midnight. You will receive a call during this window.`,
    chat: `🔮 Entering the Live Oracle Chamber... <strong>${state.tantrik?.name || 'The Oracle'}</strong> is preparing their ritual space. The dark mirror will illuminate in moments. <em>(API integration coming soon)</em>`
  };

  const msgEl = document.getElementById('connect-message');
  msgEl.innerHTML = messages[type] || 'Connection initiated.';
  msgEl.classList.remove('hidden');

  // Scroll to message
  msgEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// =====================================================
// RESTART
// =====================================================
function restart() {
  state.religion = null;
  state.problems = [];
  state.tantrik = null;
  document.querySelectorAll('.religion-card').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.ptag').forEach(t => t.classList.remove('active'));
  document.getElementById('rel-next-btn').classList.add('disabled');
  document.getElementById('inp-name').value = '';
  document.getElementById('inp-problem').value = '';
  document.getElementById('connect-message').classList.add('hidden');
  showScreen('intro-screen');
}

// =====================================================
// PARTICLE SYSTEM
// =====================================================
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 10;
    this.size = Math.random() * 2 + 0.5;
    this.speedY = -(Math.random() * 0.5 + 0.2);
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.4 + 0.1;
    this.hue = Math.random() > 0.7 ? 'rgba(201,168,76,' : 'rgba(139,0,0,';
    this.life = 0;
    this.maxLife = Math.random() * 200 + 100;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life++;
    if (this.y < -10 || this.life > this.maxLife) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.hue + this.opacity + ')';
    ctx.fill();
  }
}

for (let i = 0; i < 80; i++) {
  const p = new Particle();
  p.y = Math.random() * canvas.height;
  particles.push(p);
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// =====================================================
// FLOATING SIGILS
// =====================================================
const sigilChars = ['ᚠ','ᚢ','ᚦ','ᚨ','ᚱ','ᚲ','ᚷ','ᚹ','ᚺ','ᚾ','ᛁ','ᛃ','ᛇ','ᛈ','ᛉ','ᛊ','ᛏ','ᛒ','ᛖ','ᛗ','ᛚ','ᛜ','ᛞ','ᛟ','ᛣ','ᛥ','☽','☾','⛧','✦','✧','⚶','⛤'];

function spawnSigil() {
  const container = document.getElementById('floating-sigils');
  const sigil = document.createElement('div');
  sigil.className = 'sigil';
  sigil.textContent = sigilChars[Math.floor(Math.random() * sigilChars.length)];
  sigil.style.left = Math.random() * 100 + 'vw';
  sigil.style.animationDuration = (Math.random() * 15 + 10) + 's';
  sigil.style.animationDelay = (Math.random() * 5) + 's';
  sigil.style.fontSize = (Math.random() * 1.2 + 0.6) + 'rem';
  container.appendChild(sigil);
  setTimeout(() => sigil.remove(), 25000);
}

setInterval(spawnSigil, 1200);
for (let i = 0; i < 5; i++) setTimeout(spawnSigil, i * 300);

// =====================================================
// CUSTOM CURSOR
// =====================================================
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.addEventListener('mousedown', () => {
  cursor.style.transform = 'translate(-50%,-50%) scale(1.5)';
  cursor.style.borderColor = '#ff0000';
});
document.addEventListener('mouseup', () => {
  cursor.style.transform = 'translate(-50%,-50%) scale(1)';
  cursor.style.borderColor = 'var(--crimson)';
});

// =====================================================
// AMBIENT SOUND HINT (visual only — no audio autoplay)
// =====================================================
document.addEventListener('click', () => {
  // Future: trigger ambient dark drone audio here
});

// =====================================================
// EERIE RANDOM EVENTS
// =====================================================
function eerieEvents() {
  const events = [
    () => {
      // Screen flicker
      document.body.style.filter = 'brightness(0.3)';
      setTimeout(() => document.body.style.filter = '', 80);
    },
    () => {
      // Brief red tint
      document.body.style.filter = 'sepia(0.3) hue-rotate(-20deg)';
      setTimeout(() => document.body.style.filter = '', 200);
    },
    () => {
      // Shake
      document.body.style.transform = 'translateX(3px)';
      setTimeout(() => {
        document.body.style.transform = 'translateX(-3px)';
        setTimeout(() => document.body.style.transform = '', 100);
      }, 100);
    }
  ];

  const randomEvent = events[Math.floor(Math.random() * events.length)];
  randomEvent();
}

// Random eerie events every 30-90 seconds
function scheduleEerie() {
  const delay = Math.random() * 60000 + 30000;
  setTimeout(() => {
    eerieEvents();
    scheduleEerie();
  }, delay);
}
scheduleEerie();

// =====================================================
// INIT
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('%c🌑 KAALA RAHASYA — The Dark Oracle Awakens 🌑', 'color: #8b0000; font-size: 18px; font-family: serif;');
  console.log('%cThe shadows are watching...', 'color: #c9a84c; font-size: 12px;');
});