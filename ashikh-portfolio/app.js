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
      id: '10.', name: 'Agentic Mobility', category: 'Presentations',
      desc: 'Strategic vision deck taking Abu Dhabi from smart mobility to agentic mobility',
      image: img('f_auto,q_auto:good,w_1600/v1792173339/Abu_Dhabi_Agentic_Mobility_oajn31.png'),
      position: 'object-top',
      client: 'Tatweer', role: 'Presentation & Infographic Design', year: '2026',
      overview: 'A strategic vision presentation produced for Tatweer, framing Abu Dhabi\'s evolution from smart mobility to agentic mobility — an AI-native layer where city systems reason, plan, act and learn within policy limits. The deck translates a complex technical concept into a clear narrative for government stakeholders, using custom isometric infographics to explain the sense-to-learn agent loop, levels of autonomy, the shared governed foundation, and concrete opportunity areas across Abu Dhabi\'s transport network.',
      challenges: 'The subject matter is dense and abstract — autonomous agents, governance layers, and levels of machine autonomy — and had to land with senior government stakeholders who needed the strategic picture without the technical weight. Every concept risked becoming a wall of text.',
      solutions: 'I built the deck around a consistent isometric infographic system, turning each concept into a diagram: the evolution of mobility intelligence, the seven-step agent loop, the layered foundation, and the real-world Abu Dhabi opportunity grid. A disciplined type hierarchy and restrained palette kept it government-grade throughout.',
      resultsText: 'The result is a presentation that reads as a clear strategic argument rather than a technical briefing — carrying a complex agentic-mobility vision from first principles through to where it could improve Abu Dhabi\'s network today.',
      resultsStats: [{ value: 'Strategy', label: 'Vision Deck' }, { value: 'Isometric', label: 'Infographics' }, { value: 'Gov-Grade', label: 'Design' }],
      gallery: [
        'f_auto,q_auto,w_1600/v1792168868/Abu_Dhabi_Agentic_Mobility_Page_2_jbclig.png', 'f_auto,q_auto,w_1600/v1792168800/Abu_Dhabi_Agentic_Mobility_Page_4_odnbvi.png',
        'f_auto,q_auto,w_1600/v1792168800/Abu_Dhabi_Agentic_Mobility_Page_5_itv1fs.png', 'f_auto,q_auto,w_1600/v1792168821/Abu_Dhabi_Agentic_Mobility_Page_6_jqkdon.png',
        'f_auto,q_auto,w_1600/v1792168803/Abu_Dhabi_Agentic_Mobility_Page_7_xvrte4.png'
      ].map(img)
    },
    {
      id: '11.', name: 'C-ITS Master Plan', category: 'Presentations',
      desc: 'National master plan deck for cooperative intelligent transport systems',
      image: img('f_auto,q_auto:good,w_1600/v1792173182/C-ITS_National_Master_Plan_v1_gphhfq.png'),
      position: 'object-top',
      client: 'Tatweer', role: 'Presentation & Infographic Design', year: '2026',
      overview: 'An Arabic-language strategic deck for Tatweer making the case for a national Cooperative Intelligent Transportation Systems (C-ITS) master plan — moving a country from scattered, siloed transport projects to one connected system. The presentation frames C-ITS as the nervous system of the city, explaining V2V, V2I, V2N and V2X connectivity, a five-layer architecture with a single trust backbone, and a phased national roadmap, all through custom isometric infographics designed to read clearly in right-to-left Arabic.',
      challenges: 'The deck had to argue a national-scale infrastructure vision in Arabic, carrying dense technical ideas — vehicle-to-everything connectivity, governance layers, cybersecurity principles — for senior government decision-makers, while keeping right-to-left layouts clean and the infographics legible.',
      solutions: 'I built a consistent isometric visual language and a disciplined RTL grid, turning each concept into a diagram: the connected-vehicle scenarios, the five-layer system with its governance spine, the real-incident walkthrough, and a three-phase roadmap that starts from existing assets rather than replacing them.',
      resultsText: 'The result is a government-grade Arabic strategy deck that carries a complex C-ITS vision from problem statement through architecture to a staged national rollout, each stage framed to deliver value before the next begins.',
      resultsStats: [{ value: 'Arabic', label: 'RTL Design' }, { value: '5-Layer', label: 'Architecture' }, { value: 'National', label: 'Master Plan' }],
      gallery: [
        'f_auto,q_auto,w_1600/v1792169035/C-ITS_National_Master_Plan_v1_Page_04_t2y5mk.png', 'f_auto,q_auto,w_1600/v1792169028/C-ITS_National_Master_Plan_v1_Page_05_drfnft.png',
        'f_auto,q_auto,w_1600/v1792169023/C-ITS_National_Master_Plan_v1_Page_06_vzhu8n.png', 'f_auto,q_auto,w_1600/v1792169015/C-ITS_National_Master_Plan_v1_Page_07_xiaxhe.png',
        'f_auto,q_auto,w_1600/v1792169017/C-ITS_National_Master_Plan_v1_Page_09_kzioue.png', 'f_auto,q_auto,w_1600/v1792169039/C-ITS_National_Master_Plan_v1_Page_11_wz6iev.png'
      ].map(img)
    },
    {
      id: '12.', name: 'Ghana Smart Cities', category: 'Presentations',
      desc: 'Programme deck for Ghana\'s smart & sustainable cities initiative',
      image: img('f_auto,q_auto:good,w_1600/v1792172743/Ghana_Smart_Cities_v1_fgakdf.png'),
      position: 'object-top',
      client: 'Tatweer × Vitronic', role: 'Presentation & Infographic Design', year: '2026',
      overview: 'A programme presentation for Tatweer, in partnership with Vitronic, setting out a smart and sustainable cities initiative for Ghana across seven pillars — mobility, safe city, smart waste, energy and utilities, citizen digital services, payments and revenue, and data-driven command centres. The deck moves from the urban challenge, through a layered programme architecture and pillar-by-pillar deep-dives, to PPP financing, the consortium model, and a phased delivery roadmap.',
      challenges: 'The programme spans seven technical pillars plus financing and delivery, aimed at government and investment stakeholders. It had to feel like one coherent, bankable initiative rather than nine disconnected projects, while staying visually engaging across a long deck.',
      solutions: 'I built a modular section system — numbered pillar dividers, consistent diagram treatments, and a shared iconography — so each pillar reads as part of one architecture. Infographics carry the heavy content: the layered programme stack, the mobility and safe-city operation flows, the financing structure, and the implementation timeline.',
      resultsText: 'The result is a cohesive, investment-ready programme deck that carries a multi-sector smart-city vision for Ghana from the urban opportunity through to a structured, phased delivery and partnership model.',
      resultsStats: [{ value: '7', label: 'Pillars' }, { value: 'PPP', label: 'Financing' }, { value: 'National', label: 'Programme' }],
      gallery: [
        'f_auto,q_auto,w_1600/v1792169341/Ghana_Smart_Cities_v1_Page_07_h5dqqi.png', 'f_auto,q_auto,w_1600/v1792169330/Ghana_Smart_Cities_v1_Page_08_buyetg.png',
        'f_auto,q_auto,w_1600/v1792169350/Ghana_Smart_Cities_v1_Page_09_ruwcyv.png', 'f_auto,q_auto,w_1600/v1792169377/Ghana_Smart_Cities_v1_Page_12_khrfze.png',
        'f_auto,q_auto,w_1600/v1792169319/Ghana_Smart_Cities_v1_Page_16_pnjx1h.png', 'f_auto,q_auto,w_1600/v1792169315/Ghana_Smart_Cities_v1_Page_18_qika1a.png'
      ].map(img)
    },
    {
      id: '13.', name: 'TATWEER 360°', category: 'Presentations',
      desc: 'IoT predictive maintenance proposal deck for Dubai Municipality\'s fleet',
      image: img('f_auto,q_auto:good,w_1600/v1792173541/Tatweer_Predictive_Maintenance_li5b7n.png'),
      position: 'object-top',
      client: 'Tatweer → Dubai Municipality', role: 'Presentation & Infographic Design', year: '2026',
      overview: 'A solution proposal deck prepared for Dubai Municipality, presenting TATWEER 360° — an IoT-based condition monitoring and predictive maintenance ecosystem for a mixed fleet of 1,469 vehicles and equipment across 31 categories. The presentation moves from the problem (a large fleet maintained reactively) through the proposed six-stage platform, mixed-fleet coverage, three solution tiers (Basic, Medium, Optimal), detailed use-case walkthroughs, and an implementation timeline.',
      challenges: 'The proposal had to explain a full IoT-to-insight pipeline — sensors, connectivity, platform, analytics, and action — for a highly diverse fleet, and make a technical predictive-maintenance system feel concrete and credible to municipal decision-makers across a long, detailed deck.',
      solutions: 'I designed a six-stage platform diagram as the spine of the deck, then carried it into mixed-fleet coverage tables, tiered capability comparisons, and step-by-step use-case flows with realistic dashboard mockups. A consistent icon and color system kept the technical density readable from first slide to last.',
      resultsText: 'The result is a detailed, credible proposal deck that carries Dubai Municipality from a reactive-maintenance problem statement through a staged, tiered predictive-maintenance solution and a clear 20-week delivery timeline.',
      resultsStats: [{ value: '1,469', label: 'Fleet Assets' }, { value: '3-Tier', label: 'Solution' }, { value: 'IoT', label: 'Predictive' }],
      gallery: [
        'f_auto,q_auto,w_1600/v1792169556/Tatweer_Predictive_Maintenance_Page_06_iaeh2a.png', 'f_auto,q_auto,w_1600/v1792169559/Tatweer_Predictive_Maintenance_Page_04_jrvqe4.png',
        'f_auto,q_auto,w_1600/v1792169549/Tatweer_Predictive_Maintenance_Page_07_e2tlor.png', 'f_auto,q_auto,w_1600/v1792169547/Tatweer_Predictive_Maintenance_Page_08_f1xtcy.png',
        'f_auto,q_auto,w_1600/v1792169549/Tatweer_Predictive_Maintenance_Page_09_e9qqyu.png'
      ].map(img)
    },
    {
      id: '14.', name: 'Speed Radar', category: 'Product Design',
      desc: 'Industrial design concept for a traffic speed radar that detects over-speeding and issues driver violations',
      image: img('f_auto,q_auto:good,w_1600/v1792218180/hf_20261016_193357_758f2dde-70fe-4a51-88e8-9d74fa68e597_ieebje.png'),
      heroImage: img('f_auto,q_auto:good,w_2000/v1792217197/hf_20261016_194152_9745539e-0410-41a7-b1d3-b3d53f1725ee_wokvxk.png'),
      vertical: true,
      client: 'Tatweer', role: 'Concept & Industrial Design', year: '2016',
      overview: 'An industrial-design concept for a roadside traffic speed radar that tracks each passing vehicle\'s speed and, when a vehicle exceeds the permitted limit, registers a traffic violation against the driver. The study reimagines the enforcement pole as a sculpted, intentional object rather than a utilitarian box — exploring the overall silhouette, housing materials and finishes, and distinctive laser-cut detailing, developed as a series of cinematic product renders under Tatweer branding.',
      challenges: 'Roadside enforcement hardware is almost always purely functional and visually generic. The challenge was to give a speed radar a considered industrial-design language — recognizable, modern, and brand-aligned — while housing real detection and enforcement equipment in a practical roadside pole.',
      solutions: 'I iterated on form, materials, and surface detailing, developing a confident silhouette with laser-cut pattern work and a refined material palette. The concept was rendered as a set of high-fidelity product shots to communicate the design intent from multiple angles.',
      resultsText: 'The result is a cohesive product-design concept that elevates a standard speed-enforcement radar into a distinctive, brand-forward piece of roadside infrastructure.',
      resultsStats: [{ value: 'Concept', label: 'Industrial Design' }, { value: 'Speed', label: 'Enforcement' }, { value: 'Branded', label: 'Hardware' }],
      gallery: [
        'c_fill,g_auto,ar_9:16,f_auto,q_auto,w_1200/v1792217196/hf_20261016_192941_e1cfa3de-04ab-4a55-b80b-83301715838b_jjergz.png', 'c_fill,g_auto,ar_9:16,f_auto,q_auto,w_1200/v1792217194/hf_20261016_193847_e6ef8e03-15a5-46c4-836c-2d66952f3079_u47g4f.png',
        'c_fill,g_auto,ar_9:16,f_auto,q_auto,w_1200/v1792217188/hf_20261016_193244_d213cb8f-1308-40a8-9a8c-0de2396bf82e_agcirm.png', 'c_fill,g_auto,ar_9:16,f_auto,q_auto,w_1200/v1792218180/hf_20261016_193357_758f2dde-70fe-4a51-88e8-9d74fa68e597_ieebje.png'
      ].map(img)
    },
    {
      id: '15.', name: 'Social Media Design', category: 'Branding',
      desc: 'Social campaign design for Tatweer and Plug N Go — launch announcements, carousels, and occasion posts',
      image: img('f_auto,q_auto:good,w_1200/v1792472916/Unified_Inspection_01_mwygbp.png'),
      position: 'object-top',
      client: 'Tatweer', role: 'Social & Campaign Design', year: '2026',
      overview: 'Ongoing social-media and campaign design across Tatweer and its sub-brands — from product launch announcements and app-feature highlights to multi-slide carousels and branded occasion posts. The work translates each brand\'s visual system into scroll-stopping, platform-ready content that stays consistent across formats while carrying a premium, government-grade identity.',
      challenges: 'Social content has to earn attention in a feed in seconds while staying strictly on-brand across very different formats — tall stories, square posts, and multi-slide carousels — each for a different sub-brand and occasion.',
      solutions: 'I built a flexible social design language per brand: a Plug N Go green-energy system for EV launch and station posts, and a Tatweer corporate system for occasion and awareness content. Each piece uses a disciplined type hierarchy, consistent iconography, and strong focal art direction so the set reads as one coherent brand voice.',
      resultsText: 'The result is a body of social content that is immediately recognizable per brand, campaign-ready across formats, and consistent with the premium identity carried through the rest of each client\'s work.',
      resultsStats: [{ value: 'Multi-Brand', label: 'Social System' }, { value: 'Carousel', label: '+ Single Posts' }, { value: 'Campaign', label: 'Ready' }],
      gallery: [
        'f_auto,q_auto,w_1400/v1792472916/Unified_Inspection_01_mwygbp.png', 'f_auto,q_auto,w_1400/v1792472910/Unified_Inspection_02_gzsapu.png',
        'f_auto,q_auto,w_1400/v1792472911/Unified_Inspection_03_dq6fbi.png', 'f_auto,q_auto,w_1400/v1792473408/PlugNGo_01_ql4vel.png',
        'f_auto,q_auto,w_1400/v1792473405/PlugNGo_02_zjmdwh.png'
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

  const categories = ['All', 'Ai Video', 'Branding', 'Presentations', 'Product Design', 'Motion Graphics'];

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
        <img src="${p.heroImage || p.image}" alt="${esc(p.name)}" referrerpolicy="no-referrer">
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
          <svg class="logo-mark" viewBox="0 0 219 222" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AR — Ashikh Rahman" fill="currentColor"><polyline points="122.19 147.35 81.72 167.45 48.79 167.45 111.3 57.77 187.91 168.32 116.61 77.31 88.98 147.63 121.91 147.35"/><polygon points="122.88 145.02 93.72 145.02 117.25 81.95 185.25 168.32 145.9 168.32 117.3 117.25 111.16 134.7 122.88 145.02"/></svg>
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
