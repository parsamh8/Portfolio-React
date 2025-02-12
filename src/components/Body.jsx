import { useEffect, useRef, useState } from "react";
import myImage from "../assets/me.gif";
import Animated from "../components/Animated";
import myball from "../assets/ball.gif";

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
    // Optionally, update position on window resize.
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
      e.preventDefault(); // Prevents scrolling while dragging.
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
    <div className="body-container">
      <div className="img-parent-container">
        <img
          className="img-container"
          src={myImage}
          alt="description of myself"
        />
      </div>
      <div className="animated-container">
        <Animated>
          <div className="homepage" style={{ padding: 35 }}>
            <div className="vt323">
              <h1 className="vt323">
                Hi! I'm <span className="vt323">Parsa</span>
              </h1>
              <h2 className="vt323">1994, Toronto based</h2>
              <h1 className="vt323" style={{ marginBottom: -35 }}>
                Full Stack Web Developer
              </h1>

              <h1 className="vt323">
                <span className="virtual-color vt323">Visual</span> Artist
              </h1>
              <h2 className="vt323">Welcome To My Portfolio</h2>
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
              <div className="move-instruction vt323" style={{ position: 'absolute', top: '-20px', width: '100%', textAlign: 'center', fontSize: '20px' , color: 'lightgreen' }}>
                # Move me around
              </div>
              <img
                src={myball}
                alt="Draggable Ball"
                ref={imageRef}
                style={{
                  width: '150px', // Adjusted size
                  height: 'auto' // Maintain aspect ratio
                }}
              />
            </div>
          </div>
        </Animated>
      </div>
    </div>
  );
}
