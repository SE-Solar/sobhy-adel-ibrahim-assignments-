const students = [
  { name: "Ahmed", grade: 78, city: "Cairo" },
  { name: "Sara", grade: 92, city: "Alex" },
  { name: "Omar", grade: 65, city: "Giza" },
  { name: "Mona", grade: 88, city: "Cairo" },
  { name: "Youssef", grade: 95, city: "Alex" },
  { name: "Nour", grade: 70, city: "Cairo" },
  { name: "Karim", grade: 59, city: "Giza" },
  { name: "Salma", grade: 84, city: "Mansoura" },
];

// نسخة عشان sort بتغير الأصل
const sorted = [...students].sort((a, b) => b.grade - a.grade);
const top3 = sorted.slice(0, 3).map((s) => s.name);

const total = students.reduce((sum, s) => sum + s.grade, 0);
const average = total / students.length;

const perCity = students.reduce((acc, s) => {
  if (acc[s.city]) {
    acc[s.city]++;
  } else {
    acc[s.city] = 1;
  }
  return acc;
}, {});

console.log("Top 3:", top3);
console.log("Average:", average);
console.log(perCity);
