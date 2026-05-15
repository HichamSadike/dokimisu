import './styles.css';

// Replace with the real phone number in international format, without + or spaces.
const WHATSAPP_NUMBER = '31600000000';
const WHATSAPP_TEXT = encodeURIComponent('Hi Dokimisu, ik wil graag tiramisu bestellen.');
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

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

const flavorCards = flavors
  .map(
    (flavor, index) => `
      <article class="rx-card">
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
      <figure class="note-card">
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
  </header>

  <main id="top">
    <section class="hero section-grid" aria-labelledby="hero-title">
      <div class="hero__copy">
        <p class="micro-label">weekend tiramisu clinic</p>
        <h1 id="hero-title">Clinical precision. Dessert-level compassion.</h1>
        <p class="hero__tagline">Small-batch tiramisu prescribed every weekend by one actual doctor. Delivery and takeaway for patients with dangerously under-treated cravings.</p>
      </div>

      <aside class="intake-card" aria-label="Patient intake card">
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
    </section>

    <section class="ticker" aria-label="Brand phrases">
      <div class="ticker__track">
        <span>small batch medicine</span>
        <span>zero gimmicks</span>
        <span>doctor supervised dessert</span>
        <span>weekend only</span>
        <span>cold chain emotionally respected</span>
      </div>
    </section>

    <section class="section-block" id="diagnosis" aria-labelledby="diagnosis-title">
      <div class="section-heading">
        <p class="micro-label">diagnosis</p>
        <h2 id="diagnosis-title">Why your taste buds suffer</h2>
      </div>
      <div class="issues-grid">
        <article>
          <span>01</span>
          <h3>Industrial sweetness fatigue</h3>
          <p>Your palate has seen too much supermarket theatre. It needs calm, cream, coffee, and a clean chart.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Weekend dessert deficiency</h3>
          <p>Friday arrives. The fridge is emotionally unprepared. This is preventable with early intervention.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Unsupervised spoon behavior</h3>
          <p>When tiramisu lacks structure, people panic. Dokimisu provides measured trays and elegant consequences.</p>
        </article>
      </div>
    </section>

    <section class="section-block prescription" id="menu" aria-labelledby="menu-title">
      <div class="section-heading">
        <p class="micro-label">prescription menu</p>
        <h2 id="menu-title">Prescribed in chilled doses</h2>
      </div>
      <div class="rx-grid">
        ${flavorCards}
      </div>
    </section>

    <section class="section-block doctor-section" id="doctor" aria-labelledby="doctor-title">
      <div class="section-heading">
        <p class="micro-label">attending physician</p>
        <h2 id="doctor-title">One specialist. One weekend clinic.</h2>
      </div>
      <article class="doctor-card">
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
    </section>

    <section class="section-block" aria-labelledby="reviews-title">
      <div class="section-heading">
        <p class="micro-label">patient records</p>
        <h2 id="reviews-title">Recovered cases</h2>
      </div>
      <div class="notes-grid">
        ${reviewCards}
      </div>
    </section>

    <section class="final-cta section-grid" aria-labelledby="cta-title">
      <div>
        <p class="micro-label">intake open</p>
        <h2 id="cta-title">Your weekend condition is treatable.</h2>
      </div>
      <a class="whatsapp-button" href="${whatsappUrl}" target="_blank" rel="noreferrer">Bestel via WhatsApp</a>
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
