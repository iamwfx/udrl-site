export interface Person {
  name: string;
  title: string;
  bio?: string;
  email?: string;
  website?: string;
  cvUrl?: string;
  scholarUrl?: string;
  image?: string;
  imagePosition?: string;
  current: boolean;
  director?: boolean;
}

export const people: Person[] = [
  {
    name: "Wenfei Xu",
    title: "Director — Assistant Professor, GIScience and Urban Data Science, UC Santa Barbara",
    bio: "Wenfei Xu is an Assistant Professor in GIScience and Urban Data Science in the Department of Geography at UC Santa Barbara, where she directs the Urban Data Research Lab and holds faculty affiliations with the Center for Spatial Studies and Data Science and the Broom Center for Demography. Her research uses novel big data and spatial data science to understand urban inequality at the neighborhood scale in order to inform housing policy and opportunities for more equitable cities. Her work has been published in the Proceedings of the National Academies of Science, Annals of the Association of American Geographers, Urban Studies, Nature Scientific Data, and Housing Policy Debate, and has been funded by the NSF, the Russell Sage Foundation, and the Washington Center for Equitable Growth. Prior to joining UCSB, she was Assistant Professor in the Department of City and Regional Planning at Cornell University (2022–2025) and a Postdoctoral Fellow at the University of Chicago's Mansueto Institute for Urban Innovation and Center for Spatial Data Science (2022). She holds a Ph.D. in Urban Planning from Columbia University, an MCP and M.Arch from MIT, and a B.A. in Economics from the University of Chicago.",
    email: "wenfeixu@ucsb.edu",
    scholarUrl: "https://scholar.google.com/citations?user=-VP9js8AAAAJ&hl=en",
    current: true,
    director: true,
    image: "/images/people/wenfei-xu.jpg",
  },
  {
    name: "Houpu Li",
    title: "Ph.D. Student, Geography, UC Santa Barbara",
    bio: "Houpu Li is a Ph.D. student in Geography at UC Santa Barbara. He holds a Master's in Regional Science from Cornell University. His research focuses on quantitative urban spatial data analysis.",
    current: true,
    image: "/images/people/houpu-li.jpg",
  },
  {
    name: "Fiona Liang",
    title: "Undergraduate Student, Sociology and Geography, UC Santa Barbara",
    bio: "Fiona Liang is an undergraduate student at University of California, Santa Barbara studying sociology and geography. Her research interests center on the relationship between space and human activity, particularly on how race informs geographic processes such as through segregation and gentrification. She is excited to contribute to the Urban Data Research Lab's work examining these critical issues.",
    website: "https://www.linkedin.com/in/filiang",
    image: "/images/people/fiona-liang.jpg",
    imagePosition: "center 15%",
    current: true,
  },
  {
    name: "Tessa Niu",
    title: "Undergraduate Student, Geography (GIS) and Economics, UC Santa Barbara",
    bio: "I am a second-year student at the University of California, Santa Barbara, originally from the Bay Area. I am passionate about spatial data, urban history, and planning. I plan to pursue a career in the transportation field to create safer, more efficient, and connected communities.",
    website: "https://www.linkedin.com/in/tessa-niu-0631b6263",
    image: "/images/people/tessa-niu.jpg",
    imagePosition: "center 20%",
    current: true,
  },
  {
    name: "Wendy Zhu",
    title: "Undergraduate Student, Geography (GIS) and Statistics & Data Science, UC Santa Barbara",
    bio: "Wendy Zhu is a third-year undergraduate at UCSB, double majoring in Geography with a GIS emphasis and in Statistics and Data Science. She is particularly interested in human geography, including agroecology, active transportation, and housing. Growing up in a multicultural environment, she often compares Western-dominated geographic theories with Eastern contexts, questioning their applicability, comparability, and universality. By combining her statistical skills with her geographical training, she aims to explore how “big data” is embedded within social science contexts.",
    website: "https://www.linkedin.com/in/wendy-zhu-1525a1308/",
    image: "/images/people/wendy-zhu.jpg",
    current: true,
  },
];

export const pastMembers: string[] = [
  "Moheng Ma",
  "Ari Rousakis",
  "Leah Chen",
  "Charlotte Verity",
  "Youssef Attia",
  "Ben Zaccara",
  "Nada Attia",
  "Nirbhay Narang",
  "Allie Chu",
  "Tony Zong",
  "Su Jeong Jo",
  "Stella Frank",
  "Yucheng Zhang",
  "Michael Cao",
  "Zoe Wang",
  "Tung Chen",
  "Rifqi Maluana",
  "Jessie Fujii",
  "Dhruv Parekh",
  "Xueting Jin",
  "Kanjii Fateema",
  "Emilia Lam",
];
