import { useState, useEffect, useRef } from "react";
import "./Slidebar.css";

export default function Slidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarRef = useRef(null);

  // Collapse sidebar when clicking or tapping outside it.
  useEffect(() => {
    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  return (
    <div ref={sidebarRef} className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      {isExpanded ? (
        <div className="sidebar-content expanded-content">
          <div className="lorem-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="toggle-arrow" onClick={toggleSidebar}>
            &lt;
          </div>
        </div>
      ) : (
        <div className="sidebar-content collapsed-content">
          <div className="vertical-name">PARSA MCMOODY</div>
          <div className="toggle-arrow" onClick={toggleSidebar}>
            &gt;
          </div>
        </div>
      )}
    </div>
  );
}
