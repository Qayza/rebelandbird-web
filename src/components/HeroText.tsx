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
      {LINES.map((line, i) => {
        const typed = displayed[i];
        const remaining = line.slice(typed.length);
        const showCursor =
          (i === activeLine && !done) || (done && i === LINES.length - 1);

        return (
          <span key={i} className="block">
            {typed}
            {showCursor && <span className="cursor" />}
            {/* Invisible remainder keeps the line width stable */}
            <span className="invisible">{remaining}</span>
          </span>
        );
      })}
    </h1>
  );
}
