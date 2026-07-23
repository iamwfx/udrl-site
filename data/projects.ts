export interface ProjectPaper {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  githubUrl?: string;
  draftAvailable?: boolean;
  tags?: string[];
}

export interface ProjectMedia {
  outlet: string;
  url?: string;
  note?: string;
}

export interface Project {
  slug: string;
  title: string;
  year: number;
  description: string;
  longDescription: string;
  team: string[];
  tags: string[];
  githubUrl?: string;
  paperUrl?: string;
  featured: boolean;
  image?: string;
  papers?: ProjectPaper[];
  media?: ProjectMedia[];
}

export const projects: Project[] = [
  {
    slug: "evolution-of-urban-renewal",
    title: "The Evolution of Urban Renewal",
    year: 2022,
    description:
      "Using aerial imagery and computer vision to study how urban renewal programs transformed American neighborhoods from the 1950s–1970s.",
    longDescription:
      "This project uses historical aerial imagery combined with deep learning computer vision techniques to track the physical transformation of neighborhoods subject to urban renewal programs across the United States. We quantify the scale of demolition, reconstruction, and displacement that occurred during one of the most consequential housing policy eras in American history.",
    team: ["Wenfei Xu", "Houpu Li"],
    tags: ["computer vision", "housing policy", "historical GIS"],
    githubUrl: "https://github.com/urban-data-research-lab/urban-renewal-methods",
    featured: true,
    image: "/images/projects/evolution-of-urban-renewal.png",
    papers: [
      {
        title: "New methods for old questions: Predicting historical urban renewal areas in the United States",
        authors: "Xu, W.",
        journal: "Environment and Planning B: Urban Analytics and City Science",
        year: 2024,
        doi: "https://doi.org/10.1177/23998083241260778",
        tags: ["computer vision", "urban renewal", "historical GIS"],
      },
    ],
  },
  {
    slug: "a-new-picture-of-segregation",
    title: "A New Picture of Segregation",
    year: 2022,
    description:
      "Mapping the National Experienced Racial-Ethnic Diversity (NERD) dataset, which uses anonymized mobile phone location data to measure the diversity people actually encounter throughout their day.",
    longDescription:
      "Traditional measures of segregation rely on where people live, but daily life extends far beyond the home. This project visualizes the National Experienced Racial-Ethnic Diversity (NERD) dataset, measuring diversity people encounter at work, during errands, and in leisure activities. Using anonymized mobile phone location data from over 66 million opted-in devices, we provide estimates of experienced diversity for the entire United States at the census tract level.",
    team: ["Wenfei Xu", "Zoe Wang", "Nada Attia", "Youssef Attia", "Yucheng Zhang", "Tony Zong"],
    tags: ["mobility data", "segregation", "big data"],
    paperUrl: "https://doi.org/10.1038/s41597-024-03490-y",
    featured: true,
    image: "/images/projects/legacy-of-redlining.png",
    papers: [
      {
        title: "An experienced racial-ethnic diversity dataset in the United States using human mobility data",
        authors: "Xu, W., Wang, Z., Attia, N., Attia, Y., Zhang, Y., Zong, H.",
        journal: "Scientific Data, 11(1), 638",
        year: 2024,
        doi: "https://doi.org/10.1038/s41597-024-03490-y",
        tags: ["mobility data", "segregation", "open data"],
      },
      {
        title: "The Where, When, and How of Diversity: How Space, Time, and Incomes Configure the Racial-Ethnic Composition of Networks",
        authors: "Xu, W.",
        journal: "Annals of the American Association of Geographers, 114(8)",
        year: 2024,
        doi: "https://doi.org/10.1080/24694452.2024.2339443",
        tags: ["mobility data", "segregation", "social networks"],
      },
      {
        title: "The contingency of neighbourhood diversity: Variation of social context using mobile phone application data",
        authors: "Xu, W.",
        journal: "Urban Studies, 59(4), 851–869",
        year: 2022,
        doi: "https://doi.org/10.1177/00420980211019637",
        githubUrl: "https://github.com/iamwfx/cell_data_diversity",
        tags: ["mobility data", "neighborhoods", "segregation"],
      },
    ],
    media: [
      { outlet: "Block Club Chicago", note: "PNAS traffic citations paper, 2024" },
      { outlet: "Chicago Tribune", note: "PNAS traffic citations paper, 2024" },
      { outlet: "NBC Chicago", note: "PNAS traffic citations paper, 2024" },
      { outlet: "Cornell Chronicle", note: "PNAS traffic citations paper, 2024" },
    ],
  },
  {
    slug: "legacy-of-redlining",
    title: "Legacy of Redlining",
    year: 2018,
    description:
      "Examining the contemporary impacts of New Deal-era redlining maps on neighborhood racial composition, housing values, and economic opportunity.",
    longDescription:
      "This project investigates where and why federal Home Owners' Loan Corporation (HOLC) redlining maps from the 1930s–1940s continue to shape neighborhood outcomes today. Using regression discontinuity and spatial methods, we find significant regional heterogeneity in the lasting effects of this discriminatory policy on residential segregation, property values, and access to opportunity.",
    team: ["Wenfei Xu"],
    tags: ["redlining", "housing discrimination", "spatial analysis"],
    githubUrl: "https://github.com/iamwfx/redlining-regional",
    paperUrl: "https://doi.org/10.1080/10511482.2022.2026134",
    featured: true,
    image: "/images/projects/a-million-walks-in-the-park.jpg",
    papers: [
      {
        title: "Where did redlining matter? Regional heterogeneity and the uneven distribution of advantage",
        authors: "Xu, W.",
        journal: "Annals of the American Association of Geographers, 113(8), 1939–1959",
        year: 2023,
        doi: "https://doi.org/10.1080/24694452.2023.2205514",
        githubUrl: "https://github.com/iamwfx/redlining-regional",
        tags: ["redlining", "spatial analysis", "housing discrimination"],
      },
      {
        title: "Legacies of institutionalized redlining: a comparison between speculative and implemented mortgage risk maps in Chicago, Illinois",
        authors: "Xu, W.",
        journal: "Housing Policy Debate, 32(2), 249–274",
        year: 2022,
        doi: "https://doi.org/10.1080/10511482.2020.1858924",
        githubUrl: "https://github.com/iamwfx/redlining_chicago",
        tags: ["redlining"],
      },
    ],
  },
  {
    slug: "a-million-walks-in-the-park",
    title: "A Million Walks in the Park",
    year: 2017,
    description:
      "Analyzing park usage patterns across U.S. cities using mobile phone location data to understand equitable access to green space.",
    longDescription:
      "Access to parks and green space is a core component of urban quality of life. This project uses large-scale anonymized mobility data to measure how residents across different neighborhoods and demographic groups actually use urban parks — revealing disparities in access and enjoyment that residential proximity alone cannot capture.",
    team: ["Wenfei Xu"],
    tags: ["parks", "green space", "mobility data"],
    featured: false,
    image: "/images/projects/a-new-picture-of-segregation.png",
    papers: [
      {
        title: "Urban explorations: Analysis of public park usage using mobile GPS data",
        authors: "Xu, W.",
        journal: "arXiv preprint",
        year: 2018,
        doi: "https://arxiv.org/abs/1801.01921",
        tags: ["parks", "green space", "mobility data"],
      },
    ],
  },
  {
    slug: "measuring-integration-affordable-housing",
    title: "Measuring Integration in Affordable Housing with Location Data",
    year: 2024,
    description:
      "Using large-scale human mobility data to test whether subsidized affordable housing in high-opportunity neighborhoods actually produces the social and spatial integration that housing policy assumes.",
    longDescription:
      "Housing policy in the United States increasingly funds programs — vouchers, LIHTC, inclusionary zoning — premised on the idea that moving lower-income residents to 'better' neighborhoods will improve their access to schools, amenities, employment, and social networks. Yet remarkably few studies have measured at national scale whether this proximity translates into actual experienced integration. This project uses a novel dataset of anonymized mobility patterns for over 66 million U.S. residents, recorded at 15-minute intervals, to develop three measures of experienced integration — social diversity, distance traveled, and types of places visited — and compare subsidized housing residents to matched control groups nationwide.\n\nA case study component examines 29 subsidized developments across four sub-metropolitan areas (Central New Jersey, Denver, Greater Milwaukee, and San Antonio), analyzing four dimensions of realized opportunity: physical environment, school access and outcomes, amenities, and employment. Findings reveal persistent barriers to the hypothesized mechanisms of integration, including physical isolation from surrounding neighborhoods, low rates of school mixing, poor distribution of affordable amenities, and limited employment access. Results cluster into three neighborhood types — downtowns with influxes, slowly-declining inner-ring suburbs, and outer peripheries — each presenting different policy implications. An ongoing analysis of California's high-opportunity affordable housing program will extend these findings with a focus on state-level siting policy.\n\nThis project is funded by NSF Award #2621678.",
    team: ["Wenfei Xu", "Bernadette Baird-Zars"],
    tags: ["affordable housing", "integration", "mobility data"],
    featured: true,
    image: "/images/projects/measuring-integration-affordable-housing.jpg",
    papers: [
      {
        title: "Same street, different world: Unpacking high opportunity areas with subsidized housing in four US cities",
        authors: "Baird-Zars, B., Xu, W.",
        journal: "Under review",
        year: 2025,
        draftAvailable: true,
        tags: ["affordable housing", "opportunity", "housing policy"],
      },
      {
        title: "Does siting matter? Measuring neighborhood integration in California's high opportunity affordable housing",
        authors: "Xu, W., Baird-Zars, B.",
        journal: "In preparation",
        year: 2025,
        draftAvailable: true,
        tags: ["affordable housing", "California", "integration"],
      },
    ],
  },
  {
    slug: "redlining-lab",
    title: "Redlining Lab",
    year: 2023,
    description:
      "A collaborative research initiative digitizing and analyzing historical HOLC redlining maps to understand their long-run effects on neighborhoods across the United States.",
    longDescription:
      "The <a href=\"https://redlininglab.org\" target=\"_blank\" rel=\"noopener noreferrer\">Redlining Lab</a> is Kate Thomas (NYU), Thomas Storrs (University of Virginia), Wenfei Xu (UCSB), and Jacob Faber (NYU).\n\nBy linking historical Home Owners' Loan Corporation (HOLC) appraisal maps from the 1930s and 1940s to contemporary data on race, wealth, health, and opportunity, the lab investigates how mortgage discrimination inscribed in these maps continues to shape the geography of inequality in American cities.\n\nPlease visit our website at <a href=\"https://redlininglab.org\" target=\"_blank\" rel=\"noopener noreferrer\">redlininglab.org</a>.",
    team: ["Wenfei Xu"],
    tags: ["redlining", "housing discrimination", "historical GIS"],
    featured: true,
    image: "/images/projects/redlining-lab.png",
    papers: [
      {
        title: "New Evidence on Race and Nativity in New Deal Mortgage Programs",
        authors: "Thomas, K., Storrs, T., Xu, W., Faber, J.",
        journal: "Nature (accepted)",
        year: 2026,
        tags: ["redlining", "New Deal", "mortgage discrimination"],
      },
      {
        title: "Revisiting the Measurement of Redlining: Comparative Evidence from FHA and HOLC Maps",
        authors: "Xu, W., Thomas, K., Storrs, T., Faber, J.",
        journal: "In preparation",
        year: 2025,
        draftAvailable: true,
        tags: ["redlining", "FHA", "HOLC"],
      },
    ],
  },
  {
    slug: "land-records",
    title: "Land Records",
    year: 2023,
    description:
      "Using digitized deed records, tax assessments, and land transfer data to reconstruct the history of property ownership and trace the mechanisms of racial wealth extraction in American real estate.",
    longDescription:
      "Property records are among the most complete archives of American economic history, yet they remain largely inaccessible at scale. This project develops methods to digitize, link, and analyze historical deed books, mortgage records, and tax rolls to reconstruct chains of title across entire cities. By tracking ownership histories, prices, and transaction patterns over decades, we uncover how racially restrictive covenants, predatory lending, and discriminatory appraisal practices transferred wealth away from communities of color and shaped the contemporary landscape of homeownership and housing equity.",
    team: ["Wenfei Xu"],
    tags: ["land records", "property history", "housing discrimination"],
    featured: true,
    image: "/images/projects/land-records.jpg",
    papers: [],
  },
  {
    slug: "residential-mobility",
    title: "Residential Mobility",
    year: 2024,
    image: "/images/research-housing-policy.jpg",
    description:
      "Examining how households move through cities — who moves, where they go, and what housing policies shape their trajectories.",
    longDescription:
      "This project examines residential mobility in the United States through three complementary studies: a historical review of how the field has measured mobility over a century of data and methods; a longitudinal tracking of Chicago public housing residents displaced by the HOPE VI demolition program; and an analysis of whether New York City's Mandatory Inclusionary Housing program alters local migration patterns and neighborhood outcomes.",
    team: ["Wenfei Xu", "Yeonhwa Lee", "Yining Lei", "Zihao Zhou", "Yucheng Zhang", "Lance Freeman"],
    tags: ["residential mobility", "public housing", "housing policy"],
    featured: true,
    papers: [
      {
        title: "Measuring residential mobility: A historical overview of novel data and methodological approaches",
        authors: "Freeman, L., Lee, Y., Lei, Y., Xu, W.",
        journal: "Journal of Planning Literature",
        year: 2025,
        doi: "https://journals.sagepub.com/doi/full/10.1177/08854122251382934",
        tags: ["residential mobility"],
      },
      {
        title: "Where did they go after HOPE VI? A longitudinal study of long-term neighborhood attainment outcomes in Chicago",
        authors: "Xu, W., Lee, Y., Lei, Y., Zhou, Z., Zhang, Y., Freeman, L.",
        journal: "Housing Policy Debate (accepted)",
        year: 2025,
        tags: ["public housing", "HOPE VI", "displacement"],
      },
      {
        title: "A twist of fate? Tracking changes in local migration patterns in the wake of inclusionary zoning",
        authors: "Lei, Y., Lee, Y., Xu, W., Zhou, Z., Zhang, Y., Freeman, L.",
        journal: "Journal of the American Planning Association",
        year: 2025,
        draftAvailable: true,
        tags: ["inclusionary zoning", "residential mobility", "New York City"],
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
