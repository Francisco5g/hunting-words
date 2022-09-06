import { Grid, MatcherResult } from "../Finder";

export function searchByRow(grid: Grid, pattern: string): MatcherResult[] | MatcherResult {
  const foundPattern = grid.filter((row) => row.indexOf(pattern) !== -1);

  if (foundPattern.length !== 0) {
    return foundPattern.map((rowThatFound) => {
      const rowIndex = grid.indexOf(rowThatFound);
      const patternIndexStart = grid[rowIndex].indexOf(pattern);
      const patternIndexEnd = patternIndexStart + pattern.length;

      return {
        method: "search_by_row",
        found: true,
        coords: {
          rowIndex,
          start: patternIndexStart,
          end: patternIndexEnd,
        },
      };
    });
  }

  return {
    found: false,
    coords: null,
    method: "search_by_row",
  };
}
