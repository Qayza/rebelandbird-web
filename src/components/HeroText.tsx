"use client";

import { useState, useEffect } from "react";

const LINES = ["Vi designar", "upplevelser", "som spelar", "roll"];
const CHAR_DELAY = 55;  // ms per character
const LINE_PAUSE = 180; // ms pause before starting next line

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

    // Line finished — pause then move to next
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
      {LINES.map((_, i) => (
        <span key={i} className="block">
          {displayed[i]}
          {/* Show cursor on active line while typing, and on last line when done */}
          {(i === activeLine && !done) || (done && i === LINES.length - 1) ? (
            <span className="cursor" />
          ) : null}
        </span>
      ))}
    </h1>
  );
}
