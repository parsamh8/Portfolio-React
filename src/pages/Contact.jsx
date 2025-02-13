import { useState, useCallback, useEffect, useRef } from 'react';
import Animated from "../components/Animated";
import ContactMe from "../assets/ball.gif";
import Form from "../components/Form";

export default function Contact() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  
  // Define container width (in pixels)
  const containerWidth = 200;

  // Set a random initial position ensuring the container fits within the viewport
  useEffect(() => {
    const randomX = Math.random() * (window.innerWidth - containerWidth);
    const randomY = Math.random() * (window.innerHeight - containerWidth);
    setPosition({ x: randomX, y: randomY });
  }, [containerWidth]);

  // Start dragging (mouse)
  const handleMouseDown = useCallback(
    (e) => {
      setDragging(true);
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
      e.preventDefault();
    },
    [position]
  );

  // Start dragging (touch)
  const handleTouchStart = useCallback(
    (e) => {
      setDragging(true);
      const touch = e.touches[0];
      setOffset({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
      e.preventDefault();
    },
    [position]
  );

  // Global mouse move events with clamping for smooth dragging
  useEffect(() => {
    if (dragging) {
      const handleMouseMove = (e) => {
        let newX = e.clientX - offset.x;
        let newY = e.clientY - offset.y;

        if (containerRef.current) {
          const { width, height } = containerRef.current.getBoundingClientRect();
          newX = Math.max(0, Math.min(newX, window.innerWidth - width));
          newY = Math.max(0, Math.min(newY, window.innerHeight - height));
        }
        setPosition({ x: newX, y: newY });
      };

      const handleMouseUp = () => {
        setDragging(false);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragging, offset]);

  // Global touch move events with clamping for smoother dragging on mobile
  useEffect(() => {
    if (dragging) {
      const handleTouchMove = (e) => {
        const touch = e.touches[0];
        let newX = touch.clientX - offset.x;
        let newY = touch.clientY - offset.y;

        if (containerRef.current) {
          const { width, height } = containerRef.current.getBoundingClientRect();
          newX = Math.max(0, Math.min(newX, window.innerWidth - width));
          newY = Math.max(0, Math.min(newY, window.innerHeight - height));
        }
        setPosition({ x: newX, y: newY });
      };

      const handleTouchEnd = () => {
        setDragging(false);
      };

      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);

      return () => {
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [dragging, offset]);

  return (
    <>
      <Animated>
        <div className="contact-me">
          <h1 className="vt323" style={{ padding: 40 }}>
            Contact Me
          </h1>
        </div>
        <div>
          {/* Draggable Container */}
          <div
            ref={containerRef}
            style={{
              position: 'fixed',
              left: `${position.x}px`,
              top: `${position.y}px`,
              width: `${containerWidth}px`,
              maxWidth: '90vw', // ensures responsiveness on mobile devices
              cursor: dragging ? 'grabbing' : 'grab',
              touchAction: 'none', // disable default touch actions
              zIndex: 1000,
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* Image */}
            <img
              src={ContactMe}
              alt="Contact Me parsamh yellow image"
              style={{
                width: '100%',
                display: 'block',
              }}
            />
            {/* Text overlay */}
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                width: '100%',
                textAlign: 'center',
                fontSize: '20px',
              }}
            >
              <p className="vt323" style={{ textAlign: 'center', color: 'lightgreen' }}>
                # Currently accepting inquiries
              </p>
            </div>
          </div>
        </div>
      </Animated>
      <div>
        <a
          href="mailto:parsamh8@gmail.com?subject=Friend Inquiries&body=How can I help you, my friend?"
          className="email-vertical vt323"
        >
          parsamh8[at]gmail.com
        </a>
      </div>
      <Form />
    </>
  );
}
