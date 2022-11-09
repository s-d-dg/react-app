import { DD_MM_YYYY } from "./date-formats";
import { formatDateFromISO8601toGivenFormat } from "./date-formatter";

describe("date formatter", () => {
  it("should format correctly for expected format", () => {
    // given
    const dateTimeInISO8601Format = "1995-02-09T00:00:00+0000";
    const expectedFormat = DD_MM_YYYY;

    // when
    const result = formatDateFromISO8601toGivenFormat(
      dateTimeInISO8601Format,
      expectedFormat
    );

    // then
    expect(result).toBe("09.02.1995");
  });

  it("should format correctly for another format", () => {
    // given
    const dateTimeInISO8601Format = "1995-02-09T00:00:00+0000";
    const expectedFormat = "YYYY-MM-DD";

    // when
    const result = formatDateFromISO8601toGivenFormat(
      dateTimeInISO8601Format,
      expectedFormat
    );

    // then
    expect(result).toBe("1995-02-09");
  });
});
