export const parisCount = {
  JavaScript: 863,
  Python: 1921,
  PHP: 2494,
  Java: 1874,
  Go: 1002,
  React: 1079,
  Vue: 1640,
  Angular: 1184,
  Node: 477,
  TypeScript: 361,
  Swift: 210,
  Kotlin: 153,
  Ruby: 194,
  Dart: 202,
};

export const lyonCount = {
  JavaScript: 317,
  Python: 305,
  PHP: 886,
  Java: 671,
  Go: 127,
  React: 318,
  Vue: 543,
  Angular: 471,
  Node: 74,
  TypeScript: 96,
  Swift: 36,
  Kotlin: 45,
  Ruby: 25,
  Dart: 88,
};

export const marseilleCount = {
  JavaScript: 69,
  Python: 77,
  PHP: 176,
  Java: 124,
  Go: 40,
  React: 49,
  Vue: 188,
  Angular: 87,
  Node: 14,
  TypeScript: 12,
  Swift: 5,
  Kotlin: 3,
  Ruby: 8,
  Dart: 13,
};

export const bordeauxCount = {
  JavaScript: 148,
  Python: 216,
  PHP: 525,
  Java: 295,
  Go: 100,
  React: 146,
  Vue: 217,
  Angular: 206,
  Node: 42,
  TypeScript: 48,
  Swift: 39,
  Kotlin: 27,
  Ruby: 19,
  Dart: 47,
};

export const lisboaCount = {
  JavaScript: 990,
  Python: 697,
  Java: 1040,
  Go: 494,
  React: 364,
  Vue: 133,
  Angular: 413,
  Node: 179,
  TypeScript: 154,
  Swift: 101,
  Kotlin: 94,
  Ruby: 99,
  Dart: 12,
};

export const portoCount = {
  JavaScript: 478,
  Python: 269,
  Java: 412,
  Go: 170,
  React: 214,
  Vue: 58,
  Angular: 184,
  Node: 118,
  TypeScript: 95,
  Swift: 75,
  Kotlin: 57,
  Ruby: 40,
  Dart: 10,
};

export const londonCount = {
  JavaScript: 3038,
  Python: 5396,
  PHP: 743,
  Java: 3189,
  Go: 481,
  React: 2280,
  Vue: 346,
  Angular: 731,
  Node: 1078,
  TypeScript: 787,
  Swift: 587,
  Kotlin: 348,
  Ruby: 810,
  Dart: 81,
};

export const manchesterCount = {
  JavaScript: 456,
  Python: 351,
  PHP: 211,
  Java: 257,
  Go: 37,
  React: 387,
  Vue: 113,
  Angular: 142,
  Node: 151,
  TypeScript: 122,
  Swift: 38,
  Kotlin: 31,
  Ruby: 47,
  Dart: 15,
};

export const totalParis = Object.values(parisCount).reduce(
  (acc, curr) => acc + curr
);

export const totalBordeaux = Object.values(bordeauxCount).reduce(
  (acc, curr) => acc + curr
);

export const totalLyon = Object.values(lyonCount).reduce(
  (acc, curr) => acc + curr
);

export const totalMarseille = Object.values(marseilleCount).reduce(
  (acc, curr) => acc + curr
);

export const totalLondon = Object.values(londonCount).reduce(
  (acc, curr) => acc + curr
);

export const totalManchester = Object.values(manchesterCount).reduce(
  (acc, curr) => acc + curr
);

export const totalLisboa = Object.values(lisboaCount).reduce(
  (acc, curr) => acc + curr
);

export const totalPorto = Object.values(portoCount).reduce(
  (acc, curr) => acc + curr
);

export const techLabels = [
  "JavaScript",
  "Python",
  "PHP",
  "Java",
  "Go",
  "React",
  "Vue",
  "Angular",
  "Node",
  "TypeScript",
  "Swift",
  "Kotlin",
  "Ruby",
  "Flutter",
];
