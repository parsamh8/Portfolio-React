// src/components/CursorTrail.jsx
import { useEffect, useRef, useState } from 'react';

function CursorTrail() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [showCursor, setShowCursor] = useState(false);
  const [trails, setTrails] = useState([]);
  const cursorTimeoutRef = useRef(null);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setShowCursor(true);

      // Create a new empty square (trail)
      const newTrail = { id: Date.now(), x: e.clientX, y: e.clientY };
      setTrails((prev) => [...prev, newTrail]);
      setTimeout(() => {
        setTrails((prev) => prev.filter((trail) => trail.id !== newTrail.id));
      }, 1000);

      if (cursorTimeoutRef.current) clearTimeout(cursorTimeoutRef.current);
      cursorTimeoutRef.current = setTimeout(() => {
        setShowCursor(false);
      }, 1000);
    };

    const handleGlobalTouchMove = (e) => {
      if (e.touches[0]) {
        const { clientX, clientY } = e.touches[0];
        setCursorPos({ x: clientX, y: clientY });
        setShowCursor(true);

        const newTrail = { id: Date.now(), x: clientX, y: clientY };
        setTrails((prev) => [...prev, newTrail]);
        setTimeout(() => {
          setTrails((prev) => prev.filter((trail) => trail.id !== newTrail.id));
        }, 1000);

        if (cursorTimeoutRef.current) clearTimeout(cursorTimeoutRef.current);
        cursorTimeoutRef.current = setTimeout(() => {
          setShowCursor(false);
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('touchmove', handleGlobalTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      if (cursorTimeoutRef.current) clearTimeout(cursorTimeoutRef.current);
    };
  }, []);

  return (
    <>
      {trails.map((trail) => (
        <div
          key={trail.id}
          style={{
            position: 'fixed',
            left: trail.x - 5,
            top: trail.y - 5,
            width: '20px',
            height: '20px',
            backgroundColor: 'blue',
            border: '1px solid white',
            pointerEvents: 'none',
            zIndex: 10000,
            animation: 'fadeOut 0.1s forwards',
          }}
        />
      ))}
      {showCursor && (
        <div
          style={{
            position: 'fixed',
            left: cursorPos.x - 10,
            top: cursorPos.y - 10,
            width: '20px',
            height: '20px',
            backgroundColor: 'transparent',
            border: '1px solid white',
            pointerEvents: 'none',
            zIndex: 10000,
          }}
        />
      )}
      <style>{`
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>
    </>
  );
}

export default CursorTrail;
