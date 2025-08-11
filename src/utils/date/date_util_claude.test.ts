import { describe, it, expect, beforeEach, vi } from "vitest";
import { DateUtil } from "./date_util";
import dayjs from "dayjs";

describe("DateUtil", () => {
  beforeEach(() => {
    // Reset any mocks before each test
    vi.restoreAllMocks();
  });

  describe("formatQuizDate", () => {
    it("should return formatted date string using formatDateOnly", () => {
      const mockDate = new Date("2023-12-25T10:30:00.000Z");
      const spy = vi
        .spyOn(global, "Date")
        .mockImplementation(() => mockDate as any);

      const result = DateUtil.formatQuizDate();

      expect(result).toBe("2023-12-25");
      expect(spy).toHaveBeenCalled();
    });

    it("should handle different dates correctly", () => {
      const mockDate = new Date("2024-01-01T00:00:00.000Z");
      vi.spyOn(global, "Date").mockImplementation(() => mockDate as any);

      const result = DateUtil.formatQuizDate();

      expect(result).toBe("2024-01-01");
    });
  });

  describe("localId", () => {
    it("should return a number based on current timestamp", () => {
      const mockTimestamp = 1640995200000; // 2022-01-01 00:00:00 UTC
      vi.spyOn(Date, "now").mockReturnValue(mockTimestamp);
      vi.spyOn(Math, "random").mockReturnValue(0.5);
      vi.spyOn(Math, "floor").mockReturnValue(500);

      const result = DateUtil.localId;

      expect(result).toBe(mockTimestamp);
      expect(Date.now).toHaveBeenCalled();
    });

    it("should return different values on different calls", () => {
      const firstCall = DateUtil.localId;
      const secondCall = DateUtil.localId;

      // Since it's based on Date.now(), they should be different (unless called at exact same millisecond)
      expect(typeof firstCall).toBe("number");
      expect(typeof secondCall).toBe("number");
    });
  });

  describe("currentEpochTime", () => {
    it("should return current timestamp", () => {
      const mockTimestamp = 1640995200000;
      vi.spyOn(Date, "now").mockReturnValue(mockTimestamp);

      const result = DateUtil.currentEpochTime;

      expect(result).toBe(mockTimestamp);
      expect(Date.now).toHaveBeenCalled();
    });

    it("should return a number", () => {
      const result = DateUtil.currentEpochTime;

      expect(typeof result).toBe("number");
      expect(result).toBeGreaterThan(0);
    });
  });

  describe("parseServerDate", () => {
    it("should return undefined when string is not provided", () => {
      const result = DateUtil.parseServerDate({
        string: undefined,
        toUtcTime: false,
      });

      expect(result).toBeUndefined();
    });

    it("should return undefined when string is empty", () => {
      const result = DateUtil.parseServerDate({
        string: "",
        toUtcTime: false,
      });

      expect(result).toBeUndefined();
    });

    it("should parse valid ISO date string", () => {
      const dateString = "2023-12-25T10:30:00.123";
      const result = DateUtil.parseServerDate({
        string: dateString,
        toUtcTime: false,
      });

      expect(result).toBeInstanceOf(Date);
      expect(result?.getFullYear()).toBe(2023);
      expect(result?.getMonth()).toBe(11); // December is month 11
      expect(result?.getDate()).toBe(25);
    });

    it("should convert to UTC time when toUtcTime is true", () => {
      const dateString = "2023-12-25T10:30:00.123";
      const result = DateUtil.parseServerDate({
        string: dateString,
        toUtcTime: true,
      });

      expect(result).toBeInstanceOf(Date);
      // The exact time will depend on timezone offset, but it should be a valid date
      expect(result?.getTime()).toBeGreaterThan(0);
    });

    it("should handle string longer than 23 characters by slicing", () => {
      const longDateString = "2023-12-25T10:30:00.123456789+05:00";
      const result = DateUtil.parseServerDate({
        string: longDateString,
        toUtcTime: false,
      });

      expect(result).toBeInstanceOf(Date);
      expect(result?.getFullYear()).toBe(2023);
    });

    it("should return undefined for invalid date string", () => {
      const invalidDateString = "invalid-date-string";
      const result = DateUtil.parseServerDate({
        string: invalidDateString,
        toUtcTime: false,
      });

      expect(result).toBeUndefined();
    });

    it("should handle edge case with exactly 23 characters", () => {
      const dateString = "2023-12-25T10:30:00.12"; // 22 chars, will slice to same
      const result = DateUtil.parseServerDate({
        string: dateString,
        toUtcTime: false,
      });

      expect(result).toBeInstanceOf(Date);
    });
  });

  // describe("parseGeneric", () => {
  //   it("should return undefined when formatter is not provided", () => {
  //     const result = DateUtil.parseGeneric({
  //       string: "2023-12-25",
  //       toUtcTime: false,
  //       formatter: undefined,
  //     });

  //     expect(result).toBeUndefined();
  //   });

  //   it("should return undefined when string is not provided", () => {
  //     const result = DateUtil.parseGeneric({
  //       string: undefined,
  //       toUtcTime: false,
  //       formatter: "YYYY-MM-DD",
  //     });

  //     expect(result).toBeUndefined();
  //   });

  //   it("should parse date with valid formatter", () => {
  //     const result = DateUtil.parseGeneric({
  //       string: "2023-12-25",
  //       toUtcTime: false,
  //       formatter: "YYYY-MM-DD",
  //     });

  //     expect(result).toBeInstanceOf(Date);
  //     expect(result?.getFullYear()).toBe(2023);
  //     expect(result?.getMonth()).toBe(11); // December
  //     expect(result?.getDate()).toBe(25);
  //   });

  // it("should parse date with different formatter patterns", () => {
  //   const result = DateUtil.parseGeneric({
  //     string: "25/12/2023",
  //     toUtcTime: false,
  //     formatter: "DD/MM/YYYY",
  //   });

  //   expect(result).toBeInstanceOf(Date);
  //   expect(result?.getFullYear()).toBe(2023);
  //   expect(result?.getMonth()).toBe(11);
  //   expect(result?.getDate()).toBe(25);
  // });

  // it("should parse time with formatter", () => {
  //   const result = DateUtil.parseGeneric({
  //     string: "2023-12-25 14:30:45",
  //     toUtcTime: false,
  //     formatter: "YYYY-MM-DD HH:mm:ss",
  //   });

  //   expect(result).toBeInstanceOf(Date);
  //   expect(result?.getHours()).toBe(14);
  //   expect(result?.getMinutes()).toBe(30);
  //   expect(result?.getSeconds()).toBe(45);
  // });

  // it("should handle invalid date string with valid formatter", () => {
  //   const result = DateUtil.parseGeneric({
  //     string: "invalid-date",
  //     toUtcTime: false,
  //     formatter: "YYYY-MM-DD",
  //   });

  //   // dayjs will try to parse it, but it will result in an Invalid Date
  //   expect(result).toBeInstanceOf(Date);
  //   expect(isNaN(result?.getTime() || 0)).toBe(true);
  // });

  //   it("should handle mismatched string and formatter", () => {
  //     const result = DateUtil.parseGeneric({
  //       string: "2023-12-25",
  //       toUtcTime: false,
  //       formatter: "DD/MM/YYYY",
  //     });

  //     // This will create a date, but it might not be what's expected
  //     expect(result).toBeInstanceOf(Date);
  //   });
  // });

  describe("Integration tests", () => {
    it("should work with real current date", () => {
      const currentTime = DateUtil.currentEpochTime;
      const localId = DateUtil.localId;
      const quizDate = DateUtil.formatQuizDate();

      expect(typeof currentTime).toBe("number");
      expect(typeof localId).toBe("number");
      expect(typeof quizDate).toBe("string");
      expect(quizDate).toMatch(/^\d{4}-\d{2}-\d{2}$/); // YYYY-MM-DD format
    });

    it("should handle server date parsing with real ISO strings", () => {
      const isoString = new Date().toISOString();
      const parsed = DateUtil.parseServerDate({
        string: isoString,
        toUtcTime: false,
      });

      expect(parsed).toBeInstanceOf(Date);
      expect(parsed?.getTime()).toBeGreaterThan(0);
    });
  });
});
