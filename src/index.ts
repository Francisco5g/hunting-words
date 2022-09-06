import { Finder } from "./Finder";

// const diagonalList = [];
// for (let row = 0; row < grid.length; row++) {
//   for (let col = 0; col < grid[0].length; col++) {
//     if (row === col) {
//       const curr = grid[row][col];

//       diagonalList.push(curr);
//     }
//   }
// }

// const finder = Finder(grid, "toalha").addMatcher(searchByRow).addMatcher(searchByColumn);

// const result = finder.run();

export { searchByColumn } from "./matchers/searchByColumn";
export { searchByRow } from "./matchers/searchByRow";

export default Finder;
