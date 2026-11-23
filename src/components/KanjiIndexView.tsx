import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import type { SeasonName } from '../types/agenda';
import { AGENDA_366, MONTHS_IT_SHORT } from '../data/agendaData';

interface KanjiIndexViewProps {
  hasSavedContent: (entryId: string) => boolean;
  onSelectDay: (entryId: string) => void;
}

type StrokeFilter = 'all' | '1-6' | '7-12' | '13+';

const SEASONS: ('Tutte' | SeasonName)[] = [
  'Tutte',
  'Inverno',
  'Primavera',
  'Estate',
  'Autunno',
];

export function KanjiIndexView({
  hasSavedContent,
  onSelectDay,
}: KanjiIndexViewProps) {
  const [query, setQuery] = useState('');
  const [seasonFilter, setSeasonFilter] = useState<'Tutte' | SeasonName>('Tutte');
  const [strokeFilter, setStrokeFilter] = useState<StrokeFilter>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return AGENDA_366.filter((entry) => {
      if (seasonFilter !== 'Tutte' && entry.season !== seasonFilter) {
        return false;
      }
      if (strokeFilter === '1-6' && entry.strokes > 6) return false;
      if (strokeFilter === '7-12' && (entry.strokes < 7 || entry.strokes > 12)) {
        return false;
      }
      if (strokeFilter === '13+' && entry.strokes < 13) return false;

      if (!q) return true;

      if (entry.kanji.includes(q)) return true;
      if (entry.meaningIt.toLowerCase().includes(q)) return true;
      if (entry.titleIt.toLowerCase().includes(q)) return true;
      if (entry.titleJp.toLowerCase().includes(q)) return true;
      if (entry.sekki.toLowerCase().includes(q)) return true;

      for (const r of [...entry.on, ...entry.kun]) {
        if (
          r.romaji.toLowerCase().includes(q) ||
          r.kana.toLowerCase().includes(q)
        ) {
          return true;
        }
      }

      for (const ex of entry.examples) {
        if (
          ex.word.includes(q) ||
          ex.romaji.toLowerCase().includes(q) ||
          ex.meaning.toLowerCase().includes(q)
        ) {
          return true;
        }
      }

      return false;
    });
  }, [query, seasonFilter, strokeFilter]);

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Header & Search Controls */}
      <div className="bg-[#FCF9F2] border border-[#B8AA92] p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#575049] font-bold">
              Repertorio Lessicale · 366 Caratteri
            </p>
            <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A1715] mt-1">
              Indice dei Kanji
            </h1>
          </div>
          <span className="font-mono-num text-sm font-semibold text-[#1A1715]">
            {filtered.length} / 366 kanji
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#575049] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca kanji, significato italiano, lettura (kana o rōmaji), parola o ricorrenza..."
              className="w-full pl-10 pr-3 py-2.5 text-base bg-[#FFFDF8] border border-[#B8AA92] text-[#1A1715] placeholder:text-[#7A7064] focus:outline-none focus:border-[#1E1A17]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <select
              aria-label="Filtra per stagione"
              value={seasonFilter}
              onChange={(e) =>
                setSeasonFilter(e.target.value as 'Tutte' | SeasonName)
              }
              className="px-3 py-2.5 bg-[#FFFDF8] border border-[#B8AA92] text-[#1A1715] focus:outline-none focus:border-[#1E1A17]"
            >
              {SEASONS.map((s) => (
                <option key={s} value={s}>
                  Stagione: {s}
                </option>
              ))}
            </select>

            <select
              aria-label="Filtra per numero di tratti"
              value={strokeFilter}
              onChange={(e) => setStrokeFilter(e.target.value as StrokeFilter)}
              className="px-3 py-2.5 bg-[#FFFDF8] border border-[#B8AA92] text-[#1A1715] focus:outline-none focus:border-[#1E1A17]"
            >
              <option value="all">Tratti: Tutti</option>
              <option value="1-6">1–6 tratti</option>
              <option value="7-12">7–12 tratti</option>
              <option value="13+">13+ tratti</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center bg-[#FCF9F2] border border-[#B8AA92] mt-6 p-8">
          <p className="font-editorial text-2xl font-bold text-[#1A1715]">
            Nessun kanji trovato
          </p>
          <p className="text-base text-[#4F4840] mt-1">
            Prova a modificare i criteri di ricerca o i filtri attivi.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSeasonFilter('Tutte');
              setStrokeFilter('all');
            }}
            className="mt-4 px-5 py-2.5 text-sm font-semibold bg-[#1E1A17] text-[#FAF6EE] hover:bg-[#B93828] transition-colors cursor-pointer"
          >
            Mostra tutti i 366 kanji
          </button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((entry) => {
            const isSaved = hasSavedContent(entry.id);
            const firstOn = entry.on[0];
            const firstKun = entry.kun[0];

            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => onSelectDay(entry.id)}
                className="text-left bg-[#FCF9F2] border border-[#B8AA92] hover:border-[#1E1A17] hover:bg-[#FFFDF8] p-5 transition-colors flex flex-col justify-between gap-3.5 cursor-pointer shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span
                      lang="ja"
                      className="font-jp text-5xl leading-none text-[#1A1715]"
                    >
                      {entry.kanji}
                    </span>
                    <div className="text-right">
                      <span className="font-mono-num text-xs sm:text-sm font-semibold text-[#4F4840] block">
                        {String(entry.day).padStart(2, '0')}{' '}
                        {MONTHS_IT_SHORT[entry.month - 1]}
                      </span>
                      {isSaved && (
                        <span className="text-xs font-bold text-[#B93828]">
                          Annotato
                        </span>
                      )}
                    </div>
                  </div>

                  <h2 className="font-editorial text-2xl font-bold text-[#1A1715] mt-3 leading-snug">
                    {entry.meaningIt}
                  </h2>

                  <p className="text-sm text-[#4F4840] mt-1 truncate">
                    {entry.titleIt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D8CEBC] space-y-1.5 text-sm">
                  <div className="text-[#292524] truncate">
                    {firstOn && (
                      <span>
                        <strong className="font-mono-num text-xs text-[#B93828] mr-1">
                          ON
                        </strong>
                        <span lang="ja" className="font-jp font-medium">
                          {firstOn.kana}
                        </span>{' '}
                        <span className="text-[#575049] italic">
                          {firstOn.romaji}
                        </span>
                      </span>
                    )}
                    {firstOn && firstKun && (
                      <span className="text-[#8E8477]"> · </span>
                    )}
                    {firstKun && (
                      <span>
                        <strong className="font-mono-num text-xs text-[#1E1A17] mr-1">
                          KUN
                        </strong>
                        <span lang="ja" className="font-jp font-medium">
                          {firstKun.kana}
                        </span>{' '}
                        <span className="text-[#575049] italic">
                          {firstKun.romaji}
                        </span>
                      </span>
                    )}
                  </div>
                  <p className="font-mono-num text-xs text-[#575049]">
                    {entry.strokes} {entry.strokes === 1 ? 'tratto' : 'tratti'} ·{' '}
                    {entry.season}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
