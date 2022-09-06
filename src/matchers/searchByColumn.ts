import { Grid, MatcherResult } from "../Finder";

interface ColumnView {
  column: number;
  data: string;
}

export function searchByColumn(grid: Grid, pattern: string): MatcherResult[] | MatcherResult {
  const gridColumnView: ColumnView[] = [];

  for (let column = 0; column < grid.length; column++) {
    const columnChars = [];
    for (let row = 0; row < grid.length; row++) {
      columnChars.push(grid[row][column]);
    }

    gridColumnView.push({ column: column, data: columnChars.join("") });
  }

  const foundPattern = gridColumnView.filter((col) => col.data.indexOf(pattern) !== -1);

  if (foundPattern.length !== 0) {
    return {
      found: true,
      coords: {
        end: 0,
        start: 0,
        rowIndex: 0,
      },
      method: "search_by_column",
    };
  }

  // gridColumnView.forEach((col) => {
  //   console.log(col.data.indexOf(pattern));
  // });

  return {
    found: false,
    coords: null,
    method: "search_by_column",
  };
}
