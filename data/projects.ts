export interface ProjectPaper {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  githubUrl?: string;
  draftAvailable?: boolean;
  tags?: string[];
  image?: string;
  abstract?: string;
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
        abstract:
          "Mid-20th century urban renewal in the United States was transformational for the physical urban fabric and socioeconomic trajectories of neighborhoods and its displaced residents. However, there is little research that systematically investigates its impacts due to incomplete national data.\n\nThis article uses a multiple-model machine learning method to discover 204 new Census tracts that were likely sites of federal urban renewal, highway construction related demolition, and other urban renewal projects between 1949 and 1970. It also aims to understand the factors motivating the decision to “renew” certain neighborhoods.\n\nI find that race, housing age, and homeownership are all determinants of renewal. Moreover, by stratifying the analysis along neighborhoods perceived to be more or less risky, I also find that race and housing age are two distinct channels that influence renewal.",
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
      "Traditional measures of segregation rely on where people live, but daily life extends far beyond the home. This project visualizes the National Experienced Racial-Ethnic Diversity (NERD) dataset, measuring diversity people encounter at work, during errands, and in leisure activities. Using anonymized mobile phone location data from over 66 million opted-in devices, we provide estimates of experienced diversity for the entire United States at the census tract level.\n\nExplore the interactive maps and data at <a href=\"https://newpicture.urbandataresearchlab.org\" target=\"_blank\" rel=\"noopener noreferrer\">newpicture.urbandataresearchlab.org</a>.",
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
        abstract:
          "Despite the importance of measuring racial-ethnic segregation and diversity in the United States, current measurements are largely based on the Census and, thus, only reflect segregation and diversity as understood through residential location. This leaves out the social contexts experienced throughout the course of the day during work, leisure, errands, and other activities.\n\nThe National Experienced Racial-ethnic Diversity (NERD) dataset provides estimates of diversity for the entire United States at the census tract level based on the range of place and times when people have the opportunity to come into contact with one another. Using anonymized and opted-in mobile phone location data to determine co-locations of people and their demographic backgrounds, these measurements of diversity in potential social interactions are estimated at 38.2m × 19.1m scale and 15-minute timeframe for a representative year and aggregated to the Census tract level for purposes of data privacy.\n\nAs well, we detail some of the characteristics and limitations of the data for potential use in national, comparative studies.",
      },
      {
        title: "The Where, When, and How of Diversity: How Space, Time, and Incomes Configure the Racial-Ethnic Composition of Networks",
        authors: "Xu, W.",
        journal: "Annals of the American Association of Geographers, 114(8)",
        year: 2024,
        doi: "https://doi.org/10.1080/24694452.2024.2339443",
        tags: ["mobility data", "segregation", "social networks"],
        abstract:
          "This article investigates the relationship between income and the diversity of sociospatial networks as described by high-density mobile phone application (MPA) Global Positioning System data.\n\nLooking at the counties that contain the Atlanta, Boston, Chicago, and Los Angeles metropolitan regions in August and September 2022, this study asks the following questions: How does the racial-ethnic diversity and spatial extent of network of activity space-times — the place and time of daily activities — vary across different income levels? Given the existing literature, are more diverse networks composed of higher income classes? Are there key types of activity space-times that are more likely to be in these networks?\n\nGiven that the overlap of activity spaces might lead to the formation of stronger social ties, this study aims to provide new evidence of the role of activity spaces in determining the diversity of social exposures with high-resolution spatiotemporal MPA activity.\n\nResults suggest that income is an important determinant of diversity in networks, with the highest and lowest income groups both exhibiting the least diversity in networks, whereas institutional spaces like church or school and other surprising places such as the dentist's office are the most likely activity space-times in these networks.",
      },
      {
        title: "The contingency of neighbourhood diversity: Variation of social context using mobile phone application data",
        authors: "Xu, W.",
        journal: "Urban Studies, 59(4), 851–869",
        year: 2022,
        doi: "https://doi.org/10.1177/00420980211019637",
        githubUrl: "https://github.com/iamwfx/cell_data_diversity",
        tags: ["mobility data", "neighborhoods", "segregation"],
        abstract:
          "This research uses high-density anonymised mobile phone application (MPA) global-positioning system (GPS) data to describe exposure to racial diversity in different social contexts with an aim to clarify the mechanism linking residential diversity to opportunities for diverse social interactions.\n\nIn particular, it explores the hypothesis that a diverse residential context does not lead to diverse social contact by comparing three exposure measures — residential, observed and interaction — on the census block group level in Chicago. In doing so, it also explores the contribution of activity spaces to opportunities for diverse social contact.\n\nThe findings show that the exposure to opportunities for diverse social contact measured by MPA data is generally higher than what is implied by residential census data, especially in areas of high residential segregation in the city. Further, measures using MPA data reveal more spatiotemporal heterogeneity of exposure than that implied by the residential context.",
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
        abstract:
          "This article analyzes the regional variation in outcomes of a seemingly standardized federal neighborhood valuation principle used in home mortgage insurance grading. The objective is to highlight the contingent discriminatory and economic conditions that mediated heterogeneous housing outcomes across different parts of the United States.\n\nHow did city and regional economic and demographic growth patterns vary before and during the mortgage insurance program implemented through the Federal Housing Administration (FHA)? How might this have shaped loan guarantee patterns? How does preexisting racial housing discrimination relate to outcomes?\n\nAdopting an orientation that centers on Whiteness and the benefits of mortgage finance for certain groups and neighborhoods, this analysis uses a Bayesian hierarchical framework to investigate the degree of the FHA's influence between 1940 and 1970, here proxied by the Home Owners' Loan Corporation maps, on A or B (\"AB\") graded neighborhoods versus C graded neighborhoods in different cities. This article studies how home values and homeownership change over time and whether there are regional variations in the influence of these grades. It also studies what longitudinal socioeconomic patterns might explain the persistence or decline of the AB effect over time.\n\nFindings show cities in the West Coast, Southwest, and northern central United States that saw the most housing construction also had the highest proportions of FHA loans to overall dwelling units. There is also a distinctive consistency and persistence of benefit on home value and homeownership to AB graded neighborhoods in these cities, possibly owing to regional shifts in the industrial landscape.",
      },
      {
        title: "Legacies of institutionalized redlining: a comparison between speculative and implemented mortgage risk maps in Chicago, Illinois",
        authors: "Xu, W.",
        journal: "Housing Policy Debate, 32(2), 249–274",
        year: 2022,
        doi: "https://doi.org/10.1080/10511482.2020.1858924",
        githubUrl: "https://github.com/iamwfx/redlining_chicago",
        tags: ["redlining"],
        abstract:
          "How did institutionalized discriminatory lending policies implemented under the guidance of the Federal Housing Administration (FHA)'s mortgage risk maps impact neighborhood trajectories? Have these spatially restrictive credit designations influenced home value, homeownership, and racial segregation?\n\nUsing the FHA mortgage risk map of Chicago, Illinois, for new loan guarantees as a case study, I measure outcomes between credit zones and compare these risk regions with the Home Owners' Loan Corporation (HOLC) Residential Security Maps, which represent post hoc measures of mortgage risk and were likely not directly used in loan activities.\n\nFor areas excluded from FHA loan guarantees, the results suggest a negative impact on home values and homeownership rates and weakly decreased segregation between 1940 and 1980. They also suggest an overcorrection of home values, an undercorrection of homeownership, and an increase in racial segregation in excluded neighborhoods between 1980 and 2010 when these areas may have experienced capital reinvestment.\n\nIn comparison with the HOLC map, the effects on tracts in Chicago rated worst by the FHA are clearer and suggest a more significant impact during the period of discriminatory mortgage lending.",
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
        abstract:
          "This study analyzes mobile phone data derived from 10 million daily active users across the United States to better understand the spatio-temporal activity patterns of users in Central Park, New York. The aim of this initial investigation is to create quantifiable measures for understanding public space usage in regions of the city that have no natural data source for measuring activity.\n\nWe analyze the trip behaviors of users across time and different regions in the park to find patterns of co-location and shared time and, thus, potential social interaction.\n\nWe find that regions with established amenities and points of interest exhibit a higher percentage of shared experiences, indicating that institutional amenities act as 'beacons' for users' experiences in the park.",
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
        year: 2026,
        draftAvailable: true,
        tags: ["affordable housing", "opportunity", "housing policy"],
        abstract:
          "Housing policies increasingly prioritize and pay a premium for subsidies to locate lower-income families in higher-income “opportunity” neighborhoods. Yet the evidence on outcomes in the immediate term is conflicting, and studies tend to be either national examinations of census data or in-depth single case studies.\n\nUsing an extensive mixed-methods case approach, we query the actually-existing conditions of “opportunity” neighborhoods of 29 subsidized housing developments in four sub-metropolitan areas.\n\nAcross neighborhoods, we find persistent barriers to the hypothesized mechanisms of access and integration, including isolation from the surrounding physical fabric, low rates of school mixing and outcomes, poor distribution of affordable and useful amenities, and unremarkable employment possibilities.\n\nWe identify three neighborhood types that correspond to variation in our findings: downtowns with influxes, slowly-declining inner-ring suburbs, and outer peripheries. The clustering of results suggests initial steps for strategic disaggregation of future analyses, policy criteria, and incentives to more accurately identify and advance “realized opportunity.”",
      },
      {
        title: "Does siting matter? Measuring neighborhood integration in California's high opportunity affordable housing",
        authors: "Xu, W., Baird-Zars, B.",
        journal: "In preparation",
        year: 2026,
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
        year: 2026,
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
      "This is an ongoing collaboration with Kate Thomas (NYU), Jacob Faber (NYU), Thomas Storrs (University of Virginia), Omer Ali (University of Pittsburgh), Randy Walsh (University of Pittsburgh), Andy Ferrera (University of Pittsburgh), and Jonathan Rose (Federal Reserve Bank of Chicago).\n\nProperty records are among the most complete archives of American economic history, yet they remain largely inaccessible at scale. This project develops methods to digitize, link, and analyze historical deed books, mortgage records, and tax rolls to reconstruct chains of title across entire cities. By tracking ownership histories, prices, and transaction patterns over decades, we uncover how racially restrictive covenants, predatory lending, and discriminatory appraisal practices transferred wealth away from communities of color and shaped the contemporary landscape of homeownership and housing equity.",
    team: ["Wenfei Xu", "Kate Thomas", "Jacob Faber", "Thomas Storrs", "Omer Ali", "Randy Walsh", "Andy Ferrera", "Jonathan Rose"],
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
        abstract:
          "This review paper analyzes the evolution of data sources, methods, and challenges in measuring residential mobility in the United States since the turn of the 20th century, focusing on attempts to measure these aspects of residential mobility: (i) its magnitude; (ii) its “why”; and (iii) its spatial and temporal context.\n\nThe expansion of data and methods has been instrumental in the development of theoretical frameworks and the ability to interrogate key empirical questions over the decades. While imperfect, the recent growth in alternative sources of individual- and household-level mobility data promises to extend the frontiers of residential mobility research.",
      },
      {
        title: "Where did they go after HOPE VI? A longitudinal study of long-term neighborhood attainment outcomes in Chicago",
        authors: "Xu, W., Lee, Y., Lei, Y., Zhou, Z., Zhang, Y., Freeman, L.",
        journal: "Housing Policy Debate (accepted)",
        year: 2026,
        tags: ["public housing", "HOPE VI", "displacement"],
        abstract:
          "This study examines the long-term residential outcomes of Chicago public housing residents displaced by the HOPE VI program, which demolished distressed developments and redeveloped some into mixed-income communities.\n\nUsing individual residential history data from 1980 to 2021 and administrative data on subsidized housing, we examine where displaced residents moved to, how the neighborhood characteristics of HOPE VI displacees compare with those of similar but voluntary movers, and, among HOPE VI displacees, how outcomes differ by relocation housing type — traditional subsidized housing, new mixed-income housing, or the private market.\n\nOur study finds that HOPE VI displacement had the effect of moving residents into neighborhoods with higher Black population shares, lower median incomes, and lower educational attainment compared to the neighborhood environments of the control group. Among relocatees, fewer than 10% accessed mixed-income redevelopments; these residents experienced slightly fewer moves and eventually improved neighborhood outcomes in education and racial composition. Private-market movers saw short-term neighborhood-level gains in income and racial integration that dissipated over time.",
      },
      {
        title: "A twist of fate? Tracking changes in local migration patterns in the wake of inclusionary zoning",
        authors: "Lei, Y., Lee, Y., Xu, W., Zhou, Z., Zhang, Y., Freeman, L.",
        journal: "In preparation",
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
