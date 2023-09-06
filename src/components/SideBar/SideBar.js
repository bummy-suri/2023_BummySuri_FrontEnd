import React, { useEffect, useRef, useState } from "react";
import styles from "./sidebar.module.css";

// 사이드바 공통 컴포넌트
const SideBar = ({ width = 235, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const side = useRef();

  useEffect(() => {
    // 사이드바가 열릴 때 스크롤 고정
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(width);
      setOpen(false);
    }
  };

  // 사이드바 바깥 클릭하면 닫히게
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (side.current && !side.current.contains(event.target)) {
        setX(width);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [side, -width]);

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translateX(${-xPosition}px)`,
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className={styles.button}
          style={{ display: isOpen ? "none" : "block" }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/SideBar/barBtn.png`}
            className={styles.openBtn}
          />
        </button>

        <button onClick={() => toggleMenu()} className={styles.closeButton}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/SideBar/closeBtn.png`}
            style={{ transform: "rotate(180deg)" }}
            className={styles.closeBtn}
          />
        </button>

        <div
          className={`${styles.content} ${styles["centered-content"]}`}
          style={{ maxHeight: "100%", overflowY: "auto" }} // 스크롤 가능한 높이 제한
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
