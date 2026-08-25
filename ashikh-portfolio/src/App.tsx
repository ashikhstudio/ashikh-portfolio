/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

export default function App() {
  const [time, setTime] = useState("");
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Direct property assignment is most reliable for mobile autoplay
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      
      const attemptPlay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay was prevented
            // We show the video at slightly higher opacity if it's ready but waiting
            // And use any user interaction to start it
            const startVideo = () => {
              video.play().then(() => {
                document.removeEventListener('mousedown', startVideo);
                document.removeEventListener('touchstart', startVideo);
              }).catch(() => {});
            };
            document.addEventListener('mousedown', startVideo);
            document.addEventListener('touchstart', startVideo);
          });
        }
      };

      // Try playing immediately, and also on load
      attemptPlay();
      video.addEventListener('loadedmetadata', attemptPlay);
      
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          attemptPlay();
        }
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        video.removeEventListener('loadedmetadata', attemptPlay);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, []);

  const projects = [
    {
      id: "01.",
      name: "SDT",
      category: "Branding",
      desc: "Distinctive, government-grade vehicle wrap for Abu Dhabi Mobility",
      image: "https://res.cloudinary.com/dijfcvpio/image/upload/v1775415196/Screenshot_2026-04-05_at_9.16.04_PM_awyc9s.jpg",
      list: ["SDT", "Plug N Go", "SDTS", "Al Sarooj", "X14", "AI Trainer System", "PLUG N GO", "ARVEX"],
      client: "Abu Dhabi Mobility",
      role: "Senior Graphic Designer",
      year: "2024",
      overview: (
        <>
          This project involved designing the full vehicle livery for Abu Dhabi's Smart Driving Test program, operated under the Abu Dhabi Mobility authority (<a href="https://admobility.gov.ae" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">admobility.gov.ae</a>). The goal was to create a distinctive, government-grade vehicle wrap for a Toyota Corolla fleet that would be immediately recognizable on the road, communicate the program's smart and tech-forward identity, and maintain visual coherence with the existing brand system.
        </>
      ),
      challenges: "The vehicle needed to feel modern, authoritative, and intelligent — reflecting the program's position at the intersection of government service and smart technology. It also had to function effectively in two environments: full daylight and low-light nighttime conditions.",
      solutions: "The circular motif from the logo was scaled up dramatically and used as the hero graphic element, dissolving into a field of scattered digital dots. A dual-mode design was developed using reflective sticker materials for nighttime visibility, transforming the vehicle into a striking presence on night roads.",
      resultsText: "The final design delivers a cohesive, government-ready vehicle livery that is bold enough to command attention on Abu Dhabi's roads while remaining fully faithful to the Smart Driving Test brand identity.",
      resultsStats: [
        { value: "Day/Night", label: "Dual Treatment" },
        { value: "Reflective", label: "Visibility" },
        { value: "100%", label: "Brand Coherence" }
      ],
      gallery: [
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775415196/Screenshot_2026-04-05_at_9.16.04_PM_awyc9s.jpg",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787679327/SDTS_Page_1_qsarya.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787679327/SDTS_Page_2_pl0z1e.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787679331/SDTS_Page_3_fqfpco.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787679328/SDTS_Page_4_uhyjlc.png"
      ]
    },
    {
      id: "02.",
      name: "Plug N Go",
      category: "Branding",
      desc: "Logo branding for Abu Dhabi Mobility EV charging app and chargers",
      image: "https://res.cloudinary.com/dijfcvpio/image/upload/v1784225077/Plug_N_Go_BG_fnum4l.png",
      position: "object-center",
      list: ["SDT", "Plug N Go", "SDTS", "Al Sarooj", "X14", "AI Trainer System", "PLUG N GO", "ARVEX"],
      client: "Abu Dhabi Mobility",
      role: "Lead Graphic Designer",
      year: "2025",
      overview: "Developing the visual identity and logo branding for Plug N Go, the official EV charging infrastructure for Abu Dhabi Mobility. The project encompassed the design for the mobile application and the physical charging stations across the city.",
      challenges: "The main challenge was creating a brand that felt both high-tech and approachable, while ensuring the mobile app was usable in high-glare outdoor environments.",
      solutions: "I used a high-contrast color palette and large, touch-friendly interface elements. The branding reflects a 'flow' concept, symbolizing the constant movement of energy.",
      resultsText: "The branding successfully unified the digital and physical presence of the charging network.",
      resultsStats: [
        { value: "Brand", label: "Identity" },
        { value: "EV", label: "Charging" },
        { value: "Unified", label: "System" }
      ],
      gallery: [
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1784225077/Plug_N_Go_BG_fnum4l.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787677406/Plug_N_Go_brand_guidelines_Page_2_rvqlhi.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787677406/Plug_N_Go_brand_guidelines_Page_3_ostlwq.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787677407/Plug_N_Go_brand_guidelines_Page_5_jhfpvx.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787677411/Plug_N_Go_brand_guidelines_Page_6_lihbsq.png"
      ]
    },
    {
      id: "03.",
      name: "SDTS",
      category: "Motion Graphics",
      desc: "AI-powered driver licensing and evaluation system",
      image: "https://res.cloudinary.com/dijfcvpio/image/upload/v1775379354/Screenshot_2026-04-05_at_12.12.16_PM_aq3yxq.png",
      list: ["SDT", "Plug N Go", "SDTS", "Al Sarooj", "X14", "AI Trainer System", "PLUG N GO", "ARVEX"],
      client: "Abu Dhabi Mobility",
      role: "Motion Graphics Designer & Animator",
      year: "2024",
      overview: "A comprehensive motion graphics explainer video produced for the Smart Driving Test application — an AI-powered driver licensing and evaluation system developed in partnership with Abu Dhabi Mobility. The project required translating a highly technical, multi-layered system into a visually compelling narrative accessible to government stakeholders, smart city audiences, and the general public. Key sections covered include the Smart Test Vehicle, Smart Monitoring Bus, Central Control Room, and the end-to-end user journey. Tools used: Adobe Illustrator, After Effects, and Premiere Pro.",
      challenges: "The primary challenge was distilling a complex, multi-layered AI evaluation system into a narrative that government officials and the public could easily understand. The old documentation was purely technical and lacked a storytelling element that could showcase the system's efficiency and fairness.",
      solutions: "I developed a high-fidelity motion graphics video that visualizes the entire ecosystem. By using custom 3D-style illustrations and dynamic data overlays, I was able to explain the 21 primary criteria and 48 sub-criteria in a way that felt intuitive and technologically advanced.",
      resultsText: "The video successfully served as the primary presentation tool for high-level government meetings, leading to a broader rollout of the system across the region.",
      resultsStats: [
        { value: "21", label: "Primary Criteria" },
        { value: "48", label: "Sub-criteria" },
        { value: "100%", label: "Fairness Rate" }
      ],
      gallery: [
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775379354/Screenshot_2026-04-05_at_12.12.16_PM_aq3yxq.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775379354/Screenshot_2026-04-05_at_12.13.00_PM_dfnq4j.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775379354/Screenshot_2026-04-05_at_12.13.09_PM_submgv.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775379354/Screenshot_2026-04-05_at_12.14.23_PM_facut0.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775379355/Screenshot_2026-04-05_at_12.15.27_PM_lvjvcw.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775379355/Screenshot_2026-04-05_at_12.15.11_PM_jxqr4j.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775379355/Screenshot_2026-04-05_at_12.17.52_PM_er0jyn.png"
      ],
      projectVideo: "https://res.cloudinary.com/dijfcvpio/video/upload/v1776881517/smart_driving_test_training_ruujs0.mp4"
    },
    {
      id: "04.",
      name: "Al Sarooj",
      category: "Motion Graphics",
      desc: "Motion graphics infographic video for a 4.5 km road connectivity corridor",
      image: "https://res.cloudinary.com/dijfcvpio/image/upload/v1775387741/Screenshot_2026-04-05_at_1.45.43_PM_olv4pq.png",
      list: ["SDT", "Plug N Go", "SDTS", "Al Sarooj", "X14", "AI Trainer System", "PLUG N GO", "ARVEX"],
      client: "ADM",
      role: "Motion Graphics Designer & Animator",
      year: "2023",
      overview: "A motion graphics infographic video showcasing a 4.5 km road connectivity corridor linking Al Rouge and Al, featuring a 120-meter tunnel. The video combines aerial footage, 3D architectural renderings, construction visuals, and animated map interfaces to communicate the project's scope and impact—including dedicated pedestrian and cycling paths, upgraded intersections, and improved traffic flow. Produced for TIR/Tatweer to highlight infrastructure development aimed at building smarter, safer, and more connected cities.",
      challenges: "Communicating the scope and impact of a complex 4.5 km road project, including a tunnel and various upgrades, in a concise 56-second video.",
      solutions: "Combining aerial footage, 3D renderings, and animated map interfaces to create a visually compelling narrative.",
      resultsText: "The video effectively highlighted the infrastructure development, showcasing the project's impact on urban connectivity and safety.",
      resultsStats: [
        { value: "4.5 km", label: "Road Link" },
        { value: "120 m", label: "Tunnel" },
        { value: "56 s", label: "Video Length" }
      ],
      gallery: [
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775387741/Screenshot_2026-04-05_at_1.45.43_PM_olv4pq.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775383174/Screenshot_2026-04-05_at_1.44.39_PM_lfbien.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775383173/Screenshot_2026-04-05_at_1.45.20_PM_rqiy4c.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775383173/Screenshot_2026-04-05_at_1.45.29_PM_auyjw7.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775383175/Screenshot_2026-04-05_at_1.46.08_PM_m7dxlt.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775383174/Screenshot_2026-04-05_at_1.45.52_PM_uf4qcy.png"
      ],
      projectVideo: "https://res.cloudinary.com/dijfcvpio/video/upload/v1776881076/Al_Sarooj_i72obc.mp4"
    },
    {
      id: "05.",
      name: "X14",
      category: "Branding",
      desc: "Brand Collateral & Digital Brochure",
      image: "https://res.cloudinary.com/dijfcvpio/image/upload/v1775392696/X14_digital_profile-v4_Page_1_wdsbtm.jpg",
      position: "object-top",
      list: ["SDT", "Plug N Go", "SDTS", "Al Sarooj", "X14", "AI Trainer System", "PLUG N GO", "ARVEX"],
      client: "X14 Holding",
      role: "Sole Designer",
      year: "2023",
      overview: "X14 is a digital media start-up founded and based in Abu Dhabi, specializing in online reputation management, media analytics, and information management. As part of their early brand-building efforts, a digital company profile was needed to communicate their identity, services, and value proposition to potential clients across both the government and private sectors.",
      challenges: "The brief was to create a professional, visually compelling digital brochure that could serve as X14's primary introductory document — something that felt credible, modern, and reflective of a company positioning itself as a thought leader in the Abu Dhabi media landscape.",
      solutions: "I developed a comprehensive 6-page digital profile using a two-tone navy and amber palette to balance authority with dynamism. The layout follows a structured grid system with clean typography, custom iconography, and humanizing illustrations to break up dense text sections while maintaining a professional consultancy aesthetic.",
      resultsText: "The final deliverable is a polished, print-ready and screen-optimized digital profile that X14 can use across client pitches, email outreach, and digital platforms. The design positions X14 as a credible, world-class consultancy operating out of Abu Dhabi with global reach and capability.",
      resultsStats: [
        { value: "06", label: "Pages" },
        { value: "100%", label: "Custom Design" },
        { value: "Print", label: "Ready" }
      ],
      gallery: [
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775392696/X14_digital_profile-v4_Page_1_wdsbtm.jpg",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775392690/X14_digital_profile-v4_Page_2_xtp4cb.jpg",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775392688/X14_digital_profile-v4_Page_3_gvgfj9.jpg",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775392689/X14_digital_profile-v4_Page_4_njvs3y.jpg",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775392692/X14_digital_profile-v4_Page_5_i1scvc.jpg",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1775392693/X14_digital_profile-v4_Page_6_odigq3.jpg"
      ]
    },
    {
      id: "06.",
      name: "AI Trainer System",
      category: "Ai Video",
      desc: "A cinematic AI-generated promo for a smart driver-training platform",
      image: "https://res.cloudinary.com/dijfcvpio/image/upload/v1787680298/AI_Training_fhfsmk.png",
      list: ["SDT", "Plug N Go", "SDTS", "Al Sarooj", "X14", "AI Trainer System", "PLUG N GO", "ARVEX"],
      client: "Yas Driving School",
      role: "AI Motion Designer",
      year: "2025",
      overview: "A cinematic AI-generated promo for a smart driver-training platform. Combines a product UI reveal — real-time driving score, reaction time, and safety metrics — with a sensor-driven vehicle sequence and animated data visualizations. Concept to final render built through an AI motion workflow.",
      challenges: "Creating a cohesive 60-second narrative that seamlessly blends product UI, real-world driving footage, and AI-generated cinematic sequences into a single compelling story.",
      solutions: "Developed an end-to-end AI motion pipeline using generative video tools, custom motion graphics, and compositing techniques to create a unified visual language that feels both high-tech and emotionally engaging.",
      resultsText: "The final deliverable is a polished, broadcast-ready promo that positions the AI Trainer System as the future of driver education — smart, safe, and fully automated.",
      resultsStats: [
        { value: "60s", label: "AI Film" },
        { value: "UI+3D", label: "Mixed Media" },
        { value: "100%", label: "AI-Driven" }
      ],
      gallery: [
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787680298/AI_Training_fhfsmk.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787680300/AI_Training_02_ty9wpu.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787680300/AI_Training_01_uems42.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787680334/Screenshot_2026-08-25_at_9.47.38_PM_gmbzml.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787680300/AI_Training_03_pmiqn0.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787680338/Screenshot_2026-08-25_at_9.46.54_PM_k2ceje.png"
      ],
      projectVideo: "https://res.cloudinary.com/dijfcvpio/video/upload/v1787681515/Ai_trainer_jta0gx.mp4"
    },
    {
      id: "07.",
      name: "PLUG N GO",
      category: "Ai Video",
      desc: "A vertical social campaign for Abu Dhabi Mobility's EV charging app",
      image: "https://res.cloudinary.com/dijfcvpio/image/upload/v1787681972/Screenshot_2026-08-25_at_10.15.50_PM_ilz2h9.png",
      list: ["SDT", "Plug N Go", "SDTS", "Al Sarooj", "X14", "AI Trainer System", "PLUG N GO", "ARVEX"],
      client: "Abu Dhabi Mobility",
      role: "AI Motion Designer",
      year: "2025",
      overview: "EV charging, made effortless. A vertical ad for Abu Dhabi Mobility that turns app onboarding into a story — hook, flow, and a full charge in a few taps. Blends a scenario-led hook with a clean app UI walkthrough — sign-up, verification, and charging in a few simple steps — closing on cinematic, captioned lifestyle footage built for feed and story placements.",
      challenges: "Creating a vertical narrative that works across multiple social formats — feed, stories, and reels — while maintaining brand consistency and clear app feature communication in under 60 seconds.",
      solutions: "Developed a modular AI motion pipeline that generates vertical content optimized for each platform. Combined AI-generated lifestyle footage with clean UI screen recordings and kinetic typography for maximum engagement.",
      resultsText: "The campaign delivered a suite of vertical assets ready for immediate deployment across Instagram, TikTok, and Snapchat — driving app downloads and brand awareness with zero traditional production overhead.",
      resultsStats: [
        { value: "60s", label: "Vertical Film" },
        { value: "3:4", label: "Aspect Ratio" },
        { value: "100%", label: "AI-Driven" }
      ],
      gallery: [
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787681972/Screenshot_2026-08-25_at_10.15.50_PM_ilz2h9.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787681970/Screenshot_2026-08-25_at_10.16.02_PM_injwao.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787681971/Screenshot_2026-08-25_at_10.16.21_PM_f3uvrb.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787681969/Screenshot_2026-08-25_at_10.16.32_PM_hy2yfq.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787681975/Screenshot_2026-08-25_at_10.16.57_PM_mpwnmk.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787681974/Screenshot_2026-08-25_at_10.17.23_PM_q22vkt.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787681977/Screenshot_2026-08-25_at_10.17.12_PM_fqmkxp.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787681971/Screenshot_2026-08-25_at_10.17.48_PM_pfbaid.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787681973/Screenshot_2026-08-25_at_10.18.03_PM_wwvfey.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787681976/Screenshot_2026-08-25_at_10.18.21_PM_hgnroi.png"
      ],
      projectVideo: "https://res.cloudinary.com/dijfcvpio/video/upload/v1787682654/Plug_N_Go_meioi4.mp4"
    },
    {
      id: "08.",
      name: "ARVEX",
      category: "Ai Video",
      desc: "A self-directed concept project exploring AI-driven product design and film",
      image: "https://res.cloudinary.com/dijfcvpio/image/upload/v1787683685/Screenshot_2026-08-25_at_10.46.14_PM_tpxym6.png",
      list: ["SDT", "Plug N Go", "SDTS", "Al Sarooj", "X14", "AI Trainer System", "PLUG N GO", "ARVEX"],
      client: "Self-Directed",
      role: "AI Motion Designer & Creative Director",
      year: "2025",
      overview: "ARVEX — RUN BEYOND LIMITS. A self-directed concept project exploring AI-driven product design and film. I built a fictional performance running shoe from the ground up — character sheet with material callouts and specs, a nine-shot storyboard with motion-control camera direction, and a cinematic hero film — proving out an end-to-end generative workflow from concept to final render.",
      challenges: "Creating a believable fictional product from scratch using only generative AI tools — from the initial shoe concept and material specifications to a fully realized cinematic film with coherent visual storytelling across all deliverables.",
      solutions: "Developed a structured generative workflow that maintained visual consistency across character sheets, storyboards, and final film output. Used precise prompting techniques and style references to ensure the ARVEX shoe looked cohesive in every frame.",
      resultsText: "The final deliverable is a complete product design concept package — character sheet, storyboard, and cinematic hero film — demonstrating a full end-to-end AI-powered creative workflow from initial concept to final render.",
      resultsStats: [
        { value: "9", label: "Storyboard Shots" },
        { value: "100%", label: "AI-Generated" },
        { value: "End-to-End", label: "Workflow" }
      ],
      gallery: [
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787683685/Screenshot_2026-08-25_at_10.46.14_PM_tpxym6.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787683687/Screenshot_2026-08-25_at_10.46.56_PM_o4gcxw.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787683685/Screenshot_2026-08-25_at_10.47.10_PM_rvtmzj.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787683683/Screenshot_2026-08-25_at_10.47.38_PM_cmr3ou.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787683433/ARVEX_Character_Sheet_zyhrhz.png",
        "https://res.cloudinary.com/dijfcvpio/image/upload/v1787683439/ARVEX_Storyboard_czxmh0.png"
      ],
      projectVideo: "https://res.cloudinary.com/dijfcvpio/video/upload/v1787683447/ARVEX_dde98x.mp4"
    }
  ];

  const faqs = [
    {
      question: "HOW DOES YOUR PROCESS WORK?",
      answer: "I start with a discovery session to understand your goals, audience, and production needs. From there I design the AI workflow, develop the creative direction, and execute — delivering assets that are ready to deploy."
    },
    {
      question: "WHAT DO YOU ACTUALLY DELIVER?",
      answer: "Depending on the project — AI production pipelines, cinematic video and motion graphics, UI/UX prototypes, generative visual systems, or complete creative productions. Everything is high-fidelity and production-ready on delivery."
    },
    {
      question: "DO YOU INCLUDE STRATEGY?",
      answer: "Always. Every project starts with understanding the why before touching any tool. Strategy is built into every phase — not bolted on at the end."
    },
    {
      question: "HOW INVOLVED DO YOU NEED TO BE?",
      answer: "Your input matters most at the start and at key decision points. Once direction is locked, I handle the full execution — you stay informed without getting buried in the process."
    },
    {
      question: "HOW MANY REVISIONS ARE INCLUDED?",
      answer: "Two structured revision rounds are included in every project. I work with precision from the start so revisions are refinements, not restarts."
    },
    {
      question: "WHAT HAPPENS AFTER DELIVERY?",
      answer: "You get full ownership of all deliverables. I include a handoff session and a post-delivery support window for refinements, or team onboarding on any AI workflows built for you."
    }
  ];

  const services = [
    {
      id: "01.",
      title: "Generative Design",
      description: "Crafting high-end cinematic assets and visual narratives where AI becomes the brush, not the artist.",
      image: "https://res.cloudinary.com/dijfcvpio/image/upload/v1777138471/Generative_design_zwhv4n.jpg",
      tags: ["AI Motion", "Cinematic Assets", "Generative Art", "Visual Storytelling"]
    },
    {
      id: "02.",
      title: "Motion Graphics & VFX",
      description: "High-impact 3D animations and visual effects that translate complex technical concepts into stories people actually feel.",
      image: "https://res.cloudinary.com/dijfcvpio/image/upload/v1777138471/Motion_graphics_ljk98e.jpg",
      tags: ["3D Animation", "VFX", "Cinema 4D", "After Effects"]
    },
    {
      id: "03.",
      title: "Digital Product Design",
      description: "User-centric UI/UX and prototyping for complex platforms, specializing in Smart City and Government Platforms.",
      image: "https://res.cloudinary.com/dijfcvpio/image/upload/v1777138472/UI_UX_omfhdz.jpg",
      tags: ["UI/UX Design", "Digital Prototyping", "Product Strategy", "User Research"]
    },
    {
      id: "04.",
      title: "AI Strategy & Workflows",
      description: "Architecting end-to-end AI pipelines that compress production timelines without compromising creative integrity.",
      image: "https://res.cloudinary.com/dijfcvpio/image/upload/v1777140383/AI_Strategy_i4pop8.jpg",
      tags: ["AI Integration", "Workflow Optimization", "Generative Synthesis", "Process Design"]
    },
    {
      id: "05.",
      title: "High-End Presentations",
      description: "Transforming complex data and technical narratives into high-stakes presentation decks that command attention and drive decisions.",
      image: "https://res.cloudinary.com/dijfcvpio/image/upload/v1777140648/Presentations_01_udv9i8.jpg",
      tags: ["Pitch Decks", "Investor Presentations", "Visual Storytelling", "Technical Narratives"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dubai",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = ['home', 'about', 'works', 'services', 'faq', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => console.log("API Connection:", data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  useEffect(() => {
    if (selectedProject !== null) {
      window.scrollTo(0, 0);
    }
  }, [selectedProject]);

  return (
    <main className="relative min-h-screen w-full bg-black text-white font-sans selection:bg-neon selection:text-black flex flex-col overflow-x-hidden scroll-smooth">
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: "-100%",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[1000] bg-neon flex items-center justify-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <svg 
                viewBox="0 0 219 222" 
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <motion.polyline 
                    points="122.19 147.35 81.72 167.45 48.79 167.45 111.3 57.77 187.91 168.32 116.61 77.31 88.98 147.63 121.91 147.35"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ pathLength: 0, fill: "rgba(255, 255, 255, 0)" }}
                    animate={{ 
                      pathLength: 1,
                      fill: "rgba(255, 255, 255, 1)",
                    }}
                    transition={{ 
                      pathLength: { duration: 2, ease: "easeInOut" },
                      fill: { duration: 1, delay: 1.5, ease: "easeIn" }
                    }}
                  />
                  <motion.polygon 
                    points="122.88 145.02 93.72 145.02 117.25 81.95 185.25 168.32 145.9 168.32 117.3 117.25 111.16 134.7 122.88 145.02"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ pathLength: 0, fill: "rgba(255, 255, 255, 0)" }}
                    animate={{ 
                      pathLength: 1,
                      fill: "rgba(255, 255, 255, 1)",
                    }}
                    transition={{ 
                      pathLength: { duration: 2, ease: "easeInOut" },
                      fill: { duration: 1, delay: 1.5, ease: "easeIn" }
                    }}
                  />
                </g>
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Background Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "-20%", 
              rotate: Math.random() * 360,
              opacity: 0 
            }}
            animate={{ 
              y: ["-20%", "120%"],
              opacity: [0, 0.15, 0],
              rotate: [0, 45, 90]
            }}
            transition={{ 
              duration: 15 + Math.random() * 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 3
            }}
            className="absolute w-[1px] h-[40vh] bg-gradient-to-b from-transparent via-neon/40 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              filter: "blur(2px)"
            }}
          />
        ))}
        {/* Horizontal Lines */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            initial={{ 
              x: "-20%", 
              y: Math.random() * 100 + "%", 
              rotate: Math.random() * 360,
              opacity: 0 
            }}
            animate={{ 
              x: ["-20%", "120%"],
              opacity: [0, 0.1, 0],
              rotate: [0, -30, -60]
            }}
            transition={{ 
              duration: 20 + Math.random() * 25, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 5
            }}
            className="absolute h-[1px] w-[40vw] bg-gradient-to-r from-transparent via-neon/30 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              filter: "blur(3px)"
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedProject !== null ? (
          <motion.div
            key="project-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 w-full min-h-screen bg-black"
          >
            {/* Project Detail Header */}
            <div className="fixed top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-50 mix-blend-difference">
              <button 
                onClick={() => {
                  setSelectedProject(null);
                }}
                className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-neon transition-colors"
              >
                <span>←</span> Back to Home
              </button>
              <div className="text-xs font-bold uppercase tracking-widest opacity-50">
                Project {projects[selectedProject].id}
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[70vh] md:h-screen relative overflow-hidden">
              <motion.img 
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src={projects[selectedProject].image} 
                alt={projects[selectedProject].name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                <div className="max-w-7xl mx-auto">
                  <motion.h1 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-6xl md:text-[10vw] font-display uppercase tracking-tighter leading-none mb-8"
                  >
                    {projects[selectedProject].name}
                  </motion.h1>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-8">
                <h2 className="text-xs font-bold uppercase tracking-widest text-neon mb-8">Overview</h2>
                <p className="text-2xl md:text-4xl font-light leading-tight opacity-80">
                  {projects[selectedProject].overview}
                </p>
              </div>
              <div className="lg:col-span-4 space-y-12">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Client</h3>
                  <p className="text-xl uppercase tracking-tighter">{projects[selectedProject].client}</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Role</h3>
                  <p className="text-xl uppercase tracking-tighter">{projects[selectedProject].role}</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Year</h3>
                  <p className="text-xl uppercase tracking-tighter">{projects[selectedProject].year}</p>
                </div>
              </div>
            </div>

            {/* Challenges & Solutions */}
            {(projects[selectedProject].challenges || projects[selectedProject].solutions) && (
              <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/10 space-y-32">
                {projects[selectedProject].challenges && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                      <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tighter text-white/30">
                        Challenges<span className="text-neon">.</span>
                      </h2>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-xl md:text-2xl font-light leading-relaxed opacity-70">
                        {projects[selectedProject].challenges}
                      </p>
                    </div>
                  </div>
                )}

                {projects[selectedProject].solutions && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                      <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tighter text-white/30">
                        Solutions<span className="text-neon">.</span>
                      </h2>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-xl md:text-2xl font-light leading-relaxed opacity-70">
                        {projects[selectedProject].solutions}
                      </p>
                    </div>
                  </div>
                )}

                {projects[selectedProject].resultsText && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                      <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tighter text-white/30">
                        Results<span className="text-neon">.</span>
                      </h2>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-xl md:text-2xl font-light leading-relaxed opacity-70 mb-12">
                        {projects[selectedProject].resultsText}
                      </p>
                      
                      {projects[selectedProject].resultsStats && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
                          {projects[selectedProject].resultsStats.map((stat: any, i: number) => (
                            <div key={i}>
                              <div className="text-4xl md:text-6xl font-display text-neon mb-2">{stat.value}</div>
                              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Gallery */}
            <div className="w-full pb-24">
              {projects[selectedProject].name === "PLUG N GO" ? (
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects[selectedProject].gallery.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                      >
                        <img
                          src={img}
                          alt={`Gallery ${i}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-12">
                  {projects[selectedProject].gallery.map((img, i) => (
                    <div key={i} className="max-w-7xl mx-auto px-6 md:px-12">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                      >
                        <img
                          src={img}
                          alt={`Gallery ${i}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              )}

              {projects[selectedProject].projectVideo && (
                <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${projects[selectedProject].name === "PLUG N GO" ? "aspect-[9/16] max-w-[400px]" : "aspect-video"}`}
                  >
                    <video
                      src={projects[selectedProject].projectVideo}
                      controls
                      className="w-full h-full object-contain"
                      poster={projects[selectedProject].image}
                      playsInline
                    />
                  </motion.div>
                </div>
              )}
            </div>

            {/* Next Project / Other Works */}
            <div className="border-t border-white/10 bg-white/[0.02] py-32 px-6 md:px-12">
              <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-12">Next Project</h2>
                <button 
                  onClick={() => {
                    const nextIdx = (selectedProject + 1) % projects.length;
                    setSelectedProject(nextIdx);
                    window.scrollTo(0, 0);
                  }}
                  className="group"
                >
                  <span className="text-5xl md:text-8xl font-display uppercase tracking-tighter block mb-4 group-hover:text-neon transition-colors">
                    {projects[(selectedProject + 1) % projects.length].name}
                  </span>
                  <div className="flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold uppercase tracking-widest">View Project</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </div>

            {/* Footer for Detail Page */}
            <footer className="p-6 md:p-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4">
                <img 
                  src="https://res.cloudinary.com/dijfcvpio/image/upload/v1775412441/AR_Logo_wnsauc.svg" 
                  alt="AR Logo" 
                  className="h-8 w-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                  © 2026 Ashikh Rahman. All rights reserved.
                </div>
              </div>
              <button 
                onClick={() => {
                  setSelectedProject(null);
                }}
                className="text-xs font-bold uppercase tracking-widest hover:text-neon transition-colors"
              >
                Back to Home
              </button>
            </footer>
          </motion.div>
        ) : (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative"
          >
      
      {/* Header */}
      <header className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2, ease: "linear" }}
          className="cursor-pointer" 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img 
            src="https://res.cloudinary.com/dijfcvpio/image/upload/v1775412441/AR_Logo_wnsauc.svg" 
            alt="AR Logo" 
            className="h-16 md:h-20 w-auto"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="flex items-center gap-6 md:gap-8">
          {/* Time Zone */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.5, ease: "linear", delay: 0.5 }}
            className="hidden md:flex flex-col items-end leading-none"
          >
            <span className="text-sm font-bold uppercase tracking-tight">{time.split(' ')[0]} {time.split(' ')[1]}</span>
            <span className="text-[10px] opacity-50 font-bold uppercase tracking-widest mt-1">(GMT+4)</span>
          </motion.div>

          {/* Let's Talk Button */}
          <motion.a
            href="mailto:hey@ashikh.studio"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 107, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
          >
            Let's Talk
          </motion.a>

          {/* Hamburger Menu */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="group relative w-12 h-12 rounded-full border border-white/20 flex flex-col items-center justify-center gap-1.5 hover:bg-neon/10 transition-all duration-300"
          >
            <div className="w-5 h-[1.5px] bg-white transition-all duration-300 group-hover:translate-x-1" />
            <div className="w-5 h-[1.5px] bg-white transition-all duration-300 group-hover:-translate-x-1" />
          </button>
        </div>
      </header>

      {/* Side Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[100] w-full md:w-[450px] bg-[#0a0a0a] flex flex-col p-8 md:p-12 border-l border-white/5 shadow-2xl"
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center w-full pb-8 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Menu</span>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-neon/10 transition-colors group"
                >
                  <div className="relative w-4 h-4">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white rotate-45" />
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white -rotate-45" />
                  </div>
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex-grow flex flex-col justify-center space-y-6 md:space-y-10">
                {['Home', 'About', 'Works', 'Contact'].map((item, i) => {
                  const sectionId = item.toLowerCase();
                  const isActive = activeSection === sectionId || (item === 'Home' && activeSection === 'home');
                  
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                      className="group flex items-center gap-4"
                    >
                      <button
                        onClick={() => {
                          setIsMenuOpen(false);
                          if (item === 'Home') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                          else document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`text-5xl md:text-7xl font-display uppercase tracking-tighter transition-colors text-left ${isActive ? 'text-neon' : 'hover:text-neon'}`}
                      >
                        {item}
                      </button>
                      {isActive && <div className="w-2 h-2 md:w-3 md:h-3 bg-neon mt-2" />}
                    </motion.div>
                  );
                })}
              </div>

              {/* Menu Footer */}
              <div className="mt-auto pt-12 space-y-12">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">(Email)</span>
                  <a href="mailto:hey@ashikh.studio" className="block text-xl md:text-2xl font-display uppercase text-neon hover:underline">
                    hey@ashikh.studio
                  </a>
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">(Socials)</span>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {[
                      { name: 'Instagram', url: '#' },
                      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ashikh/' },
                      { name: 'Twitter', url: '#' },
                      { name: 'Dribbble', url: '#' }
                    ].map((social) => (
                      <a 
                        key={social.name} 
                        href={social.url} 
                        target={social.url !== '#' ? "_blank" : undefined}
                        rel={social.url !== '#' ? "noopener noreferrer" : undefined}
                        className="text-[10px] font-bold uppercase tracking-widest hover:text-neon transition-colors flex items-center gap-1"
                      >
                        {social.name} <ArrowUpRight className="w-2.5 h-2.5 opacity-50" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Landing Section */}
      <section id="home" className="relative w-full min-h-screen p-6 md:p-8 pt-24 md:pt-32 flex flex-col justify-between overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 pointer-events-none"
          preload="auto"
          poster="https://res.cloudinary.com/dijfcvpio/image/upload/v1775582417/EV_branding_uz0df3.jpg"
        >
          <source src="https://res.cloudinary.com/dijfcvpio/video/upload/v1779718375/BG_03_wtliuv.mp4" type="video/mp4" />
        </video>
        
        {/* Top Section */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-4 relative z-10">
          <div className="col-span-12 md:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[22vw] md:text-[18vw] leading-[0.8] font-display text-neon uppercase tracking-tighter"
            >
              ashikh
            </motion.h1>
          </div>
          <div className="col-span-12 md:col-span-4 pt-4 md:pt-12 flex justify-start md:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "linear", delay: 0.2 }}
              className="max-w-xs text-left md:text-right"
            >
              <h2 className="text-3xl md:text-5xl font-display uppercase leading-[0.9] tracking-tighter text-left md:text-right">
                { "I don't follow the brief. I hunt what's behind it".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "linear", delay: 0.3 + (i * 0.05) }}
                    className={word === "brief." || word === "hunt" || word === "behind" ? "text-neon" : ""}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </h2>
              <div className="mt-8 flex items-stretch justify-end gap-4">
                <div className="text-right flex flex-col justify-center">
                  <motion.p 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "linear", delay: 0.6 }}
                    className="text-neon font-bold text-2xl uppercase tracking-tighter leading-none"
                  >
                    Ashikh Rahman
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 0.5, x: 0 }}
                    transition={{ duration: 0.4, ease: "linear", delay: 0.7 }}
                    className="text-[10px] uppercase tracking-widest mt-2 leading-relaxed max-w-[280px] ml-auto"
                  >
                    AI-Powered Creative Strategist | Generative Design Specialist | Digital Product & Motion Graphics Expert
                  </motion.p>
                </div>
                <motion.div 
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.8, ease: "linear", delay: 0.5 }}
                  className="w-[2px] bg-neon origin-top" 
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Middle Section - Vertical Lines */}
        <div className="relative z-10 flex justify-between h-64 my-12 w-full px-0">
          {/* Phase 1 */}
          <div className="relative flex flex-col justify-between border-l border-white/10 pl-2 h-full">
            <span className="text-[10px] opacity-40 font-mono">001</span>
            <div className="text-[10px] font-bold tracking-tighter uppercase">
              Phase/<span className="text-neon">Break</span>
              <div className="flex gap-1 mt-1.5 items-center">
                <motion.div 
                  animate={{ opacity: [0.6, 1, 0.6], width: [8, 16, 8] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="h-1 bg-neon rounded-none" 
                />
                <motion.div 
                  animate={{ opacity: [0.3, 1, 0.3], x: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
                  className="w-1 h-1 bg-neon/60 rounded-none" 
                />
                <motion.div 
                  animate={{ opacity: [0.2, 1, 0.2], x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.4 }}
                  className="w-1 h-1 bg-neon/30 rounded-none" 
                />
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative flex flex-col justify-between border-l border-white/10 pl-2 h-full">
            <span className="text-[10px] opacity-40 font-mono">002</span>
            <div className="text-[10px] font-bold tracking-tighter uppercase">
              Phase/<span className="text-neon">Build</span>
              <div className="flex gap-1 mt-1.5 items-center">
                <motion.div 
                  animate={{ opacity: [0.6, 1, 0.6], width: [8, 16, 8] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="h-1 bg-neon rounded-none" 
                />
                <motion.div 
                  animate={{ opacity: [0.3, 1, 0.3], x: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
                  className="w-1 h-1 bg-neon/60 rounded-none" 
                />
                <motion.div 
                  animate={{ opacity: [0.2, 1, 0.2], x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.4 }}
                  className="w-1 h-1 bg-neon/30 rounded-none" 
                />
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative flex flex-col justify-between border-l border-white/10 pl-2 h-full">
            <span className="text-[10px] opacity-40 font-mono">003</span>
            <div className="text-[10px] font-bold tracking-tighter uppercase">
              Phase/<span className="text-neon">Bend</span>
              <div className="flex gap-1 mt-1.5 items-center">
                <motion.div 
                  animate={{ opacity: [0.6, 1, 0.6], width: [8, 16, 8] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="h-1 bg-neon rounded-none" 
                />
                <motion.div 
                  animate={{ opacity: [0.3, 1, 0.3], x: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
                  className="w-1 h-1 bg-neon/60 rounded-none" 
                />
                <motion.div 
                  animate={{ opacity: [0.2, 1, 0.2], x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.4 }}
                  className="w-1 h-1 bg-neon/30 rounded-none" 
                />
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="relative flex flex-col justify-between border-l border-white/10 pl-2 h-full">
            <span className="text-[10px] opacity-40 font-mono">004</span>
            <div className="text-[10px] font-bold tracking-tighter uppercase">
              Phase/<span className="text-neon">UNLEASH</span>
              <div className="flex gap-1 mt-1.5 items-center">
                <motion.div 
                  animate={{ opacity: [0.6, 1, 0.6], width: [8, 16, 8] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="h-1 bg-neon rounded-none" 
                />
                <motion.div 
                  animate={{ opacity: [0.3, 1, 0.3], x: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
                  className="w-1 h-1 bg-neon/60 rounded-none" 
                />
                <motion.div 
                  animate={{ opacity: [0.2, 1, 0.2], x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.4 }}
                  className="w-1 h-1 bg-neon/30 rounded-none" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-4 items-end relative z-10">
          <div className="col-span-12 md:col-span-4 pb-6 w-full">
            <div className="flex gap-8 items-end justify-between md:justify-start">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "linear" }}
                className="text-[10px] font-bold leading-none"
              >
                <p className="opacity-50">10X AR</p>
                <p className="text-neon mt-1">2026</p>
              </motion.div>
              <div className="flex gap-2">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: 96 }}
                  transition={{ duration: 0.8, ease: "linear" }}
                  className="w-[1px] bg-white/20" 
                />
                <ul className="text-[10px] md:text-xs font-bold uppercase tracking-tight space-y-1">
                  {['Generative Design', 'AI Motion', 'Graphic Design', 'Presentation Design', 'UI/UX & Digital Prototyping'].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, ease: "linear", delay: 0.8 + (i * 0.1) }}
                      whileHover={{ x: 5, color: "#FF6B00" }}
                      className="cursor-default transition-colors"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 text-right w-full">
            <motion.h1 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-[22vw] md:text-[18vw] leading-[0.8] font-display text-neon uppercase tracking-tighter"
            >
              rahman
            </motion.h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative w-full min-h-screen p-6 md:p-12 flex flex-col justify-center bg-black border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative">
          
          {/* Signature where image was */}
          <div className="md:col-span-4 flex justify-center items-center relative h-full min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ 
                opacity: [0, 0.5, 1],
                scale: [0.8, 1.1, 1],
                rotate: [-5, -15, -10]
              }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "linear" }}
              className="text-neon font-script text-[12vw] md:text-[8vw] leading-none select-none"
            >
              Ashikh
            </motion.div>
          </div>

          {/* About Text */}
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "linear" }}
            >
              <div className="flex items-center gap-2 mb-8">
                <span className="text-neon font-bold text-xs tracking-[0.2em] uppercase">WHO I AM!</span>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, ease: "linear" }}
                  className="h-[1px] bg-neon/30" 
                />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase leading-[1.1] tracking-tight mb-12 max-w-4xl">
                { "Most creatives follow the brief. I hunt what's behind it — the real problem, the missed opportunity, the thing nobody said out loud. I build AI-powered workflows, generative visual systems, and digital products for brands that operate at the top. Based in the UAE. Working everywhere".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2, ease: "linear", delay: i * 0.01 }}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </h2>
              <button className="group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neon transition-all duration-300 shadow-lg shadow-white/5">
                Email me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="max-w-7xl mx-auto w-full mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          {[
            { label: "40+", title: "PROJECTS", sub: "AI & CREATIVE PRODUCTIONS", desc: "Across motion, design, and digital platforms" },
            { label: "15+", title: "CLIENTS", sub: "REGIONAL & GLOBAL", desc: "Government, mobility, and private sector" },
            { label: "14+", title: "YEARS", sub: "INDUSTRY EXPERIENCE", desc: "Across 3D, VFX, design, and AI" },
            { label: "4", title: "AWARDS", sub: "RECOGNIZED WORK", desc: "Regional and international recognition" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col group"
            >
              <span className="text-5xl md:text-6xl font-display text-neon mb-2 group-hover:scale-110 transition-transform duration-300 origin-left">{stat.label}</span>
              <span className="text-3xl md:text-4xl font-display uppercase tracking-tighter mb-6">{stat.title}</span>
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-tight text-white/90">{stat.sub}</p>
                <p className="text-[11px] opacity-40 uppercase tracking-tight leading-relaxed max-w-[200px]">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Marquee */}
        <div className="w-full mt-32 py-24 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20"
            >
              Selected Clients & Collaborations
            </motion.span>
          </div>
          
          <div className="flex overflow-hidden relative">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap gap-24 items-center pr-24"
            >
              {[
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775391527/AD-Mobility-Master-Bilingual-Identity-Full-Colour-V2_zgj8zz.png",
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775391586/x14_holding_e7eawa.png",
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775389125/Ajman_mikved.png",
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775390871/ADM_xov0bb.png",
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775391509/HMMC_Logo2_nrysgw.png",
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775390895/Sharjah_sc4g4u.png",
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775389755/yda-white-h.69e0a77a_ka19nk.png",
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775390905/kabrimini_nhcfi5.png"
              ].map((logo, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-center min-w-[120px] md:min-w-[180px] opacity-50 hover:opacity-100 transition-all duration-500 cursor-default group"
                >
                  <img 
                    src={logo} 
                    alt="Client Logo" 
                    className="h-8 md:h-12 w-auto object-contain brightness-0 invert"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775391527/AD-Mobility-Master-Bilingual-Identity-Full-Colour-V2_zgj8zz.png",
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775391586/x14_holding_e7eawa.png",
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775389125/Ajman_mikved.png",
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775390871/ADM_xov0bb.png",
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775391509/HMMC_Logo2_nrysgw.png",
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775390895/Sharjah_sc4g4u.png",
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775389755/yda-white-h.69e0a77a_ka19nk.png",
                "https://res.cloudinary.com/dijfcvpio/image/upload/v1775390905/kabrimini_nhcfi5.png"
              ].map((logo, i) => (
                <div 
                  key={`dup-${i}`} 
                  className="flex items-center justify-center min-w-[120px] md:min-w-[180px] opacity-50 hover:opacity-100 transition-all duration-500 cursor-default group"
                >
                  <img 
                    src={logo} 
                    alt="Client Logo" 
                    className="h-8 md:h-12 w-auto object-contain brightness-0 invert"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
            
            {/* Gradient Fades */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
          </div>
        </div>

      </section>

      {/* Works Section */}
      <section id="works" className="relative w-full min-h-screen p-6 md:p-12 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter text-white">Selected Works</h2>
            <div className="h-[1px] flex-grow bg-white/10" />
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {["All", "Ai Video", "Branding", "Motion Graphics"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  const container = document.getElementById("projects-container");
                  if (container) container.scrollTo({ left: 0, behavior: "smooth" });
                }}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-neon text-black border-neon"
                    : "bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Container */}
          <div className="relative group/works">
            <div
              id="projects-container"
              className="flex overflow-x-auto gap-6 lg:gap-8 pb-12 no-scrollbar scroll-smooth snap-x snap-mandatory px-4 -mx-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {projects
                .filter(
                  (project) =>
                    activeCategory === "All" || project.category === activeCategory
                )
                .map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative group shrink-0 w-[85vw] md:w-[45vw] lg:w-[320px] xl:w-[350px] h-[550px] lg:h-[600px] rounded-[3rem] overflow-hidden cursor-pointer bg-neutral-900 border border-white/5 snap-start"
                  onClick={() => setSelectedProject(projects.indexOf(project))}
                >
                  {/* Background Image with optimized loading */}
                  <div className="absolute inset-0 transform transition-transform duration-1000 group-hover:scale-110">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className={`w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 ${project.position || 'object-center'}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                  
                  {/* Top right icon button */}
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-500 md:group-hover:bg-neon md:group-hover:text-black md:group-hover:border-neon md:group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500" />
                  </div>

                  {/* Content Container */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <motion.div className="space-y-4">
                      <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter leading-[0.9] text-white">
                        {project.name}
                      </h3>
                      <p className="text-sm text-white/50 uppercase tracking-tight leading-relaxed max-w-[250px] line-clamp-3">
                        {project.desc}
                      </p>
                    </motion.div>

                    {/* pill button at bottom */}
                    <motion.div className="mt-8 overflow-hidden">
                      <div className="w-full bg-white text-black py-4 md:py-5 rounded-full flex items-center justify-between px-6 md:px-8 translate-y-4 opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out shadow-2xl shadow-white/10">
                        <span className="text-xs font-black uppercase tracking-[0.2em]">View Case Study</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll Buttons - Moved to bottom */}
            <div className="flex items-center justify-center gap-6 mt-12 pb-12 border-b border-white/5">
              <button 
                onClick={() => {
                  const container = document.getElementById('projects-container');
                  if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
                }}
                className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white/40 hover:text-neon transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-neon flex items-center justify-center transition-all">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                Prev Projects
              </button>
              <div className="w-24 h-[1px] bg-white/10" />
              <button 
                onClick={() => {
                  const container = document.getElementById('projects-container');
                  if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
                }}
                className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white/40 hover:text-neon transition-colors"
              >
                Next Projects
                <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-neon flex items-center justify-center transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative w-full min-h-screen p-6 md:p-12 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">Services I Provide</h2>
            <div className="h-[1px] flex-grow bg-white/10" />
          </motion.div>

          <div className="flex flex-col">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
                className="group border-b border-white/10 cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center py-12 gap-8 lg:gap-16">
                  {/* Service Number */}
                  <div className="flex items-center gap-2">
                    <span className={`text-6xl md:text-8xl font-display transition-colors duration-500 ${activeService === index ? 'text-neon' : 'text-white/10 group-hover:text-white/30'}`}>
                      {service.id}
                    </span>
                    <div className={`w-2 h-2 rounded-full bg-neon transition-opacity duration-500 ${activeService === index ? 'opacity-100' : 'opacity-0'}`} />
                  </div>

                  {/* Expanded Content */}
                  <motion.div 
                    className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden"
                    initial={false}
                    animate={{ 
                      height: activeService === index ? 'auto' : '100px',
                      opacity: 1
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {activeService === index ? (
                      <>
                        {/* Image */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="lg:col-span-5 aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5"
                        >
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>

                        {/* Details */}
                        <div className="lg:col-span-7 space-y-6">
                          <div>
                            <motion.h3 
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, ease: "linear" }}
                              className="text-4xl md:text-6xl font-display uppercase tracking-tighter mb-4"
                            >
                              {service.title}
                            </motion.h3>
                            <motion.p 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 0.5, y: 0 }}
                              transition={{ duration: 0.4, ease: "linear", delay: 0.1 }}
                              className="text-lg md:text-xl uppercase tracking-tight max-w-md"
                            >
                              {service.description}
                            </motion.p>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-3">
                            {service.tags.map((tag, tIndex) => (
                              <motion.span 
                                key={tIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, ease: "linear", delay: 0.2 + (tIndex * 0.05) }}
                                whileHover={{ scale: 1.1, borderColor: "#FF5F1F", color: "#FF5F1F" }}
                                className="px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60 cursor-default transition-all duration-300"
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="lg:col-span-12 flex justify-end items-center h-full">
                        <h3 className="text-4xl md:text-6xl font-display uppercase tracking-tighter text-white/10 group-hover:text-white/30 transition-colors duration-500">
                          {service.title}
                        </h3>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative w-full min-h-screen p-6 md:p-12 bg-black border-t border-white/5 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Title & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[15vw] lg:text-[10vw] font-display uppercase leading-none tracking-tighter mb-4"
              >
                FAQ
              </motion.h2>
              <p className="text-xs font-bold uppercase tracking-widest opacity-40">Frequently asked questions</p>
            </div>

            <div className="space-y-8 mt-24 lg:mt-0">
              <div className="space-y-2">
                <h3 className="text-xl font-bold uppercase tracking-tight">Got Questions?</h3>
                <p className="text-sm opacity-50 max-w-xs">Need help with something? I'm here to make things easy. Don't hesitate to reach out.</p>
              </div>
              <button className="group flex items-center justify-center gap-4 bg-white text-black w-full max-w-sm py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-neon transition-all duration-300">
                Book a call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Side: Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 border ${openFaq === index ? 'bg-white/5 border-neon/50' : 'bg-white/[0.02] border-white/5 hover:border-neon/20'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <span className={`text-xl md:text-2xl font-display uppercase tracking-tight transition-colors duration-300 ${openFaq === index ? 'text-neon' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${openFaq === index ? 'border-neon bg-neon text-black rotate-45' : 'border-white/20 text-white/40 group-hover:border-neon/40'}`}>
                    <span className="text-xl leading-none">+</span>
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 pt-0">
                    <p className="text-sm md:text-base opacity-60 leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="relative w-full min-h-screen p-6 md:p-12 bg-black border-t border-white/5 flex flex-col justify-between overflow-hidden">
        {/* Top Part of Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-24">
          {/* Left Side: Image and Text */}
          <div className="lg:col-span-6 relative">
            <div className="flex items-start gap-8">
              <div className="w-2 h-2 rounded-full bg-neon mt-2" />
              <div className="space-y-12">
                <div className="relative w-48 h-64 rounded-xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src="https://res.cloudinary.com/dijfcvpio/image/upload/v1784225612/hf_20260411_172042_4436ec7e-0807-410e-83d2-ee55d8561ce8_2_evxe3l.png" 
                    alt="Ashikh"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-6 max-w-xs">
                  <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">
                    Let's create something extraordinary together.
                  </p>
                  <p className="text-[10px] opacity-40 uppercase tracking-tight leading-relaxed">
                    Hit me up if you're looking for a fast, reliable creative strategist who can bring your vision to life
                  </p>
                </div>
              </div>
            </div>

            {/* Large Background Name & Signature */}
            <div className="absolute -bottom-32 -left-12 pointer-events-none select-none">
              <div className="relative">
                <h2 className="text-[15vw] font-display uppercase leading-none text-white/[0.03] whitespace-nowrap">
                  ASHIKH RAHMAN
                </h2>
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 text-neon font-script text-[10vw] leading-none -rotate-12 opacity-80">
                  Ashikh
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Email Pill */}
          <div className="lg:col-span-6 flex justify-end items-start pt-12 lg:pt-0">
            <motion.a
              href="mailto:hey@ashikh.studio"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="bg-white/5 border border-white/10 rounded-full px-12 py-10 md:px-20 md:py-16 flex items-center justify-center transition-all duration-500 group-hover:bg-white/10 group-hover:border-neon/50">
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase tracking-tighter flex items-center gap-2">
                  Hey<span className="text-neon">@</span>Ashikh.studio
                </h3>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-neon/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.a>
          </div>
        </div>

        {/* Bottom Part: Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-48 pb-12">
          <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-end">
            <div className="flex items-center gap-4">
              <img 
                src="https://res.cloudinary.com/dijfcvpio/image/upload/v1775412441/AR_Logo_wnsauc.svg" 
                alt="AR Logo" 
                className="h-10 w-auto"
                referrerPolicy="no-referrer"
              />
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                © 2026 Ashikh Rahman. All rights reserved.
              </div>
            </div>
          </div>
          
          <div className="md:col-span-6 lg:col-span-5 grid grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Quick Links</span>
              <ul className="space-y-3">
                {['Home', 'About', 'Works', 'Services', 'FAQ'].map((item, i) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "linear", delay: i * 0.1 }}
                  >
                    <button 
                      onClick={() => {
                        if (item === 'Home') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                        else document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-[10px] font-bold uppercase tracking-widest hover:text-neon transition-colors"
                    >
                      {item}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Portfolio */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Portfolio</span>
              <ul className="space-y-3">
                {['Contra', 'Dribbble', 'Behance'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-neon transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Social</span>
              <ul className="space-y-3">
                {[
                  { name: 'Instagram', url: '#' },
                  { name: 'Linkedin', url: 'https://www.linkedin.com/in/ashikh/' },
                  { name: 'Twitter "X"', url: '#' },
                  { name: 'Youtube', url: '#' }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.url} 
                      target={item.url !== '#' ? "_blank" : undefined}
                      rel={item.url !== '#' ? "noopener noreferrer" : undefined}
                      className="text-[10px] font-bold uppercase tracking-widest hover:text-neon transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
