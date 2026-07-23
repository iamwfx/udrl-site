export interface StudentProject {
  student: string;
  title: string;
  url: string;
}

export interface Course {
  title: string;
  number: string;
  semester: string;
  institution: string;
  schedule?: string;
  units?: number;
  location?: string;
  description: string;
  topics: string[];
  slug: string;
  image?: string;
  tutorialsUrl?: string;
  practitionerSeriesUrl?: string;
  studentProjects?: StudentProject[];
}

export const courses: Course[] = [
  {
    slug: "mapping-and-countermapping",
    title: "Mapping and Countermapping",
    number: "CRP 3850/5850",
    semester: "Fall 2023",
    institution: "Cornell University",
    schedule: "Monday/Wednesday 10:10am–11:25am",
    units: 3,
    description:
      "This hybrid practice-discourse course introduces students to the ideas, debates, and practices in critical cartography and digital geography. How, who, and towards what purposes are spatial relationships represented through maps? Throughout the semester, we will approach mapping with an emphasis on the ethos of countermapping to make more legible those perspectives, claims, and epistemologies that are generally underrepresented. We will also discuss how new mapping technologies and novel big data are shifting the mapping landscape, what new tensions and possibilities arise, and how these new tools supplant or reinforce existing power dynamics. Students will also \"read\" and critique maps that speak to each week's theme in order to understand the design, information, context surrounding the creation of the map. Alongside our discussions, we will be learning tools and software to create our own narrative maps and countermaps, with the aim of using these in a final research project of students' own choosing.",
    topics: [
      "Critical cartography",
      "Countermapping",
      "Web GIS",
      "Disability accessibility",
      "Migration patterns",
      "Bike infrastructure",
      "Participatory mapping",
    ],
    image: "/images/courses/mapping-and-countermapping.jpg",
    tutorialsUrl: "https://github.com/iamwfx/crs_3850_5850_mapping_countermapping",
    studentProjects: [
      {
        student: "Yu Wang",
        title: "Whose 15-Minute Community-Life Circle?",
        url: "https://drive.google.com/file/d/1r8inJYNMfrrD1X3qvtF2JWYOYqrvrG2C/view",
      },
      {
        student: "Yeon Joo Kang and Duxixi (Ada) Shen",
        title: "Revealing the Invisible Challenges of Pedestrians with Disability",
        url: "https://yk539.github.io/countermapping-webmaps/Project/index.html",
      },
      {
        student: "Emile Bensedrine and Kellen Cook",
        title: "Hasidim on Hudson",
        url: "https://sedribenne.github.io/countermapping-webmaps/final/",
      },
      {
        student: "Tung Chen",
        title: "Refugees as Weapons? The Sequel of Unauthorized Migrants from US-Mexico Border",
        url: "https://acopod.github.io/countermapping-webmaps/Refugee/index.html",
      },
      {
        student: "Yucheng Zhang",
        title: "Crowd-Sourced Parks in NYC",
        url: "https://raincyz.github.io/assignment/webmap_collection/final_map/",
      },
      {
        student: "Yuetong Wang",
        title: "Bike Lanes and Bike-Sharing Demand in Washington DC",
        url: "https://yuetongw.github.io/Final-Project/Map/index.html",
      },
      {
        student: "Mengting Zhang",
        title: "Impact of The Belt and Road Initiative on Marginalized Communities",
        url: "https://yani0912.github.io/countermapping-webmaps/Finals/",
      },
    ],
  },
  {
    slug: "introduction-to-urban-data-science",
    title: "Introduction to Urban Data Science",
    number: "CRP and DESIGN 4680/5680",
    semester: "Spring 2023",
    institution: "Cornell University",
    schedule: "Monday/Wednesday 2:45pm–4:00pm",
    units: 3,
    location: "306 Sibley Hall",
    description:
      "Urban data science is an emergent practice in geography and urban planning that combines: 1) the set of data analysis tools and methods used to understand a wide array of big data and big spatial data sources and, 2) questions of urban development, structure, complexity, theory, policy, dynamics, and outcomes.\n\nThese approaches enable more spatiotemporally dynamic and granular analyses of cities and allow researchers new insight into urban dynamics. This course will provide a toolkit to speak through data, code, statistics, and visualization. Using open-source data and computational tools in Python and the Jupyter Notebook environment, we will learn how to design testable research questions, collect and prepare data, apply relevant analytical techniques, present our process and results in an engaging and informative way, and identify the limitations of quantitative analysis. A personal laptop will be required.",
    topics: [
      "Python for data analysis",
      "Spatial statistics",
      "Machine learning",
      "Data visualization",
      "Housing policy",
      "Transportation",
      "Land use analysis",
    ],
    image: "/images/courses/intro-to-urban-data-science.jpg",
    tutorialsUrl: "https://github.com/iamwfx/4680_5680_intro_uds",
  },
];
