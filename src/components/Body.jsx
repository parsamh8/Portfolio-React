import { useEffect, useRef, useState } from "react";
import myball from "../assets/tangerin.gif";

export default function Body() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Set a random initial position for the draggable ball on mount
  useEffect(() => {
    if (containerRef.current) {
      const ballWidth = containerRef.current.offsetWidth;
      const ballHeight = containerRef.current.offsetHeight;
      const maxX = window.innerWidth - ballWidth;
      const maxY = window.innerHeight - ballHeight;
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
      setPosition({ x: randomX, y: randomY });
    }
  }, []);

  // Mouse and touch move events for dragging the ball
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      let newX = e.clientX - offset.x;
      let newY = e.clientY - offset.y;
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        newX = Math.max(0, Math.min(newX, window.innerWidth - width));
        newY = Math.max(0, Math.min(newY, window.innerHeight - height));
      }
      setPosition({ x: newX, y: newY });
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !e.touches[0]) return;
      e.preventDefault();
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

    const stopDragging = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging, offset]);

  const startDragging = (event) => {
    event.preventDefault();
    const { clientX, clientY } = event.touches ? event.touches[0] : event;
    setOffset({
      x: clientX - position.x,
      y: clientY - position.y,
    });
    setIsDragging(true);
  };

  return (
    <div className="body-container" style={{ marginLeft: "250px" }}>
      {/* Inline styles for keyframes, media queries, and background styling */}
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        @keyframes appear {
          from { opacity: 0; transform: translate(var(--x, 0px), var(--y, 0px)); }
          to   { opacity: 1; transform: translate(0, 0); }
        }
        .appear { opacity: 0; animation: appear 1s forwards; }

        /* Default styles for background elements */
        .background-huge-image {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1; /* Sun appears above the moons */
          pointer-events: none;
        }
        .background-huge-image img {
          width: 30vw;
          height: auto;
        }

        .background-3d-circle {
          position: fixed;
          top: 50%;
          left: 50%;
          /* Orbit center aligned with sun center */
          transform: translate(-50%, -50%);
          width: 60vw;
          height: 60vw;
          perspective: 1000px;
          z-index: -2;
          pointer-events: none;
        }
        .background-3d-circle .circle {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateCircle 30s linear infinite;
        }
        .background-3d-circle .circle img {
          position: absolute;
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 50%;
        }
        /* Arrange 6 images at 60° increments.
           Using translateZ(25vw) positions them in an orbit.
           A gap is ensured by the chosen orbit radius. */
        .background-3d-circle .circle img:nth-child(1) {
          transform: rotateY(0deg) translateZ(25vw);
        }
        .background-3d-circle .circle img:nth-child(2) {
          transform: rotateY(60deg) translateZ(25vw);
        }
        .background-3d-circle .circle img:nth-child(3) {
          transform: rotateY(120deg) translateZ(25vw);
        }
        .background-3d-circle .circle img:nth-child(4) {
          transform: rotateY(180deg) translateZ(25vw);
        }
        .background-3d-circle .circle img:nth-child(5) {
          transform: rotateY(240deg) translateZ(25vw);
        }
        .background-3d-circle .circle img:nth-child(6) {
          transform: rotateY(300deg) translateZ(25vw);
        }
        @keyframes rotateCircle {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(360deg); }
        }

        /* Mobile Responsive Adjustments */
        @media (max-width: 435px) {
          .background-huge-image img {
            width: 70vw;
          }
          .background-3d-circle {
            width: 100vw;
            height: 100vw;
            transform: translate(-50%, -50%);
          }
          .background-3d-circle .circle img {
            width: 100px;
            height: 100px;
          }
          /* Increase orbit radius on mobile for more gap between moons */
          .background-3d-circle .circle img:nth-child(1) {
            transform: rotateY(0deg) translateZ(35vw);
          }
          .background-3d-circle .circle img:nth-child(2) {
            transform: rotateY(60deg) translateZ(35vw);
          }
          .background-3d-circle .circle img:nth-child(3) {
            transform: rotateY(120deg) translateZ(35vw);
          }
          .background-3d-circle .circle img:nth-child(4) {
            transform: rotateY(180deg) translateZ(35vw);
          }
          .background-3d-circle .circle img:nth-child(5) {
            transform: rotateY(240deg) translateZ(35vw);
          }
          .background-3d-circle .circle img:nth-child(6) {
            transform: rotateY(300deg) translateZ(35vw);
          }
        }
      `}</style>

      {/* Huge Central Image ("Sun") */}
      <div className="background-huge-image">
        <img src="https://i.pinimg.com/originals/bd/97/f6/bd97f61512d1186afa3f6248459f3464.gif" alt="Sun" />
      </div>

      {/* 3D Rotating Orbit for 6 Images ("Moons") */}
      <div className="background-3d-circle">
      <div className="circle">
          <img src="https://i.pinimg.com/originals/bb/fd/13/bbfd139b1304358dd4314364736e163d.gif" alt="Moon 3" />
          <img src="https://i.pinimg.com/originals/f8/14/2b/f8142bffe3187da55068c97ed506eb89.gif" alt="Moon 4" />
          <img src="https://i.pinimg.com/originals/21/aa/94/21aa943777317197141a3364ddac1b3d.gif" alt="Moon 5" />
          <img src="https://i.pinimg.com/originals/45/b4/4b/45b44bd9415bb4ef57a1178596f10c45.gif" alt="Moon 6" />
          <img src="https://i.pinimg.com/originals/9c/ce/59/9cce59937f480fa5948f59cf6eed4a4b.gif" alt="Moon 7" />
          <img src="https://i.pinimg.com/originals/b3/e8/cd/b3e8cd07849c04d103bf9d63b4cec374.gif" alt="Moon 8" />
        </div>
      </div>

      {/* Main Animated Content */}
      <div className="animated-container">
        <div className="homepage" style={{ padding: 35 }}>
          <div className="vt323">
            <h1 className="vt323 appear" style={{ animationDelay: "0s", "--x": "-50px", "--y": "-20px" }}>
              Hi! I'm Parsa
            </h1>
            <h2 className="vt323 appear" style={{ animationDelay: "0.5s", "--x": "50px", "--y": "20px" }}>
              1994, Toronto based
            </h2>
            <h1 className="vt323 appear" style={{ animationDelay: "1s", "--x": "-50px", "--y": "20px", marginBottom: -35 }}>
              Full Stack Web Developer and
            </h1>
            <h1 className="vt323 appear" style={{ animationDelay: "1.5s", "--x": "50px", "--y": "-20px" }}>
              <span className="virtual-color vt323">Multidisciplinary </span> Artist
            </h1>
            <h2 className="vt323 appear" style={{ animationDelay: "2s", "--x": "0px", "--y": "50px" }}>
              Welcome To My Portfolio
            </h2>
          </div>
          <div>
            <a
              href="mailto:parsamh8@gmail.com?subject=Friend Inquiries&body=How can I help you, my friend?"
              className="email-vertical vt323"
            >
              parsamh8[at]gmail.com
            </a>
          </div>
          {/* Draggable Ball Container */}
          <div
            ref={containerRef}
            style={{
              position: "fixed",
              left: `${position.x}px`,
              top: `${position.y}px`,
              zIndex: 9999,
              touchAction: "none",
              cursor: isDragging ? "grabbing" : "grab",
            }}
            className="moving-image-container"
            onMouseDown={startDragging}
            onTouchStart={startDragging}
          >
            <div
              className="move-instruction vt323"
              style={{
                position: "absolute",
                top: "-20px",
                width: "100%",
                textAlign: "center",
                fontSize: "20px",
                color: "orange",
              }}
            >
              # Move the tangerine around
            </div>
            <img
              src={myball}
              alt="Draggable Ball"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Fixed Left Sidebar with Vertical Sliding Text */}
      <div
        className="left-sidebar vt323"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          width: "150px",
          backgroundColor: "blue",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
          writingMode: "vertical-rl",
          textOrientation: "upright",
          fontSize: "3.5rem",
          animation: "slideDown 3s ease-out forwards",
        }}
      >
        پ ARSA م‌ CMOODY
      </div>
    </div>
  );
}
