import { Q1_ENTRIES } from './q1';
import { Q2_ENTRIES } from './q2';
import { Q3_ENTRIES } from './q3';
import { Q4_ENTRIES } from './q4';
import type { AgendaEntry } from '../types/agenda';

export const AGENDA_366: AgendaEntry[] = [
  ...Q1_ENTRIES,
  ...Q2_ENTRIES,
  ...Q3_ENTRIES,
  ...Q4_ENTRIES,
];

export const ENTRY_BY_ID: Record<string, AgendaEntry> = Object.fromEntries(
  AGENDA_366.map((entry) => [entry.id, entry])
);

export const MONTHS_IT = [
  'Gennaio',
  'Febbraio',
  'Marzo',
  'Aprile',
  'Maggio',
  'Giugno',
  'Luglio',
  'Agosto',
  'Settembre',
  'Ottobre',
  'Novembre',
  'Dicembre',
] as const;

export const MONTHS_IT_SHORT = [
  'Gen',
  'Feb',
  'Mar',
  'Apr',
  'Mag',
  'Giu',
  'Lug',
  'Ago',
  'Set',
  'Ott',
  'Nov',
  'Dic',
] as const;

export const MONTHS_JP_TRADITIONAL = [
  '睦月 (Mutsuki)',
  '如月 (Kisaragi)',
  '弥生 (Yayoi)',
  '卯月 (Uzuki)',
  '皐月 (Satsuki)',
  '水無月 (Minazuki)',
  '文月 (Fumizuki)',
  '葉月 (Hazuki)',
  '長月 (Nagatsuki)',
  '神無月 (Kannazuki)',
  '霜月 (Shimotsuki)',
  '師走 (Shiwasu)',
] as const;

export const WEEKDAYS_PERPETUAL = [
  { index: 0, shortIt: 'L', fullIt: 'Lunedì', kanji: '月', romaji: 'Getsu' },
  { index: 1, shortIt: 'M', fullIt: 'Martedì', kanji: '火', romaji: 'Ka' },
  { index: 2, shortIt: 'M', fullIt: 'Mercoledì', kanji: '水', romaji: 'Sui' },
  { index: 3, shortIt: 'G', fullIt: 'Giovedì', kanji: '木', romaji: 'Moku' },
  { index: 4, shortIt: 'V', fullIt: 'Venerdì', kanji: '金', romaji: 'Kin' },
  { index: 5, shortIt: 'S', fullIt: 'Sabato', kanji: '土', romaji: 'Do' },
  { index: 6, shortIt: 'D', fullIt: 'Domenica', kanji: '日', romaji: 'Nichi' },
] as const;

export function formatEntryId(month: number, day: number): string {
  return `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

export function getTodayEntryId(): string {
  const now = new Date();
  const id = formatEntryId(now.getMonth() + 1, now.getDate());
  return ENTRY_BY_ID[id] ? id : '01-01';
}

export function getAdjacentEntryId(currentId: string, delta: number): string {
  const idx = AGENDA_366.findIndex((e) => e.id === currentId);
  if (idx === -1) return '01-01';
  const nextIdx = (idx + delta + AGENDA_366.length) % AGENDA_366.length;
  return AGENDA_366[nextIdx].id;
}

/**
 * Computes 0 (Mon) .. 6 (Sun) for a given calendar year if that date exists in that year.
 * Returns null for Feb 29 on non-leap years.
 */
export function getWeekdayIndexForYear(month: number, day: number, year: number): number | null {
  const d = new Date(year, month - 1, day);
  if (d.getMonth() !== month - 1 || d.getDate() !== day) {
    return null;
  }
  const jsDay = d.getDay(); // 0=Sun .. 6=Sat
  return jsDay === 0 ? 6 : jsDay - 1;
}
