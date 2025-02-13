import { useEffect, useRef, useState } from "react";
import Animated from "../components/Animated";
import myball from "../assets/tangerin.gif";

export default function Body() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  // Compute a random position ensuring the ball stays fully visible.
  const getRandomPosition = () => {
    const ballWidth = imageRef.current ? imageRef.current.offsetWidth : 100;
    const ballHeight = imageRef.current ? imageRef.current.offsetHeight : 100;
    const maxX = window.innerWidth - ballWidth;
    const maxY = window.innerHeight - ballHeight;
    return {
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    };
  };

  // Set an initial random position once the image is rendered.
  useEffect(() => {
    if (imageRef.current) {
      setPosition(getRandomPosition());
    }
    const handleResize = () => {
      if (imageRef.current) {
        setPosition(getRandomPosition());
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleMouseMove(e) {
      if (!isDragging) return;
      let newX = e.clientX - offset.x;
      let newY = e.clientY - offset.y;
      if (imageRef.current) {
        const imgWidth = imageRef.current.offsetWidth;
        const imgHeight = imageRef.current.offsetHeight;
        newX = Math.max(0, Math.min(newX, window.innerWidth - imgWidth));
        newY = Math.max(0, Math.min(newY, window.innerHeight - imgHeight));
      }
      setPosition({ x: newX, y: newY });
    }

    function handleTouchMove(e) {
      if (!isDragging || !e.touches[0]) return;
      e.preventDefault();
      const touch = e.touches[0];
      let newX = touch.clientX - offset.x;
      let newY = touch.clientY - offset.y;
      if (imageRef.current) {
        const imgWidth = imageRef.current.offsetWidth;
        const imgHeight = imageRef.current.offsetHeight;
        newX = Math.max(0, Math.min(newX, window.innerWidth - imgWidth));
        newY = Math.max(0, Math.min(newY, window.innerHeight - imgHeight));
      }
      setPosition({ x: newX, y: newY });
    }

    function stopDragging() {
      setIsDragging(false);
    }

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
      {/* Inline styles including media queries for responsiveness */}
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes appear {
          from {
            opacity: 0;
            transform: translate(var(--x, 0px), var(--y, 0px)) rotate(var(--angle, 0deg));
          }
          to {
            opacity: 1;
            transform: translate(0px, 0px) rotate(0deg);
          }
        }
        .appear {
          opacity: 0;
          animation: appear 1s forwards;
        }
        /* For screens up to 600px, reduce sidebar width and adjust margin */
        @media (max-width: 600px) {
          .body-container {
            margin-left: 200px !important;
          }
        }
        /* For very small screens (max-width: 435px), make the blue sidebar very tiny */
        @media (max-width: 435px) {
          .left-sidebar {
            width: 80px !important;
          }
          .body-container {
            margin-left: 80px !important;
          }
          .left-sidebar.vt323 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>

      {/* Main animated content */}
      <div className="animated-container">
        <div className="homepage" style={{ padding: 35 }}>
          <div className="vt323">
            <h1
              className="vt323 appear"
              style={{
                animationDelay: "0s",
                "--x": "-50px",
                "--y": "-20px",
                "--angle": "20deg",
              }}
            >
              Hi! I'm Parsa McMoody
            </h1>
            <h2
              className="vt323 appear"
              style={{
                animationDelay: "0.5s",
                "--x": "50px",
                "--y": "20px",
                "--angle": "-10deg",
              }}
            >
              1994, Toronto based
            </h2>
            <h1
              className="vt323 appear"
              style={{
                animationDelay: "1s",
                "--x": "-50px",
                "--y": "20px",
                "--angle": "15deg",
                marginBottom: -35,
              }}
            >
              Full Stack Web Developer and
            </h1>
            <h1
              className="vt323 appear"
              style={{
                animationDelay: "1.5s",
                "--x": "50px",
                "--y": "-20px",
                "--angle": "-20deg",
              }}
            >
              <span className="virtual-color vt323">Visual</span> Artist
            </h1>
            <h2
              className="vt323 appear"
              style={{
                animationDelay: "2s",
                "--x": "0px",
                "--y": "50px",
                "--angle": "30deg",
              }}
            >
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
          <div
            style={{
              position: "fixed",
              left: `${position.x}px`,
              top: `${position.y}px`,
              zIndex: 9999,
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
              ref={imageRef}
              style={{
                width: "150px",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>

      {/* Fixed left sidebar with vertical sliding text */}
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
          fontSize: "3rem",
          animation: "slideDown 3s ease-out forwards",
        }}
      >
        PARSA MCMOODY
      </div>
    </div>
  );
}
