/**
 * publications.ts — FSRC Publication Data
 *
 * HOW TO ADD A PUBLICATION:
 *   1. Copy one of the objects below and add it to the array
 *   2. Fill in all required fields (see Publication interface)
 *   3. Set featured: true to surface it in the homepage "Featured" section
 *
 * PLACEHOLDER LINKS:
 *   - `link: "#"` → replace with the full URL when the report page is live
 *   - `pdfPlaceholder: "#"` → replace with the path to the real PDF, e.g.
 *       pdfPlaceholder: "/assets/publications/your-report.pdf"
 *     then place the file in: public/assets/publications/your-report.pdf
 *     PublicationCard will automatically show "PDF Forthcoming" when value is "#"
 *
 * REPORT COVERS:
 *   The ReportCover component renders a visual cover for featured publications.
 *   Update the <ReportCover> props in Home.tsx and Publications.tsx when changing
 *   the featured report.
 */

export type PublicationCategory =
  | "Flagship Report"
  | "Policy Intelligence Brief"
  | "Commentary"
  | "Futures Paper";

export interface Publication {
  id: string;
  title: string;
  subtitle?: string;
  category: PublicationCategory;
  date: string;
  year: number;
  author: string;
  affiliation: string;
  abstract: string;
  excerpt: string;
  tags: string[];
  link: string;
  pdfPlaceholder: string;
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    id: "justice-risk-outlook-africa-2026",
    title: "Justice Risk Outlook: Africa 2026",
    category: "Flagship Report",
    date: "January 2026",
    year: 2026,
    author: "FSRC Research Team",
    affiliation: "FSRC Global Justice Intelligence",
    abstract:
      "The Justice Risk Outlook: Africa 2026 provides a comprehensive assessment of emerging justice and governance risks across the African continent. Drawing on structured analysis of political, institutional, and legal trends, the report identifies jurisdictions facing elevated risks of democratic reversal, accountability deficits, and human rights deterioration. It offers policy-relevant risk ratings and strategic recommendations for international actors, civil society organizations, and development institutions engaged in governance programming.",
    excerpt:
      "A comprehensive governance risk assessment identifying jurisdictions facing elevated risks of democratic reversal, accountability deficits, and human rights deterioration across Africa.",
    tags: ["Governance", "Human Rights", "Africa", "Risk Analysis"],
    link: "#",
    pdfPlaceholder: "#",
    featured: true,
  },
  {
    id: "ai-governance-human-rights-africa",
    title: "Artificial Intelligence, Governance, and Human Rights in Africa",
    subtitle: "Risks, Institutional Gaps, and Strategic Policy Pathways",
    category: "Flagship Report",
    date: "March 2025",
    year: 2025,
    author: "Dr. D. Mario Matsinhe",
    affiliation: "FSRC Policy Intelligence",
    abstract:
      "This report examines the governance gaps and human rights implications of the rapid deployment of artificial intelligence systems across African contexts. It analyses national AI strategies, regulatory readiness, and the civil society landscape, and identifies structural risks including discriminatory algorithmic systems, surveillance infrastructure, and data-governance deficits. The report proposes a framework for rights-respecting AI governance calibrated to African institutional realities.",
    excerpt:
      "An analytical briefing on AI adoption, governance gaps, and human-rights risks across African contexts, with a proposed framework for rights-respecting AI governance.",
    tags: ["Artificial Intelligence", "Human Rights", "Africa", "Technology Policy"],
    link: "#",
    pdfPlaceholder: "#",
    featured: true,
  },
  {
    id: "africa-futures-2035",
    title: "Africa Futures 2035: Governance, Integration, and the Political Economy of Change",
    category: "Futures Paper",
    date: "November 2025",
    year: 2025,
    author: "FSRC Research Team",
    affiliation: "FSRC African Futures Lab",
    abstract:
      "Africa Futures 2035 is a long-form strategic foresight paper examining the political, economic, and governance trajectories of the African continent over the next decade. Using scenario analysis and structured expert consultation, the paper maps plausible futures across four dimensions: regional integration, democratic consolidation, economic diversification, and institutional resilience. It is intended as a strategic planning resource for policymakers, foundations, and development institutions.",
    excerpt:
      "A strategic foresight paper mapping plausible governance, integration, and political economy scenarios for Africa through 2035, using scenario analysis and structured expert input.",
    tags: ["Strategic Foresight", "Africa", "Regional Integration", "Political Economy"],
    link: "#",
    pdfPlaceholder: "#",
  },
  {
    id: "civic-space-democratic-resilience-southern-africa",
    title: "Civic Space and Democratic Resilience in Southern Africa",
    category: "Policy Intelligence Brief",
    date: "September 2025",
    year: 2025,
    author: "FSRC Research Team",
    affiliation: "FSRC Global Justice Intelligence",
    abstract:
      "This policy intelligence brief examines trends in civic space restriction across Southern Africa, focusing on legislative, administrative, and extrajudicial pressures on civil society organizations, independent media, and opposition movements. It documents patterns of NGO regulation, digital surveillance, and protest criminalization, and assesses the implications for democratic governance and international development partnerships. The brief concludes with targeted policy recommendations for international partners.",
    excerpt:
      "An assessment of civic space restriction trends in Southern Africa, documenting pressures on civil society, independent media, and opposition movements with policy recommendations for international partners.",
    tags: ["Civic Space", "Democracy", "Southern Africa", "Civil Society"],
    link: "#",
    pdfPlaceholder: "#",
  },
  {
    id: "responsible-ai-governance-african-public-institutions",
    title: "Responsible AI Governance for African Public Institutions",
    category: "Policy Intelligence Brief",
    date: "July 2025",
    year: 2025,
    author: "FSRC Research Team",
    affiliation: "FSRC African Futures Lab",
    abstract:
      "This brief addresses the governance challenges facing African public institutions seeking to deploy artificial intelligence systems responsibly. It reviews existing AI governance frameworks from a Global South perspective, identifies institutional readiness gaps, and proposes a practical toolkit for responsible AI adoption in public-sector contexts. The brief is designed for governments, development agencies, and civil society actors engaged in digital transformation programming.",
    excerpt:
      "A practical governance brief for African public institutions on responsible AI adoption, reviewing existing frameworks and proposing a toolkit calibrated to Global South institutional realities.",
    tags: ["Artificial Intelligence", "Public Sector", "Africa", "Technology Governance"],
    link: "#",
    pdfPlaceholder: "#",
  },
  {
    id: "corporate-accountability-extractive-sector-mozambique",
    title: "Corporate Accountability and Extractive Sector Risk in Mozambique",
    category: "Policy Intelligence Brief",
    date: "May 2025",
    year: 2025,
    author: "FSRC Research Team",
    affiliation: "FSRC Global Justice Intelligence",
    abstract:
      "This brief examines corporate accountability and human rights risk in Mozambique's extractive sector, with particular focus on the liquefied natural gas (LNG) projects in Cabo Delgado province. It reviews human rights due diligence obligations for investor-state actors, evaluates compliance gaps, and assesses the interplay between resource governance and the humanitarian situation. The brief draws on legal analysis, field reports, and institutional documentation to provide actionable risk intelligence for investors, insurers, and development institutions.",
    excerpt:
      "An assessment of human rights due diligence obligations and compliance gaps in Mozambique's LNG extractive sector, providing risk intelligence for investors and development institutions.",
    tags: ["Corporate Accountability", "Extractives", "Mozambique", "Human Rights Due Diligence"],
    link: "#",
    pdfPlaceholder: "#",
  },
  {
    id: "multilateral-accountability-reform",
    title: "Accountability Reform in Multilateral Development Finance: Pathways and Obstacles",
    category: "Commentary",
    date: "February 2025",
    year: 2025,
    author: "FSRC Research Team",
    affiliation: "FSRC Policy Intelligence",
    abstract:
      "This commentary examines the structural accountability deficits in multilateral development finance institutions and assesses recent reform proposals. It argues that current reform trajectories are insufficient to address the legitimacy gap faced by international financial institutions, and outlines an alternative reform agenda centred on meaningful borrower-country voice, independent accountability mechanisms, and transparency obligations.",
    excerpt:
      "A critical assessment of multilateral development finance accountability reform proposals, arguing that current trajectories are insufficient and outlining an alternative reform agenda.",
    tags: ["Multilateral Finance", "Accountability", "Global Governance", "Reform"],
    link: "#",
    pdfPlaceholder: "#",
  },
  {
    id: "democratic-backsliding-west-africa",
    title: "Democratic Backsliding in West Africa: Structural Drivers and Policy Responses",
    category: "Futures Paper",
    date: "December 2024",
    year: 2024,
    author: "FSRC Research Team",
    affiliation: "FSRC Global Justice Intelligence",
    abstract:
      "This paper examines the structural drivers of democratic backsliding in West Africa, focusing on the role of security sector governance failures, elite capture, and external actor incentives in enabling authoritarian consolidation. It maps the trajectories of democratic erosion in key states and assesses the effectiveness of regional and international policy responses. The paper offers a forward-looking analysis of conditions under which democratic resilience might be strengthened.",
    excerpt:
      "A structural analysis of democratic backsliding in West Africa, examining governance failures, elite capture, and international actor incentives, with forward-looking democratic resilience scenarios.",
    tags: ["Democracy", "West Africa", "Authoritarianism", "Security Governance"],
    link: "#",
    pdfPlaceholder: "#",
  },
];
