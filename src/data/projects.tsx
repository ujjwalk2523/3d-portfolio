import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight, CheckCircle2, Terminal, Layers, Database, Mic, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { SiThreedotjs, SiSpringboot, SiSolidity, SiEthereum, SiPython, SiOpenjdk, SiApachemaven, SiHtml5, SiCss3, SiGooglegemini, SiFirebase, SiPrisma, SiPostgresql, SiRender } from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-wrap items-center justify-start gap-3 my-4 mb-8">
      {live && live !== "#" && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <Button variant={"default"} size={"sm"} className="gap-2 font-medium">
            <span>Visit Website</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </a>
      )}
      {repo && repo !== "#" && (
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <Button variant={"outline"} size={"sm"} className="gap-2 font-medium">
            <span>GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </a>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind CSS", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  firebase: brand("Firebase", "firebase-mono.svg"),
  socketio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  spline: {
    title: "Spline 3D",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  // Custom skills for Ujjwal's projects
  gemini: {
    title: "Google Gemini",
    bg: "black",
    fg: "white",
    icon: <SiGooglegemini className="w-full h-full" />,
  },
  vapi: {
    title: "Vapi AI (Voice)",
    bg: "black",
    fg: "white",
    icon: <Mic className="w-full h-full" />,
  },
  firestore: {
    title: "Cloud Firestore",
    bg: "black",
    fg: "white",
    icon: <Database className="w-full h-full" />,
  },
  render: {
    title: "Render",
    bg: "black",
    fg: "white",
    icon: <SiRender className="w-full h-full" />,
  },
  recharts: {
    title: "Recharts",
    bg: "black",
    fg: "white",
    icon: <TrendingUp className="w-full h-full" />,
  },
  java: {
    title: "Java 17",
    bg: "black",
    fg: "white",
    icon: <SiOpenjdk />,
  },
  springboot: {
    title: "Spring Boot 3",
    bg: "black",
    fg: "white",
    icon: <SiSpringboot />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  h2: {
    title: "H2 In-Memory DB",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">H2</span>,
  },
  springDataJpa: {
    title: "Spring Data JPA",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">JPA</span>,
  },
  restApi: {
    title: "RESTful API",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">REST</span>,
  },
  ethereum: {
    title: "Ethereum",
    bg: "black",
    fg: "white",
    icon: <SiEthereum />,
  },
  solidity: {
    title: "Solidity",
    bg: "black",
    fg: "white",
    icon: <SiSolidity />,
  },
  hardhat: {
    title: "Hardhat",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">HH</span>,
  },
  metamask: {
    title: "MetaMask",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">🦊</span>,
  },
  ml: {
    title: "ML / Scikit-Learn",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  html5: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css3: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "levelift",
    category: "AI & Voice Platform",
    title: "LeveLift — AI Mock Interview Platform",
    src: "/assets/projects-screenshots/levelift/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vapi,
      ],
      backend: [
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.firestore,
        PROJECT_SKILLS.restApi,
      ],
    },
    live: "https://ai-mock-interviews-ochre-beta.vercel.app/",
    github: "https://github.com/ujjwalk2523/ai-mock-interviews",
    get content() {
      return (
        <div className="space-y-4 sm:space-y-6">
          <p className="font-mono text-base sm:text-lg md:text-xl font-bold text-left sm:text-center text-foreground leading-snug">
            🎙️ Real-Time AI Voice Mock Interview Platform &amp; Intelligent Evaluation System
          </p>
          <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <strong>LeveLift</strong> is an AI-powered voice mock interview platform that simulates realistic job interviews in real time. Built with <strong>Next.js 15 (App Router)</strong>, <strong>React 19</strong>, <strong>Vapi AI Web SDK</strong> for natural conversational speech, and <strong>Google Gemini (gemini-2.5-flash)</strong> for dynamic role-specific question generation and comprehensive performance evaluation.
          </p>
          <ProjectsLinks
            live="https://ai-mock-interviews-ochre-beta.vercel.app/"
            repo="https://github.com/ujjwalk2523/ai-mock-interviews"
          />

          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">✨ Key Highlights &amp; Features</TypographyH3>
          <ul className="space-y-2 font-mono text-xs sm:text-sm text-muted-foreground list-disc ml-4 sm:ml-5">
            <li>
              <strong>Real-Time Voice Interviews:</strong> Natural, low-latency conversational interviews powered by the Vapi AI Web SDK with live speech synthesis, recognition, and interactive glowing audio waveforms.
            </li>
            <li>
              <strong>Dynamic AI Question Generation:</strong> Context-aware question synthesis tailored to exact job roles, experience levels (Junior, Mid, Senior), and target tech stacks using Google Gemini.
            </li>
            <li>
              <strong>Instant Evaluation &amp; Scorecards:</strong> Comprehensive scorecards delivering overall readiness percentage, competency breakdown (Data Structures, System Design, Problem Solving, Communication), core strengths, and actionable feedback.
            </li>
            <li>
              <strong>Tech &amp; Domain Badges:</strong> Smart badges spanning Full-Stack Engineering, VLSI, AI/ML, DevOps, Cloud Infrastructure, and more.
            </li>
            <li>
              <strong>Secure Authentication &amp; Session Tracking:</strong> Seamless user login and interview history management powered by Firebase Auth and Cloud Firestore.
            </li>
          </ul>

          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">🧠 Tech Stack &amp; Architecture</TypographyH3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 my-3 font-mono text-xs sm:text-sm">
            <div className="p-3.5 sm:p-4 rounded-xl border border-border bg-secondary/20">
              <p className="font-bold text-sm sm:text-base mb-2 text-primary">Frontend &amp; Voice UI</p>
              <ul className="space-y-1 text-muted-foreground list-disc ml-4">
                <li><strong>Framework:</strong> Next.js 15 (App Router) + React 19</li>
                <li><strong>Language:</strong> TypeScript</li>
                <li><strong>Styling:</strong> Tailwind CSS with Dark-Mode Glassmorphism</li>
                <li><strong>Voice AI:</strong> Vapi AI Web SDK (Real-time bi-directional audio)</li>
                <li><strong>Visuals:</strong> Dynamic Waveform Visualizer &amp; Status Indicators</li>
              </ul>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl border border-border bg-secondary/20">
              <p className="font-bold text-sm sm:text-base mb-2 text-primary">Backend &amp; Intelligence</p>
              <ul className="space-y-1 text-muted-foreground list-disc ml-4">
                <li><strong>LLM Engine:</strong> Google Gemini (gemini-2.5-flash)</li>
                <li><strong>Evaluation Engine:</strong> Structured JSON scoring &amp; rubric analysis</li>
                <li><strong>Authentication:</strong> Firebase Authentication (OAuth / Email)</li>
                <li><strong>Database:</strong> Cloud Firestore (Session history &amp; scorecards)</li>
                <li><strong>API:</strong> Serverless Next.js API Routes &amp; Server Actions</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">🔄 End-to-End Interview Pipeline</TypographyH3>
          <div className="p-3 sm:p-4 rounded-xl border border-border bg-black/40 font-mono text-[11px] sm:text-xs text-zinc-300 leading-relaxed overflow-x-auto max-w-full">
            <pre>{`Candidate Configures Role & Tech Stack
  │
  ├── 1. Google Gemini creates role-specific interview rubric & dynamic question set
  ├── 2. Vapi Voice AI session begins with bi-directional audio streaming
  ├── 3. Candidate speaks -> Real-time speech transcription & waveform rendering
  ├── 4. AI Interviewer evaluates responses contextually with intelligent follow-ups
  └── 5. Session completes -> Gemini generates instant scorecard & competency analytics`}</pre>
          </div>

          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">🛠️ Technologies Used</TypographyH3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 font-mono text-xs">
            {[
              "Next.js 15",
              "React 19",
              "TypeScript",
              "Tailwind CSS",
              "Vapi AI",
              "Google Gemini",
              "Firebase Auth",
              "Cloud Firestore",
              "Web Audio API",
              "Glassmorphism UI",
            ].map((tech) => (
              <span key={tech} className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-secondary/40 border border-border rounded-full text-foreground text-[11px] sm:text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "carbonly",
    category: "Web3 & Blockchain",
    title: "Carbonly — Blockchain Carbon Credit Platform",
    src: "/assets/projects-screenshots/carbonly/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.metamask,
      ],
      backend: [
        PROJECT_SKILLS.ethereum,
        PROJECT_SKILLS.solidity,
        PROJECT_SKILLS.hardhat,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://carbonly-iota.vercel.app/",
    github: "https://github.com/ujjwalk2523/CARBONLY",
    get content() {
      return (
        <div className="space-y-4 sm:space-y-6">
          <p className="font-mono text-base sm:text-lg md:text-xl font-bold text-left sm:text-center text-foreground leading-snug">
            🌿 Decentralized Carbon Credit Trading Marketplace &amp; Plantation Tokenization
          </p>
          <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
            A blockchain-based platform focused on democratizing sustainability and carbon offsets. Built to tokenize real-world afforestation efforts into verifiable carbon credits, offering an open decentralized exchange with smart contracts on the Ethereum blockchain.
          </p>
          <ProjectsLinks
            live="https://carbonly-iota.vercel.app/"
            repo="https://github.com/ujjwalk2523/CARBONLY"
          />

          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">✨ Key Highlights</TypographyH3>
          <ul className="space-y-2 font-mono text-xs sm:text-sm text-muted-foreground list-disc ml-4 sm:ml-5">
            <li>
              <strong>Decentralized Marketplace:</strong> Built a trustless marketplace for trading verified carbon credits, incentivizing corporate and individual sustainability.
            </li>
            <li>
              <strong>Farmer Tokenization Model:</strong> Enabled agricultural workers and farmers to tokenize tree plantation and conservation efforts, providing a direct, transparent revenue stream via smart contracts.
            </li>
            <li>
              <strong>Smart Contract Execution:</strong> Developed and tested ERC-standard smart contracts using Solidity and Hardhat for automated minting, escrow, and settlement.
            </li>
            <li>
              <strong>Web3 Integration:</strong> Seamless Web3 wallet connectivity via MetaMask for instant transaction signing and credit retirement verification.
            </li>
          </ul>

          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">🛠️ Technologies Used</TypographyH3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 font-mono text-xs">
            {["Solidity", "Ethereum", "Hardhat", "MetaMask", "Node.js", "Express.js", "MongoDB", "React", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-secondary/40 border border-border rounded-full text-foreground text-[11px] sm:text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "ecm",
    category: "Full-Stack Web App",
    title: "ECM — Equipment Checkout Management",
    src: "/assets/projects-screenshots/ecm/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html5,
        PROJECT_SKILLS.css3,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.springDataJpa,
        PROJECT_SKILLS.h2,
        PROJECT_SKILLS.maven,
        PROJECT_SKILLS.restApi,
      ],
    },
    live: "https://ecm-xi.vercel.app/",
    github: "https://github.com/ujjwalk2523/ecm",
    get content() {
      return (
        <div className="space-y-4 sm:space-y-6">
          <p className="font-mono text-base sm:text-lg md:text-xl font-bold text-left sm:text-center text-foreground leading-snug">
            ⚙️ Full-Stack Equipment Checkout &amp; Laboratory Resource Management System
          </p>
          <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
            A comprehensive full-stack enterprise web application engineered with <strong>Java 17 (Spring Boot 3)</strong> on the backend and modern vanilla <strong>HTML5, CSS3, and JavaScript</strong> on the frontend. The platform streamlines equipment borrowing, order tracking, real-time inventory reservation, and laboratory resource allocation.
          </p>
          <ProjectsLinks
            live="https://ecm-xi.vercel.app/"
            repo="https://github.com/ujjwalk2523/ecm"
          />

          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">🧠 Tech Stack &amp; Architecture</TypographyH3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 my-3 font-mono text-xs sm:text-sm">
            <div className="p-3.5 sm:p-4 rounded-xl border border-border bg-secondary/20">
              <p className="font-bold text-sm sm:text-base mb-2 text-primary">Backend Architecture</p>
              <ul className="space-y-1 text-muted-foreground list-disc ml-4">
                <li><strong>Language:</strong> Java 17</li>
                <li><strong>Framework:</strong> Spring Boot 3</li>
                <li><strong>Build Tool:</strong> Maven</li>
                <li><strong>Database:</strong> H2 (In-memory for local/production speed)</li>
                <li><strong>ORM:</strong> Spring Data JPA / Hibernate</li>
                <li><strong>Architecture:</strong> RESTful API with Layered Service/Repository Pattern</li>
              </ul>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl border border-border bg-secondary/20">
              <p className="font-bold text-sm sm:text-base mb-2 text-primary">Frontend Architecture</p>
              <ul className="space-y-1 text-muted-foreground list-disc ml-4">
                <li><strong>Structure:</strong> Semantic HTML5</li>
                <li><strong>Styling:</strong> Responsive CSS3 with custom themes</li>
                <li><strong>Scripting:</strong> Vanilla JavaScript (Modular ES6+)</li>
                <li><strong>State:</strong> Dynamic Cart &amp; Order State Management</li>
                <li><strong>Pages:</strong> Catalog, Equipment Details, Cart, Checkout &amp; Login</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">🧩 REST API Endpoints Overview</TypographyH3>
          <div className="overflow-x-auto my-3 -mx-1 sm:mx-0 max-w-full">
            <table className="w-full text-left font-mono text-xs sm:text-sm border-collapse border border-border rounded-lg overflow-hidden min-w-[320px]">
              <thead className="bg-secondary/40 text-foreground font-semibold">
                <tr>
                  <th className="p-2.5 sm:p-3 border border-border">Method</th>
                  <th className="p-2.5 sm:p-3 border border-border">Endpoint</th>
                  <th className="p-2.5 sm:p-3 border border-border">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-t border-border">
                  <td className="p-2.5 sm:p-3 border border-border font-bold text-emerald-500">POST</td>
                  <td className="p-2.5 sm:p-3 border border-border font-mono text-[11px] sm:text-xs">/api/orders/create</td>
                  <td className="p-2.5 sm:p-3 border border-border">Create one or more equipment checkout orders</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2.5 sm:p-3 border border-border font-bold text-blue-500">GET</td>
                  <td className="p-2.5 sm:p-3 border border-border font-mono text-[11px] sm:text-xs">/api/orders</td>
                  <td className="p-2.5 sm:p-3 border border-border">Retrieve all active and past equipment checkout records</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2.5 sm:p-3 border border-border font-bold text-amber-500">PUT</td>
                  <td className="p-2.5 sm:p-3 border border-border font-mono text-[11px] sm:text-xs">/api/orders/&#123;id&#125;/status</td>
                  <td className="p-2.5 sm:p-3 border border-border">Update order approval, dispatch, or return status</td>
                </tr>
              </tbody>
            </table>
          </div>

          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">📁 Project Architecture &amp; Organization</TypographyH3>
          <div className="p-3 sm:p-4 rounded-xl border border-border bg-black/40 font-mono text-[11px] sm:text-xs text-zinc-300 leading-relaxed overflow-x-auto max-w-full">
            <pre>{`ecm/
├── backend/
│   ├── src/main/java/com/srm/eyantra/
│   │   ├── controller/      # REST Controllers (OrderController, EquipmentController)
│   │   ├── model/           # JPA Entity Classes (Order, Equipment, User)
│   │   ├── repository/      # Spring Data JPA Repositories
│   │   ├── service/         # Business Logic & Validation Layer
│   │   └── SrmEyantraApplication.java
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
├── frontend/
│   ├── css/
│   │   └── style.css        # Responsive styling & layout
│   ├── js/
│   │   ├── cart.js          # Cart state, item calculations & checkout
│   │   ├── detail.js        # Item spec & availability view
│   │   ├── products.js      # Dynamic equipment rendering
│   │   └── script.js        # Global listeners & API connectors
│   ├── index.html           # Main Equipment Catalog View
│   ├── login.html           # Authentication View
│   └── cart.html            # Checkout & Order Submission View`}</pre>
          </div>
        </div>
      );
    },
  },
  {
    id: "agrilink",
    category: "AgriTech & Direct Marketplace",
    title: "AgriLink — Agricultural Market Intelligence & Direct Marketplace",
    src: "/assets/projects-screenshots/agrilink/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.recharts,
      ],
      backend: [
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.render,
        PROJECT_SKILLS.restApi,
      ],
    },
    live: "https://agrilink-app-ex4s.onrender.com/",
    github: "https://github.com/ujjwalk2523/agrilink",
    get content() {
      return (
        <div className="space-y-4 sm:space-y-6">
          <p className="font-mono text-base sm:text-lg md:text-xl font-bold text-left sm:text-center text-foreground leading-snug">
            🌾 Next-Gen Agricultural Trading, Smart Net Realization &amp; Direct Farmgate Marketplace
          </p>
          <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <strong>AgriLink</strong> is a next-generation agricultural trading and price discovery platform engineered to eliminate the critical &ldquo;Headline Price&rdquo; illusion faced by farmers. By calculating true in-pocket profit after factoring in freight, loading charges, mandi cess, commission agent fees (2.5% - 4%), and transit perishable spoilage, AgriLink connects farmers directly to verified institutional buyers, FPOs, and cold-chain logistics providers.
          </p>
          <ProjectsLinks
            live="https://agrilink-app-ex4s.onrender.com/"
            repo="https://github.com/ujjwalk2523/agrilink"
          />

          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">✨ Key Highlights &amp; Features</TypographyH3>
          <ul className="space-y-2 font-mono text-xs sm:text-sm text-muted-foreground list-disc ml-4 sm:ml-5">
            <li>
              <strong>⚖️ Smart Net Realization Calculator (/compare):</strong> Compares APMC Mandis (Lasalgaon, Vashi APMC, Azadpur) vs. Direct Corporate Farmgate Hubs (Reliance Fresh, ITC e-Choupal) by computing distance freight, mandi cess, agent commissions, unloading fees, and crop perishability transit risk with an AI-ranked score out of 100.
            </li>
            <li>
              <strong>📈 Live Mandi Market Intelligence (/market-prices):</strong> Real-time price discovery across Maharashtra, MP, Karnataka, Delhi NCR, Gujarat, and AP with modal, minimum, maximum spreads, daily arrival volumes, and 7-day AI price trend forecasting with confidence intervals.
            </li>
            <li>
              <strong>🛍️ Direct Produce Marketplace (/marketplace):</strong> Verified crop listings with quality grading (Grade A, B, C, Organic), negotiable escrow terms, and farmgate pickup options.
            </li>
            <li>
              <strong>🤖 AI Market Advisor (/api/ai/assistant):</strong> Conversational AI assistant trained on crop economics and market dynamics providing instant advice on harvest timing, optimal delivery routes, and payment safety.
            </li>
            <li>
              <strong>👥 Multi-Role Enterprise Workspaces:</strong> Dedicated dashboards for Farmers (listings, bids, payout tracking), Buyers (bulk procurement, QC inspection logs, escrow), FPOs (smallholder produce aggregation), Logistics Fleets (reefer truck matching, GPS delivery), and Admins (KYC verification &amp; dispute audits).
            </li>
          </ul>

          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">🧠 Tech Stack &amp; Architecture</TypographyH3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 my-3 font-mono text-xs sm:text-sm">
            <div className="p-3.5 sm:p-4 rounded-xl border border-border bg-secondary/20">
              <p className="font-bold text-sm sm:text-base mb-2 text-primary">Frontend &amp; Visual Analytics</p>
              <ul className="space-y-1 text-muted-foreground list-disc ml-4">
                <li><strong>Framework:</strong> Next.js 15 (App Router) + React 19</li>
                <li><strong>Language:</strong> TypeScript</li>
                <li><strong>Styling:</strong> Tailwind CSS with Lucide Icons</li>
                <li><strong>Data Visualization:</strong> Recharts (Price Spreads &amp; Volume Trends)</li>
                <li><strong>Architecture:</strong> Responsive Multi-Role Enterprise Portals</li>
              </ul>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl border border-border bg-secondary/20">
              <p className="font-bold text-sm sm:text-base mb-2 text-primary">Backend &amp; Cloud Database</p>
              <ul className="space-y-1 text-muted-foreground list-disc ml-4">
                <li><strong>Database:</strong> PostgreSQL (Managed Cloud Instance)</li>
                <li><strong>ORM:</strong> Prisma ORM (Type-Safe Schema &amp; Queries)</li>
                <li><strong>Hosting &amp; CI/CD:</strong> Render (Web Service &amp; Database)</li>
                <li><strong>AI Engine:</strong> Conversational Market Intelligence Advisor</li>
                <li><strong>API Layer:</strong> Serverless Edge Handlers &amp; RESTful Routes</li>
              </ul>
            </div>
          </div>

          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">🔌 Serverless API Endpoints Overview</TypographyH3>
          <div className="overflow-x-auto my-3 -mx-1 sm:mx-0 max-w-full">
            <table className="w-full text-left font-mono text-xs sm:text-sm border-collapse border border-border rounded-lg overflow-hidden min-w-[320px]">
              <thead className="bg-secondary/40 text-foreground font-semibold">
                <tr>
                  <th className="p-2.5 sm:p-3 border border-border">Method</th>
                  <th className="p-2.5 sm:p-3 border border-border">Endpoint</th>
                  <th className="p-2.5 sm:p-3 border border-border">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-t border-border">
                  <td className="p-2.5 sm:p-3 border border-border font-bold text-blue-500">GET</td>
                  <td className="p-2.5 sm:p-3 border border-border font-mono text-[11px] sm:text-xs">/api/market-prices</td>
                  <td className="p-2.5 sm:p-3 border border-border">Fetch real-time mandi prices &amp; market arrivals</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2.5 sm:p-3 border border-border font-bold text-emerald-500">POST</td>
                  <td className="p-2.5 sm:p-3 border border-border font-mono text-[11px] sm:text-xs">/api/compare</td>
                  <td className="p-2.5 sm:p-3 border border-border">Calculate true net realization &amp; rank selling options</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2.5 sm:p-3 border border-border font-bold text-amber-500">GET, POST</td>
                  <td className="p-2.5 sm:p-3 border border-border font-mono text-[11px] sm:text-xs">/api/listings</td>
                  <td className="p-2.5 sm:p-3 border border-border">Retrieve and publish verified produce listings</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2.5 sm:p-3 border border-border font-bold text-purple-500">GET, POST</td>
                  <td className="p-2.5 sm:p-3 border border-border font-mono text-[11px] sm:text-xs">/api/offers</td>
                  <td className="p-2.5 sm:p-3 border border-border">Manage buyer bids &amp; contract agreements</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2.5 sm:p-3 border border-border font-bold text-cyan-500">GET, POST</td>
                  <td className="p-2.5 sm:p-3 border border-border font-mono text-[11px] sm:text-xs">/api/transport</td>
                  <td className="p-2.5 sm:p-3 border border-border">Dispatch logistics jobs &amp; driver quotes</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2.5 sm:p-3 border border-border font-bold text-emerald-500">POST</td>
                  <td className="p-2.5 sm:p-3 border border-border font-mono text-[11px] sm:text-xs">/api/ai/assistant</td>
                  <td className="p-2.5 sm:p-3 border border-border">AI conversational market advisor &amp; harvest guidance</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-2.5 sm:p-3 border border-border font-bold text-rose-500">GET, POST</td>
                  <td className="p-2.5 sm:p-3 border border-border font-mono text-[11px] sm:text-xs">/api/admin/kyc</td>
                  <td className="p-2.5 sm:p-3 border border-border">User KYC verification &amp; status audits</td>
                </tr>
              </tbody>
            </table>
          </div>

          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">🛠️ Technologies Used</TypographyH3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 font-mono text-xs">
            {[
              "Next.js 15",
              "React 19",
              "TypeScript",
              "Tailwind CSS",
              "Prisma ORM",
              "PostgreSQL",
              "Recharts",
              "Render",
              "RESTful API",
              "AI Market Advisor",
            ].map((tech) => (
              <span key={tech} className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-secondary/40 border border-border rounded-full text-foreground text-[11px] sm:text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    id: "ai-health-chatbot",
    category: "AI & Machine Learning",
    title: "AI Health Chatbot",
    src: "/assets/projects-screenshots/ai-health-chatbot/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.html5,
        PROJECT_SKILLS.css3,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.ml,
        PROJECT_SKILLS.restApi,
      ],
    },
    live: "https://ai-health-chatbot-bo43szgap2qmekrzx37k8h.streamlit.app/",
    github: "https://github.com/ujjwalk2523/AI-Health-Chatbot",
    get content() {
      return (
        <div className="space-y-4 sm:space-y-6">
          <p className="font-mono text-base sm:text-lg md:text-xl font-bold text-left sm:text-center text-foreground leading-snug">
            🤖 Intelligent Symptom Assessment &amp; Predictive Health Assistant
          </p>
          <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Engineered an ML-based conversational health assistant that predicts potential diseases based on user-inputted symptoms and physiological indicators. Integrates a trained machine learning classification pipeline with an intuitive, responsive user interface to provide real-time, data-driven medical triage suggestions.
          </p>
          <ProjectsLinks
            live="https://ai-health-chatbot-bo43szgap2qmekrzx37k8h.streamlit.app/"
            repo="https://github.com/ujjwalk2523/AI-Health-Chatbot"
          />
          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">✨ Key Highlights</TypographyH3>
          <ul className="space-y-2 font-mono text-xs sm:text-sm text-muted-foreground list-disc ml-4 sm:ml-5">
            <li>
              <strong>ML Disease Prediction Pipeline:</strong> Trained classification algorithms on verified symptom-disease datasets to output risk probability scores with high confidence.
            </li>
            <li>
              <strong>Interactive Conversational UI:</strong> Responsive chat interface that dynamically prompts users for follow-up symptom severity and vital details.
            </li>
            <li>
              <strong>Data-Driven Health Guidance:</strong> Delivers actionable triage recommendations, lifestyle suggestions, and guidance on when to seek urgent clinical attention.
            </li>
          </ul>

          <TypographyH3 className="text-base sm:text-lg md:text-xl font-bold my-3 mt-6 sm:mt-8">🛠️ Technologies Used</TypographyH3>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 font-mono text-xs">
            {["Python", "Scikit-Learn", "Machine Learning", "JavaScript", "HTML5", "CSS3", "RESTful API"].map((tech) => (
              <span key={tech} className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-secondary/40 border border-border rounded-full text-foreground text-[11px] sm:text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      );
    },
  },
];

export default projects;

