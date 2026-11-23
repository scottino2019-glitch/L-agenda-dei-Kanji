import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export function OfflineIndicator() {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="no-print fixed bottom-4 left-4 z-50 flex items-center gap-2 border border-[#B93828] bg-[#1E1A17] text-[#FAF6EE] px-3.5 py-2 text-xs font-medium shadow-lg"
    >
      <WifiOff className="w-3.5 h-3.5 text-[#EA7666] shrink-0" aria-hidden="true" />
      <span>Modalità offline — Tutte le 366 pagine e i tuoi appunti sono disponibili.</span>
    </div>
  );
}
