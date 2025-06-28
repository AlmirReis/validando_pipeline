import { describe, it, expect } from "vitest";

describe("Operações matemáticas", () => {
  it("Deve somar dois números corretamente", () => {
    const result = 2 + 3;
    expect(result).toBe(5);
  });

  it("Deve multiplicar dois números corretamente", () => {
    const result = 4 * 5;
    expect(result).toBe(20);
  });
});
