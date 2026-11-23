import { useMemo, useState } from 'react';
import { Bookmark, Download, Trash2 } from 'lucide-react';
import type { JournalStore } from '../hooks/useJournalStorage';
import {
  ENTRY_BY_ID,
  MONTHS_IT,
  WEEKDAYS_PERPETUAL,
} from '../data/agendaData';

interface JournalArchiveViewProps {
  store: JournalStore;
  onSelectDay: (entryId: string) => void;
  onGoToCalendar: () => void;
  onClearAll: () => void;
}

export function JournalArchiveView({
  store,
  onSelectDay,
  onGoToCalendar,
  onClearAll,
}: JournalArchiveViewProps) {
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  const savedEntries = useMemo(() => {
    return Object.entries(store)
      .filter(([id, state]) => {
        if (!ENTRY_BY_ID[id]) return false;
        if (onlyBookmarks && !state.bookmarked) return false;
        return Boolean(
          state.bookmarked ||
            state.weekday !== null ||
            state.notes.trim() ||
            state.bullets.length > 0 ||
            state.calligraphyDataUrl
        );
      })
      .sort(([aId], [bId]) => aId.localeCompare(bId));
  }, [store, onlyBookmarks]);

  const handleExportJson = () => {
    const payload = JSON.stringify(
      {
        app: "L'Agenda dei Kanji",
        exportedAt: new Date().toISOString(),
        entries: store,
      },
      null,
      2
    );
    const blob = new Blob([payload], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'agenda-dei-kanji-appunti.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="bg-[#FCF9F2] border border-[#B8AA92] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[#575049] font-bold">
            Archivio Personale Locale
          </p>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A1715] mt-1">
            I Miei Appunti e Segnalibri
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <button
            type="button"
            onClick={() => setOnlyBookmarks((v) => !v)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 border font-medium transition-colors cursor-pointer ${
              onlyBookmarks
                ? 'bg-[#B93828] border-[#B93828] text-[#FAF6EE]'
                : 'bg-[#FFFDF8] border-[#B8AA92] text-[#1A1715] hover:border-[#1E1A17]'
            }`}
          >
            <Bookmark
              className="w-4 h-4"
              fill={onlyBookmarks ? 'currentColor' : 'none'}
            />
            <span>Solo Segnalibri</span>
          </button>

          {Object.keys(store).length > 0 && (
            <>
              <button
                type="button"
                onClick={handleExportJson}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FFFDF8] border border-[#B8AA92] text-[#1A1715] font-medium hover:border-[#1E1A17] transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Esporta JSON</span>
              </button>

              {!confirmClear ? (
                <button
                  type="button"
                  onClick={() => setConfirmClear(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FFFDF8] border border-[#D4A59E] text-[#B93828] font-medium hover:border-[#B93828] transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Svuota Archivio</span>
                </button>
              ) : (
                <div className="flex items-center gap-2.5 px-3.5 py-1.5 bg-[#FFFDF8] border-2 border-[#B93828]">
                  <span className="text-sm font-medium text-[#1A1715]">
                    Confermi?
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      onClearAll();
                      setConfirmClear(false);
                    }}
                    className="text-sm font-bold text-[#B93828] hover:underline cursor-pointer"
                  >
                    Elimina tutto
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmClear(false)}
                    className="text-sm text-[#575049] hover:text-[#1A1715] cursor-pointer"
                  >
                    Annulla
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {savedEntries.length === 0 ? (
        <div className="mt-6 bg-[#FCF9F2] border border-[#B8AA92] py-20 px-6 text-center">
          <p lang="ja" className="font-jp text-6xl text-[#B8AA92]">
            記
          </p>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1A1715] mt-4">
            {onlyBookmarks
              ? 'Nessuna pagina nei segnalibri'
              : 'Il tuo taccuino è ancora intonso'}
          </h2>
          <p className="text-base text-[#4F4840] mt-2 max-w-md mx-auto leading-relaxed">
            {onlyBookmarks
              ? 'Usa il pulsante Segnalibro in alto sulla pagina di un giorno per conservarla tra i preferiti.'
              : 'Segna il giorno della settimana, scrivi appunti sullo spazio puntinato o esercitati con la calligrafia: ogni pagina compilata apparirà qui.'}
          </p>
          <button
            type="button"
            onClick={onGoToCalendar}
            className="mt-6 px-5 py-2.5 text-sm font-semibold bg-[#1E1A17] text-[#FAF6EE] hover:bg-[#B93828] transition-colors cursor-pointer"
          >
            Esplora il Calendario 366
          </button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {savedEntries.map(([id, state]) => {
            const entry = ENTRY_BY_ID[id];
            const monthName = MONTHS_IT[entry.month - 1];
            const weekdayMeta =
              state.weekday !== null
                ? WEEKDAYS_PERPETUAL[state.weekday]
                : null;
            const doneCount = state.bullets.filter(
              (b) => b.status === 'done'
            ).length;

            return (
              <button
                key={id}
                type="button"
                onClick={() => onSelectDay(id)}
                className="text-left bg-[#FCF9F2] border border-[#B8AA92] hover:border-[#1E1A17] hover:bg-[#FFFDF8] p-5 flex flex-col justify-between gap-4 transition-colors cursor-pointer shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono-num text-xs sm:text-sm font-semibold text-[#575049]">
                        {String(entry.day).padStart(2, '0')} {monthName}
                        {weekdayMeta && (
                          <span>
                            {' '}
                            · {weekdayMeta.fullIt} ({weekdayMeta.kanji})
                          </span>
                        )}
                      </p>
                      <h2 className="font-editorial text-2xl font-bold text-[#1A1715] mt-1">
                        {entry.titleIt}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {state.bookmarked && (
                        <Bookmark
                          className="w-4 h-4 text-[#B93828]"
                          fill="currentColor"
                        />
                      )}
                      <span lang="ja" className="font-jp text-3xl text-[#1A1715]">
                        {entry.kanji}
                      </span>
                    </div>
                  </div>

                  {state.bullets.length > 0 && (
                    <p className="mt-3 font-mono-num text-sm font-medium text-[#292524]">
                      {state.bullets.length}{' '}
                      {state.bullets.length === 1
                        ? 'voce in lista'
                        : 'voci in lista'}{' '}
                      ({doneCount} completate)
                    </p>
                  )}

                  {state.notes.trim() && (
                    <p className="mt-2 text-base text-[#4F4840] line-clamp-3 leading-relaxed">
                      {state.notes.trim()}
                    </p>
                  )}
                </div>

                {state.calligraphyDataUrl && (
                  <div className="pt-3 border-t border-[#D8CEBC] flex items-center gap-3">
                    <img
                      src={state.calligraphyDataUrl}
                      alt={`Calligrafia ${entry.kanji}`}
                      className="w-14 h-14 object-contain border border-[#B8AA92] bg-[#FFFDF8]"
                    />
                    <span className="text-sm font-medium text-[#4F4840]">
                      Studio di calligrafia salvato
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
