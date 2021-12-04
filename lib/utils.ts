import { DateTime } from "luxon";

export function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

export function formatDate(date: DateTime): string {
  const formatOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short', day: 'numeric', month: 'short'
  };
  return date.setZone('America/New_York').toLocaleString(formatOptions);
}

export function formatTime(date: DateTime): string {
  const formatOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric', minute: 'numeric', timeZoneName: 'short'
  };
  return date.setZone('America/Chicago').toLocaleString(formatOptions);
}