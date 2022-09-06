export type Grid = string[];

interface MatcherResultCoords {
  rowIndex: number;
  start: number;
  end: number;
}

export type MatcherMethod = "search_by_row" | "search_by_column";

export interface MatcherResult {
  method: MatcherMethod;
  found: boolean;
  coords: MatcherResultCoords | null;
}

type MatcherFn = (grid: Grid, pattern: string) => MatcherResult[] | MatcherResult;

interface FinderResult {
  searchingPattern: string;
  results: any;
}

export function Finder(grid: Grid, pattern: string) {
  const matchersStack: MatcherFn[] = [];

  const _grid = grid.map((row) => row.toLowerCase());
  const _pattern = pattern.toLowerCase();

  return {
    addMatcher(fn: MatcherFn) {
      matchersStack.push(fn);

      return this;
    },
    run(): FinderResult {
      const results = matchersStack.map((matcher) => matcher(_grid, _pattern));

      return {
        searchingPattern: pattern,
        results,
      };
    },
  };
}
