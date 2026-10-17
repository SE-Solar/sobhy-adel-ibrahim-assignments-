const paragraph = "I love JavaScript because JavaScript is fun and I can build websites with it and I learn something new every day";

const words = paragraph.toLowerCase().split(" ");

console.log("Words:", words.length);

let longest = "";
for (const word of words) {
  if (word.length > longest.length) {
    longest = word;
  }
}
console.log("Longest:", longest);

// نعد كل كلمة اتكررت كام مرة
const count = {};
for (const word of words) {
  if (count[word]) {
    count[word]++;
  } else {
    count[word] = 1;
  }
}

let most = "";
for (const word in count) {
  if (most === "" || count[word] > count[most]) {
    most = word;
  }
}
console.log("Most frequent:", most);
