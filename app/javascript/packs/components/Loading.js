import React from "react";
import Animation from "./Animations/Animation";
import styles from './Loading.module.css';
const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.container}>
        <span className={styles.loadingText}>
          Loading
          <span className={styles.loadingDots}>
            <Animation text={'........'}/>
          </span>
        </span>
      </div>
    </div>
  )
}

export default Loading;