/* ============================================================
   ashikh.studio — app.js
   Data + behaviour for the static site (no framework).
   ============================================================ */
(function () {
  'use strict';

  const CDN_IMG = 'https://res.cloudinary.com/dijfcvpio/image/upload/';
  const CDN_VID = 'https://res.cloudinary.com/dijfcvpio/video/upload/';
  const img = (p) => CDN_IMG + p;
  const vid = (p) => CDN_VID + p;

  /* ---------------- DATA ---------------- */
  const projects = [
    {
      id: '01.', name: 'AI Trainer System', category: 'Ai Video',
      desc: 'A cinematic AI-generated promo for a smart driver-training platform',
      image: img('v1787680298/AI_Training_fhfsmk.png'),
      client: 'Yas Driving School', role: 'AI Motion Designer', year: '2025',
      overview: 'A cinematic AI-generated promo for a smart driver-training platform. Combines a product UI reveal — real-time driving score, reaction time, and safety metrics — with a sensor-driven vehicle sequence and animated data visualizations. Concept to final render built through an AI motion workflow.',
      challenges: 'Creating a cohesive 60-second narrative that seamlessly blends product UI, real-world driving footage, and AI-generated cinematic sequences into a single compelling story.',
      solutions: 'Developed an end-to-end AI motion pipeline using generative video tools, custom motion graphics, and compositing techniques to create a unified visual language that feels both high-tech and emotionally engaging.',
      resultsText: 'The final deliverable is a polished, broadcast-ready promo that positions the AI Trainer System as the future of driver education — smart, safe, and fully automated.',
      resultsStats: [{ value: '60s', label: 'AI Film' }, { value: 'UI+3D', label: 'Mixed Media' }, { value: '100%', label: 'AI-Driven' }],
      gallery: [
        'v1787680298/AI_Training_fhfsmk.png', 'v1787680300/AI_Training_02_ty9wpu.png', 'v1787680300/AI_Training_01_uems42.png',
        'v1787680334/Screenshot_2026-08-25_at_9.47.38_PM_gmbzml.png', 'v1787680300/AI_Training_03_pmiqn0.png', 'v1787680338/Screenshot_2026-08-25_at_9.46.54_PM_k2ceje.png'
      ].map(img),
      projectVideo: vid('v1787681515/Ai_trainer_jta0gx.mp4')
    },
    {
      id: '02.', name: 'PLUG N GO', category: 'Ai Video',
      desc: "A vertical social campaign for Abu Dhabi Mobility's EV charging app",
      image: img('v1787681972/Screenshot_2026-08-25_at_10.15.50_PM_ilz2h9.png'),
      client: 'Abu Dhabi Mobility', role: 'AI Motion Designer', year: '2025',
      overview: 'EV charging, made effortless. A vertical ad for Abu Dhabi Mobility that turns app onboarding into a story — hook, flow, and a full charge in a few taps. Blends a scenario-led hook with a clean app UI walkthrough — sign-up, verification, and charging in a few simple steps — closing on cinematic, captioned lifestyle footage built for feed and story placements.',
      challenges: 'Creating a vertical narrative that works across multiple social formats — feed, stories, and reels — while maintaining brand consistency and clear app feature communication in under 60 seconds.',
      solutions: 'Developed a modular AI motion pipeline that generates vertical content optimized for each platform. Combined AI-generated lifestyle footage with clean UI screen recordings and kinetic typography for maximum engagement.',
      resultsText: 'The campaign delivered a suite of vertical assets ready for immediate deployment across Instagram, TikTok, and Snapchat — driving app downloads and brand awareness with zero traditional production overhead.',
      resultsStats: [{ value: '60s', label: 'Vertical Film' }, { value: '3:4', label: 'Aspect Ratio' }, { value: '100%', label: 'AI-Driven' }],
      gallery: [
        'v1787681972/Screenshot_2026-08-25_at_10.15.50_PM_ilz2h9.png', 'v1787681970/Screenshot_2026-08-25_at_10.16.02_PM_injwao.png',
        'v1787681971/Screenshot_2026-08-25_at_10.16.21_PM_f3uvrb.png', 'v1787681969/Screenshot_2026-08-25_at_10.16.32_PM_hy2yfq.png',
        'v1787681975/Screenshot_2026-08-25_at_10.16.57_PM_mpwnmk.png', 'v1787681974/Screenshot_2026-08-25_at_10.17.23_PM_q22vkt.png',
        'v1787681977/Screenshot_2026-08-25_at_10.17.12_PM_fqmkxp.png', 'v1787681971/Screenshot_2026-08-25_at_10.17.48_PM_pfbaid.png',
        'v1787681973/Screenshot_2026-08-25_at_10.18.03_PM_wwvfey.png', 'v1787681976/Screenshot_2026-08-25_at_10.18.21_PM_hgnroi.png'
      ].map(img),
      projectVideo: vid('v1787682654/Plug_N_Go_meioi4.mp4'),
      vertical: true
    },
    {
      id: '03.', name: 'ARVEX', category: 'Ai Video',
      desc: 'A self-directed concept project exploring AI-driven product design and film',
      image: img('v1788636278/Screenshot_2026-09-05_at_11.20.52_PM_xgsfvq.png'),
      client: 'Self-Directed', role: 'AI Motion Designer & Creative Director', year: '2025',
      overview: 'ARVEX — RUN BEYOND LIMITS. A self-directed concept project exploring AI-driven product design and film. I built a fictional performance running shoe from the ground up — character sheet with material callouts and specs, a nine-shot storyboard with motion-control camera direction, and a cinematic hero film — proving out an end-to-end generative workflow from concept to final render.',
      challenges: 'Creating a believable fictional product from scratch using only generative AI tools — from the initial shoe concept and material specifications to a fully realized cinematic film with coherent visual storytelling across all deliverables.',
      solutions: 'Developed a structured generative workflow that maintained visual consistency across character sheets, storyboards, and final film output. Used precise prompting techniques and style references to ensure the ARVEX shoe looked cohesive in every frame.',
      resultsText: 'The final deliverable is a complete product design concept package — character sheet, storyboard, and cinematic hero film — demonstrating a full end-to-end AI-powered creative workflow from initial concept to final render.',
      resultsStats: [{ value: '9', label: 'Storyboard Shots' }, { value: '100%', label: 'AI-Generated' }, { value: 'End-to-End', label: 'Workflow' }],
      gallery: [
        'v1788636278/Screenshot_2026-09-05_at_11.20.52_PM_xgsfvq.png', 'v1788636278/Screenshot_2026-09-05_at_11.21.20_PM_rcofk2.png',
        'v1788636279/Screenshot_2026-09-05_at_11.22.12_PM_tgfi9c.png', 'v1788636282/Screenshot_2026-09-05_at_11.22.26_PM_xniafr.png',
        'v1788636283/Screenshot_2026-09-05_at_11.22.34_PM_zv0jlo.png', 'v1788636284/Screenshot_2026-09-05_at_11.22.47_PM_gug5fg.png',
        'v1788636283/Screenshot_2026-09-05_at_11.23.08_PM_swlmge.png', 'v1788636283/Screenshot_2026-09-05_at_11.23.21_PM_hjsf3c.png',
        'v1788636290/Screenshot_2026-09-05_at_11.23.41_PM_lulxan.png', 'v1788636286/Screenshot_2026-09-05_at_11.23.53_PM_wso0li.png',
        'v1788635332/ARVEX_Green_Character_Sheet_mxsuwt.png'
      ].map(img),
      projectVideo: vid('v1788635992/ARVEX_Green_2_jrjf5b.mp4')
    },
    {
      id: '04.', name: 'ARXEN', category: 'Ai Video',
      desc: 'A self-directed concept project: a fictional open-ear earbud brand, designed and filmed end to end',
      image: img('v1787687819/Screenshot_2026-08-25_at_11.55.36_PM_uipvfg.png'),
      client: 'Self-Directed', role: 'AI Motion Designer & Creative Director', year: '2025',
      overview: 'ARXEN — OPEN-EAR EVOLUTION. A self-directed concept project: a fictional open-ear earbud brand, designed and filmed end to end. Glossy hero renders, a floating case reveal with live battery readout, and a clean logo lockup — a cinematic product spot built entirely through a generative AI motion pipeline.',
      challenges: 'Creating a believable fictional audio product brand from scratch using only generative AI — from the initial earbud concept and material specifications to a fully realized cinematic film with coherent visual storytelling and brand identity.',
      solutions: 'Developed a structured generative workflow that maintained visual consistency across hero renders, product animations, and final film output. Used precise prompting and style-locking techniques to ensure the ARXEN brand looked cohesive in every frame.',
      resultsText: 'The final deliverable is a complete product brand concept package — hero renders, storyboard, and cinematic hero film — demonstrating a full end-to-end AI-powered creative workflow from concept to final render.',
      resultsStats: [{ value: '100%', label: 'AI-Generated' }, { value: 'End-to-End', label: 'Workflow' }, { value: 'Product', label: 'Film' }],
      gallery: [
        'v1787687819/Screenshot_2026-08-25_at_11.55.36_PM_uipvfg.png', 'v1787687820/Screenshot_2026-08-25_at_11.56.01_PM_dcitsj.png',
        'v1787687822/Screenshot_2026-08-25_at_11.56.30_PM_lpji0d.png', 'v1787683404/ARXEN_Character_Sheet_zmwfdq.png', 'v1787683402/ARXEN_Storyboard_nrmx7o.png'
      ].map(img),
      projectVideo: vid('v1787683395/ARXEN_v1_uo2gvs.mp4')
    },
    {
      id: '05.', name: 'SDT', category: 'Branding',
      desc: 'Distinctive, government-grade vehicle wrap for Abu Dhabi Mobility',
      image: img('v1775415196/Screenshot_2026-04-05_at_9.16.04_PM_awyc9s.jpg'),
      client: 'Abu Dhabi Mobility', role: 'Senior Graphic Designer', year: '2024',
      overviewHtml: 'This project involved designing the full vehicle livery for Abu Dhabi\'s Smart Driving Test program, operated under the Abu Dhabi Mobility authority (<a href="https://admobility.gov.ae" target="_blank" rel="noopener noreferrer">admobility.gov.ae</a>). The goal was to create a distinctive, government-grade vehicle wrap for a Toyota Corolla fleet that would be immediately recognizable on the road, communicate the program\'s smart and tech-forward identity, and maintain visual coherence with the existing brand system.',
      challenges: 'The vehicle needed to feel modern, authoritative, and intelligent — reflecting the program\'s position at the intersection of government service and smart technology. It also had to function effectively in two environments: full daylight and low-light nighttime conditions.',
      solutions: 'The circular motif from the logo was scaled up dramatically and used as the hero graphic element, dissolving into a field of scattered digital dots. A dual-mode design was developed using reflective sticker materials for nighttime visibility, transforming the vehicle into a striking presence on night roads.',
      resultsText: 'The final design delivers a cohesive, government-ready vehicle livery that is bold enough to command attention on Abu Dhabi\'s roads while remaining fully faithful to the Smart Driving Test brand identity.',
      resultsStats: [{ value: 'Day/Night', label: 'Dual Treatment' }, { value: 'Reflective', label: 'Visibility' }, { value: '100%', label: 'Brand Coherence' }],
      gallery: [
        'v1775415196/Screenshot_2026-04-05_at_9.16.04_PM_awyc9s.jpg', 'v1787679327/SDTS_Page_1_qsarya.png', 'v1787679327/SDTS_Page_2_pl0z1e.png',
        'v1787679331/SDTS_Page_3_fqfpco.png', 'v1787679328/SDTS_Page_4_uhyjlc.png'
      ].map(img)
    },
    {
      id: '06.', name: 'Plug N Go', category: 'Branding',
      desc: 'Logo branding for Abu Dhabi Mobility EV charging app and chargers',
      image: img('v1784225077/Plug_N_Go_BG_fnum4l.png'),
      client: 'Abu Dhabi Mobility', role: 'Lead Graphic Designer', year: '2025',
      overview: 'Developing the visual identity and logo branding for Plug N Go, the official EV charging infrastructure for Abu Dhabi Mobility. The project encompassed the design for the mobile application and the physical charging stations across the city.',
      challenges: 'The main challenge was creating a brand that felt both high-tech and approachable, while ensuring the mobile app was usable in high-glare outdoor environments.',
      solutions: 'I used a high-contrast color palette and large, touch-friendly interface elements. The branding reflects a \'flow\' concept, symbolizing the constant movement of energy.',
      resultsText: 'The branding successfully unified the digital and physical presence of the charging network.',
      resultsStats: [{ value: 'Brand', label: 'Identity' }, { value: 'EV', label: 'Charging' }, { value: 'Unified', label: 'System' }],
      gallery: [
        'v1784225077/Plug_N_Go_BG_fnum4l.png', 'v1787677406/Plug_N_Go_brand_guidelines_Page_2_rvqlhi.png', 'v1787677406/Plug_N_Go_brand_guidelines_Page_3_ostlwq.png',
        'v1787677407/Plug_N_Go_brand_guidelines_Page_5_jhfpvx.png', 'v1787677411/Plug_N_Go_brand_guidelines_Page_6_lihbsq.png'
      ].map(img)
    },
    {
      id: '07.', name: 'SDTS', category: 'Motion Graphics',
      desc: 'AI-powered driver licensing and evaluation system',
      image: img('v1775379354/Screenshot_2026-04-05_at_12.12.16_PM_aq3yxq.png'),
      client: 'Abu Dhabi Mobility', role: 'Motion Graphics Designer & Animator', year: '2024',
      overview: 'A comprehensive motion graphics explainer video produced for the Smart Driving Test application — an AI-powered driver licensing and evaluation system developed in partnership with Abu Dhabi Mobility. The project required translating a highly technical, multi-layered system into a visually compelling narrative accessible to government stakeholders, smart city audiences, and the general public. Key sections covered include the Smart Test Vehicle, Smart Monitoring Bus, Central Control Room, and the end-to-end user journey. Tools used: Adobe Illustrator, After Effects, and Premiere Pro.',
      challenges: 'The primary challenge was distilling a complex, multi-layered AI evaluation system into a narrative that government officials and the public could easily understand. The old documentation was purely technical and lacked a storytelling element that could showcase the system\'s efficiency and fairness.',
      solutions: 'I developed a high-fidelity motion graphics video that visualizes the entire ecosystem. By using custom 3D-style illustrations and dynamic data overlays, I was able to explain the 21 primary criteria and 48 sub-criteria in a way that felt intuitive and technologically advanced.',
      resultsText: 'The video successfully served as the primary presentation tool for high-level government meetings, leading to a broader rollout of the system across the region.',
      resultsStats: [{ value: '21', label: 'Primary Criteria' }, { value: '48', label: 'Sub-criteria' }, { value: '100%', label: 'Fairness Rate' }],
      gallery: [
        'v1775379354/Screenshot_2026-04-05_at_12.12.16_PM_aq3yxq.png', 'v1775379354/Screenshot_2026-04-05_at_12.13.00_PM_dfnq4j.png',
        'v1775379354/Screenshot_2026-04-05_at_12.13.09_PM_submgv.png', 'v1775379354/Screenshot_2026-04-05_at_12.14.23_PM_facut0.png',
        'v1775379355/Screenshot_2026-04-05_at_12.15.27_PM_lvjvcw.png', 'v1775379355/Screenshot_2026-04-05_at_12.15.11_PM_jxqr4j.png',
        'v1775379355/Screenshot_2026-04-05_at_12.17.52_PM_er0jyn.png'
      ].map(img),
      projectVideo: vid('v1776881517/smart_driving_test_training_ruujs0.mp4')
    },
    {
      id: '08.', name: 'Al Sarooj', category: 'Motion Graphics',
      desc: 'Motion graphics infographic video for a 4.5 km road connectivity corridor',
      image: img('v1775387741/Screenshot_2026-04-05_at_1.45.43_PM_olv4pq.png'),
      client: 'ADM', role: 'Motion Graphics Designer & Animator', year: '2023',
      overview: 'A motion graphics infographic video showcasing a 4.5 km road connectivity corridor linking Al Rouge and Al, featuring a 120-meter tunnel. The video combines aerial footage, 3D architectural renderings, construction visuals, and animated map interfaces to communicate the project\'s scope and impact—including dedicated pedestrian and cycling paths, upgraded intersections, and improved traffic flow. Produced for TIR/Tatweer to highlight infrastructure development aimed at building smarter, safer, and more connected cities.',
      challenges: 'Communicating the scope and impact of a complex 4.5 km road project, including a tunnel and various upgrades, in a concise 56-second video.',
      solutions: 'Combining aerial footage, 3D renderings, and animated map interfaces to create a visually compelling narrative.',
      resultsText: 'The video effectively highlighted the infrastructure development, showcasing the project\'s impact on urban connectivity and safety.',
      resultsStats: [{ value: '4.5 km', label: 'Road Link' }, { value: '120 m', label: 'Tunnel' }, { value: '56 s', label: 'Video Length' }],
      gallery: [
        'v1775387741/Screenshot_2026-04-05_at_1.45.43_PM_olv4pq.png', 'v1775383174/Screenshot_2026-04-05_at_1.44.39_PM_lfbien.png',
        'v1775383173/Screenshot_2026-04-05_at_1.45.20_PM_rqiy4c.png', 'v1775383173/Screenshot_2026-04-05_at_1.45.29_PM_auyjw7.png',
        'v1775383175/Screenshot_2026-04-05_at_1.46.08_PM_m7dxlt.png', 'v1775383174/Screenshot_2026-04-05_at_1.45.52_PM_uf4qcy.png'
      ].map(img),
      projectVideo: vid('v1776881076/Al_Sarooj_i72obc.mp4')
    },
    {
      id: '09.', name: 'X14', category: 'Branding',
      desc: 'Brand Collateral & Digital Brochure',
      image: img('v1775392696/X14_digital_profile-v4_Page_1_wdsbtm.jpg'),
      position: 'object-top',
      client: 'X14 Holding', role: 'Sole Designer', year: '2023',
      overview: 'X14 is a digital media start-up founded and based in Abu Dhabi, specializing in online reputation management, media analytics, and information management. As part of their early brand-building efforts, a digital company profile was needed to communicate their identity, services, and value proposition to potential clients across both the government and private sectors.',
      challenges: 'The brief was to create a professional, visually compelling digital brochure that could serve as X14\'s primary introductory document — something that felt credible, modern, and reflective of a company positioning itself as a thought leader in the Abu Dhabi media landscape.',
      solutions: 'I developed a comprehensive 6-page digital profile using a two-tone navy and amber palette to balance authority with dynamism. The layout follows a structured grid system with clean typography, custom iconography, and humanizing illustrations to break up dense text sections while maintaining a professional consultancy aesthetic.',
      resultsText: 'The final deliverable is a polished, print-ready and screen-optimized digital profile that X14 can use across client pitches, email outreach, and digital platforms. The design positions X14 as a credible, world-class consultancy operating out of Abu Dhabi with global reach and capability.',
      resultsStats: [{ value: '06', label: 'Pages' }, { value: '100%', label: 'Custom Design' }, { value: 'Print', label: 'Ready' }],
      gallery: [
        'v1775392696/X14_digital_profile-v4_Page_1_wdsbtm.jpg', 'v1775392690/X14_digital_profile-v4_Page_2_xtp4cb.jpg', 'v1775392688/X14_digital_profile-v4_Page_3_gvgfj9.jpg',
        'v1775392689/X14_digital_profile-v4_Page_4_njvs3y.jpg', 'v1775392692/X14_digital_profile-v4_Page_5_i1scvc.jpg', 'v1775392693/X14_digital_profile-v4_Page_6_odigq3.jpg'
      ].map(img)
    }
  ];

  const services = [
    { id: '01.', title: 'Generative Design', description: 'Crafting high-end cinematic assets and visual narratives where AI becomes the brush, not the artist.', image: img('v1788759019/Generative_design_hsgzx7.png'), tags: ['AI Motion', 'Cinematic Assets', 'Generative Art', 'Visual Storytelling'] },
    { id: '02.', title: 'Motion Graphics & VFX', description: 'High-impact 3D animations and visual effects that translate complex technical concepts into stories people actually feel.', image: img('v1788759019/Motion_graphics_em6qvh.png'), tags: ['3D Animation', 'VFX', 'Cinema 4D', 'After Effects'] },
    { id: '03.', title: 'Digital Product Design', description: 'User-centric UI/UX and prototyping for complex platforms, specializing in Smart City and Government Platforms.', image: img('v1788759019/UI_UX_sd53f1.png'), tags: ['UI/UX Design', 'Digital Prototyping', 'Product Strategy', 'User Research'] },
    { id: '04.', title: 'AI Strategy & Workflows', description: 'Architecting end-to-end AI pipelines that compress production timelines without compromising creative integrity.', image: img('v1788759020/AI_Strategy_mgpddf.png'), tags: ['AI Integration', 'Workflow Optimization', 'Generative Synthesis', 'Process Design'] },
    { id: '05.', title: 'High-End Presentations', description: 'Transforming complex data and technical narratives into high-stakes presentation decks that command attention and drive decisions.', image: img('v1788759019/Presentations_kqxd6s.png'), tags: ['Pitch Decks', 'Investor Presentations', 'Visual Storytelling', 'Technical Narratives'] }
  ];

  const faqs = [
    { q: 'HOW DOES YOUR PROCESS WORK?', a: 'I start with a discovery session to understand your goals, audience, and production needs. From there I design the AI workflow, develop the creative direction, and execute — delivering assets that are ready to deploy.' },
    { q: 'WHAT DO YOU ACTUALLY DELIVER?', a: 'Depending on the project — AI production pipelines, cinematic video and motion graphics, UI/UX prototypes, generative visual systems, or complete creative productions. Everything is high-fidelity and production-ready on delivery.' },
    { q: 'DO YOU INCLUDE STRATEGY?', a: 'Always. Every project starts with understanding the why before touching any tool. Strategy is built into every phase — not bolted on at the end.' },
    { q: 'HOW INVOLVED DO YOU NEED TO BE?', a: 'Your input matters most at the start and at key decision points. Once direction is locked, I handle the full execution — you stay informed without getting buried in the process.' },
    { q: 'HOW MANY REVISIONS ARE INCLUDED?', a: 'Two structured revision rounds are included in every project. I work with precision from the start so revisions are refinements, not restarts.' },
    { q: 'WHAT HAPPENS AFTER DELIVERY?', a: 'You get full ownership of all deliverables. I include a handoff session and a post-delivery support window for refinements, or team onboarding on any AI workflows built for you.' }
  ];

  const clients = [
    'v1775391527/AD-Mobility-Master-Bilingual-Identity-Full-Colour-V2_zgj8zz.png', 'v1775391586/x14_holding_e7eawa.png', 'v1775389125/Ajman_mikved.png',
    'v1775390871/ADM_xov0bb.png', 'v1775391509/HMMC_Logo2_nrysgw.png', 'v1775390895/Sharjah_sc4g4u.png', 'v1775389755/yda-white-h.69e0a77a_ka19nk.png',
    'v1775390905/kabrimini_nhcfi5.png'
  ].map(img);

  const categories = ['All', 'Ai Video', 'Branding', 'Motion Graphics'];

  /* ---------------- HELPERS ---------------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const el = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); } });
  }, { threshold: 0.15 });

  function splitWords(node) {
    const hl = (node.dataset.highlight || '').split(',').filter(Boolean);
    const words = node.textContent.trim().split(/\s+/);
    const step = node.classList.contains('about__h2') ? 10 : 50;
    const base = node.classList.contains('about__h2') ? 0 : 300;
    node.textContent = '';
    words.forEach((w, i) => {
      const s = document.createElement('span');
      s.className = 'w' + (hl.includes(w) ? ' hl' : '');
      s.style.setProperty('--wd', (base + i * step) + 'ms');
      s.textContent = w;
      node.appendChild(s);
      node.appendChild(document.createTextNode(' '));
    });
  }

  function observeReveals(root) {
    $$('.reveal, .words', root).forEach((n) => {
      if (n.dataset.delay) n.style.setProperty('--d', n.dataset.delay + 'ms');
      if (n.classList.contains('words') && !n.dataset.split) { splitWords(n); n.dataset.split = '1'; }
      revealObserver.observe(n);
    });
  }

  /* ---------------- LOADER ---------------- */
  const loader = $('#loader');
  document.body.classList.add('no-scroll');
  setTimeout(() => {
    loader.classList.add('out');
    document.body.classList.remove('no-scroll');
    setTimeout(() => loader.remove(), 1600);
  }, 4200);

  /* ---------------- BACKGROUND LINES ---------------- */
  (function bgLines() {
    const wrap = $('#bg-lines');
    for (let i = 0; i < 6; i++) {
      const d = document.createElement('div');
      d.className = 'v';
      d.style.left = Math.random() * 100 + '%';
      d.style.animationDuration = (15 + Math.random() * 20) + 's';
      d.style.animationDelay = (i * 3) + 's';
      wrap.appendChild(d);
    }
    for (let i = 0; i < 4; i++) {
      const d = document.createElement('div');
      d.className = 'h';
      d.style.top = Math.random() * 100 + '%';
      d.style.animationDuration = (20 + Math.random() * 25) + 's';
      d.style.animationDelay = (i * 5) + 's';
      wrap.appendChild(d);
    }
  })();

  /* ---------------- CLOCK (Asia/Dubai) ---------------- */
  (function clock() {
    const out = $('#clock-time');
    const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Dubai', hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });
    const tick = () => { out.textContent = fmt.format(new Date()); };
    tick(); setInterval(tick, 1000);
  })();

  /* ---------------- HERO VIDEO AUTOPLAY ---------------- */
  (function heroVideo() {
    const v = $('#hero-video');
    if (!v) return;
    v.muted = true; v.defaultMuted = true; v.playsInline = true;
    const attempt = () => {
      const p = v.play();
      if (p && p.catch) p.catch(() => {
        const start = () => { v.play().then(() => { document.removeEventListener('mousedown', start); document.removeEventListener('touchstart', start); }).catch(() => {}); };
        document.addEventListener('mousedown', start); document.addEventListener('touchstart', start);
      });
    };
    attempt();
    v.addEventListener('loadedmetadata', attempt);
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') attempt(); });
  })();

  /* ---------------- DRAWER + ACTIVE SECTION ---------------- */
  const drawer = $('#drawer'), backdrop = $('#drawer-backdrop'), burger = $('#menu-open');
  function openMenu() { backdrop.hidden = false; requestAnimationFrame(() => { backdrop.classList.add('show'); drawer.classList.add('open'); }); drawer.setAttribute('aria-hidden', 'false'); burger.setAttribute('aria-expanded', 'true'); }
  function closeMenu() { backdrop.classList.remove('show'); drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); burger.setAttribute('aria-expanded', 'false'); setTimeout(() => { backdrop.hidden = true; }, 400); }
  burger.addEventListener('click', openMenu);
  $('#menu-close').addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && drawer.classList.contains('open')) closeMenu(); });
  $$('#drawer-nav a').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault(); closeMenu();
    const id = a.dataset.section;
    showHome(() => { id === 'home' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : $('#' + id).scrollIntoView({ behavior: 'smooth' }); });
  }));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const id = e.target.id;
      $$('#drawer-nav a').forEach((a) => a.classList.toggle('active', a.dataset.section === id));
    });
  }, { threshold: 0.5 });
  ['home', 'about', 'works', 'services', 'faq', 'contact'].forEach((id) => { const s = $('#' + id); if (s) sectionObserver.observe(s); });

  $('#logo-home').addEventListener('click', (e) => { e.preventDefault(); showHome(() => window.scrollTo({ top: 0, behavior: 'smooth' })); });
  $$('.footer__links a[href^="#"], .footer__links a[href="#"]').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    a.addEventListener('click', (e) => { e.preventDefault(); const t = $(href); if (href === '#home') window.scrollTo({ top: 0, behavior: 'smooth' }); else if (t) t.scrollIntoView({ behavior: 'smooth' }); });
  });

  /* ---------------- CLIENT MARQUEE ---------------- */
  (function marquee() {
    const track = $('#marquee-track');
    const list = clients.concat(clients);
    track.innerHTML = list.map((src) => `<div class="marquee__item"><img src="${src}" alt="Client logo" referrerpolicy="no-referrer" loading="lazy"></div>`).join('');
  })();

  /* ---------------- WORKS ---------------- */
  let activeCategory = 'All';
  const tabsWrap = $('#work-tabs'), track = $('#projects-container');

  function renderTabs() {
    tabsWrap.innerHTML = '';
    categories.forEach((cat) => {
      const b = el(`<button type="button" class="tab${cat === activeCategory ? ' active' : ''}">${esc(cat)}</button>`);
      b.addEventListener('click', () => { activeCategory = cat; renderTabs(); renderCards(); track.scrollTo({ left: 0, behavior: 'smooth' }); });
      tabsWrap.appendChild(b);
    });
  }

  function renderCards() {
    track.innerHTML = '';
    projects.forEach((p, idx) => {
      if (activeCategory !== 'All' && p.category !== activeCategory) return;
      const card = el(`
        <button type="button" class="card" aria-label="Open case study: ${esc(p.name)}">
          <div class="card__img"><img src="${p.image}" alt="${esc(p.name)}" class="${p.position || ''}" referrerpolicy="no-referrer" loading="lazy"></div>
          <div class="card__shade"></div><div class="card__dim"></div>
          <div class="card__icon"><i class="i-ne"></i></div>
          <div class="card__body">
            <h3 class="card__title">${esc(p.name)}</h3>
            <p class="card__desc">${esc(p.desc)}</p>
            <div class="card__cta-wrap"><div class="card__cta"><span>View Case Study</span><i class="i-arrow"></i></div></div>
          </div>
        </button>`);
      card.addEventListener('click', () => openProject(idx));
      track.appendChild(card);
      revealObserver.observe(card);
    });
  }

  $('#works-prev').addEventListener('click', () => track.scrollBy({ left: -400, behavior: 'smooth' }));
  $('#works-next').addEventListener('click', () => track.scrollBy({ left: 400, behavior: 'smooth' }));
  renderTabs(); renderCards();

  /* ---------------- SERVICES ---------------- */
  (function renderServices() {
    const list = $('#services-list');
    services.forEach((s, i) => {
      const row = el(`
        <div class="svc${i === 0 ? ' active' : ''}">
          <div class="svc__row">
            <div class="svc__numwrap"><span class="svc__num">${esc(s.id)}</span><span class="svc__dot"></span></div>
            <div class="svc__content">
              <div class="svc__idle"><h3>${esc(s.title)}</h3></div>
              <div class="svc__open">
                <div class="svc__img"><img src="${s.image}" alt="${esc(s.title)}" referrerpolicy="no-referrer" loading="lazy"></div>
                <div class="svc__details">
                  <div><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p></div>
                  <div class="svc__tags">${s.tags.map((t) => `<span class="svc__tag">${esc(t)}</span>`).join('')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>`);
      const activate = () => { $$('.svc', list).forEach((r) => r.classList.remove('active')); row.classList.add('active'); };
      row.addEventListener('mouseenter', activate);
      row.addEventListener('click', activate);
      list.appendChild(row);
    });
  })();

  /* ---------------- FAQ ---------------- */
  (function renderFaq() {
    const list = $('#faq-list');
    faqs.forEach((f, i) => {
      const item = el(`
        <div class="faq-item${i === 0 ? ' open' : ''}">
          <button type="button" class="faq-item__btn" aria-expanded="${i === 0}">
            <span class="faq-item__q">${esc(f.q)}</span>
            <span class="faq-item__plus">+</span>
          </button>
          <div class="faq-item__a"><div><p>${esc(f.a)}</p></div></div>
        </div>`);
      $('.faq-item__btn', item).addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        $$('.faq-item', list).forEach((x) => { x.classList.remove('open'); $('.faq-item__btn', x).setAttribute('aria-expanded', 'false'); });
        if (!isOpen) { item.classList.add('open'); $('.faq-item__btn', item).setAttribute('aria-expanded', 'true'); }
      });
      list.appendChild(item);
    });
  })();

  /* ---------------- PROJECT DETAIL ---------------- */
  const site = $('#site'), projectView = $('#project');
  let currentProject = null;

  function showHome(after) {
    if (currentProject === null) { if (after) after(); return; }
    projectView.classList.add('hide');
    setTimeout(() => {
      projectView.hidden = true; projectView.innerHTML = ''; currentProject = null;
      site.hidden = false; requestAnimationFrame(() => site.classList.remove('hide'));
      history.replaceState(null, '', location.pathname);
      if (after) setTimeout(after, 50);
    }, 300);
  }

  function openProject(idx) {
    const p = projects[idx];
    currentProject = idx;
    const next = projects[(idx + 1) % projects.length];
    const overview = p.overviewHtml ? p.overviewHtml : esc(p.overview);
    const gallery = p.vertical
      ? `<div class="gallery-grid">${p.gallery.map((g, i) => `<div><img src="${g}" alt="${esc(p.name)} gallery ${i + 1}" referrerpolicy="no-referrer" loading="lazy"></div>`).join('')}</div>`
      : `<div class="gallery-stack">${p.gallery.map((g, i) => `<div class="gallery-item"><div><img src="${g}" alt="${esc(p.name)} gallery ${i + 1}" referrerpolicy="no-referrer" loading="lazy"></div></div>`).join('')}</div>`;
    const video = p.projectVideo
      ? `<div class="project__video"><div class="${p.vertical ? 'vertical' : ''}"><video src="${p.projectVideo}" controls playsinline preload="metadata" poster="${p.image}"></video></div></div>`
      : '';
    const stats = p.resultsStats ? `<div class="csr__stats">${p.resultsStats.map((s) => `<div class="csr__stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join('')}</div>` : '';

    projectView.innerHTML = `
      <div class="project__bar">
        <button type="button" class="project__back" data-back><span>←</span> Back to Home</button>
        <div class="project__num">Project ${esc(p.id)}</div>
      </div>
      <div class="project__hero">
        <img src="${p.image}" alt="${esc(p.name)}" referrerpolicy="no-referrer">
        <div class="project__hero-shade"></div>
        <div class="project__hero-title"><div class="container"><h1>${esc(p.name)}</h1></div></div>
      </div>
      <div class="container project__info">
        <div class="project__overview"><h2>Overview</h2><p>${overview}</p></div>
        <div class="project__meta">
          <div><h3>Client</h3><p>${esc(p.client)}</p></div>
          <div><h3>Role</h3><p>${esc(p.role)}</p></div>
          <div><h3>Year</h3><p>${esc(p.year)}</p></div>
        </div>
      </div>
      <div class="container project__csr">
        ${p.challenges ? `<div class="csr"><div><h2>Challenges<span>.</span></h2></div><div><p>${esc(p.challenges)}</p></div></div>` : ''}
        ${p.solutions ? `<div class="csr"><div><h2>Solutions<span>.</span></h2></div><div><p>${esc(p.solutions)}</p></div></div>` : ''}
        ${p.resultsText ? `<div class="csr"><div><h2>Results<span>.</span></h2></div><div><p>${esc(p.resultsText)}</p>${stats}</div></div>` : ''}
      </div>
      <div class="project__gallery">${gallery}${video}</div>
      <div class="project__next">
        <div class="container">
          <h2>Next Project</h2>
          <button type="button" class="project__next-btn" data-next="${(idx + 1) % projects.length}">
            <span>${esc(next.name)}</span>
            <span class="project__next-cta">View Project <i class="i-ne"></i></span>
          </button>
        </div>
      </div>
      <footer class="project__footer">
        <div class="footer__brand">
          <img src="https://res.cloudinary.com/dijfcvpio/image/upload/v1775412441/AR_Logo_wnsauc.svg" alt="AR logo" referrerpolicy="no-referrer">
          <span class="eyebrow">© 2026 Ashikh Rahman. All rights reserved.</span>
        </div>
        <button type="button" data-back>Back to Home</button>
      </footer>`;

    $$('[data-back]', projectView).forEach((b) => b.addEventListener('click', () => showHome(() => $('#works').scrollIntoView({ behavior: 'auto' }))));
    $('[data-next]', projectView).addEventListener('click', (e) => { openProject(Number(e.currentTarget.dataset.next)); });

    site.classList.add('hide');
    setTimeout(() => {
      site.hidden = true;
      projectView.hidden = false; projectView.classList.add('hide');
      window.scrollTo(0, 0);
      requestAnimationFrame(() => projectView.classList.remove('hide'));
      $$('.gallery-item > div, .gallery-grid > div, .project__video > div', projectView).forEach((n) => revealObserver.observe(n));
      history.replaceState(null, '', '#project-' + p.name.toLowerCase().replace(/\s+/g, '-'));
    }, site.hidden ? 0 : 300);
  }

  /* ---------------- INIT REVEALS ---------------- */
  observeReveals(document);
})();
