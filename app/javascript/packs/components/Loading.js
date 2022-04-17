import React from "react";
import styles from './Loading.module.css';
const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.container}>
        <span className={styles.loadingText}>
          Loading
          <span className={styles.loadingDots}>
            ........
          </span>
        </span>
      </div>
    </div>
  )
}

export default Loading;