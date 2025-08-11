import { describe, it, expect, vi } from "vitest";
import { DateUtil } from "./date_util";

describe("DateUtil", () => {
  it("formatQuizDate formats current date", () => {
    vi.useFakeTimers();
    const fixedDate = new Date("2023-01-02T00:00:00Z");
    vi.setSystemTime(fixedDate);

    const result = DateUtil.formatQuizDate();
    expect(result).toBe("2023-01-02");

    vi.useRealTimers();
  });

  it("localId returns current time", () => {
    const fixedTime = 1691712000000;
    const spy = vi.spyOn(Date, "now").mockReturnValue(fixedTime);

    const id = DateUtil.localId;
    expect(id).toBe(fixedTime);

    spy.mockRestore();
  });

  it("currentEpochTime returns Date.now()", () => {
    const fixedTime = 1691712000000;
    const spy = vi.spyOn(Date, "now").mockReturnValue(fixedTime);

    const result = DateUtil.currentEpochTime;
    expect(result).toBe(fixedTime);

    spy.mockRestore();
  });

  describe("parseServerDate", () => {
    it("parses server date and converts to UTC when requested", () => {
      const toUtcSpy = vi.spyOn(Date.prototype as any, "toUtcTime");
      const dateStr = "2023-08-11T10:20:30.1234567";

      const result = DateUtil.parseServerDate({
        string: dateStr,
        toUtcTime: true,
      });

      expect(toUtcSpy).toHaveBeenCalled();
      expect(result?.toISOString()).toBe("2023-08-11T10:20:30.123Z");

      toUtcSpy.mockRestore();
    });

    it("parses server date without converting when not requested", () => {
      const toUtcSpy = vi.spyOn(Date.prototype as any, "toUtcTime");
      const dateStr = "2023-08-11T10:20:30.1234567";

      const result = DateUtil.parseServerDate({
        string: dateStr,
        toUtcTime: false,
      });

      expect(toUtcSpy).not.toHaveBeenCalled();
      expect(result?.toISOString()).toBe("2023-08-11T10:20:30.123Z");

      toUtcSpy.mockRestore();
    });

    it("returns undefined for invalid date strings", () => {
      const result = DateUtil.parseServerDate({
        string: "invalid",
        toUtcTime: false,
      });
      expect(result).toBeUndefined();
    });
  });

  describe("parseGeneric", () => {
    // it("parses date using provided formatter", () => {
    //   const result = DateUtil.parseGeneric({
    //     string: "2023-08-11",
    //     formatter: "YYYY-MM-DD",
    //     toUtcTime: false,
    //   });
    //   expect(result?.toISOString()).toBe("2023-08-11T00:00:00.000Z");
    // });
    // it("returns undefined when formatter is missing", () => {
    //   const result = DateUtil.parseGeneric({
    //     string: "2023-08-11",
    //     toUtcTime: false,
    //   });
    //   expect(result).toBeUndefined();
    // });
  });
});
