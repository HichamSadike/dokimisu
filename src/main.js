import './styles.css';

const WHATSAPP_NUMBER = '31637322781';
const WHATSAPP_TEXT = encodeURIComponent('Hi Dokimisu, ik wil graag tiramisu bestellen.');
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

const heroImage = '/assets/tiramisu-cup.jpg';
const sliceImage = '/assets/cocoa-closeup.jpg';
const packagingImage = '/assets/takeaway-packaging.jpg';

const issues = [
  {
    number: '01',
    title: 'Industrial sweetness fatigue',
    copy: 'Your palate has seen too much supermarket theatre. It needs calm cream, proper coffee, and a cleaner chart.',
  },
  {
    number: '02',
    title: 'Weekend dessert deficiency',
    copy: 'Friday arrives. The fridge is emotionally unprepared. This is preventable with early intervention.',
  },
  {
    number: '03',
    title: 'Unsupervised spoon behavior',
    copy: 'When tiramisu lacks structure, people panic. Dokimisu provides measured trays and elegant consequences.',
  },
];

const flavors = [
  {
    name: 'Classic Stabilized',
    latin: 'Tiramisum Originale',
    dose: '1 tray / 2 generous patients',
    sides: ['temporary silence', 'espresso flashbacks', 'acute spoon dependency'],
  },
  {
    name: 'Pistachio Protocol',
    latin: 'Pistacia Cremosa',
    dose: '1 tray / shared under supervision',
    sides: ['green-tinted optimism', 'premium denial', 'repeat prescription requests'],
  },
  {
    name: 'Speculoos Recovery',
    latin: 'Biscoffum Weekendii',
    dose: '1 tray / after dinner, no excuses',
    sides: ['cinnamon clarity', 'mild plate guarding', 'family group-chat escalation'],
  },
];

const reviews = [
  'Patient presented with low mood and empty fridge. Administered Classic Stabilized. Symptoms improved within 4 spoons.',
  'Follow-up note: patient claims “just one bite” but container returned clinically empty. Prognosis: recurring weekend visits.',
  'Observation: Pistachio Protocol caused prolonged eye contact with dessert. No intervention required.',
];

const issueCards = issues
  .map(
    (issue) => `
      <article data-reveal>
        <span>${issue.number}</span>
        <h3>${issue.title}</h3>
        <p>${issue.copy}</p>
      </article>
    `,
  )
  .join('');

const flavorCards = flavors
  .map(
    (flavor, index) => `
      <article class="rx-card" data-reveal>
        <div class="rx-card__top">
          <span class="rx-mark">R<sub>x</sub></span>
          <span class="micro-label">case ${String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3>${flavor.name}</h3>
        <dl>
          <div><dt>Latin</dt><dd>${flavor.latin}</dd></div>
          <div><dt>Dosage</dt><dd>${flavor.dose}</dd></div>
          <div><dt>Side effects</dt><dd>${flavor.sides.join(' · ')}</dd></div>
        </dl>
      </article>
    `,
  )
  .join('');

const reviewCards = reviews
  .map(
    (review, index) => `
      <figure class="note-card" data-reveal>
        <div class="note-card__meta">
          <span>patient note ${String(index + 1).padStart(2, '0')}</span>
          <span>status: treated</span>
        </div>
        <blockquote>${review}</blockquote>
        <div class="redactions" aria-hidden="true"><span></span><span></span><span></span></div>
      </figure>
    `,
  )
  .join('');

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="site-header" aria-label="Dokimisu header">
    <a class="brand" href="#top" aria-label="Dokimisu home">
      <span class="brand__cross">+</span>
      <span>Dokimisu</span>
    </a>
    <nav aria-label="Primary navigation">
      <a href="#diagnosis">Diagnosis</a>
      <a href="#menu">Menu</a>
      <a href="#doctor">Doctor</a>
    </nav>
    <a class="header-cta" href="${whatsappUrl}" target="_blank" rel="noreferrer">WhatsApp intake</a>
  </header>

  <main id="top">
    <section class="hero section-grid" aria-labelledby="hero-title">
      <div class="hero__copy" data-reveal>
        <p class="micro-label">weekend tiramisu clinic</p>
        <h1 id="hero-title">Clinical precision. Dessert-level compassion.</h1>
        <p class="hero__tagline">Small-batch tiramisu prescribed every weekend by one actual doctor. Calm design, warm trays, and zero dessert drama.</p>
        <div class="hero__actions">
          <a class="whatsapp-button" href="${whatsappUrl}" target="_blank" rel="noreferrer">Bestel via WhatsApp</a>
          <a class="ghost-button" href="#menu">Bekijk het menu</a>
        </div>
        <ul class="hero__facts" aria-label="Clinic facts">
          <li><span>Clinic hours</span><strong>Fri–Sun</strong></li>
          <li><span>Batch style</span><strong>Small & chilled</strong></li>
          <li><span>Pickup / delivery</span><strong>By intake</strong></li>
        </ul>
      </div>

      <div class="hero__media" data-reveal>
        <figure class="photo-card photo-card--portrait" data-parallax="0.09">
          <img src="${heroImage}" alt="Editorial Dokimisu tiramisu cup with cocoa topping" width="1024" height="1536" fetchpriority="high" decoding="async" />
        </figure>
        <aside class="intake-card" aria-label="Patient intake card" data-reveal>
          <div class="intake-card__head">
            <span>Patient intake</span>
            <span>dok-01</span>
          </div>
          <dl>
            <div><dt>Complaint</dt><dd>Craving, recurring</dd></div>
            <div><dt>Severity</dt><dd>Weekend acute</dd></div>
            <div><dt>Recommended</dt><dd>Tiramisu, chilled</dd></div>
            <div><dt>Availability</dt><dd>Fri–Sun, limited trays</dd></div>
          </dl>
          <p>Self-diagnosis accepted. Spoon not included.</p>
        </aside>
        <div class="floating-note" data-reveal>
          <span class="micro-label">new warmth, same clinic</span>
          <p>Minimal on the outside. Ridiculously comforting underneath.</p>
        </div>
      </div>
    </section>

    <section class="ticker" aria-label="Brand phrases">
      <div class="ticker__track">
        <span>small batch medicine</span>
        <span>zero gimmicks</span>
        <span>doctor supervised dessert</span>
        <span>weekend only</span>
        <span>cold chain emotionally respected</span>
        <span>small batch medicine</span>
        <span>zero gimmicks</span>
        <span>doctor supervised dessert</span>
      </div>
    </section>

    <section class="section-block" id="diagnosis" aria-labelledby="diagnosis-title">
      <div class="section-heading" data-reveal>
        <p class="micro-label">diagnosis</p>
        <h2 id="diagnosis-title">Why your taste buds suffer</h2>
      </div>
      <div class="editorial-layout">
        <div class="issues-grid">${issueCards}</div>
        <figure class="photo-card photo-card--landscape" data-reveal data-parallax="0.06">
          <img src="${sliceImage}" alt="Close-up tiramisu slice with cocoa dusting" width="1536" height="1024" loading="lazy" decoding="async" />
          <figcaption>Proper layers. Proper cocoa. Fully board-certified comfort.</figcaption>
        </figure>
      </div>
    </section>

    <section class="section-block prescription" id="menu" aria-labelledby="menu-title">
      <div class="section-heading" data-reveal>
        <p class="micro-label">prescription menu</p>
        <h2 id="menu-title">Prescribed in chilled doses</h2>
      </div>
      <div class="menu-spotlight">
        <div class="menu-copy" data-reveal>
          <p class="menu-copy__lead">Freshly layered every weekend in limited runs, with enough softness to feel generous and enough structure to survive a car ride without becoming dessert soup.</p>
          <div class="menu-points">
            <div>
              <span>Made weekly</span>
              <strong>Not warehouse-aged</strong>
            </div>
            <div>
              <span>Texture</span>
              <strong>Cloudlike, not chaotic</strong>
            </div>
            <div>
              <span>Clinic policy</span>
              <strong>First come, first spoon</strong>
            </div>
          </div>
        </div>
        <figure class="photo-card photo-card--landscape" data-reveal data-parallax="0.05">
          <img src="${packagingImage}" alt="Dokimisu takeaway packaging and tiramisu tub" width="1536" height="1024" loading="lazy" decoding="async" />
          <figcaption>Takeaway looks calm. The inside is the emotional event.</figcaption>
        </figure>
      </div>
      <div class="rx-grid">${flavorCards}</div>
    </section>

    <section class="section-block doctor-section" id="doctor" aria-labelledby="doctor-title">
      <div class="section-heading" data-reveal>
        <p class="micro-label">attending physician</p>
        <h2 id="doctor-title">One specialist. One weekend clinic.</h2>
      </div>
      <div class="doctor-shell">
        <article class="doctor-card" data-reveal>
          <div>
            <p class="micro-label">sole practitioner</p>
            <h3>Dr. Dokimisu</h3>
            <p>Actual doctor. Dessert minimalist. Believes mascarpone deserves a treatment plan, not a mood board.</p>
          </div>
          <table>
            <tbody>
              <tr><th scope="row">Specialty</th><td>Tiramisu therapy</td></tr>
              <tr><th scope="row">Rounds</th><td>Friday to Sunday</td></tr>
              <tr><th scope="row">Batch size</th><td>Limited, intentionally</td></tr>
              <tr><th scope="row">Method</th><td>Cold, calm, precise</td></tr>
            </tbody>
          </table>
        </article>
        <aside class="doctor-note" data-reveal>
          <p class="micro-label">bedside manner</p>
          <p>Minimal medical humour, a clean white box, and one red cross doing just enough. Swiss clinic energy, but with mascarpone.</p>
        </aside>
      </div>
    </section>

    <section class="section-block" aria-labelledby="reviews-title">
      <div class="section-heading" data-reveal>
        <p class="micro-label">patient records</p>
        <h2 id="reviews-title">Recovered cases</h2>
      </div>
      <div class="notes-grid">${reviewCards}</div>
    </section>

    <section class="final-cta section-grid" aria-labelledby="cta-title">
      <div class="final-cta__copy" data-reveal>
        <p class="micro-label">intake open</p>
        <h2 id="cta-title">Your weekend condition is treatable.</h2>
        <p>Send your symptoms on WhatsApp and Dokimisu replies with current availability, pickup options, and the most appropriate level of intervention.</p>
        <a class="whatsapp-button" href="${whatsappUrl}" target="_blank" rel="noreferrer">Reserve your tray</a>
      </div>
      <figure class="photo-card photo-card--landscape final-cta__media" data-reveal data-parallax="0.04">
        <img src="${sliceImage}" alt="Close-up tiramisu served with cocoa and spoon" width="1536" height="1024" loading="lazy" decoding="async" />
      </figure>
    </section>
  </main>

  <footer class="site-footer">
    <a class="brand" href="#top" aria-label="Dokimisu home">
      <span class="brand__cross">+</span>
      <span>Dokimisu</span>
    </a>
    <nav aria-label="Footer navigation">
      <a href="#diagnosis">Diagnosis</a>
      <a href="#menu">Menu</a>
      <a href="#doctor">Doctor</a>
    </nav>
    <p>© ${new Date().getFullYear()} Dokimisu. Weekend clinic for tiramisu-sensitive patients.</p>
  </footer>
`;

const revealItems = [...document.querySelectorAll('[data-reveal]')];

if (revealItems.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px',
    },
  );

  revealItems.forEach((item, index) => {
    item.style.setProperty('--delay', `${Math.min(index * 45, 240)}ms`);
    revealObserver.observe(item);
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const parallaxItems = prefersReducedMotion ? [] : [...document.querySelectorAll('[data-parallax]')];

if (parallaxItems.length) {
  let ticking = false;

  const updateParallax = () => {
    const viewportCenter = window.innerHeight / 2;

    parallaxItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const factor = Number(item.dataset.parallax || 0.05);
      const itemCenter = rect.top + rect.height / 2;
      const offset = Math.max(Math.min((viewportCenter - itemCenter) * factor, 22), -22);
      item.style.setProperty('--parallax-offset', `${offset.toFixed(1)}px`);
    });

    ticking = false;
  };

  const requestTick = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateParallax);
  };

  updateParallax();
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);
}
