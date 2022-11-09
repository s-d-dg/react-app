const moment = require("moment");

export function formatDateFromISO8601toGivenFormat(
  dateISO8601: string,
  newFormat: string
): string {
  return moment(dateISO8601, moment.ISO_8601).format(newFormat);
}
