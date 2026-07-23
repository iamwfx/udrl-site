export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number | null;
  doi?: string;
  githubUrl?: string;
  pdfUrl?: string;
  tags?: string[];
}

export const publications: Publication[] = [
  // 2025
  {
    title: "A research agenda for GIScience in a time of disruptions",
    authors: "Nelson, T., Frazier, A.E., Kedron, P., Dodge, S., Zhao, B., Goodchild, M., Murray, A., Xu, W., et al.",
    journal: "International Journal of Geographical Information Science, 39(1), 1–24",
    year: 2025,
    doi: "https://doi.org/10.1080/13658816.2024.2405191",
    tags: ["GIScience", "spatial analysis"],
  },
  {
    title: "Rethinking GIScience education in an age of disruptions",
    authors: "Frazier, A.E., Nelson, T., Kedron, P., Shook, E., Dodge, S., Murray, A., Xu, W., et al.",
    journal: "Transactions in GIS, 29(2)",
    year: 2025,
    doi: "https://doi.org/10.1111/tgis.70048",
    tags: ["GIScience", "education", "spatial analysis"],
  },
  {
    title: "An intersectional analysis of climate risk and susceptibility among urban schools across 20 major US cities",
    authors: "Rahai, R., Evans, G.W., Wells, N.M., Xu, W.",
    journal: "Urban Climate, 64, 102620",
    year: 2025,
    doi: "https://doi.org/10.1016/j.uclim.2025.102620",
    tags: ["climate risk", "urban schools", "equity"],
  },
  {
    title: "Measuring Residential Mobility: A Historical Overview of Novel Data and Methodological Approaches",
    authors: "Freeman, L., Lee, Y., Lei, Y., Xu, W.",
    journal: "Journal of Planning Literature",
    year: 2025,
    doi: "https://doi.org/10.1177/08854122251382934",
    tags: ["residential mobility"],
  },
  // 2024
  {
    title: "The racial composition of road users, traffic citations, and police stops",
    authors: "Xu, W., Smart, M., Tilahun, N., Askari, S., Dennis, Z., Li, H., Levinson, D.",
    journal: "Proceedings of the National Academy of Sciences, 121(24)",
    year: 2024,
    doi: "https://doi.org/10.1073/pnas.2402547121",
    tags: ["racial equity", "policing", "transportation"],
  },
  {
    title: "An experienced racial-ethnic diversity dataset in the United States using human mobility data",
    authors: "Xu, W., Wang, Z., Attia, N., Attia, Y., Zhang, Y., Zong, H.",
    journal: "Scientific Data, 11(1), 638",
    year: 2024,
    doi: "https://doi.org/10.1038/s41597-024-03490-y",
    tags: ["mobility data", "segregation", "open data"],
  },
  {
    title: "New methods for old questions: Predicting historical urban renewal areas in the United States",
    authors: "Xu, W.",
    journal: "Environment and Planning B: Urban Analytics and City Science",
    year: 2024,
    doi: "https://doi.org/10.1177/23998083241260778",
    tags: ["computer vision", "urban renewal", "historical GIS"],
  },
  {
    title: "The Where, When, and How of Diversity: How Space, Time, and Incomes Configure the Racial-Ethnic Composition of Networks",
    authors: "Xu, W.",
    journal: "Annals of the American Association of Geographers, 114(8)",
    year: 2024,
    doi: "https://doi.org/10.1080/24694452.2024.2339443",
    tags: ["mobility data", "segregation", "social networks"],
  },
  // 2023
  {
    title: "A National Zoning Atlas to Inform Housing Research, Policy, and Public Participation",
    authors: "Xu, W., Markley, S., Bronin, S.C., Drogaris, D.",
    journal: "Cityscape, 25(3), 55–72",
    year: 2023,
    doi: "https://www.huduser.gov/portal/periodicals/cityscape/vol25num3/article3.html",
    tags: ["zoning", "housing policy", "open data"],
  },
  {
    title: "Where did redlining matter? Regional heterogeneity and the uneven distribution of advantage",
    authors: "Xu, W.",
    journal: "Annals of the American Association of Geographers, 113(8), 1939–1959",
    year: 2023,
    doi: "https://doi.org/10.1080/24694452.2023.2205514",
    githubUrl: "https://github.com/iamwfx/redlining-regional",
    tags: ["redlining", "spatial analysis", "housing discrimination"],
  },
  // 2022
  {
    title: "Legacies of institutionalized redlining: a comparison between speculative and implemented mortgage risk maps in Chicago, Illinois",
    authors: "Xu, W.",
    journal: "Housing Policy Debate, 32(2), 249–274",
    year: 2022,
    doi: "https://doi.org/10.1080/10511482.2020.1858924",
    githubUrl: "https://github.com/iamwfx/redlining_chicago",
    tags: ["redlining"],
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
  {
    title: "Housing Markets, Residential Sorting, and Spatial Segregation",
    authors: "Tan, S.B., Xu, W., Williams, S.",
    journal: "University of Pennsylvania Press",
    year: 2022,
    doi: "https://doi.org/10.9783/9781512823028-004",
    tags: ["housing markets", "segregation", "residential sorting"],
  },
  {
    title: "Is \"Regulation from Below\" Possible?",
    authors: "Xu, W.",
    journal: "Public Books",
    year: 2022,
    doi: "https://www.publicbooks.org/community-organizing-and-financialization-of-housing/",
    tags: ["housing policy", "community organizing", "financialization"],
  },
  // 2019
  {
    title: "Ghost cities of China: Identifying urban vacancy through social media data",
    authors: "Williams, S., Xu, W., Tan, S.B., Foster, M.J., Chen, C.",
    journal: "Cities, 94, 275–285",
    year: 2019,
    doi: "https://doi.org/10.1016/j.cities.2019.05.006",
    tags: ["urban vacancy", "social media"],
  },
  {
    title: "A roundtable discussion: Defining urban data science",
    authors: "Kang, W., Oshan, T., Wolf, L.J., Boeing, G., Xu, W., et al.",
    journal: "Environment and Planning B: Urban Analytics and City Science, 46(9), 1756–1768",
    year: 2019,
    doi: "https://doi.org/10.1177/2399808319882826",
    tags: ["urban data science", "GIScience"],
  },
  // 2018
  {
    title: "Urban explorations: Analysis of public park usage using mobile GPS data",
    authors: "Xu, W.",
    journal: "arXiv preprint",
    year: 2018,
    doi: "https://arxiv.org/abs/1801.01921",
    tags: ["parks", "green space", "mobility data"],
  },
];
