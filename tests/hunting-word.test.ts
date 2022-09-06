import Finder from "../src";
import { searchByRow } from "../src/matchers/searchByRow";

describe("Hunting word", () => {
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

  it('should search for "toalha" and return success', () => {
    const pattern = "toalha";

    const result = Finder(grid, pattern).addMatcher(searchByRow);

    expect(result).not.toBe(null);
  });
});
