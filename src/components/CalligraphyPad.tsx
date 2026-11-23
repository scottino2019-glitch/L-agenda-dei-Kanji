import { useEffect, useRef, useState, useCallback } from 'react';
import { Undo2, Trash2, Eye, EyeOff, Grid } from 'lucide-react';

interface CalligraphyPadProps {
  entryId: string;
  kanji: string;
  initialDataUrl: string | null;
  onSave: (dataUrl: string | null) => void;
}

type InkColor = '#1A1715' | '#B93828';
type BrushWidth = 4 | 9 | 16;

export function CalligraphyPad({
  entryId,
  kanji,
  initialDataUrl,
  onSave,
}: CalligraphyPadProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const historyRef = useRef<(string | null)[]>([initialDataUrl]);

  const [inkColor, setInkColor] = useState<InkColor>('#1A1715');
  const [brushWidth, setBrushWidth] = useState<BrushWidth>(9);
  const [showStencil, setShowStencil] = useState<boolean>(true);
  const [showCrosshair, setShowCrosshair] = useState<boolean>(true);
  const [canUndo, setCanUndo] = useState<boolean>(false);
  const [hasInk, setHasInk] = useState<boolean>(Boolean(initialDataUrl));

  const drawDataUrlToCanvas = useCallback((dataUrl: string | null) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    if (!dataUrl) {
      ctx.restore();
      return;
    }

    const img = new Image();
    img.onload = () => {
      const currentCanvas = canvasRef.current;
      if (!currentCanvas) return;
      const currentCtx = currentCanvas.getContext('2d');
      if (!currentCtx) return;
      const curDpr = window.devicePixelRatio || 1;
      const w = currentCanvas.width / curDpr;
      const h = currentCanvas.height / curDpr;
      currentCtx.save();
      currentCtx.setTransform(curDpr, 0, 0, curDpr, 0, 0);
      currentCtx.clearRect(0, 0, w, h);
      currentCtx.drawImage(img, 0, 0, w, h);
      currentCtx.restore();
    };
    img.src = dataUrl;
    ctx.restore();
  }, []);

  useEffect(() => {
    historyRef.current = [initialDataUrl];
    setCanUndo(false);
    setHasInk(Boolean(initialDataUrl));
    drawDataUrlToCanvas(initialDataUrl);
  }, [entryId, initialDataUrl, drawDataUrlToCanvas]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const syncSize = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const dpr = window.devicePixelRatio || 1;
      const targetW = Math.round(rect.width * dpr);
      const targetH = Math.round(rect.height * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        const latestSnapshot =
          historyRef.current[historyRef.current.length - 1] ?? initialDataUrl;
        canvas.width = targetW;
        canvas.height = targetH;
        drawDataUrlToCanvas(latestSnapshot);
      }
    };

    syncSize();
    const observer = new ResizeObserver(syncSize);
    observer.observe(container);
    return () => observer.disconnect();
  }, [drawDataUrlToCanvas, initialDataUrl]);

  const getPoint = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(e.pointerId);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const pt = getPoint(e);

    isDrawingRef.current = true;
    lastPointRef.current = pt;

    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = inkColor;
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, brushWidth / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pt = getPoint(e);
    const prev = lastPointRef.current ?? pt;
    const dpr = window.devicePixelRatio || 1;

    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.strokeStyle = inkColor;
    ctx.lineWidth = brushWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(prev.x, prev.y);
    ctx.lineTo(pt.x, pt.y);
    ctx.stroke();
    ctx.restore();

    lastPointRef.current = pt;
  };

  const commitStroke = () => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    lastPointRef.current = null;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const snapshot = canvas.toDataURL('image/png');
    historyRef.current = [...historyRef.current.slice(-24), snapshot];
    setCanUndo(historyRef.current.length > 1);
    setHasInk(true);
    onSave(snapshot);
  };

  const handleUndo = () => {
    if (historyRef.current.length <= 1) return;
    const nextHistory = historyRef.current.slice(0, -1);
    historyRef.current = nextHistory;
    const prevSnapshot = nextHistory[nextHistory.length - 1] ?? null;
    setCanUndo(nextHistory.length > 1);
    setHasInk(Boolean(prevSnapshot));
    drawDataUrlToCanvas(prevSnapshot);
    onSave(prevSnapshot);
  };

  const handleClear = () => {
    historyRef.current = [null];
    setCanUndo(false);
    setHasInk(false);
    drawDataUrlToCanvas(null);
    onSave(null);
  };

  return (
    <div className="flex flex-col gap-3.5">
      {/* Calligraphy Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 p-3 bg-white border border-[#CFC9BE] text-sm">
        <div className="flex flex-wrap items-center gap-3">
          {/* Brush size */}
          <div className="flex items-center gap-1.5" role="group" aria-label="Spessore tratto">
            <span className="text-[#575049] font-medium mr-0.5">Tratto:</span>
            {(
              [
                { value: 4, label: 'Sottile' },
                { value: 9, label: 'Medio' },
                { value: 16, label: 'Pennello' },
              ] as const
            ).map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setBrushWidth(opt.value)}
                className={`px-2.5 py-1 text-xs sm:text-sm font-medium border transition-colors cursor-pointer ${
                  brushWidth === opt.value
                    ? 'bg-[#1E1A17] border-[#1E1A17] text-white'
                    : 'bg-white border-[#CFC9BE] text-[#3F3A34] hover:border-[#1E1A17]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Ink color */}
          <div className="flex items-center gap-1.5" role="group" aria-label="Inchiostro">
            <button
              type="button"
              onClick={() => setInkColor('#1A1715')}
              title="Inchiostro Sumi"
              className={`px-2.5 py-1 text-xs sm:text-sm font-medium border flex items-center gap-1.5 cursor-pointer transition-colors ${
                inkColor === '#1A1715'
                  ? 'bg-[#1E1A17] border-[#1E1A17] text-white'
                  : 'bg-white border-[#CFC9BE] text-[#3F3A34] hover:border-[#1E1A17]'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-current" />
              Sumi
            </button>
            <button
              type="button"
              onClick={() => setInkColor('#B93828')}
              title="Inchiostro Vermiglio"
              className={`px-2.5 py-1 text-xs sm:text-sm font-medium border flex items-center gap-1.5 cursor-pointer transition-colors ${
                inkColor === '#B93828'
                  ? 'bg-[#B93828] border-[#B93828] text-white'
                  : 'bg-white border-[#CFC9BE] text-[#3F3A34] hover:border-[#B93828]'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#B93828]" />
              Vermiglio
            </button>
          </div>
        </div>

        {/* Guides & Actions */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setShowCrosshair((v) => !v)}
            className={`px-2.5 py-1 text-xs sm:text-sm font-medium border flex items-center gap-1.5 cursor-pointer transition-colors ${
              showCrosshair
                ? 'bg-[#1E1A17] border-[#1E1A17] text-white'
                : 'bg-white border-[#CFC9BE] text-[#3F3A34] hover:border-[#1E1A17]'
            }`}
            title="Mostra o nascondi crocevia Jūji-masu"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Masu</span>
          </button>

          <button
            type="button"
            onClick={() => setShowStencil((v) => !v)}
            className={`px-2.5 py-1 text-xs sm:text-sm font-medium border flex items-center gap-1.5 cursor-pointer transition-colors ${
              showStencil
                ? 'bg-[#1E1A17] border-[#1E1A17] text-white'
                : 'bg-white border-[#CFC9BE] text-[#3F3A34] hover:border-[#1E1A17]'
            }`}
            title="Mostra o nascondi guida del kanji"
          >
            {showStencil ? (
              <Eye className="w-3.5 h-3.5" />
            ) : (
              <EyeOff className="w-3.5 h-3.5" />
            )}
            <span>Guida</span>
          </button>

          <button
            type="button"
            onClick={handleUndo}
            disabled={!canUndo}
            className="px-2.5 py-1 text-xs sm:text-sm font-medium border border-[#CFC9BE] bg-white text-[#3F3A34] hover:border-[#1E1A17] flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            title="Annulla ultimo tratto"
          >
            <Undo2 className="w-3.5 h-3.5" />
            <span>Annulla</span>
          </button>

          <button
            type="button"
            onClick={handleClear}
            disabled={!hasInk}
            className="px-2.5 py-1 text-xs sm:text-sm font-medium border border-[#D4A59E] bg-white text-[#B93828] hover:bg-[#B93828] hover:text-white flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            title="Pulisci foglio di calligrafia"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Pulisci</span>
          </button>
        </div>
      </div>

      {/* Drawing Square */}
      <div
        ref={containerRef}
        className="relative w-full aspect-square max-h-[410px] mx-auto border-2 border-[#B8AA92] bg-white select-none overflow-hidden shadow-inner"
      >
        {showCrosshair && (
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <line
              x1="50"
              y1="0"
              x2="50"
              y2="100"
              stroke="#B8AA92"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            <line
              x1="0"
              y1="50"
              x2="100"
              y2="50"
              stroke="#B8AA92"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="100"
              stroke="#D2C7B4"
              strokeWidth="0.4"
              strokeDasharray="1.5 2.5"
            />
            <line
              x1="100"
              y1="0"
              x2="0"
              y2="100"
              stroke="#D2C7B4"
              strokeWidth="0.4"
              strokeDasharray="1.5 2.5"
            />
          </svg>
        )}

        {showStencil && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <span className="font-jp text-[200px] sm:text-[230px] leading-none text-[#1A1715]/[0.1] select-none">
              {kanji}
            </span>
          </div>
        )}

        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={commitStroke}
          onPointerCancel={commitStroke}
          className="relative z-10 w-full h-full touch-none cursor-crosshair block"
        />
      </div>

      <p className="text-sm text-[#4F4840] leading-relaxed">
        Esercitati tracciando{' '}
        <span lang="ja" className="font-jp font-semibold text-[#1A1715]">
          {kanji}
        </span>{' '}
        con mouse, stilo o dito: i tratti vengono salvati automaticamente nella pagina di oggi.
      </p>
    </div>
  );
}
