let name1 = "Charles";
let name2 = "Brendan";
let name3 = "Dorothy";

let len1 = name1.length;
let len2 = name2.length;
let len3 = name3.length;

if (len1 > len2 && len1 > len3) {
  console.log(name1 + " has the longest name.");
} else if (len2 > len1 && len2 > len3) {
  console.log(name2 + " has the longest name.");
} else if (len3 > len1 && len3 > len2) {
  console.log(name3 + " has the longest name.");
} else if (len1 === len2 && len1 > len3) {
  console.log(name1 + " and " + name2 + " tie for the longest name.");
} else if (len2 === len3 && len2 > len1) {
  console.log(name2 + "and" + name3 + "tie for the longest name.");
} else if (len3 === len1 && len3 > len2) {
  console.log(name3 + " and " + name1 + " tie for the longest name.");
} else if (len1 === len2 && len1 === len3) {
  console.log(
    name1 + "," + name2 + "and" + name3 + "all have the longest name."
  );
}