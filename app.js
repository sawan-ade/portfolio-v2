/**
 * SAWAN ADE — PORTFOLIO V2 (BENTO / SINGLE SHEET)
 * High-performance interactive slide-up sheet modal controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initBannerCanvas();
  initSheetModal();
  initCopyActions();
  checkUrlHash();
});

/* ==========================================================================
   INTERACTIVE BANNER CANVAS (CONSTELLATION / WAVE)
   ========================================================================== */
function initBannerCanvas() {
  const canvas = document.getElementById('bannerCanvas');
  if (!canvas) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth || 720;
    height = canvas.height = canvas.parentElement.offsetHeight || 140;
  }

  window.addEventListener('resize', resize);
  resize();

  const count = 30;
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.14,
      vy: (Math.random() - 0.5) * 0.14,
      radius: Math.random() * 1.5 + 1,
      isAccent: Math.random() < 0.25
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < count; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.isAccent ? '#65a30d' : 'rgba(15, 23, 42, 0.35)';
      ctx.fill();

      for (let j = i + 1; j < count; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 85) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = p.isAccent || p2.isAccent ? 'rgba(101, 163, 13, 0.25)' : 'rgba(15, 23, 42, 0.1)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   DETAIL SHEETS CONTENT DICTIONARY
   ========================================================================== */
const SHEET_DATA = {
  // 1. The Mirror
  'mirror': {
    tag: 'FEATURED CASE STUDY · AI KNOWLEDGE SYSTEM',
    title: 'The Mirror — Living Knowledge Planetarium',
    lead: '“Your thoughts, reflected back to you.” An AI-powered interactive visualization transforming unstructured thoughts, notes, and journals into an evolving celestial planetarium.',
    body: `
      <div class="sheet-section">
        <div class="sheet-section-num">01 — OVERVIEW</div>
        <h3>An Organic Knowledge Cosmos</h3>
        <p>Traditional note systems trap fluid intellectual thoughts inside linear folders and flat text documents. The Mirror reimagines personal knowledge as an evolving celestial cosmos where concepts exist as glowing stars, gravitational attraction mirrors semantic affinity, and ideas evolve organically across time.</p>
      </div>

      <div class="sheet-section">
        <div class="sheet-section-num">02 — THE PROBLEM</div>
        <h3>The Flat-File Cemetery</h3>
        <p>Flat hierarchies sever cross-domain serendipity. Thoughts decay without sensory landmarks or reflective dialog, causing valuable ideas to be forgotten forever.</p>
      </div>

      <div class="sheet-section">
        <div class="sheet-section-num">03 — THE APPROACH</div>
        <h3>Semantic Gravitation & Multi-Modal Anchoring</h3>
        <p>1. <strong>Celestial Physics:</strong> Force-directed Verlet layout cluster concepts into constellations.<br>
           2. <strong>Sensory Landmarks:</strong> Users attach photographic memory anchors and voice recordings to concepts.<br>
           3. <strong>Living Decay:</strong> Dormant ideas dim naturally and are surfaced by the "Forgotten Ideas" engine.</p>
      </div>

      <div class="sheet-section">
        <div class="sheet-section-num">04 — CORE CAPABILITIES</div>
        <h3>Key Subsystems</h3>
        <ul style="padding-left:20px; line-height:1.7; color:var(--text-secondary);">
          <li><strong>Galaxy Thought Map:</strong> High-performance Canvas 2D engine with 60 FPS force layout.</li>
          <li><strong>Visual Memory Anchors:</strong> Photographic gallery attached directly to node coordinates.</li>
          <li><strong>Voice Thoughts:</strong> In-browser voice memos recorded via Web Audio API.</li>
          <li><strong>Temporal Evolution:</strong> Interactive time scrubber showing idea genesis and clustering.</li>
          <li><strong>Ask the Mirror:</strong> Conversational reflection agent powered by Claude Sonnet.</li>
          <li><strong>Hidden Connections:</strong> Latent vector discovery highlighting unexpected relationships.</li>
        </ul>
      </div>

      <div class="sheet-section">
        <div class="sheet-section-num">05 — TECHNOLOGIES</div>
        <p>Claude Sonnet (Anthropic API) · Python · Flask · JavaScript (ES6+) · HTML5 Canvas 2D · Web Audio API</p>
      </div>

      <div style="margin-top:24px; display:flex; gap:10px; flex-wrap:wrap;">
        <a class="social-pill primary" href="https://github.com/sawan-ade/The-Mirror" target="_blank" rel="noopener">GitHub Repository ↗</a>
      </div>
    `
  },

  // 2. ML4Sci Sparse DL
  'ml4sci': {
    tag: 'SCIENTIFIC ML · RESEARCH BENCHMARK',
    title: 'ML4Sci: End-to-End Sparse Deep Learning',
    lead: 'Subatomic particle collision event classification using sparse convolutional networks, autoencoder pretraining, and structured weight pruning. Attained 90.5% classification accuracy for the ML4Sci GSoC 2026 initiative.',
    body: `
      <div class="sheet-section">
        <div class="sheet-section-num">01 — SCIENTIFIC CONTEXT</div>
        <h3>Detector Sparsity in Particle Physics</h3>
        <p>In experimental High Energy Physics (HEP), particle colliders produce massive sensor grids where over 95% of calorimeter cells contain zeros. Standard dense convolutions waste immense GPU memory computing null convolutions and suffer from artificial dilation that smears fine spatial particle tracks.</p>
      </div>

      <div class="sheet-section">
        <div class="sheet-section-num">02 — METHODOLOGY</div>
        <h3>Submanifold Convolutions & Pruning</h3>
        <p>1. <strong>Sparse Coordinate Tensors:</strong> Preserves only active hits and energy values.<br>
           2. <strong>Submanifold Convolutions:</strong> Keeps feature maps confined to non-zero coordinates.<br>
           3. <strong>Autoencoder Pretraining:</strong> Learns unsupervised manifold topology before fine-tuning.<br>
           4. <strong>Structured Pruning:</strong> Eliminates redundant parameters without decision boundary loss.</p>
      </div>

      <div class="sheet-section">
        <div class="sheet-section-num">03 — EMPIRICAL RESULTS</div>
        <p><strong>Classification Accuracy:</strong> 90.5% on binary particle collision discrimination.<br>
           <strong>Target Task:</strong> ML4Sci Google Summer of Code 2026 Test Suite.</p>
      </div>

      <div style="margin-top:24px; display:flex; gap:10px; flex-wrap:wrap;">
        <a class="social-pill primary" href="https://github.com/sawan-ade/End-to-end-E2E-Deep-Learning-projects-Specific-Tasks-2d" target="_blank" rel="noopener">GitHub Repository ↗</a>
      </div>
    `
  },

  // 3. SIR Model Discovery
  'sir': {
    tag: 'SCIENTIFIC ML · SINDy & AUTOGRAD',
    title: 'SIR Model Symbolic ODE Discovery',
    lead: 'Symbolic discovery of epidemic dynamics from stochastic simulation trajectories using neural networks, PyTorch autograd derivative extraction, and LASSO sparse regression.',
    body: `
      <div class="sheet-section">
        <div class="sheet-section-num">01 — PROBLEM</div>
        <h3>Equation Discovery from Noisy Trajectories</h3>
        <p>Complex non-linear dynamical systems are observed as discrete noisy state samples. Standard finite difference methods amplify noise when computing derivatives, leading to severe error in symbolic equation identification.</p>
      </div>

      <div class="sheet-section">
        <div class="sheet-section-num">02 — APPROACH</div>
        <h3>Neural Autodiff + LASSO Sparse Regression</h3>
        <p>1. Neural networks approximate continuous stochastic epidemic trajectories (S, I, R states).<br>
           2. Continuous analytical derivatives (dS/dt, dI/dt, dR/dt) are extracted directly via PyTorch autograd.<br>
           3. LASSO sparse regression over a polynomial candidate library selects active interaction terms, recovering the underlying SIR differential equations.</p>
      </div>

      <div style="margin-top:24px; display:flex; gap:10px; flex-wrap:wrap;">
        <a class="social-pill primary" href="https://github.com/sawan-ade/sir-model-gsoc-2026" target="_blank" rel="noopener">GitHub Repository ↗</a>
      </div>
    `
  },

  // 4. Groundwater Prediction
  'groundwater': {
    tag: 'APPLIED ML · IIT PATNA INTERNSHIP',
    title: 'Groundwater Level Analysis & Prediction',
    lead: 'An end-to-end spatiotemporal machine learning pipeline for environmental groundwater level forecasting developed during my IIT Patna research internship.',
    body: `
      <div class="sheet-section">
        <div class="sheet-section-num">01 — OVERVIEW</div>
        <h3>Environmental Hydrological Modeling</h3>
        <p>Engineered comprehensive feature extraction across rainfall, temperature, terrain, and seasonal extraction. Benchmarked gradient-boosted decision trees (XGBoost, LightGBM, CatBoost), Random Forests, and Long Short-Term Memory (LSTM) neural networks.</p>
      </div>

      <div style="margin-top:24px; display:flex; gap:10px; flex-wrap:wrap;">
        <a class="social-pill primary" href="https://github.com/sawan-ade/Groundwater-level-analysis-and-prediction-using-ML-IITP-Summer-Internship-Project" target="_blank" rel="noopener">GitHub Repository ↗</a>
      </div>
    `
  },

  // 5. Transformer From Scratch
  'transformer': {
    tag: 'FOUNDATIONAL DEEP LEARNING',
    title: 'Transformer Architecture From Scratch',
    lead: 'Pure PyTorch implementation of the full Transformer sequence-to-sequence encoder-decoder architecture from first principles without high-level wrappers.',
    body: `
      <div class="sheet-section">
        <div class="sheet-section-num">01 — ARCHITECTURE</div>
        <h3>First-Principles Construction</h3>
        <p>Implemented scaled dot-product multi-head attention, sinusoidal positional embeddings, layer normalization, residual feedforward blocks, causal autoregressive masks, and padding masks directly using tensor matrix operations.</p>
      </div>

      <div style="margin-top:24px; display:flex; gap:10px; flex-wrap:wrap;">
        <a class="social-pill primary" href="https://github.com/sawan-ade/Transformer-encoder-decoder-in-PyTorch-from-scratch-" target="_blank" rel="noopener">GitHub Repository ↗</a>
      </div>
    `
  },

  // 6. Instagram Focus
  'instagram': {
    tag: 'PRODUCT ETHICS & COGNITIVE SYSTEMS',
    title: 'Instagram Focus',
    lead: 'A cognitive focus-oriented system designed to preserve productive social communication surfaces while filtering addictive algorithmic recommendation feeds.',
    body: `
      <div class="sheet-section">
        <div class="sheet-section-num">01 — DESIGN CONCEPT</div>
        <h3>Isolating Essential Social Utilities</h3>
        <p>Selectively exposes high-utility surfaces (DMs, notifications, profile lookups, follow requests) while surgically masking addictive recommendation feeds (Reels, algorithmic Explore, and infinite scroll loops).</p>
      </div>

      <div style="margin-top:24px; display:flex; gap:10px; flex-wrap:wrap;">
        <a class="social-pill primary" href="https://github.com/sawan-ade/instagram-focus" target="_blank" rel="noopener">GitHub Repository ↗</a>
      </div>
    `
  },

  // 7. Research Inquiry: Multi-Agent
  'inquiry-agents': {
    tag: 'RESEARCH INQUIRY 01',
    title: 'Multi-Agent Deliberation & Verification',
    lead: 'How can multiple agents collaborate, debate, and verify intermediate reasoning steps to eliminate hallucination cascades?',
    body: `
      <div class="sheet-section">
        <p>Single autoregressive models suffer from compounding hallucination errors: an early incorrect premise cascades into a false conclusion. We explore decentralized communicative topologies where specialized critic, verifier, and synthesizer agents debate under formal verification games to produce grounded conclusions.</p>
      </div>
    `
  },

  // 8. Research Inquiry: Evaluation
  'inquiry-eval': {
    tag: 'RESEARCH INQUIRY 02',
    title: 'Non-Gameable LLM Evaluation',
    lead: 'How can LLM judges be made verifiable, calibrated, and resistant to superficial biases?',
    body: `
      <div class="sheet-section">
        <p>Automated LLM judges frequently favor verbosity and exhibit severe position and self-preference biases. We investigate game-theoretic mechanism design, paired counterfactual sampling, and reference-free evaluation rubrics that align reliably with human ground truth.</p>
      </div>
    `
  },

  // 9. Research Inquiry: SciML
  'inquiry-sciml': {
    tag: 'RESEARCH INQUIRY 03',
    title: 'Equation Discovery & Scientific ML',
    lead: 'How can physical invariants and governing differential equations be recovered from learned representations under measurement noise?',
    body: `
      <div class="sheet-section">
        <p>Bridging neural representations with symbolic mathematics: using continuous autograd derivatives and sparse regression (SINDy) to discover governing differential equations directly from empirical physics and epidemic trajectories.</p>
      </div>
    `
  },

  // 10. Research Inquiry: Dynamic Memory
  'inquiry-memory': {
    tag: 'RESEARCH INQUIRY 04',
    title: 'Dynamic Concept Graphs & Memory Decay',
    lead: 'How should computational knowledge graphs decay, link, and evolve over time to mirror human cognition?',
    body: `
      <div class="sheet-section">
        <p>Modeling personal memory not as a static document database, but as an associative semantic network with temporal decay dynamics, associative gravity, and serendipitous resurfacing algorithms (as realized in The Mirror).</p>
      </div>
    `
  },

  // 11. Experience: Agentic AI
  'exp-agentic': {
    tag: 'EXPERIENCE · 2026',
    title: 'Agentic AI Research & Engineering',
    lead: 'Independent & Collaborative Research',
    body: `
      <div class="sheet-section">
        <p>Developing autonomous agent workflows, RAG pipelines, and multi-agent orchestration with LangGraph and OpenAI Agents SDK. Focused on empirical evaluation testbeds, prompt calibration, and tool execution reliability.</p>
      </div>
    `
  },

  // 12. Experience: Visdom Lab
  'exp-visdom': {
    tag: 'EXPERIENCE · DEC 2025 — MAR 2026',
    title: 'Research Intern · Visdom Lab',
    lead: 'Deep Learning & Computer Vision',
    body: `
      <div class="sheet-section">
        <p>Conducted empirical research in modern deep neural network architectures and visual representations, training visual models and evaluating representation learning across image benchmarks.</p>
      </div>
    `
  },

  // 13. Experience: IIT Patna
  'exp-iitp': {
    tag: 'EXPERIENCE · SUMMER INTERNSHIP',
    title: 'Research Intern · IIT Patna',
    lead: 'Indian Institute of Technology Patna',
    body: `
      <div class="sheet-section">
        <p>Engineered an end-to-end machine learning pipeline for hydrological spatiotemporal groundwater level forecasting, benchmarking XGBoost, LightGBM, CatBoost, and LSTM neural networks.</p>
      </div>
    `
  },

  // 14. Experience: IISER Bhopal Leadership
  'exp-leadership': {
    tag: 'STUDENT LEADERSHIP · 2025 — PRESENT',
    title: 'Vice-Secretary, Fine Arts & Literary Council',
    lead: 'IISER Bhopal',
    body: `
      <div class="sheet-section">
        <p>Elected student representative coordinating institute-wide literary and intellectual activities, academic debates, and student governance across campus departments.</p>
      </div>
    `
  },

  // 15. Education: IISER Bhopal
  'education': {
    tag: 'ACADEMIC BACKGROUND',
    title: 'IISER Bhopal — BS-MS in Data Science & Engineering',
    lead: 'Undergraduate Program at an Institute of National Importance in India.',
    body: `
      <div class="sheet-section">
        <h3>Interdisciplinary Research Curriculum</h3>
        <p><strong>Core Mathematical Training:</strong> Linear Algebra, Multivariable Calculus, Probability & Statistical Inference, Differential Equations, Optimization.<br><br>
           <strong>Systems & Computing:</strong> Data Structures & Algorithms, Systems Programming, Scientific Computing, High-Performance Computing.<br><br>
           <strong>Machine Learning:</strong> Statistical Learning Theory, Deep Learning, Neural Networks, Time Series Analysis.</p>
      </div>
    `
  },

  // 16. Publication: Sparse CNNs
  'pub-sparse': {
    tag: 'TECHNICAL REPORT · 2026',
    title: 'Submanifold Sparse CNNs for Particle Collisions',
    lead: 'Technical benchmark report on sparse convolutions and autoencoders for particle collision event discrimination (90.5% accuracy).',
    body: `
      <div class="sheet-section">
        <p><strong>Author:</strong> Sawan Ade<br>
           <strong>Context:</strong> Machine Learning for Science (ML4Sci) GSoC 2026</p>
        <div class="sheet-bibtex" id="bibtex-v2-sparse">@techreport{ade2026sparse,
  title   = {Submanifold Sparse Convolutional Networks for Particle Collision Discrimination},
  author  = {Ade, Sawan},
  year    = {2026},
  institution = {Machine Learning for Science (ML4Sci)},
  url     = {https://github.com/sawan-ade/End-to-end-E2E-Deep-Learning-projects-Specific-Tasks-2d}
}</div>
        <button class="social-pill" onclick="copyBibtex('bibtex-v2-sparse')">Copy BibTeX</button>
      </div>
    `
  },

  // 17. Publication: SIR Model
  'pub-sir': {
    tag: 'RESEARCH REPORT · 2026',
    title: 'Symbolic Discovery of Epidemiological Dynamics',
    lead: 'Scientific ML research report on neural autograd derivative extraction and LASSO ODE recovery.',
    body: `
      <div class="sheet-section">
        <p><strong>Author:</strong> Sawan Ade<br>
           <strong>Context:</strong> Scientific Machine Learning Laboratory</p>
        <div class="sheet-bibtex" id="bibtex-v2-sir">@article{ade2026sir,
  title   = {Symbolic Discovery of Epidemiological Dynamics via Neural Autograd and Sparse Regression},
  author  = {Ade, Sawan},
  year    = {2026},
  journal = {Research Note in Scientific Machine Learning},
  url     = {https://github.com/sawan-ade/sir-model-gsoc-2026}
}</div>
        <button class="social-pill" onclick="copyBibtex('bibtex-v2-sir')">Copy BibTeX</button>
      </div>
    `
  },

  // 18. Achievements
  'achievements': {
    tag: 'VERIFIED MILESTONES',
    title: 'Achievements & Recognitions',
    lead: 'Academic selections, GSoC test milestones, and institutional appointments.',
    body: `
      <div class="sheet-section">
        <ul style="padding-left:20px; line-height:1.7; color:var(--text-secondary);">
          <li><strong>ML4Sci GSoC 2026 Test Tasks:</strong> Engineered solutions for Sparse Deep Learning (90.5% accuracy) and SIR Symbolic ODE Discovery.</li>
          <li><strong>IIT Patna Research Internship:</strong> Competitively selected for hydrological ML modeling summer internship.</li>
          <li><strong>Visdom Lab Research Internship:</strong> Selected for deep learning and computer vision research internship.</li>
          <li><strong>IISER Bhopal Admission:</strong> Admitted to Institute of National Importance through highly competitive national entrance process.</li>
          <li><strong>Elected Student Leadership:</strong> Vice-Secretary, Fine Arts & Literary Council at IISER Bhopal.</li>
        </ul>
      </div>
    `
  }
};

/* ==========================================================================
   SHEET MODAL CONTROLLER
   ========================================================================== */
function initSheetModal() {
  const backdrop = document.getElementById('sheetBackdrop');
  const modal = document.getElementById('sheetModal');
  const closeBtn = document.getElementById('sheetCloseBtn');
  const sheetTag = document.getElementById('sheetTag');
  const sheetTitle = document.getElementById('sheetTitle');
  const sheetLead = document.getElementById('sheetLead');
  const sheetContent = document.getElementById('sheetContent');

  if (!backdrop || !modal) return;

  function openSheet(key) {
    const data = SHEET_DATA[key];
    if (!data) return;

    sheetTag.textContent = data.tag;
    sheetTitle.textContent = data.title;
    sheetLead.textContent = data.lead;
    sheetContent.innerHTML = data.body;

    modal.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Update URL hash without jumping
    history.replaceState(null, null, `#${key}`);
  }

  function closeSheet() {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';

    // Clear hash
    if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname);
    }
  }

  // Trigger clicks on cards
  document.querySelectorAll('[data-sheet]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const key = elem.getAttribute('data-sheet');
      openSheet(key);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeSheet);
  if (backdrop) backdrop.addEventListener('click', closeSheet);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeSheet();
    }
  });

  window.openSheetByKey = openSheet;
}

function checkUrlHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash && SHEET_DATA[hash] && window.openSheetByKey) {
    window.openSheetByKey(hash);
  }
}

/* ==========================================================================
   TOAST & COPY HELPERS
   ========================================================================== */
let toastTimeout;

function showToast(msg) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="color:var(--accent);">✓</span> ${msg}`;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function initCopyActions() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy');
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`Copied "${text}" to clipboard!`);
        }).catch(() => {
          showToast('Copied to clipboard!');
        });
      }
    });
  });
}

window.copyBibtex = function(elemId) {
  const elem = document.getElementById(elemId);
  if (elem) {
    navigator.clipboard.writeText(elem.innerText.trim()).then(() => {
      showToast('BibTeX citation copied!');
    });
  }
};

/* ==========================================================================
   MAIL COMPOSITION SYSTEM (GMAIL WEB + MAILTO + CLIPBOARD FALLBACK)
   ========================================================================== */
window.getMailData = function() {
  const nameInput = document.getElementById('v2SenderName') || document.getElementById('senderName');
  const subInput = document.getElementById('v2SenderSub') || document.getElementById('senderSubject');
  const msgInput = document.getElementById('v2SenderMsg') || document.getElementById('senderMessage');

  const name = nameInput ? nameInput.value.trim() : '';
  const sub = subInput && subInput.value.trim() ? subInput.value.trim() : 'Research / Collaboration Inquiry';
  const msg = msgInput ? msgInput.value.trim() : '';
  const email = 'adeysawan@gmail.com';
  const fullBody = name ? `From: ${name}\n\n${msg}` : msg;

  return { email, sub, fullBody, name, msg };
};

window.composeViaGmail = function() {
  const { email, sub, fullBody, msg } = window.getMailData();
  if (!msg) {
    showToast('Please type a message first!');
    return;
  }
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(sub)}&body=${encodeURIComponent(fullBody)}`;
  window.open(url, '_blank');
  showToast('Opened in Gmail! ✉');
};

window.copyMailDraft = function() {
  const { email, sub, fullBody, msg } = window.getMailData();
  if (!msg) {
    showToast('Please type a message first!');
    return;
  }
  const draftText = `To: ${email}\nSubject: ${sub}\n\n${fullBody}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(draftText).then(() => {
      showToast('Full message & address copied! 📋');
    });
  }
};

window.handleMailCompose = function(e) {
  if (e) e.preventDefault();
  const { email, sub, fullBody, msg } = window.getMailData();
  if (!msg) {
    showToast('Please type a message first!');
    return;
  }
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(fullBody)}`;
  window.location.href = mailtoUrl;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(`To: ${email}\nSubject: ${sub}\n\n${fullBody}`).catch(() => {});
  }
  showToast('Opening default mail client... (Draft copied 📋)');
};
