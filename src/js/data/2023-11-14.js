dataSetVersion = "2023-11-14"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by rarity",
    key: "rarity",
    tooltip: "Check this to restrict to operators from certain rarity levels.",
    checked: false,
    sub: [
      { name: "6 stars", key: "6" },
      { name: "5 stars", key: "5" },
      { name: "4 stars", key: "4" },
      { name: "3 stars", key: "3" },
      { name: "2 stars", key: "2" },
      { name: "1 stars", key: "1" }
    ]
  },
  {
    name: "Filter by class",
    key: "class",
    tooltip: "Check this to restrict to operators from certain classes.",
    checked: false,
    sub: [
      { name: "Caster", key: "caster" },
      { name: "Defender", key: "defender" },
      { name: "Guard", key: "guard" },
      { name: "Medic", key: "medic" },
      { name: "Sniper", key: "sniper" },
      { name: "Specialist", key: "specialist" },
      { name: "Supporter", key: "supporter" },
      { name: "Vanguard", key: "vanguard" }
    ]
  },
  {
    name: "Filter by faction",
    key: "faction",
    tooltip: "Check this to restrict to operators from certain factions.",
    checked: false,
    sub: [
      { name: "Aegir", key: "aegir" },
      { name: "Abyssal Hunters", key: "abyssal" },
      { name: "Babel", key: "babel" },
      { name: "Bolivar", key: "bolivar" },
      { name: "Columbia", key: "columbia" },
      { name: "Blacksteel", key: "blacksteel" },
      { name: "Rhine Lab", key: "rhine" },
      { name: "Higashi", key: "higashi" },
      { name: "Iberia", key: "iberia" },
      { name: "Kazimierz", key: "kazimierz" },
      { name: "Pinus Sylverstris", key: "pinus" },
      { name: "Kjerag", key: "kjerag" },
      { name: "Karlan Trade", key: "karlan" },
      { name: "Laterano", key: "laterano" },
      { name: "Leithanien", key: "leithanien" },
      { name: "Lungmen", key: "lungmen" },
      { name: "Lee's Detective Agency", key: "lee" },
      { name: "Lungmen Guard Department", key: "lgd" },
      { name: "Penguin Logistics", key: "penguin" },
      { name: "Minos", key: "minos" },
      { name: "Rhodes Island", key: "rhodes" },
      { name: "Elite Op", key: "elite" },
      { name: "Followers", key: "followers" },
      { name: "Op A4", key: "a4" },
      { name: "Op Reserve A1", key: "ra1" },
      { name: "Op Reserve A4", key: "ra4" },
      { name: "Op Reserve A6", key: "ra6" },
      { name: "S.W.E.E.P.", key: "sweep" },
      { name: "Rim Billiton", key: "rimbilliton" },
      { name: "Sami", key: "sami" },
      { name: "Sargon", key: "sargon" },
      { name: "Siesta", key: "siesta" },
      { name: "Siracusa", key: "siracusa" },
      { name: "Team Rainbow", key: "r6s" },
      { name: "Ursus", key: "ursus" },
      { name: "Ursus Student Self-Governing Group", key: "ussg" },
      { name: "Victoria", key: "victoria" },
      { name: "Dublinn", key: "dublinn" },
      { name: "Glasgow", key: "glasgow" },
      { name: "Yan", key: "Yan" },
      { name: "Sui", key: "sui" },
    ]
  },
  {
    name: "Exclude males",
    key: "male",
    tooltip: "Check this to exclude males.",
    checked: false
  },
  {
    name: "Exclude females",
    key: "female",
    tooltip: "Check this to exclude females.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Amiya",
    img: "char_002_amiya.png",
    opts: {
      faction: ['rhodes'],
      race: [''],
      female: true
    }
  },
  
]
