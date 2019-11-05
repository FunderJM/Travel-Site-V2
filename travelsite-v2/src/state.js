import { flights } from "./models/flights";
import { freqFlights } from "./models/freqflights";
import { jobs } from "./models/job";


export let airFlights = [
    new flights(0,'Denver, CO','Los Angeles, CA', '06:30 AM', '08:00 AM', 2.5, 0, '$331'),
    new flights(1,'Denver, CO','Los Angeles, CA', '07:05 AM', '08:35 AM', 2.5, 0, '$357'),
    new flights(2,'Denver, CO','Los Angeles, CA', '09:25 AM', '10:58 AM', 2.5, 0, '$437'),
    new flights(3,'Denver, CO','Los Angeles, CA', '11:10 AM', '12:37 PM', 2.5, 0, '$331'),
    new flights(4,'Denver, CO','Los Angeles, CA', '01:30 PM', '02:57 PM', 2.5, 0, '$357'),
    new flights(5,'Denver, CO','Los Angeles, CA', '03:45 PM', '05:15 PM', 2.5, 0, '$357'),
    new flights(6,'Denver, CO','Los Angeles, CA', '06:55 PM', '08:21 PM', 2.5, 0, '$331'),
    new flights(7,'Denver, CO','Los Angeles, CA', '07:50 PM', '12:42 AM', 5.9, 1, '$446'),
    new flights(8,'Denver, CO','Los Angeles, CA', '10:10 PM', '11:42 PM', 2.5, 0, '$345'),
    new flights(9,'Denver, CO','Los Angeles, CA', '11:10 PM', '12:37 AM', 2.5, 0, '$357')
]

export let returnFlights = [
    new flights(10,'Los Angeles, CA','Denver, CO', '06:30 AM', '08:00 AM', 2.5, 0, '$331'),
    new flights(11,'Los Angeles, CA','Denver, CO', '07:05 AM', '08:35 AM', 2.5, 0, '$357'),
    new flights(12,'Los Angeles, CA','Denver, CO', '09:25 AM', '10:58 AM', 2.5, 0, '$437'),
    new flights(13,'Los Angeles, CA','Denver, CO', '11:10 AM', '12:37 PM', 2.5, 0, '$331'),
    new flights(14,'Los Angeles, CA','Denver, CO', '01:30 PM', '02:57 PM', 2.5, 0, '$357'),
    new flights(15,'Los Angeles, CA','Denver, CO', '03:45 PM', '05:15 PM', 2.5, 0, '$357'),
    new flights(16,'Los Angeles, CA','Denver, CO', '06:55 PM', '08:21 PM', 2.5, 0, '$331'),
    new flights(17,'Los Angeles, CA','Denver, CO', '07:50 PM', '12:42 AM', 5.9, 1, '$446'),
    new flights(18,'Los Angeles, CA','Denver, CO', '10:10 PM', '11:42 PM', 2.5, 0, '$345'),
    new flights(19,'Los Angeles, CA','Denver, CO', '11:10 PM', '12:37 AM', 2.5, 0, '$357')
]

export let selectedFlight = []

export let freqFlyer = [
    new freqFlights('First', '14 pts', '330', 4620),
    new freqFlights('Comfort', '10 pts', '280', 2800),
    new freqFlights('Economy', '6 pts', '230', 1380)
]

export let job = [
    new jobs('Contracts Manager', 'JO-1909-33763', `Bunting Airlines is seeking an experienced Contracts Manager to join our growing team in Beaverton Oregon. This role will be responsible for drafting, negotiating and advising on various technology contracts (customer, vendor, channel). The successful candidate must be able to work independently and have excellent communication skills as this position involves direct contact with principal business owners. The successful candidate must be inquisitive, enjoy working hard and being continually challenged, and demonstrate sound judgment even in ambiguous situations. This position will work closely with the Legal department, Sales, Information Security and Finance to review contracts, to identify issues requiring legal/business approval, and to work with the customer's procurement/legal departments to expedite transaction close.`,
    [`Provide legal support for our enterprise sales team on a broad range of commercial agreements in support of sales transactions.`,
        `Review and negotiate standard and non-standard agreements`,
        `Exercise good judgment in making business decisions while providing contract interpretations and guidance to internal business teams to ensure compliance with contractual requirements.`,
        `Ensure timely review of contract modifications and communication of changes and notices to the business team.`,
        `Work closely with cross-functional teams of (Sales, Legal, Finance, and Operations) in order to resolve legal and business challenges`,
        `Ensure that all required approvals are obtained prior to submittal of contracts for execution`,
        `Conduct various contract related projects and other duties`,
        `Manage contract lifecycle for vendor, customer and channel agreements`
    ],
    [
        `Bachelor's Degree`,
        `3 or more years of contracts management, paralegal, or other comparable experience within a law firm or legal department`,
        `Strong written and oral communication skills, including drafting contractual language`,
        `Strong computer skills (e.g., proficiency with SharePoint, MS Word, Excel, E-signature tools, Salesforce etc.)`,
        `Track terms as required`,
        `Excellent organizational skills, ability to manage multiple projects at once, follow through and meet deadlines`,
        `Desire to help improve and streamline processes`,
        `Ability to work independently while being able to contribute to cross-functional teams`,
        `Familiarity with information technology services`
    ]),
    new jobs('Paid Media Specialist', 'JO-1907-32634', `Bunting Airlines currently has exciting opportunities for Paid Media Specialists that would like to join our team as a full-time employee in Denver, CO.`,
    [`Assist Senior Account Managers in the day-to-day coordination of PPC accounts`,
        `Prepare reporting and presentation decks using Excel and PowerPoint`,
        `Interface with clients for planning and reporting`,
        `Make strategic and tactical recommendations based on data analysis`,
        `Conduct competitive and industry research to stay current with market trends, updates and best practices`,
        `Develop and implement tests (inclusive of, but not limited to: bidding, copy, positioning, etc.) in an effort to maximize program effectiveness`,
        `Work with cross-functional account teams including web development, SEO, creative and analytics team members`
    ],
    [
        `Bachelor’s degree in Business Administration or other relevant program`,
        `3 or more years of demonstrable experience in paid media accounts`,
        `Current Google AdWords & Bing Ads certifications are required`,
        `Proven experience improving paid media key performance metrics including but not limited to CTR, CPC, CPA and ROAS`,
        `Experience interacting directly with clients`,
        `Ability to work independently under strict deadlines`,
        `Effective written and verbal communication skills`,
        `Expert proficiency with Microsoft Office, especially Word, Excel & PowerPoint`
    ]),
    new jobs('Analytics Consultant', 'JO-1904-31889', `Bunting Airlines currently has exciting opportunities for Analytics Consultants that would like to join our team as a full-time employee in Portland, OR.`,
    [`Designing and developing premium technical solutions for clients within a highly iterative business centric delivery model`,
        `Managing and meeting delivery milestones`,
        `Providing expert technical advice and guidance to project team members, client stakeholders and staff`,
        `Training and enabling delivery for clients, especially on the Alteryx platform`,
        `Contributing positively to the team culture and the practice`
    ],
    [
        `Bachelor’s degree in Computer Science, Math, Statistics, Business Finance, Accounting or other relevant program`,
        `Expert level Alteryx Designer and Tableau Desktop skills (Certifications required)`,
        `Strong knowledge of data architecture (traditional and big data)`,
        `Understanding of best practices in visual analysis`,
        `Strong quantitative analysis skills and ability to interpret analytical results and present findings`,
        `Strong business and financial savvy`,
        `Strong written and verbal communication skills`,
        `Ability to communicate with internal and external customers (including communicating technical information to nontechnical audiences)`,
        `Ability to work collaboratively, be diplomatic and influence stakeholders, vendors and global teams`,
        `Strong logical, analytical, and organizational skills with meticulous attention to detail and the keen ability to anticipate and avoid problems`,
        `Strong tenacity and ability to overcome barriers due to technology, process or people`,
        `Strong customer and user experience focus with the ability to manage complexity and ambiguity`,
        `Broad technical knowledge including industry trends`,
        `Flexibility and adaptability in regards to learning and understanding new technologies and a solid understanding of the software development life-cycle`
    ]),
    new jobs('Senior AEM Business Analyst', 'JO-1909-33648', `Bunting Airlines currently has exciting opportunities for Senior AEM Business Analysts that would like to join our team as a full-time remote employee. The business analyst will facilitate requirements and development of customer-facing Adobe Experience Manager web solutions. This position is ideal for a collaborative and creative individual who facilitates the design of web solutions. The Business Analyst is an integral part of the AEM delivery team and acts as a bridge between the Customer and the Software Development team.`,
    [
        `Build trusted client relationships through effective project delivery.`,
        `Establishes knowledge of client business challenges and priorities to translate into opportunities.`,
        `Maintains regular client communication and satisfaction, ensuring opportunities and challenges are addressed in a timely manner.`,
        `Helps deliver presentations to clients and management teams.`,
        `Contributes to project discoveries, kickoff, prepare proposals and statements of work following company standards.`,
        `Translate client’s business needs into detailed business requirements documents, use cases and systems interaction diagrams.`,
        `Works with customers to establish approved wireframes and mock-ups for solutions.`,
        `Helps to establish critical path, milestones, delivery dates, and review client deliverables to ensure they meet client acceptance criteria.`,
        `Provides leadership throughout the lifecycles of a project, guiding the understanding the project team has through design and development to ensure project requirements are met`,
        `Helps establish project test strategy, methodologies, test plans as well as assist with test execution.`,
        `Instills team commitment to company delivery methodologies and practices.`
    ],
    [
        `Ability to conceptualize a solution from inception to implementation`,
        `Minimum of 2 years of experience facilitating functional requirements and Business Process Re-Design (BPR)`,
        `Experience as a Business Analyst on at least 2 major AEM projects`,
        `Experience in product development, product lifecycle management, functional and process analysis`,
        `Experience with Test Driven Development`,
        `Experience with the creation and maintenance of detailed requirement and specification documentation.`,
        `Experience with a blend of software development methods (i.e. Waterfall, Agile, XP, RUP, etc.`,
        `Experience understanding emergent technology trends related to financial, vendor management, and workflow software solutions`,
        `Facilitate customer meetings, resolving requirements issues, and gaining buy-in for solutions`,
        `Ability to identify critical issues within product specifications, design, and development and establish resolutions quickly and efficiently`,
        `Degree in Computer Science or Engineering`,
        `Strong understanding of complex Internet based enterprise level applications`,
        `AEM 6 Business Practitioner Certification (If no certification, then 3 - 5 AEM projects and a deep understanding of AEM 6.x).`
    ]),
    new jobs('Digital Analytics Manager', 'JO-1906-32607', `Bunting Airlines currently has exciting opportunities for a Digital Performance & Optimization Group Manager that would like to join our team as a full-time employee in Denver, CO.`,
    [
        `Client Facing`,
        `Develop a clear understanding of clients’ businesses, vertical, and challenges`,
        `Conceptualize and devise digital performance and optimization strategy and projects across clients`,
        `Keep abreast of industry developments and recommend new tactics, tools, and regulatory compliance efforts`,
        `Provide day-to-day guidance and supervision to account managers, analysts, and developers in the group as they execute measurement strategies, implementation projects, execute deliverables, manage budgets, analyze results, and report and communicate to clients`,
        `Work closely with engagement management to understand and adhere to project budgets and timelines and communicate performance insights, opportunities, and challenges`,
        `Work closely with adjacent practice groups to help define and develop client and internal management reports to make account management more efficient`,
        `Lead in the management of major client performance and optimization accounts`,
        `Prospect Facing`,
        `Support new client acquisition efforts with high-level analysis, implementation roadmaps, management estimates and case studies`,
        `Seek out and execute on opportunities to promote thought leadership - case studies, white papers, blog posts, speaking at conferences/events, award submissions, etc.`,
        `Business Facing`,
        `Ensure account processes and documentation are developed and maintained for each client to support team transitions and backup, and client transitions`,
        `Provide ongoing feedback to team members and participate in annual performance reviews`,
        `Identify growth needs in team members and help develop professional development plans`,
        `Assist with planning team size and operating budget; work with recruiters to target candidates for open positions; interview and help onboard`,
        `With the director, help shape the performance & optimization practice offering to ensure it has market value and is competitive and compelling`
    ],
    [
        `Bachelor’s degree in relevant program`,
        `3 or more years of team leadership and management experience`,
        `5 or more years of successful digital analytics management experience, preferably at both client-side and agency-side organizations`,
        `3 or more years of tag management experience with one of the following: Google Tag Manager, Adobe Launch (Adobe DTM) or Tealium`,
        `2 or more years of experience working with analytics tracking implementations for ecommerce websites`,
        `Working proficiency with JavaScript and jQuery`,
        `Demonstrated experience with GDPR consent tools and compliance`,
        `Understanding of different attribution models and methods, their purposes, and limitations`,
        `Expert proficiency with MS Office, especially Excel, PowerPoint, and Word`,
        `Demonstrated experience with attribution modeling, A/B testing and ecommerce`,
        `Understanding of key measures of site speed and how it impacts the user experience`,
        `Demonstrated experience using digital analytics tools, surveys, and industry data to architect performance improvement plans and effecting change in terms of website performance`,
        `Demonstrated experience automating and visualizing data analysis and recurring reporting`,
        `Understanding of different digital and offline channels and their relationship and utility in the marketing mix`,
        `Demonstrated experience using Tableau, Microsoft Power BI, or similar tool`,
        `Excellent communication skills, verbal and written, with demonstrated ability to pull out insights, explain, and build cases in support of strategies, budget allocation and KPIs`
    ])
]