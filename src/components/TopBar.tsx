import type { AppView } from '../types/agenda';
import { PWAInstallButton } from './PWAInstallButton';

interface TopBarProps {
  activeView: AppView;
  onSelectView: (view: AppView) => void;
  onGoToToday: () => void;
  savedCount: number;
}

const NAV_ITEMS: { id: AppView; label: string }[] = [
  { id: 'spread', label: 'Pagina del Giorno' },
  { id: 'calendar', label: 'Calendario 366' },
  { id: 'kanji', label: 'Indice Kanji' },
  { id: 'notes', label: 'I Miei Appunti' },
];

export function TopBar({
  activeView,
  onSelectView,
  onGoToToday,
  savedCount,
}: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 bg-[#1E1A17] text-[#FAF6EE] border-b-2 border-[#B93828] shadow-md">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[70px] flex items-center justify-between gap-4">
        {/* Zone 1: Brand Title */}
        <button
          type="button"
          onClick={() => onSelectView('spread')}
          className="font-editorial text-2xl sm:text-[28px] font-semibold tracking-tight text-[#FAF6EE] whitespace-nowrap shrink-0 hover:text-[#E59B8F] transition-colors cursor-pointer"
        >
          L’Agenda dei Kanji
        </button>

        {/* Zone 2: Desktop Single-line Navigation */}
        <nav
          aria-label="Navigazione principale"
          className="hidden md:flex items-center gap-7 lg:gap-9"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectView(item.id)}
                className={`relative py-2 text-[15px] font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#FAF6EE]'
                    : 'text-[#BDB3A5] hover:text-[#FAF6EE]'
                }`}
              >
                <span>
                  {item.label}
                  {item.id === 'notes' && savedCount > 0 && (
                    <span className="ml-1.5 font-mono-num text-sm text-[#EA7666]">
                      ({savedCount})
                    </span>
                  )}
                </span>
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[3px] bg-[#D94A38]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions & Primary CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          <PWAInstallButton />
          <button
            type="button"
            onClick={onGoToToday}
            className="px-4 py-2 text-sm font-semibold bg-[#B93828] text-[#FAF6EE] hover:bg-[#D14432] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Vai a Oggi
          </button>
        </div>
      </div>

      {/* Compact Mobile Navigation Strip */}
      <nav
        aria-label="Navigazione mobile"
        className="md:hidden border-t border-[#342D28] bg-[#26211D] px-4 flex items-center gap-6 overflow-x-auto no-scrollbar"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectView(item.id)}
              className={`relative py-2.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                isActive ? 'text-[#FAF6EE]' : 'text-[#BDB3A5]'
              }`}
            >
              <span>
                {item.label}
                {item.id === 'notes' && savedCount > 0 && (
                  <span className="ml-1 font-mono-num text-xs text-[#EA7666]">
                    ({savedCount})
                  </span>
                )}
              </span>
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[2px] bg-[#D94A38]"
                />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
