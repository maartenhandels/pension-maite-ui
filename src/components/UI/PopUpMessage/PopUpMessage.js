import React from "react";
import styles from "./PopUpMessage.module.css";

function PopUpMessage({ type, text, onCloseHandler }) {
  const messageClasses = type === "error" ? styles.Error : styles.Success;

  return (
    <div className={styles.Container}>
      <div className={styles.MessageBox}>
        <div className={styles.Message}>{text}</div>
        <button className={styles.CloseButton} onClick={onCloseHandler}>
          <svg viewBox="0 0 24 24" className={styles.CloseIcon}>
            <path
              fill="currentColor"
              d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L10.59 12l-5.3 5.29a1 1 0 0 0 1.42 1.42L12 13.41l5.29 5.3a1 1 0 0 0 1.42-1.42z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PopUpMessage;
