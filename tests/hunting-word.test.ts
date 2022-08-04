import { patternSearch } from "../src"

describe("Hunting word", () => {
  it('should search for "car" pattern', () => {
    const grid = ["LAMAKZOQKD", "HSJAKSCARI", "ADFKSJMZLA"]
    const pattern = "car"

    const found = patternSearch(grid, pattern)
  })
})
