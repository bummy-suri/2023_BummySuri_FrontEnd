import React, { useEffect, useRef, useState } from "react";
import Barbtn from "../../assets/SideBar/barBtn.png";
import styles from "./sidebar.module.css";
import Arrow from "../../assets/SideBar/closeBtn.png";


//사이드바 공통 컴포넌트
const SideBar = ({ width = 235, children }) => {
  const [isOpen, setOpen] = useState(false); //사이드바 열림 관련
  const [xPosition, setX] = useState(-width);
  const side = useRef();

  
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translatex(${-xPosition}px)`,
        }}
      >
        <button onClick={() => toggleMenu()} className={styles.button} style={{ display: isOpen ? "none" : "block" }}>
        <img src={Barbtn} className={styles.openBtn}/>
        </button>

        <button onClick={() => toggleMenu()} className={styles.closeButton}>
          <img src={Arrow} className={styles.closeBtn}/>
        </button>
        
        <div className={`${styles.content} ${styles['centered-content']}`}>
            {children}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
