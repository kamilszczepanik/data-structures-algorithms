function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return;
  }
  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

function reverseImproved(str) {
  return str.split("").reverse().join("");
}

const reverseMoreImproved = (str) => str.split("").reverse().join("");
const reverseMostImproved = (str) => [...str].split("").reverse().join("");

console.log(reverseImproved("string"));
