import Contribution from "@/models/contributions";
import Contributor from "@/models/contributors";

const contributors: Record<string, Contributor> = {
  "Ritin George D": {
    name: "Ritin George D",
    socials: {
      twitter: "ritin_george",
      linkedin: "ritin-george",
      instagram: "ritin_george",
      website: "ritin-george.me",
    },
  },
  "Liya Susan Biju": {
    name: "Liya Susan Biju",
    socials: {
      twitter: "liya_susan",
      linkedin: "liya-susan",
      instagram: "liya_susan",
      website: "liya-susan.me",
    },
  },
  "Vinu B Kurup": {
    name: "Vinu B Kurup",
    socials: {
      twitter: "vinu_b_kurup",
      linkedin: "vinu-b-kurup",
      instagram: "vinu_b_kurup",
      website: "vinu-b-kurup.me",
    },
  },
  "Aditya S": {
    name: "Aditya S",
    socials: {
      twitter: "aditya-s",
      linkedin: "aditya-s",
      instagram: "aditya-s",
      website: "aditya-s.me",
    },
  },
  "Sera Mariam George": {
    name: "Sera Mariam George",
    socials: {
      twitter: "sera-mariam",
      linkedin: "sera-mariam",
      instagram: "sera-mariam",
      website: "sera-mariam.me",
    },
  },
  "Navaneeth Venu": {
    name: "Navaneeth Venu",
    socials: {
      twitter: "navaneethvenu",
      linkedin: "navaneethvenu",
      instagram: "nauaneeth",
      github: "navaneethvenu",
      website: "navaneethvenu.vercel.app",
    },
  },
  "Riya P Mathew": {
    name: "Riya P Mathew",
    socials: {
      twitter: "riya-p-mathew",
      linkedin: "riya-p-mathew",
      instagram: "riya-p-mathew",
      website: "riya-p-mathew.me",
    },
  },
  "Jomi Susan Mathew": {
    name: "Jomi Susan Mathew",
    socials: {
      linkedin: "jomi-susan",
    },
  },
  "Abigail Binu": {
    name: "Abigail Binu",
    socials: {
      linkedin: "abigail-binu",
      instagram: "abigail_binu",
    },
  },
  "M Aswin Kishore": {
    name: "M Aswin Kishore",
    socials: {
      linkedin: "aswin-kishore",
      instagram: "aswin_kishore",
      twitter: "aswin_kishore",
      website: "aswin-kishore.me",
    },
  },
  "R Sreelekshmi": {
    name: "R Sreelekshmi",
    socials: {
      linkedin: "sreelekshmi-r",
      instagram: "sreelekshmi_r",
      twitter: "sreelekshmi_r",
      website: "sreelekshmi-r.me",
    },
  },
  "Salman Faariz": {
    name: "Salman Faariz",
    socials: {
      linkedin: "salman-faariz",
      instagram: "salman_faariz",
      twitter: "salman_faariz",
      website: "salman-faariz.me",
    },
  },
  "Varsha Renjith": {
    name: "Varsha Renjith",
    socials: {
      linkedin: "varsha-renjith",
      instagram: "varsha_renjith",
      twitter: "varsha_renjith",
      website: "varsha-renjith.me",
    },
  },
  "Abigail Muthirakalayil Binu": {
    name: "Abigail Muthirakalayil Binu",
    socials: {
      linkedin: "abigail-binu",
      instagram: "abigail_binu",
      twitter: "abigail_binu",
      website: "abigail-binu.me",
    },
  },
  "Amrutha Lakshmi S": {
    name: "Amrutha Lakshmi S",
    socials: {
      linkedin: "amrutha-lakshmi",
    },
  },
  "Karthika Sankar U": {
    name: "Karthika Sankar U",
    socials: {
      linkedin: "karthika-sankar",
      instagram: "karthika_sankar",
      twitter: "karthika_sankar",
      website: "karthika-sankar.me",
    },
  },
  "Medlyn Sairah Jacob": {
    name: "Medlyn Sairah Jacob",
    socials: {
      linkedin: "medlyn-sairah",
      instagram: "medlyn_sairah",
      twitter: "medlyn_sairah",
      website: "medlyn-sairah.me",
    },
  },
  "Meenakshy Panicker": {
    name: "Meenakshy Panicker",
    socials: {
      linkedin: "meenakshy-panicker",
      instagram: "meenakshy_panicker",
      twitter: "meenakshy_panicker",
      website: "meenakshy-panicker.me",
    },
  },
  "Mithun K S": {
    name: "Mithun K S",
    socials: {
      linkedin: "mithun-ks",
      instagram: "mithun_ks",
      twitter: "mithun_ks",
      website: "mithun-ks.me",
    },
  },
  "Rhea Merin Thomas": {
    name: "Rhea Merin Thomas",
    socials: {
      linkedin: "rhea-merin",
      instagram: "rhea_merin",
      twitter: "rhea_merin",
      website: "rhea-merin.me",
    },
  },
  "Sania M S": {
    name: "Sania M S",
    socials: {
      linkedin: "sania-ms",
      instagram: "sania_ms",
      twitter: "sania_ms",
      website: "sania-ms.me",
    },
  },
  "Shibin Shibu": {
    name: "Shibin Shibu",
    socials: {
      linkedin: "shibin-shibu",
      instagram: "shibin_shibu",
      twitter: "shibin_shibu",
      website: "shibin-shibu.me",
    },
  },
  "Vahin Aksh Rudraay S": {
    name: "Vahin Aksh Rudraay S",
    socials: {
      linkedin: "vahin-aksh",
      instagram: "vahin_aksh",
      twitter: "vahin_aksh",
      website: "vahin-aksh.me",
    },
  },
};

export const contributions: Contribution[] = [
  {
    contributor: contributors["Navaneeth Venu"],
    time: "7-5-2022",
    changes: ["Was responsible for managing the project as Design Lead"],
    type: "design",
  },

  {
    contributor: contributors["Salman Faariz"],
    time: "7-5-2022",
    changes: ["Was responsible for managing the project as Design Lead"],
    type: "design",
  },
  {
    contributor: contributors["M Aswin Kishore"],
    time: "7-5-2022",
    changes: ["Was responsible for managing the project as Project Lead"],
    type: "design",
  },
  {
    contributor: contributors["R Sreelekshmi"],
    time: "7-5-2022",
    changes: ["Was responsible for managing the project as Acting Design Lead"],
    type: "design",
  },
  {
    contributor: contributors["Varsha Renjith"],
    time: "7-5-2022",
    changes: ["Was responsible for managing the project as Acting Design Lead"],
    type: "design",
  },
  {
    contributor: contributors["Meenakshy Panicker"],
    time: "7-5-2022",
    changes: [
      "Added new changes",
      "Improved functionality",
      "Optimized performance",
    ],
    type: "design",
  },
  {
    contributor: contributors["Mithun K S"],
    time: "7-5-2022",
    changes: [
      "Added new changes",
      "Improved functionality",
      "Optimized performance",
    ],
    type: "design",
  },

  {
    contributor: contributors["Jomi Susan Mathew"],
    time: "7-5-2022",
    changes: [
      "Redesigned landing page",
      "Implemented responsive design",
      "Integrated third-party APIs",
    ],
    type: "design",
  },
  {
    contributor: contributors["Abigail Binu"],
    time: "7-5-2022",
    changes: [
      "Implemented new feature X",
      "Fixed issue Y",
      "Optimized performance",
    ],
    type: "design",
  },
  {
    contributor: contributors["Abigail Muthirakalayil Binu"],
    time: "7-5-2022",
    changes: [
      "Added new changes",
      "Improved functionality",
      "Optimized performance",
    ],
    type: "design",
  },
  {
    contributor: contributors["Amrutha Lakshmi S"],
    time: "7-5-2022",
    changes: [
      "Added new changes",
      "Improved functionality",
      "Optimized performance",
    ],
    type: "design",
  },
  {
    contributor: contributors["Jomi Susan Mathew"],
    time: "7-5-2022",
    changes: [
      "Added new changes",
      "Improved functionality",
      "Optimized performance",
    ],
    type: "design",
  },
  {
    contributor: contributors["Karthika Sankar U"],
    time: "7-5-2022",
    changes: [
      "Added new changes",
      "Improved functionality",
      "Optimized performance",
    ],
    type: "design",
  },
  {
    contributor: contributors["Medlyn Sairah Jacob"],
    time: "7-5-2022",
    changes: [
      "Added new changes",
      "Improved functionality",
      "Optimized performance",
    ],
    type: "design",
  },
  {
    contributor: contributors["Rhea Merin Thomas"],
    time: "7-5-2022",
    changes: [
      "Added new changes",
      "Improved functionality",
      "Optimized performance",
    ],
    type: "design",
  },
  {
    contributor: contributors["Sania M S"],
    time: "7-5-2022",
    changes: [
      "Added new changes",
      "Improved functionality",
      "Optimized performance",
    ],
    type: "design",
  },
  {
    contributor: contributors["Sera Mariam George"],
    time: "7-5-2022",
    changes: [
      "Added new changes",
      "Improved functionality",
      "Optimized performance",
    ],
    type: "design",
  },
  {
    contributor: contributors["Shibin Shibu"],
    time: "7-5-2022",
    changes: [
      "Added new changes",
      "Improved functionality",
      "Optimized performance",
    ],
    type: "design",
  },
  {
    contributor: contributors["Vahin Aksh Rudraay S"],
    time: "7-5-2022",
    changes: [
      "Added new changes",
      "Improved functionality",
      "Optimized performance",
    ],
    type: "design",
  },

  {
    contributor: contributors["Ritin George D"],
    time: "24-11-2022",
    changes: [
      "Worked on Home Page High Fidelity",
      "Implemented user authentication",
      "Fixed bugs in contact form",
    ],
    type: "code",
  },
  {
    contributor: contributors["Liya Susan Biju"],
    time: "24-11-2022",
    changes: [
      "Worked on About Us page design",
      "Optimized website performance",
      "Added new features to the blog section",
    ],
    type: "code",
  },
  {
    contributor: contributors["Vinu B Kurup"],
    time: "24-11-2022",
    changes: [
      "Refactored backend API",
      "Improved database schema",
      "Implemented search functionality",
    ],
    type: "code",
  },

  {
    contributor: contributors["Navaneeth Venu"],
    time: "20-5-2024",
    changes: [
      "Worked on Home Page High Fidelity",
      "Implemented user authentication",
      "Fixed bugs in contact form",
    ],
    type: "code",
  },
  {
    contributor: contributors["Sera Mariam George"],
    time: "20-5-2024",
    changes: [
      "Worked on Home Page High Fidelity",
      "Implemented user authentication",
      "Fixed bugs in contact form",
    ],
    type: "code",
  },
  {
    contributor: contributors["Riya P Mathew"],
    time: "20-5-2024",
    changes: [
      "Worked on Home Page High Fidelity",
      "Implemented user authentication",
      "Fixed bugs in contact form",
    ],
    type: "code",
  },
  {
    contributor: contributors["Aditya S"],
    time: "24-11-2022",
    changes: [
      "Worked on Home Page High Fidelity",
      "Implemented user authentication",
      "Fixed bugs in contact form",
    ],
    type: "code",
  },
];