// All of the site's words and facts live here, so updating the portfolio never means touching layout code.
// House rules (see ../../../PRODUCT.md): course work is labeled as course work, nothing is invented,
// and no phone number, home address, student ID, or transcript ever appears on the site.

export type Fact = [label: string, value: string];
export type Link = { label: string; href: string; note?: string };
export type Art = 'sun' | 'observatory' | 'third' | 'training' | 'shelf';

export interface Project {
  id: string;
  /** Cover color, a token from global.css. */
  color: 'marigold' | 'ultra' | 'vermilion' | 'pine' | 'ink';
  callNumber: string;
  tag: string;
  title: string;
  /** Long titles get their own cover sizing. */
  long?: boolean;
  art: Art;
  blurb: string;
  status: string;
  facts: Fact[];
  sections: { heading: string; body: string }[];
  quote?: { text: string; source: string };
  links: Link[];
}

export const person = {
  name: 'Chris Misciagna',
  line: 'Academic librarianship, open access, scholarly communication',
  email: 'chris.misciagna@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chris-misciagna',
  description:
    'Portfolio of Chris Misciagna, MLIS: open access projects, library research, and academic library work, from Open Sun to the Connecticut Open Access Observatory.',
};

export const intro = {
  lede: "Welcome! My name is Chris Misciagna, and I'm an aspiring academic librarian with interests in open access and scholarly communication.",
  body: [
    'Below are graduate work samples from my MLIS program, along with some side projects that I built and maintain. Thanks for taking a look and I hope we can work together soon.',
  ],
  photoAlt: 'Chris Misciagna, smiling, in a brown sweater against a plain light background.',
};

export const statement = {
  quote: 'Scholarship and research are not commodities reserved for the privileged, but resources available to all learners',
  accent: 'regardless of income or zip code.',
  body:
    "As a future academic librarian, I will encourage the use of open educational resources, support faculty in navigating their publishing concerns, and position the academic library as an active participant in democratizing scholarly information. Through years of client-facing work in the media measurement industry, I’ve spent thousands of hours making complex data and technical systems easy to understand. I have extensive experience in face-to-face instruction, teaching clients across the country how to leverage advanced software for their own research. As I transition into academic librarianship, I bring a user-centered approach to supporting students, faculty, and researchers as they navigate an increasingly complex information landscape. I am committed to building library services that not only provide access to information, but also teach users how to engage with it critically.",
};

export const projects: Project[] = [
  {
    id: 'observatory',
    color: 'ultra',
    callNumber: 'CM 1',
    tag: 'Live site',
    title: 'Connecticut Open Access Observatory',
    long: true,
    art: 'observatory',
    blurb: 'How much research from 17 Connecticut colleges and universities can anyone read for free? About two-thirds of 174,990 articles, 2015 to 2025.',
    status: 'Built and running',
    facts: [
      ['Institutions', '17, each with its own profile'],
      ['Articles', '174,990, from 2015 to 2025'],
      ['Free to read', '67.3%, or 59.6% without Yale'],
      ['Updates', 'Monthly, with automatic quality checks'],
      ['Data', 'OpenAlex, released as CC0'],
    ],
    sections: [
      {
        heading: 'What it is',
        body: "A public report on how much of the research published by Connecticut's colleges and universities anyone can read for free, and how much is still behind a paywall. It has a statewide overview, a profile for each of the featured universities, side-by-side comparisons, a methods page, and every dataset available to download.",
      },
      {
        heading: 'Why I made it',
        body: "I made the Observatory to explore how equitable access to published scholarship is in Connecticut, and how much of the research produced at the state's colleges and universities is truly open to everyone. I also wanted to put my evolving technical skills to work building a free resource that academic libraries can use to track their open access publishing over time.",
      },
      {
        heading: 'How it was built',
        body: 'Built with AI coding tools; I set the research questions and approved each methodological decision. A Python pipeline pulls records from the open database OpenAlex, checks them, and computes every figure, and a separate recomputation verifies the key numbers. The data refreshes every month and is published only when its quality checks pass. The code and data are openly licensed, so anyone can check the numbers or reuse them.',
      },
    ],
    links: [
      { label: 'Visit the Observatory', href: 'https://ct-oa-observatory.vercel.app/' },
      { label: 'See the code and data', href: 'https://github.com/HB-Papa/ct-oa-observatory' },
    ],
  },
  {
    id: 'third-place',
    color: 'vermilion',
    callNumber: 'CM 2',
    tag: 'ISCI 705',
    title: 'Libraries as Third Place',
    art: 'third',
    blurb: 'A research proposal asking how graduate students would use academic libraries redefined as third places. 300 students, five research universities.',
    status: 'Research proposal, not yet run',
    facts: [
      ['Sample', '300 graduate students, from 1,200 invited'],
      ['Sites', '5 research universities'],
      ['Research questions', '2, each with hypotheses'],
      ['Instrument', '20-question survey'],
    ],
    sections: [
      {
        heading: 'What it is',
        body: "An investigation into how academic libraries can serve as third places for graduate students. I designed a quantitative study with qualitative components to examine how redefining academic libraries as third places would influence graduate students' use of library spaces and resources. The methodology uses stratified random sampling across academic disciplines and degree levels, targets 300 graduate students across five research universities, and provides a 20-question survey instrument that combines Likert-scale items with open-ended questions. This proposal demonstrates my ability to design research that addresses gaps in understanding in the library science field.",
      },
      {
        heading: 'Why it matters to me',
        body: "Libraries need to tailor their services and be adaptable to meet their patrons' needs. Graduate students have different experiences on campus than their undergraduate peers, and they would benefit from more targeted programming and space utilization. Graduate students represent an underserved population in many academic libraries, and research examining their unique needs can inform redesigns of space, service development, and resource allocation decisions that improve their educational experiences.",
      },
    ],
    links: [{ label: 'Read the proposal', href: '/work/misciagna-libraries-as-third-place-research-proposal.pdf', note: 'PDF, 29 pages' }],
  },
  {
    id: 'open-sun',
    color: 'marigold',
    callNumber: 'CM 3',
    tag: 'Live site',
    title: 'Open Sun',
    art: 'sun',
    blurb: 'A free library of open access writing on solarpunk: 84 curated items, eight reading pathways, a field guide, and a daily puzzle.',
    status: 'Built and running',
    facts: [
      ['Collection', '84 items'],
      ['Reading pathways', '8'],
      ['New readings', 'Searched for every week'],
      ['Review', 'A person approves every reading'],
      ['Tracking', 'None: no accounts, ads, or cookies'],
    ],
    sections: [
      {
        heading: 'What it is',
        body: 'A free library of open access writing on solarpunk, a movement that imagines a future powered by the sun, woven into living ecosystems, and built around community. The collection gathers scholarship, essays, fiction, and practical guides on solarpunk and the ideas around it, from energy justice and community solar to the commons and hopeful futures, and every item is free to read. Readers can search and filter by topic, type, year, and language, cite any item in APA or Chicago, follow guided reading pathways, and look up ideas in a field guide.',
      },
      {
        heading: 'Why I made it',
        body: "Solarpunk is a topic I find genuinely interesting, and I wanted information about it to be easy for anyone to find and read. Open Sun gathers that writing in one place, with no paywalls and no account needed. I also built Microgrid, a three-minute daily puzzle about keeping a solar neighborhood lit, to give visitors a reason to keep coming back to the site.",
      },
      {
        heading: 'How it was built',
        body: 'Built with AI coding tools; I selected and reviewed the collection. Every Monday, an automated search checks OpenAlex, the Directory of Open Access Journals, and Crossref for new open access work. An AI agent drafts each summary, a second checks it against the source, and I approve every reading before it joins the library.',
      },
    ],
    links: [{ label: 'Visit Open Sun', href: 'https://open-sun.vercel.app/' }],
  },
  {
    id: 'thomas-cooper',
    color: 'pine',
    callNumber: 'CM 4',
    tag: 'ISCI 794',
    title: 'Power BI at Thomas Cooper',
    art: 'training',
    blurb: 'An internship with Digital Research Services at the University of South Carolina: training guides and research consultations.',
    status: 'Internship, Fall 2025',
    facts: [
      ['Role', 'Data Visualization Graduate Intern'],
      ['Team', 'Digital Research Services'],
      ['When', 'Aug. to Dec. 2025'],
      ['Made', 'Power BI 101 and 102'],
    ],
    sections: [
      {
        heading: 'What I did',
        body: 'I joined weekly team meetings, provided research consultations to faculty and graduate students, and created user-focused Power BI training, built around sample library data on circulation, consultations, and databases. I also maintained discipline-specific LibGuides and monitored usage of digital collections and databases to inform collection development decisions.',
      },
      {
        heading: 'What changed',
        body: "This closed the biggest gap in my background: I hadn't yet worked in an academic library. Watching a team that recommends and tests new library technology, while I took collection development in the same semester, showed me how those decisions reach the people who use them.",
      },
    ],
    quote: {
      text: 'Chris has significant work experience that he reflected in his internship experience. He possesses a strong sense of responsibility and aspires to excellence.',
      source: 'Glenn Bunton, internship supervisor, University of South Carolina Libraries',
    },
    links: [
      { label: 'See Power BI 101', href: '/work/misciagna-power-bi-101-slides.pdf', note: 'PDF, 11 slides' },
      { label: 'See Power BI 102', href: '/work/misciagna-power-bi-102-slides.pdf', note: 'PDF, 13 slides' },
    ],
  },
  {
    id: 'uconn-policy',
    color: 'ink',
    callNumber: 'CM 5',
    tag: 'ISCI 766',
    title: 'A Policy for an R1 Collection',
    art: 'shelf',
    blurb: "A collection development policy written for UConn's Homer Babbidge Library, with budget, weeding, and needs assessment.",
    status: 'Policy, course work',
    facts: [
      ['Library', 'Homer Babbidge, UConn'],
      ['Community', 'About 32,000 students and faculty'],
      ['Includes', 'Budget, weeding, assessment'],
    ],
    sections: [
      {
        heading: 'What it is',
        body: 'A collection development policy for a large land-grant research university, balancing advanced research against undergraduate teaching and reflecting institutional priorities across STEM, agricultural sciences, and the humanities.',
      },
      {
        heading: 'How I approached it',
        body: 'I worked from public information about the library and stated plainly where I made assumptions about budget and collection data, so the framework could be adapted to real figures. UConn did not commission or adopt it.',
      },
    ],
    links: [{ label: 'Read the policy', href: '/work/misciagna-homer-babbidge-collection-development-policy.pdf', note: 'PDF, 10 pages' }],
  },
];


export const resume = {
  lede: 'Media research professional with over 1,000 hours of client instruction on specialized research platforms.',
  education: [
    ['Master’s, Library and Information Science', 'University of South Carolina, Dec. 2025'],
    ['Graduate Certificate, Academic Libraries', 'University of South Carolina, Dec. 2025'],
    ['Bachelor of Arts, Public Relations', 'Quinnipiac University, May 2020'],
    ['Certificate, Legal Studies', 'Quinnipiac University, May 2020'],
  ] as [string, string][],
  skills: [
    'Proficient in scholarly databases and specialized research platforms, with a demonstrated ability to educate users on advanced search techniques',
    'Consultations on complex research questions for students, faculty, and professional clients',
    'Instructional sessions tailored to diverse professional audiences and learning needs',
    'User-friendly resources, including guides, tutorials, and discipline-specific documentation',
    'Advanced knowledge of data visualization (Power BI, Tableau, R)',
  ],
  jobs: [
    {
      when: 'July 2026 – Present', title: 'Supervisor, Measurement', org: 'Publicis Media, New York, NY',
      points: [
        'Collaborate with global Publicis agency teams to execute measurement campaigns, following and improving upon best-practice documentation',
        'Evaluate and integrate emerging technologies, including AI-driven tools, to strengthen workflows and keep pace with evolving industry standards',
        'Perform quality control on post-campaign reports, ensuring the chosen KPIs are accurate and clearly presented',
        'Contribute to knowledge-sharing initiatives within the Measurement team, building institutional expertise through trainings and workshops',
      ],
    },
    {
      when: 'Aug. 2025 – Dec. 2025', title: 'Data Visualization Graduate Intern', org: 'Thomas Cooper Library, Columbia, SC', project: 'thomas-cooper',
      points: [
        'Worked directly with the Data Visualization Librarian to curate materials for undergraduate courses that align with curriculum needs',
        'Provided research consultations to faculty and graduate students on effective database searching techniques and digital resource navigation',
        'Developed and maintained discipline-specific resources using LibGuides, providing research help and citation assistance for various stakeholders',
        'Monitored usage patterns on digital collections and databases to inform the library’s collection development decisions',
      ],
    },
    {
      when: 'Dec. 2024 – July 2026', title: 'Local Account Manager', org: 'Comscore, New York, NY',
      points: [
        'Established productive relationships with clients across 210 local TV markets, including personnel from research and ad sales teams',
        'Analyzed custom reports to uncover actionable insights about client audiences, including their demographics, interests, and behaviors',
        'Designed and delivered instructional training sessions that educate clients on Comscore’s measurement products and capabilities',
        'Conducted in-depth research using Comscore’s extensive data to identify trends and patterns that inform client initiatives',
      ],
    },
    {
      when: 'Apr. 2022 – Dec. 2024', title: 'National Associate Account Manager', org: 'Comscore, New York, NY',
      points: [
        'Secured over 8-figures in revenue by providing white-glove service and strategic consulting to 20+ major network clients',
        'Managed the successful delivery of client deliverables and maintained a 100% on-time completion rate',
        'Created and executed targeted communications plans promoting Comscore’s measurement capabilities to buy-side agencies and brands',
        'Spearheaded data investigations in response to client feedback, delivering swift resolution to technical issues',
      ],
    },
    {
      when: 'July 2021 – Apr. 2022', title: 'Marketing Coordinator', org: 'McGonigle, P.C., New York, NY',
      points: [
        'Generated press coverage for the firm awarded “Law Firm of the Year” in Securities Regulation, securing features in top legal publications',
        'Oversaw the information needs for attorneys at the firm by updating the back-end intranet with industry updates and relevant CLE documentation',
        'Led marketing efforts and served as the firm’s media contact, resulting in major rankings and profiles that enhanced brand visibility',
        'Boosted attorney LinkedIn followers by 25% through a refreshed social media strategy focused on thought leadership and industry insights',
      ],
    },
  ] as { when: string; title: string; org: string; points: string[]; project?: string }[],
};
