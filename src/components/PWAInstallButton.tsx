import { useState } from 'react';
import { Download, Share, Smartphone, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export function PWAInstallButton() {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={install}
        title="Installa L’Agenda dei Kanji sul tuo dispositivo"
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium border border-[#C9BC9E]/55 bg-[#2A241F] text-[#FAF6EE] hover:bg-[#3A312A] hover:border-[#FAF6EE]/70 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
      >
        <Download className="w-4 h-4 text-[#E59B8F]" aria-hidden="true" />
        <span className="hidden sm:inline">Installa App</span>
        <span className="sm:hidden">Installa</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          title="Aggiungi L’Agenda dei Kanji alla schermata Home"
          className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium border border-[#C9BC9E]/55 bg-[#2A241F] text-[#FAF6EE] hover:bg-[#3A312A] hover:border-[#FAF6EE]/70 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <Smartphone className="w-4 h-4 text-[#E59B8F]" aria-hidden="true" />
          <span className="hidden sm:inline">Installa App</span>
          <span className="sm:hidden">Installa</span>
        </button>

        {showIOSGuide && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ios-install-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setShowIOSGuide(false)}
          >
            <div
              className="w-full max-w-sm bg-[#FAF6EE] text-[#1A1715] border-2 border-[#1E1A17] shadow-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3 border-b border-[#D5C9B2] pb-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#8E2B1E] font-semibold">
                    App su iPhone / iPad
                  </p>
                  <h3
                    id="ios-install-title"
                    className="font-editorial text-2xl font-semibold text-[#1A1715] mt-0.5"
                  >
                    Installa l’Agenda
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowIOSGuide(false)}
                  aria-label="Chiudi istruzioni"
                  className="p-1.5 text-[#5D544A] hover:text-[#1A1715] hover:bg-[#EDE4D3] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <ol className="mt-4 space-y-3 text-sm text-[#352F29] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono-num text-xs font-semibold px-1.5 py-0.5 bg-[#1E1A17] text-[#FAF6EE] shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    Tocca l’icona{' '}
                    <strong className="inline-flex items-center gap-1 font-semibold text-[#1A1715]">
                      Condividi <Share className="w-3.5 h-3.5 inline" />
                    </strong>{' '}
                    nella barra di Safari.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono-num text-xs font-semibold px-1.5 py-0.5 bg-[#1E1A17] text-[#FAF6EE] shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    Scorri verso il basso e seleziona{' '}
                    <strong className="font-semibold text-[#1A1715]">
                      Aggiungi alla schermata Home
                    </strong>
                    .
                  </span>
                </li>
              </ol>

              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="mt-6 w-full py-2.5 text-sm font-semibold bg-[#B93828] text-[#FAF6EE] hover:bg-[#D14432] transition-colors cursor-pointer"
              >
                Ho capito
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
}
