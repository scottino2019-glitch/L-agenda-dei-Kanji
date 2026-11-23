/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useState } from 'react';
import type { AppView } from './types/agenda';
import {
  ENTRY_BY_ID,
  getAdjacentEntryId,
  getTodayEntryId,
} from './data/agendaData';
import { useJournalStorage } from './hooks/useJournalStorage';
import { TopBar } from './components/TopBar';
import { DailySpread } from './components/DailySpread';
import { CalendarView } from './components/CalendarView';
import { KanjiIndexView } from './components/KanjiIndexView';
import { JournalArchiveView } from './components/JournalArchiveView';
import { OfflineIndicator } from './components/OfflineIndicator';

export default function App() {
  const [currentDayId, setCurrentDayId] = useState<string>(() => getTodayEntryId());
  const [activeView, setActiveView] = useState<AppView>('spread');

  const {
    store,
    getDayState,
    toggleWeekday,
    setWeekday,
    setNotes,
    addBullet,
    cycleBulletStatus,
    removeBullet,
    setCalligraphy,
    toggleBookmark,
    hasSavedContent,
    clearAll,
  } = useJournalStorage();

  const currentEntry = ENTRY_BY_ID[currentDayId] ?? ENTRY_BY_ID['01-01'];
  const currentDayState = getDayState(currentEntry.id);

  const savedCount = useMemo(() => {
    return Object.keys(store).filter((id) => hasSavedContent(id)).length;
  }, [store, hasSavedContent]);

  const handleGoToToday = () => {
    setCurrentDayId(getTodayEntryId());
    setActiveView('spread');
  };

  const handleSelectDay = (entryId: string) => {
    if (ENTRY_BY_ID[entryId]) {
      setCurrentDayId(entryId);
      setActiveView('spread');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateDelta = (delta: number) => {
    setCurrentDayId((prev) => getAdjacentEntryId(prev, delta));
  };

  // Keyboard arrow navigation between days when viewing the spread
  useEffect(() => {
    if (activeView !== 'spread') return;

    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentDayId((prev) => getAdjacentEntryId(prev, -1));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentDayId((prev) => getAdjacentEntryId(prev, 1));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeView]);

  return (
    <div className="min-h-screen flex flex-col bg-[#E3DACB] text-[#1A1715]">
      <TopBar
        activeView={activeView}
        onSelectView={setActiveView}
        onGoToToday={handleGoToToday}
        savedCount={savedCount}
      />

      <main className="flex-1">
        {activeView === 'spread' && (
          <DailySpread
            entry={currentEntry}
            dayState={currentDayState}
            onNavigateDelta={handleNavigateDelta}
            onToggleWeekday={(weekdayIdx) =>
              toggleWeekday(currentEntry.id, weekdayIdx)
            }
            onSetWeekday={(weekdayIdx) =>
              setWeekday(currentEntry.id, weekdayIdx)
            }
            onSetNotes={(notes) => setNotes(currentEntry.id, notes)}
            onAddBullet={(text, kind) => addBullet(currentEntry.id, text, kind)}
            onCycleBullet={(bulletId) =>
              cycleBulletStatus(currentEntry.id, bulletId)
            }
            onRemoveBullet={(bulletId) =>
              removeBullet(currentEntry.id, bulletId)
            }
            onSetCalligraphy={(dataUrl) =>
              setCalligraphy(currentEntry.id, dataUrl)
            }
            onToggleBookmark={() => toggleBookmark(currentEntry.id)}
          />
        )}

        {activeView === 'calendar' && (
          <CalendarView
            currentDayId={currentEntry.id}
            hasSavedContent={hasSavedContent}
            onSelectDay={handleSelectDay}
          />
        )}

        {activeView === 'kanji' && (
          <KanjiIndexView
            hasSavedContent={hasSavedContent}
            onSelectDay={handleSelectDay}
          />
        )}

        {activeView === 'notes' && (
          <JournalArchiveView
            store={store}
            onSelectDay={handleSelectDay}
            onGoToCalendar={() => setActiveView('calendar')}
            onClearAll={clearAll}
          />
        )}
      </main>

      <footer className="no-print border-t border-[#C9BC9E] bg-[#DAD0BE] py-5 px-4 sm:px-6 lg:px-8 text-center text-sm text-[#4F4840]">
        L’Agenda dei Kanji · 366 Pagine Perpetue (incluso 29 Febbraio) · I tuoi appunti e disegni sono salvati localmente nel browser.
      </footer>

      <OfflineIndicator />
    </div>
  );
}
