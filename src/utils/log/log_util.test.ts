import { LogUtil } from "./log_util";

import { describe, it, expect } from "vitest";
describe("sum", () => {
  it("adds", () => {
    expect(LogUtil.sum(2, 3)).toBe(5);
  });
});
