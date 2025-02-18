//* You can use not only array, but also object(hash map)

//Edge List - list of connections between elements 0--2 2--3 2--1 1--3
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

//Adjacent List
const graph1 = [
  [2], // first element is connected to the third element
  [2, 3], // second element is connected to the third and fourth element
  [0, 1, 3], // third element is connected to the first, second and fourth element
  [1, 2], // fourth element is connected to the second and third element
];

//Adjacent Matrix
const graph2 = [
  [0, 0, 1, 0], // first element is connected to the third element
  [0, 0, 1, 1], // second element is connected to the third and fourth element
  [1, 1, 0, 1], // third element is connected to the first, second and fourth element
  [0, 1, 1, 0], // fourth element is connected to the second and third element
];
