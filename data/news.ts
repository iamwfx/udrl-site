export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  description: string;
  details?: string;
  url?: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: "ucsb-assistant-professor",
    title: "Joined UC Santa Barbara as Assistant Professor",
    date: "July 2025",
    description:
      "Wenfei Xu joined the Department of Geography at UC Santa Barbara as Assistant Professor in GIScience and Urban Data Science, bringing the Urban Data Research Lab to the West Coast.",
    details:
      "We are excited to announce that the Urban Data Research Lab has moved to the Department of Geography at the University of California, Santa Barbara. Wenfei Xu joins UCSB as Assistant Professor in GIScience and Urban Data Science, where she will continue her research on neighborhood inequality, housing policy, and spatial data science. She holds affiliated faculty positions at the Center for Spatial Studies and Data Science and the Broom Center for Demography. UCSB's Geography department has a long and distinguished tradition in spatial analysis and GIScience, and we look forward to building on that foundation with new collaborations and expanded research initiatives.",
  },
  {
    slug: "nsf-government-insured-mortgages",
    title: "NSF Collaborative Research Grant: Effects of Government-Insured Mortgages",
    date: "2025",
    description:
      "The lab received a National Science Foundation Collaborative Research grant to study the long-term effects of government-insured mortgage programs on housing and wealth inequality, in partnership with researchers at NYU and the University of Pittsburgh.",
    details:
      "The lab has been awarded a two-year National Science Foundation Collaborative Research grant (2025–2027), totaling $399,998, to investigate the lasting effects of federal mortgage insurance programs on housing markets and wealth accumulation across racial groups. The project is a collaboration with Jacob Faber at New York University and Omer Ali at the University of Pittsburgh. Government-backed mortgage programs, including those administered through the FHA and VA, played a foundational role in shaping American homeownership patterns in the mid-twentieth century — yet their long-run consequences for racial wealth inequality remain incompletely understood. This project brings together historical mortgage records, administrative data, and spatial methods to trace those effects across generations.",
  },
  {
    slug: "nsf-affordable-housing-integration",
    title: "NSF Grant: Measuring Integration in Affordable Housing with Location Data",
    date: "2024",
    description:
      "The lab was awarded a $400,000 National Science Foundation grant, with Bernadette Baird-Zars, to test whether subsidized affordable housing in high-opportunity neighborhoods produces the social and spatial integration that housing policy assumes. The NSF award was subsequently canceled; the research program continues.",
    details:
      "The National Science Foundation awarded $400,000 to Wenfei Xu (PI) and Bernadette Baird-Zars for the project \"Measuring Integration in Affordable Housing with Location Data\" (2024–2026). The project uses large-scale anonymized human mobility data to develop empirical measures of experienced integration, including social diversity, distance traveled, and types of places visited, for residents of subsidized affordable housing developments nationwide, and compares these to matched control populations. The NSF award has since been canceled, but the underlying research program continues with support from other sources.",
  },
  {
    slug: "pnas-traffic-citations",
    title: "New Paper in PNAS: Race, Traffic Citations, and Police Stops",
    date: "June 2024",
    description:
      "A new paper in the Proceedings of the National Academy of Sciences examines the racial composition of road users, traffic citations, and police stops, drawing on large-scale mobility and administrative data.",
    details:
      "\"The racial composition of road users, traffic citations, and police stops\" was published in the Proceedings of the National Academy of Sciences (PNAS) in June 2024. The paper uses anonymized mobile phone location data to estimate the racial composition of drivers on specific road segments and compares those estimates against traffic citation and police stop records — enabling the first large-scale, road-level analysis of racial disparities in traffic enforcement. The findings provide new empirical evidence on the relationship between policing practices and racial equity in transportation. The paper was co-authored with Michael Smart, Nebiyou Tilahun, Shirin Askari, Zander Dennis, Houpu Li, and David Levinson, and received media coverage from Block Club Chicago, the Chicago Tribune, NBC Chicago, and the Cornell Chronicle.",
    url: "https://doi.org/10.1073/pnas.2402547121",
  },
  {
    slug: "washington-equitable-growth-grant",
    title: "Washington Center for Equitable Growth Grant",
    date: "2023",
    description:
      "The lab received a $70,000 grant from the Washington Center for Equitable Growth to examine gaps in the historical record of New Deal-era mortgage programs and their consequences for racial wealth inequality.",
    details:
      "The Urban Data Research Lab, in collaboration with Jacob Faber, Kate Thomas, and Thomas Storrs, was awarded a $70,000 grant from the Washington Center for Equitable Growth for the project \"Missing Pieces in the Puzzle.\" The project investigates lacunae in the archival and administrative record of New Deal-era federal mortgage programs — including the Federal Housing Administration's mortgage insurance scheme and the Home Owners' Loan Corporation — that have made it difficult to fully account for these programs' role in producing and entrenching racial wealth disparities. By reconstructing more complete historical datasets, the project aims to sharpen empirical estimates of how much wealth was withheld from communities of color through discriminatory lending and insurance practices.",
  },
  {
    slug: "nsf-heatr",
    title: "NSF Grant: Center for Household Energy and Thermal Resilience (HEaTR)",
    date: "2023",
    description:
      "Wenfei Xu joined as Co-PI on a $250,000 National Science Foundation grant to establish the Center for Household Energy and Thermal Resilience, studying how households navigate climate-related thermal stress.",
    details:
      "The National Science Foundation awarded $250,000 to establish the Center for Household Energy and Thermal Resilience (HEaTR), with Wenfei Xu serving as Co-Principal Investigator. HEaTR brings together researchers across disciplines to study how households — particularly lower-income and otherwise vulnerable households — experience, adapt to, and are harmed by climate-driven thermal extremes. The center focuses on the intersection of housing quality, energy access, and climate vulnerability, examining how structural conditions shape differential exposure to heat and cold stress. Xu's contribution draws on her expertise in spatial data and neighborhood inequality to situate household-level outcomes within their broader urban context.",
  },
  {
    slug: "russell-sage-grant",
    title: "Russell Sage Foundation Grant",
    date: "April 2023",
    description:
      "The Urban Data Research Lab received a grant from the Russell Sage Foundation supporting research on neighborhood inequality, residential mobility, and the spatial dynamics of opportunity.",
    details:
      "The Russell Sage Foundation awarded a research grant to the Urban Data Research Lab to support ongoing work on neighborhood inequality and the spatial distribution of opportunity in American cities. The Russell Sage Foundation is one of the principal funders of rigorous social science research in the United States, with a particular focus on work that advances understanding of inequality and informs policy. This award supports the lab's efforts to develop new empirical approaches to measuring how neighborhoods shape life outcomes — and how those dynamics vary across race, income, and geography.",
  },
  {
    slug: "urban-data-hub-cornell",
    title: "Urban Data Hub Launched at Cornell AAP",
    date: "April 2023",
    description:
      "Wenfei Xu helped launch the Urban Data Hub at Cornell's College of Architecture, Art, and Planning, a new initiative connecting researchers, students, and practitioners working at the intersection of cities and data.",
    details:
      "The Urban Data Hub officially launched at Cornell's College of Architecture, Art, and Planning in spring 2023, with Wenfei Xu among its founding contributors. The Hub is designed as a convening space for scholars, practitioners, and students who share an interest in how data can illuminate — and help address — pressing urban challenges. It supports collaborative projects, public events, and pedagogical resources at the intersection of urban research and data science. The launch marked a broadening of the lab's public-facing work and its engagement with practitioners outside the academy.",
  },
  {
    slug: "king-county-redlining-report",
    title: "King County Redlining and Wealth Loss Report",
    date: "January 2023",
    description:
      "As an Affiliated Scholar with ECONorthwest, Wenfei Xu co-authored a report for King County measuring the historical wealth impacts of racist housing policies — including redlining and restrictive covenants — on communities of color.",
    details:
      "In January 2023, Wenfei Xu co-authored a report for King County Wastewater Treatment Division, produced in collaboration with ECONorthwest, where she serves as an Affiliated Scholar. The report examines the historical wealth impacts of discriminatory housing practices in King County, Washington — including HOLC redlining maps, racially restrictive deed covenants, and exclusionary zoning — on communities of color. By combining historical records with contemporary wealth and property data, the report provides quantitative estimates of cumulative wealth losses attributable to these practices. The work contributes to a growing body of research supporting reparative and restorative housing policy at the local level.",
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
