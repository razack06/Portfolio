/**
 * ─────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF CONTENT
 *  Edit text here — no component changes needed.
 *  All facts come from Abdul_Razack_Java_Backend_Developer.docx.
 *
 *  Search for "TODO" to find every placeholder you still need to fill.
 *  Empty strings ("") hide the related button/link automatically.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  // TODO: Your deployed URL, no trailing slash, e.g. "https://razack06.github.io/Portfolio"
  // Used for Open Graph / canonical tags. Leave "" until you deploy.
  url: '',
  title: 'Abdul Razack P R · Java Backend Developer',
  description:
    'Java Backend Developer in Chennai with 1+ year of experience in Spring Boot, REST APIs, PostgreSQL, WebSocket real-time dashboards and GPS/IoT device integration.',
  ogImage: 'og-image.png', // file in /public
}

export const profile = {
  name: 'Abdul Razack P R',
  shortName: 'Abdul Razack',
  initials: 'AR',
  title: 'Java Backend Developer',
  location: 'Chennai, Tamil Nadu',
  logo: 'Abdul', // navbar/footer wordmark (an orange dot is added after it)
  openToWork: true,

  // Hero headline: three lines; `highlight` is drawn in the orange script font
  headline: { before: 'A Java Backend Developer', middle: 'Who Builds', highlight: 'Real-Time Systems', after: 'With Spring Boot & PostgreSQL.' },
  // One-line value statement (drawn from the resume summary)
  tagline:
    'I build REST APIs, real-time WebSocket dashboards and GPS/IoT device integrations with Java, Spring Boot and PostgreSQL.',

  // Floating badges on the hero photo
  heroBadges: [
    { value: '4', label: 'Real-world Projects', sub: 'Fleet · IoT · Tracking' },
    { value: '1+', label: 'Years of', sub: 'Experience' },
  ],

  // Handwritten notes (decorative slogans)
  notes: {
    hero: ['Clean Code', 'Real-time', 'Data'],
    heroBottom: ['Build', 'Test', 'Ship', 'Repeat'],
    about: ['Backends', 'That Just', 'Work'],
    cta: ['Great Systems', 'Start with a', 'Conversation'],
  },

  // Photos in /public. photo = transparent cut-out (hero); photoBw = square black & white (about)
  photo: 'photo.webp',
  photoBw: 'photo-bw.webp',

  // File in /public — linked by the "Download Resume" button
  resumeFile: 'Abdul_Razack_Java_Backend_Developer.docx',

  summary:
    'Java Backend Developer with over one year of experience developing and maintaining backend applications using Java, Spring Boot, and PostgreSQL. Experienced in building REST APIs, developing SQL functions and reports, integrating GPS/IoT devices, and implementing WebSocket-based real-time dashboards. Hands-on experience in backend debugging, database optimization, and production issue resolution.',
}

export const contact = {
  email: 'abdulrazack0006@gmail.com',
  phone: '+91 6379608383',
  linkedin: 'https://www.linkedin.com/in/contactabdulrazack',
  linkedinLabel: 'linkedin.com/in/contactabdulrazack',
  // TODO: Your GitHub profile URL, e.g. "https://github.com/your-username". "" hides it.
  github: '',
}

// About section: stat list on the right (icon = name in components/ui/Icon.jsx, tone = card colour)
export const aboutStats = [
  { icon: 'briefcase', value: '1+ Year', label: 'Java Backend Experience', tone: 'mint' },
  { icon: 'code', value: '4', label: 'Projects Built', tone: 'peach' },
  { icon: 'graduation', value: '7.93', label: 'CGPA · B.Tech ECE', tone: 'peach' },
]

// "What I do" cards. Every skill from the resume's TECHNICAL SKILLS section appears exactly once.
export const services = [
  {
    icon: 'code',
    title: 'Backend Development',
    text: 'Java, SQL, Spring Boot and Hibernate/JPA for maintainable backend modules.',
    tone: 'peach',
  },
  {
    icon: 'database',
    title: 'Databases',
    text: 'PostgreSQL (with PostgREST) and MySQL: tables, functions, queries and reports.',
    tone: 'blue',
  },
  {
    icon: 'broadcast',
    title: 'Real-time & APIs',
    text: 'REST APIs, WebSocket real-time data and Microservices for live dashboards.',
    tone: 'mint',
  },
  {
    icon: 'wrench',
    title: 'Tools & Practices',
    text: 'Git, Maven/Gradle and Postman, with OOP and Agile/Scrum ways of working.',
    tone: 'lavender',
  },
]

export const experience = [
  {
    role: 'Java Backend Developer',
    company: 'Ethical Intelligent Technologies LLP',
    companyNote: 'Product-based startup',
    location: 'Chennai, Tamil Nadu',
    start: 'Sep 2025',
    end: 'Present',
    bullets: [
      'Develop and maintain backend modules for fleet tracking, employee tracking, and IoT monitoring applications using Java and Spring Boot.',
      'Build and maintain REST APIs, PostgreSQL functions, and database queries to support application dashboards and reports.',
      'Troubleshoot production issues involving WebSocket data flow, JPQL queries, SQL functions, and database triggers.',
      'Develop real-time monitoring features by integrating device data with backend services and dashboard updates.',
      'Collaborate with team members during Agile sprints to implement customer requirements, fix defects, and deliver application enhancements.',
    ],
  },
]

/**
 * Projects
 * - breakdown: each resume bullet split into Problem → What I built → Result
 * - diagram: architecture drawn as inline SVG.
 *     stages = columns (left→right on desktop, top→bottom on mobile)
 *     group  = optional dashed box label around a stage (edges can target the stage id)
 *     kind   = 'device' | 'service' | 'db' | 'client'
 *     edges  = [from, to] or { from, to, bi: true } for two-way flows
 * - links: TODO — set a URL to show the button; "" keeps it hidden.
 */
export const projects = [
  {
    id: 'vts',
    category: 'Fleet Tracking · WebSocket', // short label under the card title
    tone: 'peach', // thumbnail colour: peach | blue | mint | lavender
    title: 'Fleet Tracking System (VTS)',
    start: 'Aug 2026',
    end: 'Present',
    summary:
      'Real-time fleet tracking: Teltonika & Quicklink device integration, live fuel monitoring on a WebSocket dashboard, and automatically emailed reports.',
    tech: ['Java', 'Spring Boot', 'JWT', 'JPQL'],
    links: { github: '', demo: '' }, // TODO
    breakdown: [
      {
        problem: 'Customer needs kept growing on an existing real-time application.',
        built: 'Maintained the application and added features from customer requirements.',
        result: 'A product that keeps pace with customer requests.',
      },
      {
        problem: 'Manual reporting effort.',
        built: 'Recurring reports that are emailed automatically to selected users.',
        result: 'Reports reach users on schedule.',
      },
      {
        problem: 'Fleet managers needed better fuel visibility.',
        built: 'Fuel monitoring and fuel reports, with live fuel usage on the WebSocket dashboard.',
        result: 'Fleet managers track fuel consumption in real time.',
      },
      {
        problem: 'Raw data from Teltonika and Quicklink devices had to be integrated.',
        built:
          'Parsed the raw device data in Java and stored it in two tables: an asset event table with the full history of every event, and an asset table with the latest updated data.',
        result: 'Complete history and the current status of each asset are both available.',
      },
    ],
    diagram: {
      stages: [
        {
          id: 'devices',
          nodes: [
            { id: 'teltonika', label: 'Teltonika', sub: 'device', kind: 'device' },
            { id: 'quicklink', label: 'Quicklink', sub: 'device', kind: 'device' },
          ],
        },
        { id: 'parse', nodes: [{ id: 'parser', label: 'Java parser', sub: 'raw device data', kind: 'service' }] },
        {
          id: 'pg',
          group: 'PostgreSQL',
          nodes: [
            { id: 'events', label: 'Asset event table', sub: 'full history', kind: 'db' },
            { id: 'asset', label: 'Asset table', sub: 'latest data', kind: 'db' },
          ],
        },
        {
          id: 'out',
          nodes: [
            { id: 'ws', label: 'WebSocket', sub: 'live fuel usage', kind: 'service' },
            { id: 'reports', label: 'Recurring reports', sub: 'auto email', kind: 'service' },
          ],
        },
        {
          id: 'clients',
          nodes: [
            { id: 'dash', label: 'Live dashboard', sub: 'fleet managers', kind: 'client' },
            { id: 'mail', label: 'Email', sub: 'selected users', kind: 'client' },
          ],
        },
      ],
      edges: [
        ['teltonika', 'parser'],
        ['quicklink', 'parser'],
        ['parser', 'events'],
        ['parser', 'asset'],
        ['pg', 'ws'],
        ['pg', 'reports'],
        ['ws', 'dash'],
        ['reports', 'mail'],
      ],
    },
  },
  {
    id: 'mobicop',
    category: 'Employee Tracking · Mobile', // short label under the card title
    tone: 'blue', // thumbnail colour: peach | blue | mint | lavender
    title: 'MOBICOP – Employee Tracking',
    start: 'May 2026',
    end: 'Aug 2026',
    summary:
      'Employee tracking through a mobile app instead of GPS hardware, with live WebSocket location updates and attendance reports for HR.',
    tech: ['Java', 'Spring Boot', 'JWT', 'JPQL', 'PostgreSQL', 'PostgREST'],
    links: { github: '', demo: '' }, // TODO
    breakdown: [
      {
        problem: 'Hardware cost of tracking employees with GPS devices.',
        built: 'Tracking through the mobile app, starting when the employee marks attendance.',
        result: 'Tracking without extra devices.',
      },
      {
        problem: 'HR and managers needed dependable reports.',
        built: 'Designed the database tables and built attendance and employee reports.',
        result: 'Reliable, ready-to-use reports.',
      },
      {
        problem: 'Managers needed live staff monitoring.',
        built: 'Location pushed to the dashboard over WebSocket with company-level and individual subscriptions.',
        result: 'Up-to-date location on the dashboard.',
      },
      {
        problem: 'HR needed a quick view of workforce activity.',
        built: 'A live dashboard with top 5 attendance, top 5 leave takers and other summaries.',
        result: 'Key numbers visible at a glance.',
      },
    ],
    diagram: {
      stages: [
        { id: 'app', nodes: [{ id: 'mobile', label: 'Mobile app', sub: 'on attendance', kind: 'device' }] },
        { id: 'api', nodes: [{ id: 'backend', label: 'Spring Boot', sub: 'JWT · JPQL', kind: 'service' }] },
        {
          id: 'pg',
          group: 'PostgreSQL',
          nodes: [{ id: 'tables', label: 'Employee tables', sub: 'attendance', kind: 'db' }],
        },
        {
          id: 'out',
          nodes: [
            { id: 'ws', label: 'WebSocket', sub: 'company / individual', kind: 'service' },
            { id: 'reports', label: 'Reports', sub: 'attendance · employee', kind: 'service' },
          ],
        },
        {
          id: 'clients',
          nodes: [
            { id: 'dash', label: 'Live dashboard', sub: 'location · top 5', kind: 'client' },
            { id: 'hr', label: 'HR & managers', sub: 'reports', kind: 'client' },
          ],
        },
      ],
      edges: [
        ['mobile', 'backend'],
        ['backend', 'pg'],
        ['pg', 'ws'],
        ['pg', 'reports'],
        ['ws', 'dash'],
        ['reports', 'hr'],
      ],
    },
  },
  {
    id: 'hospital-iot',
    category: 'IoT Monitoring · Healthcare', // short label under the card title
    tone: 'mint', // thumbnail colour: peach | blue | mint | lavender
    title: 'Hospital IoT Asset Monitoring System',
    start: 'Jan 2026',
    end: 'May 2026',
    summary:
      'Real-time monitoring of water, diesel, oxygen and nitrogen across hospital sites, with remote tank control and time-range-aware reporting.',
    tech: ['Java', 'Spring Boot', 'JWT', 'JPQL', 'PostgreSQL', 'PostgREST'],
    links: { github: '', demo: '' }, // TODO
    breakdown: [
      {
        problem: 'Critical asset levels (water, diesel, oxygen, nitrogen) spread across multiple hospital sites.',
        built: 'Database tables, PostgreSQL functions and backend services for real-time monitoring.',
        result: 'Centralized visibility into critical asset levels.',
      },
      {
        problem: 'Dashboards and reports had to stay fast across different time ranges.',
        built:
          'Dynamic selection of live event tables, hourly rollups or daily reports based on the requested time range; loop-based report consolidation replaced with set-based SQL queries.',
        result: 'Optimized dashboard and report performance.',
      },
      {
        problem: 'Water tanks had to be monitored remotely through a mobile application.',
        built:
          'Backend APIs integrating OHT tanks, sumps, water flow meters, water leakage sensors and float level switches.',
        result: 'Tank levels, water consumption and leakage status are tracked.',
      },
      {
        problem: 'Manual effort in managing water supply.',
        built: 'Remote motor ON/OFF control and alarm configuration through device communication.',
        result: 'Users monitor live tank fill levels and manage water supply remotely with reduced manual effort.',
      },
    ],
    diagram: {
      caption: 'Two-way device link: data in, motor ON/OFF and alarms out. Table chosen by requested time range.',
      stages: [
        {
          id: 'devices',
          nodes: [
            { id: 'assets', label: 'Asset sensors', sub: 'water · diesel · O₂/N₂', kind: 'device' },
            { id: 'water', label: 'Water devices', sub: 'tanks · flow · leakage', kind: 'device' },
          ],
        },
        { id: 'svc', nodes: [{ id: 'backend', label: 'Spring Boot', sub: 'services · APIs', kind: 'service' }] },
        {
          id: 'pg',
          group: 'PostgreSQL',
          nodes: [
            { id: 'live', label: 'Live events', sub: 'event tables', kind: 'db' },
            { id: 'hourly', label: 'Hourly rollups', sub: 'aggregates', kind: 'db' },
            { id: 'daily', label: 'Daily reports', sub: 'set-based SQL', kind: 'db' },
          ],
        },
        {
          id: 'clients',
          nodes: [
            { id: 'dash', label: 'Dashboard', sub: 'multi-site · reports', kind: 'client' },
            { id: 'mobile', label: 'Mobile app', sub: 'remote tank control', kind: 'client' },
          ],
        },
      ],
      edges: [
        ['assets', 'backend'],
        { from: 'water', to: 'backend', bi: true },
        ['backend', 'pg'],
        ['pg', 'dash'],
        ['pg', 'mobile'],
      ],
    },
  },
  {
    id: 'gpscop',
    category: 'GPS Tracking · REST APIs', // short label under the card title
    tone: 'lavender', // thumbnail colour: peach | blue | mint | lavender
    title: 'GPSCOP',
    start: 'Sep 2025',
    end: 'Dec 2025',
    summary:
      'Backend for a GPS-device-based mobile app that tracks the location of a person, such as a child, behind JWT-secured REST APIs.',
    tech: ['Java', 'Spring Boot', 'JWT', 'JPQL', 'PostgreSQL', 'PostgREST'],
    links: { github: '', demo: '' }, // TODO
    breakdown: [
      {
        problem: 'Track the location of a person, such as a child.',
        built: 'The backend for a GPS-device-based mobile app.',
        result: 'Location data available to the app on demand.',
      },
      {
        problem: 'The mobile app needed to connect to the backend.',
        built: 'REST APIs on Spring Boot.',
        result: 'A clean interface for the app to fetch and update data.',
      },
      {
        problem: 'User access had to be secured.',
        built: 'JWT authentication on the APIs.',
        result: 'Tracking data reachable only by authorized users.',
      },
      {
        problem: 'Tracking data had to be managed efficiently.',
        built: 'PostgreSQL with JPQL queries and PostgREST.',
        result: 'Structured, quick access to the data.',
      },
    ],
    diagram: {
      stages: [
        {
          id: 'edge',
          nodes: [
            { id: 'gps', label: 'GPS device', sub: 'location data', kind: 'device' },
            { id: 'mobile', label: 'Mobile app', sub: 'fetch · update', kind: 'client' },
          ],
        },
        { id: 'api', nodes: [{ id: 'backend', label: 'Spring Boot', sub: 'REST · JWT auth', kind: 'service' }] },
        { id: 'db', nodes: [{ id: 'pg', label: 'PostgreSQL', sub: 'JPQL · PostgREST', kind: 'db' }] },
      ],
      edges: [['gps', 'backend'], { from: 'mobile', to: 'backend', bi: true }, ['backend', 'pg']],
    },
  },
]

export const education = [
  {
    degree: 'B.Tech, Electronics and Communication Engineering',
    school: 'B.S. Abdur Rahman Crescent Institute of Science and Technology, Vandalur, Chennai',
    score: 'CGPA: 7.93',
    start: '2021',
    end: '2025',
  },
  {
    degree: 'HSLC (12th)',
    school: 'St. Anne’s Mat. Hr. Sec. School, Ilayangudi, Sivagangai',
    score: '85.6%',
    start: '2020',
    end: '2021',
  },
  {
    degree: 'SSLC (10th)',
    school: 'St. Anne’s Mat. Hr. Sec. School, Ilayangudi, Sivagangai',
    score: '82.8%',
    start: '2018',
    end: '2019',
  },
]

export const certifications = [
  {
    name: 'Java Full Stack Developer',
    issuer: 'Greens Technology',
    start: 'May 2025',
    end: 'Sep 2025',
    url: '', // TODO (optional): certificate link. "" hides it.
  },
]

// Experience cards (styled like testimonial cards). `detail: true` adds a button that opens the full experience bullets.
export const journey = [
  {
    icon: 'briefcase',
    quote: 'Develop and maintain backend modules for fleet tracking, employee tracking, and IoT monitoring applications using Java and Spring Boot.',
    title: 'Java Backend Developer',
    org: 'Ethical Intelligent Technologies LLP',
    date: 'Sep 2025 – Present',
    detail: true,
  },
  {
    icon: 'award',
    quote: 'Completed the Java Full Stack Developer certification programme.',
    title: 'Java Full Stack Developer',
    org: 'Greens Technology',
    date: 'May 2025 – Sep 2025',
  },
  {
    icon: 'graduation',
    quote: 'B.Tech in Electronics and Communication Engineering, graduating with a CGPA of 7.93.',
    title: 'B.Tech, ECE',
    org: 'B.S. Abdur Rahman Crescent Institute of Science and Technology',
    date: '2021 – 2025',
  },
]

// Section headings: eyebrow = small label above, title = serif heading
export const headings = {
  about: { eyebrow: 'About me', title: 'Building Backends That Power Real-Time Products' },
  services: { eyebrow: 'What I do', title: 'Skills & Services' },
  projects: { eyebrow: 'Featured work', title: 'Selected Projects' },
  journey: { eyebrow: 'My journey', title: 'Experience' },
  cta: {
    eyebrow: 'Let’s work together',
    title: 'Looking for a Java Developer?',
    text: 'I’m open to Java Developer roles (backend and full stack). Let’s talk about how I can help your team.',
  },
  footerTagline: 'Building reliable real-time backends.',
}

export const nav = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'journey', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
