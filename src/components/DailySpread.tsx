import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Printer,
  Plus,
  X,
  PenTool,
  ListTodo,
  CalendarCheck,
} from 'lucide-react';
import { motion } from 'motion/react';
import type {
  AgendaEntry,
  BulletKind,
  BulletStatus,
  JournalEntryState,
} from '../types/agenda';
import {
  MONTHS_IT,
  MONTHS_JP_TRADITIONAL,
  WEEKDAYS_PERPETUAL,
  getWeekdayIndexForYear,
} from '../data/agendaData';
import { CalligraphyPad } from './CalligraphyPad';

interface DailySpreadProps {
  entry: AgendaEntry;
  dayState: JournalEntryState;
  onNavigateDelta: (delta: number) => void;
  onToggleWeekday: (weekdayIdx: number) => void;
  onSetWeekday: (weekdayIdx: number) => void;
  onSetNotes: (notes: string) => void;
  onAddBullet: (text: string, kind: BulletKind) => void;
  onCycleBullet: (bulletId: string) => void;
  onRemoveBullet: (bulletId: string) => void;
  onSetCalligraphy: (dataUrl: string | null) => void;
  onToggleBookmark: () => void;
}

const BULLET_KIND_META: Record<
  BulletKind,
  { symbol: string; label: string }
> = {
  task: { symbol: '•', label: 'Impegno' },
  event: { symbol: '○', label: 'Appuntamento' },
  note: { symbol: '—', label: 'Nota' },
};

function renderBulletGlyph(kind: BulletKind, status: BulletStatus): string {
  if (status === 'done') return '✓';
  if (status === 'migrated') return '→';
  return BULLET_KIND_META[kind].symbol;
}

export function DailySpread({
  entry,
  dayState,
  onNavigateDelta,
  onToggleWeekday,
  onSetWeekday,
  onSetNotes,
  onAddBullet,
  onCycleBullet,
  onRemoveBullet,
  onSetCalligraphy,
  onToggleBookmark,
}: DailySpreadProps) {
  const [rightMode, setRightMode] = useState<'journal' | 'calligraphy'>('journal');
  const [bulletKind, setBulletKind] = useState<BulletKind>('task');
  const [bulletInput, setBulletInput] = useState('');
  const [helperYear, setHelperYear] = useState<string>(
    String(new Date().getFullYear())
  );
  const [yearFeedback, setYearFeedback] = useState<{
    type: 'ok' | 'error';
    text: string;
  } | null>(null);

  useEffect(() => {
    setYearFeedback(null);
  }, [entry.id]);

  const monthName = MONTHS_IT[entry.month - 1];
  const monthJp = MONTHS_JP_TRADITIONAL[entry.month - 1];
  const dayPadded = String(entry.day).padStart(2, '0');
  const dayOfYearPadded = String(entry.dayOfYear).padStart(3, '0');

  const handleBulletSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bulletInput.trim()) return;
    onAddBullet(bulletInput, bulletKind);
    setBulletInput('');
  };

  const handleApplyYearWeekday = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedYear = Number.parseInt(helperYear.trim(), 10);
    if (Number.isNaN(parsedYear) || parsedYear < 1900 || parsedYear > 2200) {
      setYearFeedback({
        type: 'error',
        text: 'Inserisci un anno valido compreso tra 1900 e 2200.',
      });
      return;
    }
    const idx = getWeekdayIndexForYear(entry.month, entry.day, parsedYear);
    if (idx === null) {
      setYearFeedback({
        type: 'error',
        text: `Il 29 febbraio non esiste nel ${parsedYear} (anno non bisestile).`,
      });
      return;
    }
    onSetWeekday(idx);
    const wd = WEEKDAYS_PERPETUAL[idx];
    setYearFeedback({
      type: 'ok',
      text: `${entry.day} ${monthName} ${parsedYear}: ${wd.fullIt} (${wd.kanji})`,
    });
  };

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Top Spread Navigation Bar */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => onNavigateDelta(-1)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-[#1A1715] bg-[#FAF6EE] border border-[#B8AA92] hover:bg-[#1E1A17] hover:text-[#FAF6EE] hover:border-[#1E1A17] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Giorno Prec.</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigateDelta(1)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-[#1A1715] bg-[#FAF6EE] border border-[#B8AA92] hover:bg-[#1E1A17] hover:text-[#FAF6EE] hover:border-[#1E1A17] transition-colors cursor-pointer"
          >
            <span>Giorno Succ.</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onToggleBookmark}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium border transition-colors cursor-pointer ${
              dayState.bookmarked
                ? 'bg-[#B93828] border-[#B93828] text-[#FAF6EE]'
                : 'bg-[#FAF6EE] border-[#B8AA92] text-[#1A1715] hover:border-[#1E1A17]'
            }`}
          >
            <Bookmark
              className="w-4 h-4"
              fill={dayState.bookmarked ? 'currentColor' : 'none'}
            />
            <span>{dayState.bookmarked ? 'Salvato' : 'Segnalibro'}</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium bg-[#FAF6EE] border border-[#B8AA92] text-[#1A1715] hover:bg-[#1E1A17] hover:text-[#FAF6EE] hover:border-[#1E1A17] transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Stampa Pagina</span>
          </button>
        </div>
      </div>

      {/* Hardcover Clothbound Book Frame */}
      <div className="bg-[#2B241F] p-2 sm:p-3.5 shadow-[0_24px_60px_-18px_rgba(20,16,12,0.52)]">
        <motion.article
          key={entry.id}
          initial={{ opacity: 0.78, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="agenda-spread-sheet grid grid-cols-1 lg:grid-cols-12 border border-[#1E1A17]"
        >
          {/* ============================================================
              LEFT FOLIO: AREA I (Data & Ricorrenza) + AREA III (Kanji del Giorno)
             ============================================================ */}
          <div className="lg:col-span-6 flex flex-col relative border-b-2 lg:border-b-0 lg:border-r-2 border-[#B8AA92] min-w-0">
            {/* Central Spine Shadow on Desktop */}
            <div
              aria-hidden="true"
              className="hidden lg:block pointer-events-none absolute inset-y-0 right-0 w-8 book-spine-shadow z-10"
            />

            {/* ----------------------------------------------------------
                AREA I: DATA E RICORRENZA DEL GIORNO
               ---------------------------------------------------------- */}
            <section
              aria-labelledby="part1-heading"
              className="bg-[#FCF9F2] p-6 sm:p-8 lg:p-9"
            >
              <div className="flex items-center justify-between gap-3 pb-3 mb-5 border-b border-[#D2C5AF]">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-[#1E1A17] text-[#FAF6EE] font-editorial text-sm font-bold">
                    I
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#1A1715]">
                    Data e Ricorrenza del Giorno
                  </span>
                </div>
                <span className="font-mono-num text-xs sm:text-sm font-medium text-[#575049]">
                  {dayOfYearPadded} / 366
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-editorial text-7xl sm:text-8xl font-bold leading-none tracking-tight text-[#B93828] tabular-nums">
                    {dayPadded}
                  </span>
                  <div>
                    <h1
                      id="part1-heading"
                      className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A1715] leading-tight"
                    >
                      {monthName}
                    </h1>
                    <p className="font-jp text-base sm:text-lg text-[#4F4840] mt-1 font-medium">
                      {entry.jpDate} · {monthJp}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 font-mono-num text-xs sm:text-sm text-[#4F4840]">
                {entry.season} · {entry.sekki} ·{' '}
                <span className="text-[#B93828] font-semibold">
                  {entry.category}
                </span>
              </p>

              <div className="mt-5 p-4 sm:p-5 bg-[#F4ECE0] border border-[#D4C7B0]">
                <h2 className="font-editorial text-[26px] sm:text-[32px] font-bold text-[#1A1715] leading-snug">
                  {entry.titleIt}
                </h2>
                <p
                  lang="ja"
                  className="font-jp text-lg sm:text-xl font-medium text-[#B93828] mt-1"
                >
                  {entry.titleJp}
                </p>
                <p className="mt-3 text-base sm:text-[16.5px] leading-relaxed text-[#292524]">
                  {entry.observanceDesc}
                </p>
              </div>
            </section>

            {/* ----------------------------------------------------------
                AREA III: IL KANJI DEL GIORNO
               ---------------------------------------------------------- */}
            <section
              aria-labelledby="part3-heading"
              className="flex-1 bg-[#EFE5D4] border-t-2 border-[#BFB29C] p-6 sm:p-8 lg:p-9"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b border-[#C9B99F]">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-[#B93828] text-[#FAF6EE] font-editorial text-sm font-bold">
                    III
                  </span>
                  <h3
                    id="part3-heading"
                    className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#1A1715]"
                  >
                    Il Kanji del Giorno
                  </h3>
                </div>
                <span className="font-mono-num text-xs sm:text-sm font-medium text-[#3F3A34]">
                  {entry.strokes} {entry.strokes === 1 ? 'tratto' : 'tratti'} ·
                  Radicale:{' '}
                  <span lang="ja" className="font-jp font-semibold text-[#1A1715]">
                    {entry.radical}
                  </span>
                </span>
              </div>

              <div className="bg-[#FCF9F2] border border-[#C9B99F] p-4 sm:p-5 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0 border-2 border-[#1E1A17] bg-[#FFFDF8] flex items-center justify-center mx-auto sm:mx-0">
                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <line
                      x1="50"
                      y1="0"
                      x2="50"
                      y2="100"
                      stroke="#D2C7B4"
                      strokeWidth="0.7"
                      strokeDasharray="2 2"
                    />
                    <line
                      x1="0"
                      y1="50"
                      x2="100"
                      y2="50"
                      stroke="#D2C7B4"
                      strokeWidth="0.7"
                      strokeDasharray="2 2"
                    />
                  </svg>

                  <span
                    lang="ja"
                    className="relative z-10 font-jp text-[88px] sm:text-[104px] leading-none text-[#1A1715] select-all"
                  >
                    {entry.kanji}
                  </span>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 28 28"
                    className="absolute bottom-2 right-2 w-7 h-7 text-[#B93828]"
                  >
                    <rect
                      x="1.5"
                      y="1.5"
                      width="25"
                      height="25"
                      rx="2"
                      fill="#FAF6EE"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <text
                      x="14"
                      y="19"
                      textAnchor="middle"
                      fill="currentColor"
                      fontSize="13"
                      fontFamily="Noto Serif JP, serif"
                      fontWeight="bold"
                    >
                      字
                    </text>
                  </svg>
                </div>

                <div className="flex-1 min-w-0 w-full">
                  <p className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A1715] leading-tight">
                    {entry.meaningIt}
                  </p>

                  <div className="mt-4 divide-y divide-[#DFD5C3] border-t border-b border-[#DFD5C3]">
                    <div className="py-2.5 flex items-baseline gap-3">
                      <span className="w-12 shrink-0 font-mono-num text-xs font-bold tracking-wider text-[#B93828] uppercase">
                        ON
                      </span>
                      <div className="text-base text-[#1A1715] leading-relaxed">
                        {entry.on.length > 0 ? (
                          entry.on.map((r, i) => (
                            <span key={`${r.kana}-${i}`}>
                              {i > 0 && (
                                <span className="text-[#8E8477]"> · </span>
                              )}
                              <span
                                lang="ja"
                                className="font-jp text-lg font-semibold"
                              >
                                {r.kana}
                              </span>{' '}
                              <span className="text-[#4F4840] italic">
                                {r.romaji}
                              </span>
                            </span>
                          ))
                        ) : (
                          <span className="text-[#6B645C]">—</span>
                        )}
                      </div>
                    </div>

                    <div className="py-2.5 flex items-baseline gap-3">
                      <span className="w-12 shrink-0 font-mono-num text-xs font-bold tracking-wider text-[#1E1A17] uppercase">
                        KUN
                      </span>
                      <div className="text-base text-[#1A1715] leading-relaxed">
                        {entry.kun.length > 0 ? (
                          entry.kun.map((r, i) => (
                            <span key={`${r.kana}-${i}`}>
                              {i > 0 && (
                                <span className="text-[#8E8477]"> · </span>
                              )}
                              <span
                                lang="ja"
                                className="font-jp text-lg font-semibold"
                              >
                                {r.kana}
                              </span>{' '}
                              <span className="text-[#4F4840] italic">
                                {r.romaji}
                              </span>
                            </span>
                          ))
                        ) : (
                          <span className="text-[#6B645C]">—</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-[#FAF5EB] border border-[#C9B99F] p-4 sm:p-5">
                <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.12em] text-[#1A1715]">
                  Storia della Forma
                </h4>
                <p className="mt-2 text-base leading-relaxed text-[#292524]">
                  {entry.originStory}
                </p>
              </div>

              <div className="mt-4 bg-[#FCF9F2] border border-[#C9B99F] p-4 sm:p-5">
                <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.12em] text-[#1A1715] mb-2">
                  Parole d’Esempio
                </h4>
                <ul className="divide-y divide-[#E2D8C7]">
                  {entry.examples.map((ex, idx) => (
                    <li
                      key={`${ex.word}-${idx}`}
                      className="py-2.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                    >
                      <div className="flex flex-wrap items-baseline gap-2.5">
                        <span
                          lang="ja"
                          className="font-jp text-lg font-semibold text-[#1A1715]"
                        >
                          {ex.word}
                        </span>
                        <span
                          lang="ja"
                          className="font-jp text-sm text-[#4F4840]"
                        >
                          {ex.kana}
                        </span>
                        <span className="text-sm italic text-[#575049]">
                          ({ex.romaji})
                        </span>
                      </div>
                      <span className="text-[15.5px] font-medium text-[#1A1715]">
                        {ex.meaning}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* ============================================================
              RIGHT FOLIO: AREA II (Settimana + Spazio Puntinato + Calligrafia)
              Pulito, bianco/carta puntinata leggibile, senza colore su colore
             ============================================================ */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-9 relative dot-grid-paper flex flex-col min-w-0">
            <div
              aria-hidden="true"
              className="hidden lg:block pointer-events-none absolute inset-y-0 left-0 w-8 book-spine-shadow-right z-10"
            />

            {/* Section II Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b border-[#CFC9BE]">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#1E1A17] text-[#FAF6EE] font-editorial text-sm font-bold">
                  II
                </span>
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#1A1715]">
                  Spazio Puntinato & Settimana
                </span>
              </div>
              <span className="font-mono-num text-xs sm:text-sm text-[#575049]">
                Bullet Journal
              </span>
            </div>

            {/* Sub-panel A: Clean White Weekday Checkboxes & Year Calculator */}
            <div className="bg-white border border-[#CFC9BE] p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5">
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.1em] text-[#1A1715]">
                  Giorno della Settimana
                </span>

                <form
                  onSubmit={handleApplyYearWeekday}
                  className="no-print flex items-center gap-2 text-sm"
                >
                  <label htmlFor="perpetual-year" className="text-[#575049]">
                    Anno:
                  </label>
                  <input
                    id="perpetual-year"
                    type="number"
                    min={1900}
                    max={2200}
                    value={helperYear}
                    onChange={(e) => {
                      setHelperYear(e.target.value);
                      setYearFeedback(null);
                    }}
                    className="w-20 px-2.5 py-1 font-mono-num text-sm bg-white border border-[#BDB5A7] text-[#1A1715] focus:outline-none focus:border-[#1E1A17]"
                  />
                  <button
                    type="submit"
                    title="Calcola e seleziona automaticamente il giorno della settimana per l'anno scelto"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1E1A17] hover:bg-[#B93828] text-white text-sm font-medium transition-colors cursor-pointer shrink-0"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Calcola</span>
                  </button>
                </form>
              </div>

              {/* Spacious, readable wrapping weekday checkboxes */}
              <div
                role="group"
                aria-label="Caselle giorno della settimana"
                className="flex flex-wrap gap-2"
              >
                {WEEKDAYS_PERPETUAL.map((wd) => {
                  const isChecked = dayState.weekday === wd.index;
                  const short3 = wd.fullIt.slice(0, 3);
                  return (
                    <button
                      key={wd.index}
                      type="button"
                      aria-pressed={isChecked}
                      title={`${wd.fullIt} (${wd.kanji} · ${wd.romaji})`}
                      onClick={() => {
                        setYearFeedback(null);
                        onToggleWeekday(wd.index);
                      }}
                      className={`flex-1 min-w-[74px] py-2 px-2.5 flex items-center justify-center gap-1.5 border text-sm transition-colors cursor-pointer ${
                        isChecked
                          ? 'bg-[#B93828] border-[#B93828] text-white font-semibold'
                          : 'bg-white border-[#CFC9BE] text-[#1A1715] hover:border-[#1E1A17]'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`w-4 h-4 shrink-0 border flex items-center justify-center text-[11px] font-bold leading-none ${
                          isChecked
                            ? 'border-white bg-white text-[#B93828]'
                            : 'border-[#8A8277] bg-white'
                        }`}
                      >
                        {isChecked ? '✓' : ''}
                      </span>
                      <span className="font-medium">{short3}</span>
                      <span
                        lang="ja"
                        className={`font-jp text-sm ${
                          isChecked ? 'text-white/95' : 'text-[#575049]'
                        }`}
                      >
                        {wd.kanji}
                      </span>
                    </button>
                  );
                })}
              </div>

              {yearFeedback && (
                <p
                  className={`mt-3 text-sm font-medium ${
                    yearFeedback.type === 'error'
                      ? 'text-[#B93828]'
                      : 'text-[#1E1A17]'
                  }`}
                >
                  {yearFeedback.text}
                </p>
              )}
            </div>

            {/* Sub-panel B: Clean Architectural Underline Mode Tabs */}
            <div className="no-print flex items-center gap-6 mt-5 border-b border-[#CFC9BE]">
              <button
                type="button"
                onClick={() => setRightMode('journal')}
                className={`pb-2.5 inline-flex items-center gap-2 text-sm sm:text-base font-semibold border-b-2 -mb-[1px] transition-colors cursor-pointer ${
                  rightMode === 'journal'
                    ? 'border-[#B93828] text-[#1A1715]'
                    : 'border-transparent text-[#6B645C] hover:text-[#1A1715]'
                }`}
              >
                <ListTodo className="w-4 h-4" />
                <span>Appunti e Liste</span>
              </button>

              <button
                type="button"
                onClick={() => setRightMode('calligraphy')}
                className={`pb-2.5 inline-flex items-center gap-2 text-sm sm:text-base font-semibold border-b-2 -mb-[1px] transition-colors cursor-pointer ${
                  rightMode === 'calligraphy'
                    ? 'border-[#B93828] text-[#1A1715]'
                    : 'border-transparent text-[#6B645C] hover:text-[#1A1715]'
                }`}
              >
                <PenTool className="w-4 h-4" />
                <span>
                  Calligrafia{dayState.calligraphyDataUrl ? ' · Salvata' : ''}
                </span>
              </button>
            </div>

            {/* Right Folio Workspace */}
            <div className="flex-1 flex flex-col pt-5 min-w-0">
              {rightMode === 'journal' ? (
                <div className="flex-1 flex flex-col gap-5 min-w-0">
                  {/* Bullet Journal Quick Add — crisp white, zero overflow */}
                  <form
                    onSubmit={handleBulletSubmit}
                    className="no-print bg-white border border-[#CFC9BE] p-3.5 sm:p-4 space-y-3 overflow-hidden"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      {(Object.keys(BULLET_KIND_META) as BulletKind[]).map(
                        (kind) => (
                          <button
                            key={kind}
                            type="button"
                            onClick={() => setBulletKind(kind)}
                            className={`px-3 py-1 text-sm font-medium border transition-colors cursor-pointer ${
                              bulletKind === kind
                                ? 'bg-[#1E1A17] border-[#1E1A17] text-white'
                                : 'bg-white border-[#CFC9BE] text-[#3F3A34] hover:border-[#1E1A17]'
                            }`}
                          >
                            <span className="mr-1.5 font-mono-num">
                              {BULLET_KIND_META[kind].symbol}
                            </span>
                            {BULLET_KIND_META[kind].label}
                          </button>
                        )
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 w-full">
                      <input
                        type="text"
                        value={bulletInput}
                        onChange={(e) => setBulletInput(e.target.value)}
                        placeholder="Aggiungi appuntamento, impegno o nota..."
                        className="min-w-0 flex-1 w-full px-3 py-2 text-base bg-white border border-[#BDB5A7] text-[#1A1715] placeholder:text-[#7A7064] focus:outline-none focus:border-[#1E1A17]"
                      />
                      <button
                        type="submit"
                        disabled={!bulletInput.trim()}
                        className="shrink-0 whitespace-nowrap px-4 py-2 bg-[#1E1A17] text-white text-sm font-semibold inline-flex items-center justify-center gap-1.5 hover:bg-[#B93828] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Aggiungi</span>
                      </button>
                    </div>
                  </form>

                  {/* Bullet Items List */}
                  {dayState.bullets.length > 0 && (
                    <ul className="space-y-1.5 bg-white/90 border border-[#CFC9BE] p-3.5">
                      {dayState.bullets.map((item) => {
                        const glyph = renderBulletGlyph(item.kind, item.status);
                        const isDone = item.status === 'done';
                        const isMigrated = item.status === 'migrated';
                        return (
                          <li
                            key={item.id}
                            className="group flex items-start gap-3 py-1.5 px-2 hover:bg-[#F5F2EB] transition-colors"
                          >
                            <button
                              type="button"
                              onClick={() => onCycleBullet(item.id)}
                              title="Cambia stato (Aperto → Completato → Rimandato)"
                              className={`w-6 h-6 mt-0.5 shrink-0 flex items-center justify-center font-mono-num text-base font-bold border bg-white cursor-pointer transition-colors ${
                                isDone
                                  ? 'text-[#B93828] border-[#B93828]'
                                  : isMigrated
                                  ? 'text-[#6B645C] border-[#B8AA92]'
                                  : 'text-[#1A1715] border-[#9E927E] hover:border-[#1E1A17]'
                              }`}
                            >
                              {glyph}
                            </button>
                            <span
                              className={`flex-1 min-w-0 break-words text-base leading-snug pt-0.5 ${
                                isDone
                                  ? 'line-through text-[#7A7064]'
                                  : isMigrated
                                  ? 'italic text-[#575049]'
                                  : 'text-[#1A1715]'
                              }`}
                            >
                              {item.text}
                            </span>
                            <button
                              type="button"
                              onClick={() => onRemoveBullet(item.id)}
                              aria-label="Rimuovi voce"
                              className="no-print opacity-70 sm:opacity-0 sm:group-hover:opacity-100 p-1 text-[#575049] hover:text-[#B93828] transition-opacity cursor-pointer shrink-0"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  {/* Freeform Dot-Grid Journal Notes */}
                  <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="freeform-notes"
                        className="text-xs sm:text-[13px] uppercase tracking-[0.12em] font-bold text-[#1A1715]"
                      >
                        Diario, Pensieri e Liste
                      </label>
                      <span className="font-mono-num text-xs text-[#575049]">
                        Salvataggio automatico
                      </span>
                    </div>
                    <textarea
                      id="freeform-notes"
                      value={dayState.notes}
                      onChange={(e) => onSetNotes(e.target.value)}
                      placeholder="Scrivi liberamente sullo spazio puntinato: appuntamenti della giornata, pensieri, liste o appunti sul kanji..."
                      rows={11}
                      className="w-full flex-1 min-h-[264px] resize-y bg-white/55 border border-[#CFC9BE] focus:border-[#1E1A17] focus:bg-white/80 p-3.5 text-base leading-[24px] text-[#1A1715] placeholder:text-[#7A7064] focus:outline-none transition-colors"
                    />
                  </div>

                  {dayState.calligraphyDataUrl && (
                    <div className="p-3 bg-white border border-[#CFC9BE] flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={dayState.calligraphyDataUrl}
                          alt={`Calligrafia salvata per ${entry.kanji}`}
                          className="w-14 h-14 object-contain border border-[#CFC9BE] bg-white"
                        />
                        <span className="text-sm font-medium text-[#292524]">
                          Esercizio di calligrafia salvato per oggi
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setRightMode('calligraphy')}
                        className="no-print text-sm font-semibold text-[#B93828] hover:underline cursor-pointer shrink-0"
                      >
                        Apri Pennello
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <CalligraphyPad
                  entryId={entry.id}
                  kanji={entry.kanji}
                  initialDataUrl={dayState.calligraphyDataUrl}
                  onSave={onSetCalligraphy}
                />
              )}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
