export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  description: string;
  details?: string;
  url?: string;
  image?: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: "welcome-saad",
    title: "Welcome, Saad!",
    date: "July 2026",
    description:
      "Saad Mohammad Abrar is joining the lab as a postdoctoral scholar. Coming from a Ph.D. in Computer Science at the University of Maryland, his work asks whether mobility and behavioral data — and the models built from them — are actually reliable, fair, and valid for high-stakes public decision-making.",
    details:
      "We're thrilled to welcome Saad Mohammad Abrar to the Urban Data Research Lab as a postdoctoral scholar at UC Santa Barbara. Saad earned his M.S. and Ph.D. in Computer Science from the University of Maryland, where his research focused on evaluating whether mobility and behavioral data — and the models built from them — are reliable, fair, and valid for high-stakes public decision-making. His work sits right at the intersection of what the lab cares about: using new data sources to answer urban and social questions, while taking seriously the question of when those data actually can (and can't) be trusted for policy.",
  },
  {
    slug: "nature-new-deal-mortgages",
    title: "New Paper in Nature: New Deal mortgage programs benefited white borrowers disproportionately",
    date: "July 2026",
    description:
      "Our paper with Kate Thomas, Thomas Storrs, and Jacob Faber came out in Nature. Using newly digitized archival records from FHA and VA mortgage programs, we show just how lopsidedly these New Deal-era programs channeled homeownership and wealth toward white borrowers.",
    details:
      "\"New-deal mortgage programmes benefited white borrowers disproportionately\" was published in Nature in July 2026. Coauthored with Kate Thomas (NYU), Thomas Storrs (University of Virginia), and Jacob Faber (NYU), the paper draws on newly digitized archival materials from the Federal Housing Administration and the Veterans Administration — programs that have been relatively understudied compared to the Home Owners' Loan Corporation's redlining maps — to quantify how disproportionately their loan guarantees flowed to white borrowers. The findings sharpen the empirical case for how mid-twentieth-century federal housing policy shaped the contemporary racial wealth gap.",
    url: "https://doi.org/10.1038/s41586-026-10850-8",
  },
  {
    slug: "hpd-hope-vi",
    title: "New Paper in Housing Policy Debate: Where did they go after HOPE VI?",
    date: "July 2026",
    description:
      "Our HOPE VI paper came out in Housing Policy Debate. Using individual residential histories from 1980 to 2021, we follow displaced Chicago public housing residents to see where they actually ended up — and whose promises of \"better\" neighborhoods held up over time.",
    details:
      "\"Where did they go after HOPE VI? A longitudinal study of long-term neighborhood attainment outcomes in Chicago\" was published in Housing Policy Debate in July 2026. Using individual residential history data from 1980 to 2021 and administrative data on subsidized housing, we track displaced Chicago public housing residents into their new neighborhoods and compare them to matched voluntary movers. On average, HOPE VI displacement pushed residents into neighborhoods with higher Black population shares, lower incomes, and lower educational attainment than the control group. Fewer than 10% of relocatees ended up in mixed-income redevelopments — those who did saw the most sustained gains in neighborhood conditions. Private-market movers saw short-term gains in income and racial integration that dissipated over time. Coauthored with Yeonhwa Lee, Yining Lei, Zihao Zhou, Yucheng Zhang, and Lance Freeman.",
    url: "https://doi.org/10.1080/10511482.2026.2688182",
  },
  {
    slug: "newpicture-launched",
    title: "A New Picture of Segregation is live",
    date: "July 2026",
    description:
      "Our interactive site for the National Experienced Racial-Ethnic Diversity (NERD) dataset just went live. Explore where and when people across the U.S. actually encounter diversity, tract by tract.",
    details:
      "We've launched an interactive companion to \"A New Picture of Segregation.\" The site maps our National Experienced Racial-Ethnic Diversity (NERD) dataset — anonymized mobility data from 66M+ opted-in devices, aggregated to census tracts, showing the diversity people actually encounter over the course of their day rather than just where they sleep. You can toggle between measures and dig into specific places. Have a look at newpicture.urbandataresearchlab.org.",
    url: "https://newpicture.urbandataresearchlab.org",
    image: "/images/news/newpicture-preview.png",
  },
  {
    slug: "ucsb-assistant-professor",
    title: "New home at UC Santa Barbara",
    date: "July 2025",
    description:
      "I joined the Department of Geography at UC Santa Barbara this summer as Assistant Professor in GIScience and Urban Data Science!",
    details:
      "The Urban Data Research Lab has moved to UC Santa Barbara. I'm joining Geography as Assistant Professor in GIScience and Urban Data Science, with affiliated positions at the Center for Spatial Studies and Data Science and the Broom Center for Demography. UCSB's Geography department has a long tradition in spatial analysis and GIScience, and it's an exciting place to keep building the lab's work on neighborhood inequality, housing policy, and spatial data science.",
  },
  {
    slug: "nsf-affordable-housing-integration",
    title: "NSF Grant: Measuring Integration in Affordable Housing with Location Data",
    date: "August 2024",
    description:
      "Bernadette Baird-Zars and I were awarded a $400,000 NSF grant to test whether affordable housing in high-opportunity neighborhoods actually produces the integration policy assumes.",
    details:
      "Bernadette Baird-Zars and I were awarded a $400,000 NSF grant (2024–2026) for \"Measuring Integration in Affordable Housing with Location Data.\" A lot of housing policy is built around the assumption that if you can move lower-income residents to \"better\" neighborhoods, integration and access to opportunity will follow. We wanted to test that empirically at national scale, using anonymized mobility data to measure who residents of subsidized housing actually encounter, how far they travel, and what kinds of places they visit — compared to matched controls.",
  },
  {
    slug: "pnas-traffic-citations",
    title: "New Paper in PNAS: Race, Traffic Citations, and Police Stops",
    date: "June 2024",
    description:
      "Our paper on race, traffic citations, and police stops came out in PNAS. As far as we know, it's the first road-level look at racial disparities in traffic enforcement using mobility data.",
    details:
      "\"The racial composition of road users, traffic citations, and police stops\" came out in PNAS in June 2024. The idea: use anonymized mobile phone location data to estimate the racial composition of drivers on specific road segments, and then compare that against actual citation and police stop records — so we could see racial disparities in traffic enforcement at the road level, not just the jurisdiction level. Coauthors: Michael Smart, Nebiyou Tilahun, Shirin Askari, Zander Dennis, Houpu Li, and David Levinson. The paper picked up coverage from Block Club Chicago, the Chicago Tribune, NBC Chicago, and the Cornell Chronicle.\n\nImage: Chicago Police Ford Explorer Interceptor. Photo by ScottMLiebenson, CC BY-SA 3.0.",
    url: "https://doi.org/10.1073/pnas.2402547121",
    image: "/images/news/pnas-traffic-cpd.jpg",
  },
  {
    slug: "washington-equitable-growth-grant",
    title: "Washington Center for Equitable Growth Grant",
    date: "April 2023",
    description:
      "We received a $70,000 grant from the Washington Center for Equitable Growth (with Jacob Faber, Kate Thomas, and Thomas Storrs) to fill in some of the gaps in the historical record of New Deal-era mortgage programs.",
    details:
      "With Jacob Faber, Kate Thomas, and Thomas Storrs, the lab was awarded a $70,000 grant from the Washington Center for Equitable Growth for \"Missing Pieces in the Puzzle.\" A big obstacle to fully accounting for the racial wealth impact of New Deal-era federal mortgage programs — the FHA's insurance scheme, the Home Owners' Loan Corporation — is that the archival record is patchy. The project is about reconstructing more complete historical datasets so we can sharpen the estimates of how much wealth those programs kept from communities of color.",
  },
  {
    slug: "nsf-heatr",
    title: "NSF Grant: Center for Household Energy and Thermal Resilience (HEaTR)",
    date: "March 2023",
    description:
      "I joined the NSF-funded Center for Household Energy and Thermal Resilience (HEaTR) as Co-PI. HEaTR looks at how households — especially lower-income ones — experience and adapt to climate-driven heat and cold stress.",
    details:
      "NSF awarded $250,000 to start the Center for Household Energy and Thermal Resilience (HEaTR), and I joined as Co-PI. The center brings researchers together from a bunch of disciplines to study how households — particularly lower-income and otherwise vulnerable ones — experience, adapt to, and are harmed by climate-driven thermal extremes. My piece of it uses spatial data and the lab's neighborhood-inequality work to situate what happens at the household level in its broader urban context.",
  },
  {
    slug: "russell-sage-grant",
    title: "Missing Pieces in the Puzzle: Leveraging Untapped Archival Data to Connect New Deal Housing Policies to Racial and Spatial Inequality",
    date: "March 2023",
    description:
      "Jacob Faber, Kate Thomas, Thomas Storrs, and I received a $199,681 Russell Sage Foundation grant to look beyond redlining at how FHA and VA mortgage activity shaped contemporary racial inequality in housing, wealth, and neighborhood attainment.",
    details:
      "Jacob Faber (NYU), Kate Thomas, Thomas Storrs, and I were awarded $199,681 from the Russell Sage Foundation in March 2023 for \"Missing Pieces in the Puzzle: Leveraging Untapped Archival Data to Connect New Deal Housing Policies to Racial and Spatial Inequality.\" Most of the current scholarship on New Deal-era housing focuses on the HOLC's redlining maps and their long-run link to segregation and housing disparities. We want to broaden the lens to the FHA and Veterans Administration — programs that were doing enormous mortgage volume alongside HOLC but whose records are less well studied. Using archival materials from the National Archives, including Reconstruction Finance Corporation Mortgage Company loan records and Paid Loan Case Files, we're rebuilding the empirical record so we can trace how these federal programs shaped contemporary racial inequality across neighborhood attainment, wealth building, and housing opportunity.",
    url: "https://www.russellsage.org/research/grants/missing-pieces-puzzle-leveraging-untapped-archival-data-connect-new-deal-housing",
  },
  {
    slug: "urban-data-hub-cornell",
    title: "Urban Data Hub Launched at Cornell AAP",
    date: "April 2023",
    description:
      "I helped launch the Urban Data Hub at Cornell's College of Architecture, Art, and Planning — a convening space for people working at the intersection of cities and data.",
    details:
      "The Urban Data Hub launched at Cornell AAP in spring 2023, and I was one of the founding contributors. It's designed as a convening space for scholars, practitioners, and students interested in how data can illuminate — and help address — urban challenges. In practice, that means collaborative projects, public events, and teaching resources at the intersection of urban research and data science. The launch also let us broaden the lab's public-facing work and its engagement with practitioners outside the academy.",
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
