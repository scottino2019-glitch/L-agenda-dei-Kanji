import { useMemo, useState } from 'react';
import type { ObservanceCategory, SeasonName } from '../types/agenda';
import {
  AGENDA_366,
  MONTHS_IT,
  MONTHS_JP_TRADITIONAL,
} from '../data/agendaData';

interface CalendarViewProps {
  currentDayId: string;
  hasSavedContent: (entryId: string) => boolean;
  onSelectDay: (entryId: string) => void;
}

const SEASONS: ('Tutte' | SeasonName)[] = [
  'Tutte',
  'Inverno',
  'Primavera',
  'Estate',
  'Autunno',
];

const CATEGORIES: ('Tutte' | ObservanceCategory)[] = [
  'Tutte',
  'Festa Nazionale',
  'Rito Shintō',
  'Rito Buddhista',
  'Anniversario Storico',
  'Giornata Curiosa',
  'Natura e Stagioni',
];

export function CalendarView({
  currentDayId,
  hasSavedContent,
  onSelectDay,
}: CalendarViewProps) {
  const [seasonFilter, setSeasonFilter] = useState<'Tutte' | SeasonName>('Tutte');
  const [categoryFilter, setCategoryFilter] = useState<'Tutte' | ObservanceCategory>('Tutte');

  const filteredIds = useMemo(() => {
    const set = new Set<string>();
    for (const entry of AGENDA_366) {
      if (seasonFilter !== 'Tutte' && entry.season !== seasonFilter) continue;
      if (categoryFilter !== 'Tutte' && entry.category !== categoryFilter) continue;
      set.add(entry.id);
    }
    return set;
  }, [seasonFilter, categoryFilter]);

  const entriesByMonth = useMemo(() => {
    const grouped: typeof AGENDA_366[] = Array.from({ length: 12 }, () => []);
    for (const entry of AGENDA_366) {
      grouped[entry.month - 1].push(entry);
    }
    return grouped;
  }, []);

  const hasActiveFilter = seasonFilter !== 'Tutte' || categoryFilter !== 'Tutte';

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Header & Filters */}
      <div className="bg-[#FCF9F2] border border-[#B8AA92] p-5 sm:p-6 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[#575049] font-bold">
            Indice Perpetuo · 366 Pagine (Incluso 29 Febbraio)
          </p>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A1715] mt-1">
            Calendario dell’Anno
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div className="flex items-center gap-2">
            <label htmlFor="cal-season" className="text-[#4F4840] font-medium">
              Stagione:
            </label>
            <select
              id="cal-season"
              value={seasonFilter}
              onChange={(e) => setSeasonFilter(e.target.value as 'Tutte' | SeasonName)}
              className="px-3 py-1.5 bg-[#FFFDF8] border border-[#B8AA92] text-[#1A1715] focus:outline-none focus:border-[#1E1A17]"
            >
              {SEASONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="cal-category" className="text-[#4F4840] font-medium">
              Ricorrenza:
            </label>
            <select
              id="cal-category"
              value={categoryFilter}
              onChange={(e) =>
                setCategoryFilter(e.target.value as 'Tutte' | ObservanceCategory)
              }
              className="px-3 py-1.5 bg-[#FFFDF8] border border-[#B8AA92] text-[#1A1715] focus:outline-none focus:border-[#1E1A17]"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {hasActiveFilter && (
            <button
              type="button"
              onClick={() => {
                setSeasonFilter('Tutte');
                setCategoryFilter('Tutte');
              }}
              className="text-sm font-semibold text-[#B93828] hover:underline cursor-pointer"
            >
              Ripristina
            </button>
          )}

          <span className="font-mono-num text-sm font-semibold text-[#1A1715] ml-1">
            {filteredIds.size} / 366 giorni
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="py-3.5 text-sm text-[#3F3A34] flex flex-wrap items-center gap-x-6 gap-y-1">
        <span>Seleziona un giorno per aprire la doppia pagina corrispondente.</span>
        <span className="inline-flex items-center gap-2 font-medium">
          <span className="w-2.5 h-2.5 bg-[#B93828] inline-block" />
          Pagina con appunti, segnalibro o calligrafia salvata
        </span>
      </div>

      {/* 12 Months Perpetual Grid */}
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {entriesByMonth.map((monthEntries, monthIdx) => (
          <article
            key={MONTHS_IT[monthIdx]}
            className="bg-[#FCF9F2] border border-[#B8AA92] p-5 shadow-sm"
          >
            <div className="flex items-baseline justify-between gap-2 pb-3 mb-3.5 border-b border-[#D2C5AF]">
              <h2 className="font-editorial text-2xl sm:text-[26px] font-bold text-[#1A1715]">
                {MONTHS_IT[monthIdx]}
              </h2>
              <span lang="ja" className="font-jp text-sm font-medium text-[#575049]">
                {MONTHS_JP_TRADITIONAL[monthIdx]}
              </span>
            </div>

            <div className="grid grid-cols-7 gap-1.5">
              {monthEntries.map((entry) => {
                const matches = filteredIds.has(entry.id);
                const isSelected = entry.id === currentDayId;
                const isSaved = hasSavedContent(entry.id);

                return (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => onSelectDay(entry.id)}
                    title={`${entry.day} ${MONTHS_IT[monthIdx]} — ${entry.titleIt} (${entry.kanji}: ${entry.meaningIt})`}
                    className={`relative p-1.5 flex flex-col items-center justify-center border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#1E1A17] border-[#1E1A17] text-[#FAF6EE]'
                        : matches
                        ? 'bg-[#FFFDF8] border-[#D2C5AF] text-[#1A1715] hover:border-[#B93828] hover:bg-[#F6EFE3]'
                        : 'bg-[#E9E0D0]/60 border-[#D8CEBC] text-[#8E8477] opacity-40 hover:opacity-80'
                    }`}
                  >
                    <span className="font-mono-num text-xs font-medium leading-none opacity-85">
                      {String(entry.day).padStart(2, '0')}
                    </span>
                    <span lang="ja" className="font-jp text-lg sm:text-xl leading-tight mt-0.5">
                      {entry.kanji}
                    </span>

                    {isSaved && (
                      <span
                        aria-label="Contenuto salvato"
                        className={`absolute top-1 right-1 w-2 h-2 ${
                          isSelected ? 'bg-[#FAF6EE]' : 'bg-[#B93828]'
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
