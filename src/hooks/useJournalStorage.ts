import { useState, useEffect, useCallback } from 'react';
import type { JournalEntryState, BulletItem, BulletKind } from '../types/agenda';

const STORAGE_KEY = 'agenda_kanji_journal_v1';

const EMPTY_ENTRY: JournalEntryState = {
  weekday: null,
  notes: '',
  bullets: [],
  calligraphyDataUrl: null,
  bookmarked: false,
};

export type JournalStore = Record<string, JournalEntryState>;

function readStorage(): JournalStore {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return parsed as JournalStore;
    }
  } catch {
    // Ignore malformed localStorage
  }
  return {};
}

export function useJournalStorage() {
  const [store, setStore] = useState<JournalStore>(() => readStorage());

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch {
      // Ignore storage quota errors gracefully
    }
  }, [store]);

  const getDayState = useCallback(
    (entryId: string): JournalEntryState => {
      return store[entryId] ?? EMPTY_ENTRY;
    },
    [store]
  );

  const updateDayState = useCallback(
    (entryId: string, updater: (prev: JournalEntryState) => JournalEntryState) => {
      setStore((prevStore) => {
        const current = prevStore[entryId] ?? EMPTY_ENTRY;
        const next = updater(current);
        const isEmpty =
          next.weekday === null &&
          next.notes.trim() === '' &&
          next.bullets.length === 0 &&
          !next.calligraphyDataUrl &&
          !next.bookmarked;

        if (isEmpty) {
          const copy = { ...prevStore };
          delete copy[entryId];
          return copy;
        }

        return {
          ...prevStore,
          [entryId]: {
            ...next,
            updatedAt: new Date().toISOString(),
          },
        };
      });
    },
    []
  );

  const toggleWeekday = useCallback(
    (entryId: string, weekdayIdx: number) => {
      updateDayState(entryId, (prev) => ({
        ...prev,
        weekday: prev.weekday === weekdayIdx ? null : weekdayIdx,
      }));
    },
    [updateDayState]
  );

  const setWeekday = useCallback(
    (entryId: string, weekdayIdx: number) => {
      updateDayState(entryId, (prev) => ({
        ...prev,
        weekday: weekdayIdx,
      }));
    },
    [updateDayState]
  );

  const setNotes = useCallback(
    (entryId: string, notes: string) => {
      updateDayState(entryId, (prev) => ({ ...prev, notes }));
    },
    [updateDayState]
  );

  const addBullet = useCallback(
    (entryId: string, text: string, kind: BulletKind) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      const newItem: BulletItem = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        text: trimmed,
        kind,
        status: 'open',
      };
      updateDayState(entryId, (prev) => ({
        ...prev,
        bullets: [...prev.bullets, newItem],
      }));
    },
    [updateDayState]
  );

  const cycleBulletStatus = useCallback(
    (entryId: string, bulletId: string) => {
      updateDayState(entryId, (prev) => ({
        ...prev,
        bullets: prev.bullets.map((b) => {
          if (b.id !== bulletId) return b;
          const order: BulletItem['status'][] = ['open', 'done', 'migrated'];
          const nextStatus = order[(order.indexOf(b.status) + 1) % order.length];
          return { ...b, status: nextStatus };
        }),
      }));
    },
    [updateDayState]
  );

  const removeBullet = useCallback(
    (entryId: string, bulletId: string) => {
      updateDayState(entryId, (prev) => ({
        ...prev,
        bullets: prev.bullets.filter((b) => b.id !== bulletId),
      }));
    },
    [updateDayState]
  );

  const setCalligraphy = useCallback(
    (entryId: string, dataUrl: string | null) => {
      updateDayState(entryId, (prev) => ({
        ...prev,
        calligraphyDataUrl: dataUrl,
      }));
    },
    [updateDayState]
  );

  const toggleBookmark = useCallback(
    (entryId: string) => {
      updateDayState(entryId, (prev) => ({
        ...prev,
        bookmarked: !prev.bookmarked,
      }));
    },
    [updateDayState]
  );

  const hasSavedContent = useCallback(
    (entryId: string): boolean => {
      const item = store[entryId];
      if (!item) return false;
      return Boolean(
        item.weekday !== null ||
          item.notes.trim() ||
          item.bullets.length > 0 ||
          item.calligraphyDataUrl ||
          item.bookmarked
      );
    },
    [store]
  );

  const clearAll = useCallback(() => {
    setStore({});
  }, []);

  return {
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
  };
}
