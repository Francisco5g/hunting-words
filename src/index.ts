// import { Grid } from "./types/Grid";

import { Finder } from "./Finder";
import { searchByColumn } from "./matchers/searchByColumn";
import { searchByRow } from "./matchers/searchByRow";

const grid = [
  "ROTOALHASB",
  "BFEABÇKPUA",
  "LUVADIAUJL",
  "TRPEOORXUA",
  "EÔDSMGAADN",
  "QIDIIATDÔÇ",
  "ASAUNAÊOEA",
  "DANÇADERUA",
  "BOXELCINTO",
  "OPILATESPF",
];

// const diagonalList = [];
// for (let row = 0; row < grid.length; row++) {
//   for (let col = 0; col < grid[0].length; col++) {
//     if (row === col) {
//       const curr = grid[row][col];

//       diagonalList.push(curr);
//     }
//   }
// }

const finder = Finder(grid, "balança").addMatcher(searchByRow).addMatcher(searchByColumn);

const result = finder.run();

console.log(result);

export default Finder;
// export function patternSearch(gridInput: Grid, pattern: string) {
//   function searhByRow(pattern: string, grid: Grid) {
//     const foundPattern = grid.filter((row) => row.indexOf(pattern) !== -1);

//     if (foundPattern.length === 0) {
//       return {
//         found: false,
//         value: pattern,
//         rowIndex: null,
//         patternIndex: {
//           start: null,
//           end: null,
//         },
//       };
//     }

//     const rowIndex = grid.indexOf(foundPattern[0]);
//     const patternIndexStart = grid[rowIndex].indexOf(pattern);
//     const patternIndexEnd = patternIndexStart + pattern.length;

//     return {
//       found: true,
//       value: pattern,
//       rowIndex,
//       patternIndex: {
//         start: patternIndexStart,
//         end: patternIndexEnd,
//       },
//     };
//   }

//   const grid = gridInput.map((row) => row.toLowerCase());

//   const searchedByRow = searhByRow(pattern, grid);

//   if (searchedByRow.found) {
//     return {
//       rowIndex: searchedByRow.rowIndex,
//       ...searchedByRow.patternIndex,
//     };
//   }

//   return {
//     rowIndex: null,
//     end: null,
//     start: null,
//   };

//   // const searchedByFirstLetter = grid.map((row, rowIndex) => {
//   //   const indexOfPatternLetter = row.indexOf(patternFirstLetter);

//   //   return {
//   //     found: indexOfPatternLetter === -1 ? false : true,
//   //     value: patternFirstLetter,
//   //     index: indexOfPatternLetter === -1 ? null : indexOfPatternLetter,
//   //     rowIndex,
//   //   };
//   // });

//   // const patternMatched = searchedByFirstLetter
//   //   .filter((search) => search.found)
//   //   .map((search) => {
//   //     const patternFoundIndexStart = grid[search.rowIndex].indexOf(pattern);

//   //     if (patternFoundIndexStart === -1) {
//   //       return {
//   //         patternMatch: false,
//   //         start: null,
//   //         end: null,
//   //       };
//   //     }

//   //     const patternFoundIndexEnd = patternFoundIndexStart + pattern.length;

//   //     const foundPattern = grid[search.rowIndex].slice(patternFoundIndexStart, patternFoundIndexEnd);

//   //     if (foundPattern === pattern) {
//   //       return {
//   //         patternMatch: true,
//   //         start: patternFoundIndexStart,
//   //         end: patternFoundIndexEnd,
//   //       };
//   //     }
//   //   });

//   // console.log(patternMatched);
// }

// const grid = ["LAMAKZOQKD", "HSJAKSCARI", "ADFKSJMZLA", "CKALSMQRTU"];
// const pattern = "car";

// patternSearch(grid, pattern);
