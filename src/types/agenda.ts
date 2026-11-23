export type SeasonName = 'Inverno' | 'Primavera' | 'Estate' | 'Autunno';

export type ObservanceCategory =
  | 'Festa Nazionale'
  | 'Rito Shintō'
  | 'Rito Buddhista'
  | 'Anniversario Storico'
  | 'Giornata Curiosa'
  | 'Natura e Stagioni';

export interface KanjiReading {
  kana: string;
  romaji: string;
}

export interface KanjiExample {
  word: string;
  kana: string;
  romaji: string;
  meaning: string;
}

export interface AgendaEntry {
  id: string; // "MM-DD" e.g. "01-01", "02-29", "12-31"
  month: number; // 1-12
  day: number; // 1-31
  dayOfYear: number; // 1-366
  jpDate: string; // e.g. "一月一日"
  season: SeasonName;
  sekki: string; // Traditional 24 solar terms (Sekki)
  category: ObservanceCategory;
  titleIt: string;
  titleJp: string;
  observanceDesc: string;
  kanji: string;
  meaningIt: string;
  strokes: number;
  radical: string;
  on: KanjiReading[];
  kun: KanjiReading[];
  originStory: string;
  examples: KanjiExample[];
}

export type BulletKind = 'task' | 'event' | 'note';
export type BulletStatus = 'open' | 'done' | 'migrated';

export interface BulletItem {
  id: string;
  text: string;
  kind: BulletKind;
  status: BulletStatus;
}

export interface JournalEntryState {
  weekday: number | null; // 0 = Lunedì ... 6 = Domenica
  notes: string;
  bullets: BulletItem[];
  calligraphyDataUrl: string | null;
  bookmarked: boolean;
  updatedAt?: string;
}

export type AppView = 'spread' | 'calendar' | 'kanji' | 'notes';
