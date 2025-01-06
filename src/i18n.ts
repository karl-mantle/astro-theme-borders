// https://www.php.net/manual/en/datetime.format.php
import { SITE_LANGUAGE, DATE_FORMAT, TIME_FORMAT } from './consts';

const formatMapping: {[key: string]: (date: Date, locale: string) => string } = {
  d: date => String(date.getDate()).padStart(2, '0'),
  j: date => String(date.getDate()),
  S: (date) => {
    const day = date.getDate();
    const suffixSet = ['th', 'st', 'nd', 'rd']
    if (day > 3 && day < 21) return suffixSet[0];
    switch (day % 10) {
      case 1: return suffixSet[1];
      case 2: return suffixSet[2];
      case 3: return suffixSet[3];
      default: return suffixSet[0];
    }
  },
  l: (date, locale) => date.toLocaleDateString(locale, { weekday: 'long' }),
  D: (date, locale) => date.toLocaleDateString(locale, { weekday: 'short' }),
  m: date => String(date.getMonth() + 1).padStart(2, '0'),
  n: date => String(date.getMonth() + 1),
  F: (date, locale) => date.toLocaleDateString(locale, { month: 'long' }),
  M: (date, locale) => date.toLocaleDateString(locale, { month: 'short' }),
  Y: date => String(date.getFullYear()),
  y: date => String(date.getFullYear()).slice(-2),
  a: date => date.getHours() < 12 ? 'am' : 'pm',
  A: date => date.getHours() < 12 ? 'AM' : 'PM',
  g: date => String((date.getHours() % 12) || 12),
  h: date => String((date.getHours() % 12) || 12).padStart(2, '0'),
  G: date => String(date.getHours()),
  H: date => String(date.getHours()).padStart(2, '0'),
  i: date => String(date.getMinutes()).padStart(2, '0'),
  s: date => String(date.getSeconds()).padStart(2, '0'),
  T: (date, locale) => date.toLocaleTimeString(locale, { timeZoneName: 'short' }).split(' ')[2],
  c: date => date.toISOString(),
  r: date => date.toUTCString(),
  U: date => String(Math.floor(date.getTime() / 1000))
};

export function formatDateTime(date: string): string {
  const dateTime = new Date(date);
  const replaceDateFormat = (match: string): string => (formatMapping[match] ? formatMapping[match](dateTime, SITE_LANGUAGE) : match);

  const formatString = `${DATE_FORMAT} ${TIME_FORMAT}`.trim();
  return formatString.replace(/d|j|S|l|D|m|n|F|M|Y|y|a|A|g|h|G|H|i|s|T|c|r|U/g, replaceDateFormat);
}
