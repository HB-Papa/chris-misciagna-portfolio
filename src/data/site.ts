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
    'Below are graduate work samples from my MLIS program, and some side projects that I built and maintain. Thanks for taking a look and I hope we can work together soon.',
  ],
  photoAlt: 'Chris Misciagna, smiling, in a brown sweater against a plain light background.',
};

export const statement = {
  quote: 'Scholarship and research are not commodities reserved for the privileged, but resources available to all learners',
  accent: 'regardless of income or zip code.',
  body:
    "My career so far has been in ad research. I'm a Supervisor of Measurement at Publicis Media, and for more than four years before that I worked at Comscore, teaching clients across the country how to use advanced research software. I learned that instruction comes down to understanding what someone needs and leaving them able to do it alone. I hold an MLIS and a Graduate Certificate in Academic Libraries from the University of South Carolina, and I want to bring that experience to an academic library on the tenure track: open educational resources, publishing support for faculty, and library research of my own.",
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
        body: "A public report on how much of the research published by Connecticut's colleges and universities anyone can read for free, and how much is still behind a paywall. It has a statewide overview, a profile for each of the 17 institutions, side-by-side comparisons, a methods page, and every dataset available to download. Each chart comes with a written summary and a data table, and the site has no tracking.",
      },
      {
        heading: 'Why I made it',
        body: 'It answers the questions a scholarly communication librarian faces on campus: how open is our own research, where are the paywalls, and what are authors paying to publish? I wrote down every methodological choice, with the alternatives and my reasons, because a number like this is only useful if a skeptical reader can follow how it was made.',
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
        body: 'A full research proposal: a literature review on third places and graduate students, two research questions with working and null hypotheses, and a mixed-methods survey using stratified random sampling across disciplines and degree levels. It plans statistical tests and content analysis of open responses, and says how the findings would be shared, from library journals and the ACRL conference to the administrators who plan library spaces.',
      },
      {
        heading: 'Why it matters to me',
        body: "Graduate students have a different campus life from undergraduates, and many academic libraries underserve them. Designing the survey took about as long as writing the paper. Refining it to 20 questions taught me to focus on what matters rather than measuring everything possible. I'd like to run this study as a practicing librarian.",
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
        body: 'A public library for one subject, where everything is free to read. Readers can search and filter by topic, type, year, and language, cite any item in APA or Chicago, follow short guided pathways, and look up ideas in a field guide. New arrivals have their own page and RSS feed, and anyone can suggest a resource. A three-minute daily puzzle, Microgrid, gives people a reason to come back.',
      },
      {
        heading: 'Why I made it',
        body: "I've spent this degree arguing that open systems can provide large amounts of freely accessible information when they're properly structured and maintained. Open Sun is me testing that claim by running one: selecting, describing, and maintaining a collection in public.",
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
  lede: 'Ad research by trade, with over 1,000 hours of client instruction on specialized research platforms.',
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
