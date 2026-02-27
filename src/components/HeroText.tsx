"use client";

import { useState, useEffect } from "react";

const LINES = ["Vi designar", "upplevelser", "som spelar", "roll"];
const CHAR_DELAY = 28;
const LINE_PAUSE = 100;

export default function HeroText({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const [displayed, setDisplayed] = useState(LINES.map(() => ""));
  const [activeLine, setActiveLine] = useState(0);
  const [activeChar, setActiveChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    const line = LINES[activeLine];
    if (!line) { setDone(true); return; }

    if (activeChar < line.length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[activeLine] = line.slice(0, activeChar + 1);
          return next;
        });
        setActiveChar((c) => c + 1);
      }, CHAR_DELAY);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      if (activeLine < LINES.length - 1) {
        setActiveLine((l) => l + 1);
        setActiveChar(0);
      } else {
        setDone(true);
      }
    }, LINE_PAUSE);
    return () => clearTimeout(t);
  }, [activeLine, activeChar, done]);

  return (
    <h1 className={className} style={style}>
      {LINES.map((line, i) => (
        <span key={i} className="block relative">
          {/* Full line rendered invisibly to reserve the exact space */}
          <span className="invisible">{line}</span>

          {/* Typed characters overlaid on top */}
          <span className="absolute left-0 top-0">
            {displayed[i]}
            {(i === activeLine && !done) || (done && i === LINES.length - 1) ? (
              <span className="cursor" />
            ) : null}
          </span>
        </span>
      ))}
    </h1>
  );
}
